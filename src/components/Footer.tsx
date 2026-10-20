import React from 'react';
import { ArrowUp, Github, Mail, Facebook, Instagram, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Code2 className="w-4 h-4" />
            </span>
            <div>
              <div className="font-bold text-white text-sm">Joshua Kim S. Entrina</div>
              <div className="text-[11px] text-slate-400">
                BSIT 2nd Year Student (Section 2A) · Torres Capitol College
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.contacts.github.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.contacts.email.url}
              className="hover:text-emerald-400 transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.contacts.facebook.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.contacts.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.schoolWebsite}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors text-[11px] font-mono flex items-center gap-1"
              title="Torres Capitol College Portal"
            >
              philcountryville.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Joshua Kim S. Entrina. All rights reserved.
          </div>
          <div className="text-slate-400">
            Designed & Engineered for Smartphones and Windows Workstations.
          </div>
        </div>
      </div>
    </footer>
  );
};
