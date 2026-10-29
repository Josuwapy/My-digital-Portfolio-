import React, { useState, useEffect, useRef } from 'react';
import { X, Play, RotateCcw, Volume2, Gamepad2, ArrowLeft, ArrowRight, Zap, Trophy, Smartphone } from 'lucide-react';

interface SpaceArcadeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface Bullet {
  x: number;
  y: number;
  speed: number;
}

interface Enemy {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  hp: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

export const SpaceArcadeModal: React.FC<SpaceArcadeModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover'>('start');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    return Number(localStorage.getItem('space_arcade_high_score')) || 14200;
  });
  const [lives, setLives] = useState<number>(3);
  const [wave, setWave] = useState<number>(1);

  // References for mutable game loop state
  const stateRef = useRef({
    playerX: 180,
    playerY: 420,
    playerSpeed: 6,
    movingLeft: false,
    movingRight: false,
    movingUp: false,
    movingDown: false,
    shooting: false,
    lastShootTime: 0,
    bullets: [] as Bullet[],
    enemies: [] as Enemy[],
    stars: [] as Star[],
    particles: [] as Particle[],
    score: 0,
    lives: 3,
    wave: 1,
    active: false,
  });

  // Initialize starfield
  useEffect(() => {
    if (!isOpen) return;
    const stars: Star[] = [];
    for (let i = 0; i < 70; i++) {
      stars.push({
        x: Math.random() * 360,
        y: Math.random() * 500,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 1.5 + 0.5,
      });
    }
    stateRef.current.stars = stars;
  }, [isOpen]);

  const startGame = () => {
    stateRef.current.playerX = 160;
    stateRef.current.playerY = 420;
    stateRef.current.bullets = [];
    stateRef.current.enemies = [];
    stateRef.current.particles = [];
    stateRef.current.score = 0;
    stateRef.current.lives = 3;
    stateRef.current.wave = 1;
    stateRef.current.active = true;

    setScore(0);
    setLives(3);
    setWave(1);
    setGameState('playing');
  };

  useEffect(() => {
    if (!isOpen || gameState !== 'playing') return;

    let animationFrameId: number;
    let spawnTimer = 0;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Keyboard listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') stateRef.current.movingLeft = true;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') stateRef.current.movingRight = true;
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') stateRef.current.movingUp = true;
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') stateRef.current.movingDown = true;
      if (e.key === ' ' || e.key === 'Enter') stateRef.current.shooting = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') stateRef.current.movingLeft = false;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') stateRef.current.movingRight = false;
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') stateRef.current.movingUp = false;
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') stateRef.current.movingDown = false;
      if (e.key === ' ' || e.key === 'Enter') stateRef.current.shooting = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Main Game Loop (60 FPS Pygame mirror)
    const loop = (timestamp: number) => {
      const state = stateRef.current;
      if (!state.active) return;

      // 1. Clear Screen
      ctx.fillStyle = '#05070e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Update & Draw Starfield
      ctx.fillStyle = '#ffffff';
      for (const star of state.stars) {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }

      // 3. Update Player Movement
      if (state.movingLeft && state.playerX > 15) state.playerX -= state.playerSpeed;
      if (state.movingRight && state.playerX < canvas.width - 35) state.playerX += state.playerSpeed;
      if (state.movingUp && state.playerY > 50) state.playerY -= state.playerSpeed;
      if (state.movingDown && state.playerY < canvas.height - 40) state.playerY += state.playerSpeed;

      // 4. Handle Player Shooting (Auto/manual every 180ms)
      if (state.shooting || true) { // Auto-fire every 220ms for smooth mobile action
        if (timestamp - state.lastShootTime > 220) {
          state.bullets.push({
            x: state.playerX + 10,
            y: state.playerY - 4,
            speed: 9,
          });
          state.lastShootTime = timestamp;
        }
      }

      // 5. Update & Draw Bullets
      ctx.fillStyle = '#38bdf8';
      for (let i = state.bullets.length - 1; i >= 0; i--) {
        const b = state.bullets[i];
        b.y -= b.speed;
        ctx.fillRect(b.x, b.y, 4, 12);

        // Remove offscreen bullets
        if (b.y < -10) {
          state.bullets.splice(i, 1);
        }
      }

      // 6. Spawn Enemies & Asteroids
      spawnTimer++;
      if (spawnTimer % 45 === 0) {
        const isAlien = Math.random() > 0.55;
        state.enemies.push({
          x: Math.random() * (canvas.width - 40) + 10,
          y: -30,
          width: isAlien ? 28 : 34,
          height: isAlien ? 24 : 34,
          speed: Math.random() * 1.5 + 2 + state.wave * 0.3,
          hp: isAlien ? 2 : 1,
          color: isAlien ? '#ec4899' : '#94a3b8',
        });
      }

      // 7. Update & Draw Enemies + Collisions
      for (let i = state.enemies.length - 1; i >= 0; i--) {
        const en = state.enemies[i];
        en.y += en.speed;

        // Draw Enemy
        ctx.fillStyle = en.color;
        ctx.beginPath();
        if (en.hp > 1) {
          // Alien Interceptor (Triangle)
          ctx.moveTo(en.x + en.width / 2, en.y + en.height);
          ctx.lineTo(en.x, en.y);
          ctx.lineTo(en.x + en.width, en.y);
          ctx.closePath();
          ctx.fill();
        } else {
          // Asteroid (Circle)
          ctx.arc(en.x + en.width / 2, en.y + en.height / 2, en.width / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Bullet Collision Detection
        for (let j = state.bullets.length - 1; j >= 0; j--) {
          const b = state.bullets[j];
          if (
            b.x > en.x &&
            b.x < en.x + en.width &&
            b.y > en.y &&
            b.y < en.y + en.height
          ) {
            // Hit!
            en.hp--;
            state.bullets.splice(j, 1);

            // Spawn Particles
            for (let p = 0; p < 8; p++) {
              state.particles.push({
                x: en.x + en.width / 2,
                y: en.y + en.height / 2,
                vx: (Math.random() - 0.5) * 6,
                vy: (Math.random() - 0.5) * 6,
                life: 18,
                color: en.color,
              });
            }

            if (en.hp <= 0) {
              const points = en.color === '#ec4899' ? 250 : 100;
              state.score += points;
              setScore(state.score);
              if (state.score > highScore) {
                setHighScore(state.score);
                localStorage.setItem('space_arcade_high_score', state.score.toString());
              }
              state.enemies.splice(i, 1);
              break;
            }
          }
        }

        // Player Collision Detection
        if (
          state.playerX < en.x + en.width &&
          state.playerX + 24 > en.x &&
          state.playerY < en.y + en.height &&
          state.playerY + 28 > en.y
        ) {
          state.lives--;
          setLives(state.lives);
          state.enemies.splice(i, 1);

          // Death explosion particles
          for (let p = 0; p < 16; p++) {
            state.particles.push({
              x: state.playerX + 12,
              y: state.playerY + 14,
              vx: (Math.random() - 0.5) * 8,
              vy: (Math.random() - 0.5) * 8,
              life: 25,
              color: '#34d399',
            });
          }

          if (state.lives <= 0) {
            state.active = false;
            setGameState('gameover');
            return;
          }
        }

        // Remove offscreen
        if (en.y > canvas.height + 40) {
          state.enemies.splice(i, 1);
        }
      }

      // 8. Update & Draw Particles
      for (let p = state.particles.length - 1; p >= 0; p--) {
        const pt = state.particles[p];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life--;
        ctx.fillStyle = pt.color;
        ctx.fillRect(pt.x, pt.y, 2.5, 2.5);
        if (pt.life <= 0) state.particles.splice(p, 1);
      }

      // 9. Draw Player Starship
      ctx.fillStyle = '#34d399'; // Emerald hull
      ctx.beginPath();
      ctx.moveTo(state.playerX + 12, state.playerY); // Nose
      ctx.lineTo(state.playerX, state.playerY + 28); // Left wing
      ctx.lineTo(state.playerX + 12, state.playerY + 20); // Center cockpit
      ctx.lineTo(state.playerX + 24, state.playerY + 28); // Right wing
      ctx.closePath();
      ctx.fill();

      // Thruster Flame
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(state.playerX + 9, state.playerY + 24, 6, Math.random() * 8 + 4);

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isOpen, gameState, highScore]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col">
        {/* Header */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-pink-500/10 border border-pink-500/30 text-pink-400">
              <Gamepad2 className="w-4 h-4" />
            </span>
            <div>
              <div className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <span>Mobile Space Arcade</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-pink-400 border border-pink-500/20">
                  Pygame / Pydroid 3
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Created by Joshua Kim S. Entrina (BSIT 2A)
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Game Stats Bar */}
        <div className="px-5 py-2.5 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-slate-500 text-[11px]">SCORE: </span>
              <span className="text-white font-bold">{score.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-slate-500 text-[11px]">LIVES: </span>
              <span className="text-emerald-400 font-bold">{'♥ '.repeat(Math.max(0, lives))}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-amber-400 text-xs">
            <Trophy className="w-3.5 h-3.5" />
            <span>BEST: {highScore.toLocaleString()}</span>
          </div>
        </div>

        {/* Arcade Screen Container */}
        <div className="relative w-full flex justify-center bg-slate-950 p-2 sm:p-4">
          <div className="relative border-2 border-slate-800 rounded-xl overflow-hidden shadow-2xl bg-black">
            <canvas
              ref={canvasRef}
              width={340}
              height={460}
              className="block cursor-crosshair touch-none"
              onTouchMove={(e) => {
                if (gameState !== 'playing') return;
                const rect = e.currentTarget.getBoundingClientRect();
                const touch = e.touches[0];
                const x = touch.clientX - rect.left - 12;
                stateRef.current.playerX = Math.max(10, Math.min(310, x));
              }}
            />

            {/* Start Screen Overlay */}
            {gameState === 'start' && (
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Gamepad2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-wider uppercase font-mono">
                    Mobile Space Arcade
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Built using Python & Pygame on Android (Pydroid 3). Control your starship, destroy asteroids & alien vessels!
                  </p>
                </div>

                <button
                  onClick={startGame}
                  className="px-6 py-2.5 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-transform active:scale-95 shadow-lg flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>START MISSION</span>
                </button>

                <div className="text-[11px] text-slate-500 font-mono">
                  Desktop: Arrow Keys / A-D · Mobile: Touch & Drag
                </div>
              </div>
            )}

            {/* Game Over Screen Overlay */}
            {gameState === 'gameover' && (
              <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="text-2xl font-black text-red-500 font-mono tracking-widest">
                  GAME OVER
                </div>
                <div className="space-y-1 font-mono text-xs">
                  <div className="text-slate-400">Final Score: <span className="text-white font-bold">{score}</span></div>
                  <div className="text-amber-400">High Score: <span className="font-bold">{highScore}</span></div>
                </div>

                <button
                  onClick={startGame}
                  className="px-6 py-2.5 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-transform active:scale-95 shadow-lg flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>PLAY AGAIN</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Touch & Direction Controls for Smartphones */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-2 sm:hidden">
          <div className="flex items-center gap-2">
            <button
              onTouchStart={() => (stateRef.current.movingLeft = true)}
              onTouchEnd={() => (stateRef.current.movingLeft = false)}
              onMouseDown={() => (stateRef.current.movingLeft = true)}
              onMouseUp={() => (stateRef.current.movingLeft = false)}
              className="p-3 rounded-lg bg-slate-800 text-slate-200 active:bg-slate-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onTouchStart={() => (stateRef.current.movingRight = true)}
              onTouchEnd={() => (stateRef.current.movingRight = false)}
              onMouseDown={() => (stateRef.current.movingRight = true)}
              onMouseUp={() => (stateRef.current.movingRight = false)}
              className="p-3 rounded-lg bg-slate-800 text-slate-200 active:bg-slate-700"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pydroid 3 Arcade Engine</span>
          </div>

          <button
            onTouchStart={() => (stateRef.current.shooting = true)}
            onTouchEnd={() => (stateRef.current.shooting = false)}
            className="px-4 py-3 rounded-lg bg-pink-600 text-white font-mono text-xs font-bold active:bg-pink-500"
          >
            FIRE
          </button>
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Engine: Python 3 + Pygame 2.x</span>
          <span className="font-mono text-emerald-400">60 FPS Native Loop</span>
        </div>
      </div>
    </div>
  );
};
