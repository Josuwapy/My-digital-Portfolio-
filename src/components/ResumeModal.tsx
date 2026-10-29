import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, Github, Globe } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
JOSHUA KIM S. ENTRINA
BSIT 2nd Year Student - Section 2A
Torres Capitol College | Northern Mindanao, Philippines
Email: ${PERSONAL_INFO.contacts.email.address}
GitHub: https://github.com/Josuwapy
Instagram: @lilsouwa
School: Torres Capitol College (${PERSONAL_INFO.schoolWebsite})

EDUCATION
Bachelor of Science in Information Technology (BSIT)
Torres Capitol College (Countryville) | 2023 - Present
Current Level: 2nd Year Regular Student, Section 2A
Dean's List Track | Relevant Coursework: Data Structures, OOP (Python), DBMS, Web Tech

PROJECTS
1. School Billing System - Lead Capstone Developer (Python, Flask, SQLite, PDF Generator)
   Official BSIT Capstone Title for Torres Capitol College: Student tuition assessment & installment ledger.
2. Mobile Space Arcade - Solo Game Developer (Python 3, Pygame, Pydroid 3 Android IDE)
   2D retro space shooter developed natively on smartphone with particle physics & 60 FPS game loop.
3. Student Feedback System - Lead Developer (Python, Flask, SQLite, Tailwind)
   Faculty evaluation & student sentiment platform for Torres Capitol College.
4. Torres Capitol IT Lab Workstation Portal - Full-Stack Developer (Python, SQLAlchemy, JS)
   Computer laboratory seat booking & hardware management.
5. Digital Portfolio & Python Sandbox - Sole Engineer (React 19, TypeScript, Tailwind)
   Responsive portfolio with live embedded Python executor.
6. Barangay Record & Citizen Services System (Python, SQLite, Tkinter)
   Demographic records & official clearance generation.

TECHNICAL SKILLS
- Languages: Python 3.x (Advanced), JavaScript ES6, SQL, HTML5, CSS3
- Frameworks & Libs: Flask, FastAPI, React, Tailwind CSS
- Databases & Tools: SQLite, MySQL, Git/GitHub (@Josuwapy), VS Code, Windows/Linux CLI
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Modal Top Actions */}
        <div className="px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0 no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs text-slate-400">· Joshua Kim S. Entrina</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 space-y-8 font-sans selection:bg-emerald-500/30">
          {/* Header Lockup */}
          <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                JOSHUA KIM S. ENTRINA
              </h1>
              <div className="text-emerald-400 font-medium text-sm mt-1">
                BSIT 2nd Year Student (Section 2A) · Python Developer
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Torres Capitol College · Northern Mindanao, Philippines
              </p>
            </div>

            {/* Contact details */}
            <div className="text-xs space-y-1 text-slate-300 md:text-right shrink-0">
              <div>Email: <a href="mailto:joshuaentrina9@gmail.com" className="text-emerald-400 hover:underline">joshuaentrina9@gmail.com</a></div>
              <div>GitHub: <a href="https://github.com/Josuwapy" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">github.com/Josuwapy</a></div>
              <div>Instagram: <span className="text-slate-300">@lilsouwa</span> | Facebook: <span className="text-slate-300">Joshua Entrina</span></div>
              <div>School Portal: <a href="https://philcountryville.com" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">philcountryville.com</a></div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-slate-800 pb-1">
              Education
            </h2>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-bold text-white text-sm">Torres Capitol College (Countryville)</span>
                <span className="text-slate-400 font-mono">2023 – Present</span>
              </div>
              <div className="text-xs text-emerald-300 font-medium">
                Bachelor of Science in Information Technology (BSIT) · 2nd Year, Section 2A
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Core coursework: Data Structures & Algorithms, Object-Oriented Programming (Python), Relational Database Management Systems (SQL), Web Systems & Technologies, Computer Systems Architecture.
              </p>
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-slate-800 pb-1">
              Featured Software Projects
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                    <span className="text-emerald-400 font-mono text-[11px]">({proj.category})</span>
                  </div>
                  <span className="text-slate-400 font-mono">{proj.year}</span>
                </div>
                <div className="text-xs text-slate-300">{proj.summary}</div>
                <div className="text-xs text-slate-400 flex flex-wrap gap-1 font-mono">
                  <span className="text-slate-500">Stack:</span> {proj.technologies.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Proficiencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-slate-800 pb-1">
              Technical Proficiencies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-white">Programming & Backend:</span>
                <p className="text-slate-400 mt-0.5">Python 3.x, Flask, FastAPI, Object-Oriented Programming, Data Structures, Algorithms.</p>
              </div>
              <div>
                <span className="font-semibold text-white">Frontend & UI/UX:</span>
                <p className="text-slate-400 mt-0.5">React 19, TypeScript, JavaScript (ES6+), HTML5, Tailwind CSS, Responsive Design for Smartphones & Windows.</p>
              </div>
              <div>
                <span className="font-semibold text-white">Databases:</span>
                <p className="text-slate-400 mt-0.5">SQLite, PostgreSQL/MySQL fundamentals, Relational Schema Normalization, Query Optimization.</p>
              </div>
              <div>
                <span className="font-semibold text-white">Developer Tools:</span>
                <p className="text-slate-400 mt-0.5">Git, GitHub (@Josuwapy), VS Code, Windows Terminal, Linux Shell, ReportLab, Virtual Environments.</p>
              </div>
            </div>
          </div>

          {/* Academic References */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-slate-800 pb-1">
              Academic Reference
            </h2>
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-white">College of Computer Studies / IT Faculty</span>
              <p className="text-slate-400">Torres Capitol College · Available upon request for internship verification and academic endorsement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
