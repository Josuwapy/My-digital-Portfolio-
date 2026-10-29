import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Code, Github, Mail, Facebook, Instagram, ExternalLink, Terminal, Sparkles, Upload, Camera, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const DEFAULT_PHOTO = '/src/assets/images/joshua_formal_suit_1791945332404.jpg';
  const [profileImg, setProfileImg] = useState<string>(() => {
    return localStorage.getItem('joshua_custom_profile') || DEFAULT_PHOTO;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setProfileImg(result);
          try {
            localStorage.setItem('joshua_custom_profile', result);
          } catch (err) {
            console.error('LocalStorage quota exceeded:', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('joshua_custom_profile');
    setProfileImg(DEFAULT_PHOTO);
  };
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-800/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Split Screen Hero: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Editorial Kicker (Unboxed text with typographic separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="font-semibold tracking-wide uppercase">BSIT 2nd Year</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Section 2A</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <a
                href={PERSONAL_INFO.schoolWebsite}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 group"
              >
                <span>Torres Capitol College</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Hi, I'm <span className="text-emerald-400 font-extrabold">Joshua Kim S. Entrina</span>. Building systems with Python & modern web tech.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              An aspiring software engineer and 2nd-year IT student at Torres Capitol College. I focus on developing clean, practical applications—like my campus{' '}
              <a href="#projects" className="text-emerald-400 hover:underline font-medium">School Billing System</a>, upcoming <a href="#projects" className="text-emerald-400 hover:underline font-medium">Faculty Evaluation System</a>, Mobile Space Arcade, and responsive software tools for both smartphones and Windows environments.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Code className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="px-5 py-2.5 text-sm font-mono font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Run Python Playground</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-lg transition-colors whitespace-nowrap"
              >
                View Credentials
              </button>
            </div>

            {/* Quick Contacts Bar */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs text-slate-400 font-medium mb-2.5">
                Direct Channels & Profiles:
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={PERSONAL_INFO.contacts.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-emerald-400" />
                  <span>github.com/{PERSONAL_INFO.contacts.github.username}</span>
                </a>

                <a
                  href={PERSONAL_INFO.contacts.email.url}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{PERSONAL_INFO.contacts.email.address}</span>
                </a>

                <a
                  href={PERSONAL_INFO.contacts.facebook.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-400" />
                  <span>{PERSONAL_INFO.contacts.facebook.name}</span>
                </a>

                <a
                  href={PERSONAL_INFO.contacts.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>{PERSONAL_INFO.contacts.instagram.handle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait Frame & Student ID Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl relative">
              {/* Hidden Native File Input for Selecting Original Photo */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="profile-photo-upload"
              />

              {/* Photo Frame */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60 group">
                <img
                  src={profileImg}
                  alt="Joshua Kim S. Entrina - BSIT 2nd Year Student at Torres Capitol College"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />

                {/* Top Action: Upload your exact picture button */}
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
                  {profileImg !== DEFAULT_PHOTO && (
                    <button
                      onClick={handleResetPhoto}
                      title="Reset to default picture"
                      className="p-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors backdrop-blur-sm"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload or pick your exact original photo file from device"
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950/85 hover:bg-emerald-950/90 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 transition-colors backdrop-blur-sm text-xs font-medium shadow-md"
                  >
                    <Camera className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Upload Exact Photo</span>
                  </button>
                </div>

                {/* Gradient scrim for readable overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Inset Badge Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
                  <div className="bg-slate-950/90 backdrop-blur-sm border border-slate-700/80 rounded-md px-2.5 py-1 text-slate-200 font-medium">
                    <span>Joshua Kim S. Entrina</span>
                  </div>
                  <div className="bg-emerald-950/90 backdrop-blur-sm border border-emerald-500/40 rounded-md px-2.5 py-1 text-emerald-300 font-mono text-[11px]">
                    BSIT SECTION 2A
                  </div>
                </div>
              </div>

              {/* Student Academic Identification Strip */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Institution</span>
                  <a
                    href={PERSONAL_INFO.schoolWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 font-medium hover:underline flex items-center gap-1"
                  >
                    Torres Capitol College <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Current Standing</span>
                  <span className="text-slate-200 font-medium">2nd Year Regular Student</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Primary Core Stack</span>
                  <span className="text-emerald-400 font-mono text-[11px] font-semibold">Python 3.x · Flask · SQL</span>
                </div>
              </div>

              {/* Interactive Terminal Quick Launch */}
              <div className="mt-4">
                <button
                  onClick={onOpenTerminal}
                  className="w-full py-2 px-3 text-xs font-mono font-medium text-slate-300 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-lg flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-emerald-400">&gt;</span> python feedback_analyzer.py
                  </span>
                  <span className="text-[11px] text-slate-500">Run Demo &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric Strip Below the Hero Split */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs text-slate-400 font-medium">Degree Program</div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1">BSIT</div>
            <div className="text-xs text-emerald-400 mt-0.5">2nd Year · Section 2A</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs text-slate-400 font-medium">Alma Mater</div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1 truncate">Torres Capitol</div>
            <div className="text-xs text-slate-400 mt-0.5">philcountryville.com</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs text-slate-400 font-medium">Code Expertise</div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1 font-mono">Python 3</div>
            <div className="text-xs text-slate-400 mt-0.5">Automation & Web Backend</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs text-slate-400 font-medium">Platform Readiness</div>
            <div className="text-xl sm:text-2xl font-bold text-white mt-1">Mobile + PC</div>
            <div className="text-xs text-emerald-400 mt-0.5">Smartphones & Windows</div>
          </div>
        </div>
      </div>
    </section>
  );
};
