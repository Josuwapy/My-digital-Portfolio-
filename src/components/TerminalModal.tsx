import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, Maximize2, Minimize2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'init',
      output: `Python 3.12.0 (main) [GCC 11.2.0] on win32 (Windows 11 x64)
Type 'help' for command reference.
Connected to: Josuwapy@TorresCapitolCollege (Section 2A)`,
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output = '';

    switch (trimmed) {
      case 'help':
        output = `Available CLI Commands:
  help        - Show this reference menu
  whoami      - Print developer identity & college section
  school      - Information about Torres Capitol College & Section 2A
  projects    - List developed software systems & tech stacks
  skills      - List programming languages & technical toolkits
  contacts    - Print direct emails and social profiles
  python eval - Execute quick Python Student Feedback calculation
  clear       - Clear terminal history
  exit        - Close interactive terminal`;
        break;

      case 'whoami':
      case 'bio':
        output = `Name       : ${PERSONAL_INFO.fullName} (${PERSONAL_INFO.nickname})
Degree     : ${PERSONAL_INFO.degree}
Level      : ${PERSONAL_INFO.yearLevel}, ${PERSONAL_INFO.section}
College    : ${PERSONAL_INFO.institution} (${PERSONAL_INFO.schoolWebsite})
Location   : ${PERSONAL_INFO.location}
Specialty  : Python Application Development & Full-Stack Systems`;
        break;

      case 'school':
        output = `Institution: Torres Capitol College (Countryville)
Website    : https://philcountryville.com
Section    : BSIT Section 2A
Curriculum : Data Structures, OOP Python, Database Systems, Web Tech
Status     : Active 2nd Year IT Student`;
        break;

      case 'projects':
        output = PROJECTS.map(
          (p, idx) =>
            `[${idx + 1}] ${p.title} (${p.category})
    Stack: ${p.technologies.join(', ')}
    Summary: ${p.summary.slice(0, 85)}...`
        ).join('\n\n');
        break;

      case 'skills':
        output = `Languages  : Python 3.x, JavaScript (ES6+), SQL, HTML5, CSS3
Frameworks : Flask, FastAPI, React 19, Tailwind CSS
Databases  : SQLite, PostgreSQL
Tools      : Git, GitHub (@Josuwapy), VS Code, Windows/Linux Terminal`;
        break;

      case 'contacts':
        output = `GitHub    : https://github.com/Josuwapy (@Josuwapy)
Email     : joshuaentrina9@gmail.com
Facebook  : Joshua Entrina
Instagram : @lilsouwa
College   : Torres Capitol College (philcountryville.com)`;
        break;

      case 'python eval':
      case 'python':
        output = `[Python 3.12 Script Execution]
Analyzing Student Feedback Matrix for IT211...
Total Reviews: 42 (BSIT Section 2A)
Mastery: 4.8 | Delivery: 4.6 | Punctuality: 4.9 | Engagement: 4.7
Weighted Mean: 4.75 / 5.00
Result: OUTSTANDING PERFORMANCE`;
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        onClose();
        return;

      case '':
        output = '';
        break;

      default:
        output = `'${cmd}' is not recognized as a command. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIdx(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIdx(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-3xl h-[560px] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 font-semibold text-xs">
              Josuwapy Command Prompt — python.exe (Torres Capitol College)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCommand('help')}
              className="text-[11px] text-slate-400 hover:text-emerald-400 px-2 py-0.5 rounded bg-slate-800 transition-colors"
            >
              help
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-slate-300">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command && (
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-slate-500">C:\BSIT-2A\Josuwapy&gt;</span>
                  <span>{item.command}</span>
                </div>
              )}
              {item.output && (
                <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {item.output}
                </pre>
              )}
            </div>
          ))}

          {/* Active Command Input Line */}
          <div className="flex items-center gap-2 pt-1 text-emerald-400">
            <span className="text-slate-500 shrink-0">C:\BSIT-2A\Josuwapy&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-slate-200 outline-none border-none p-0 focus:ring-0 font-mono text-xs"
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Commands: whoami · school · projects · skills · contacts · clear</span>
          <span className="hidden sm:inline">Press Enter to execute</span>
        </div>
      </div>
    </div>
  );
};
