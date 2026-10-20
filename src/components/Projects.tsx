import React, { useState } from 'react';
import { ExternalLink, Github, Code, Play, ArrowRight, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { StudentFeedbackModal } from './StudentFeedbackModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLiveFeedbackDemoOpen, setIsLiveFeedbackDemoOpen] = useState(false);

  const filterCategories = ['All', 'Full-Stack', 'Python & Backend', 'Campus System'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const handleOpenLiveDemo = (projectId: string) => {
    if (projectId === 'student-feedback-system') {
      setIsLiveFeedbackDemoOpen(true);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <Code className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Featured Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Software built for real people, campuses & communities.
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              From academic faculty evaluations to computer laboratory workstation management, explore how I build functional, resilient systems using Python and modern web tooling.
            </p>
          </div>

          {/* Interactive Filter Controls (Allowed segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto scrollbar-none self-start md:self-end">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Media-First Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Flagship Card: Student Feedback System (Span 8 columns on large screens) */}
          {filteredProjects.find((p) => p.id === 'student-feedback-system') && (
            <div className="lg:col-span-8 group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 transition-all overflow-hidden flex flex-col justify-between shadow-lg">
              {/* Image Frame */}
              <div className="aspect-video w-full overflow-hidden bg-slate-950 relative border-b border-slate-800">
                <img
                  src="/src/assets/images/feedback_system_hero_1791941188202.jpg"
                  alt="Student Feedback System Interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  {/* Clean unboxed metadata */}
                  <div className="bg-slate-950/90 backdrop-blur-sm border border-slate-700/60 rounded-md px-3 py-1 text-xs text-slate-300 flex items-center gap-2">
                    <span className="font-semibold text-emerald-400">Torres Capitol College</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>Flagship Capstone Project</span>
                  </div>

                  <button
                    onClick={() => setIsLiveFeedbackDemoOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-lg"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Try Live Demo</span>
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-emerald-400 font-mono">BSIT 2A Research & Development</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                      Student Feedback System
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A comprehensive faculty evaluation and student sentiment analysis portal. Eliminates manual paper evaluation tallying at Torres Capitol College by offering encrypted anonymous ratings, radar charts, and automated Python summary scripts.
                  </p>

                  {/* Clean unboxed tags with typographic separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800">
                    <span className="font-mono text-emerald-400">Python 3</span>
                    <span aria-hidden="true">·</span>
                    <span>Flask API</span>
                    <span aria-hidden="true">·</span>
                    <span>SQLite</span>
                    <span aria-hidden="true">·</span>
                    <span>Sentiment Scoring</span>
                    <span aria-hidden="true">·</span>
                    <span>Tailwind CSS</span>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsLiveFeedbackDemoOpen(true)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
                    >
                      Launch Live Simulation
                    </button>
                    <button
                      onClick={() => setSelectedProject(PROJECTS[0])}
                      className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      Read Architecture &rarr;
                    </button>
                  </div>

                  <a
                    href="https://github.com/Josuwapy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors p-1"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Card: Digital Portfolio & Python Sandbox (Span 4 columns) */}
          {filteredProjects.find((p) => p.id === 'digital-portfolio') && (
            <div className="lg:col-span-4 group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 transition-all overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative border-b border-slate-800">
                <img
                  src="/src/assets/images/developer_workspace_1791941188781.jpg"
                  alt="Digital Portfolio Developer Setup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs text-emerald-400 font-mono">Personal Showcase</div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Digital Portfolio & Python Sandbox
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Designed from the ground up for high viewport performance across smartphones and Windows PCs. Houses the interactive in-browser Python terminal and academic records.
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mt-3 pt-2 border-t border-slate-800">
                    <span className="font-mono text-emerald-400">React 19</span>
                    <span aria-hidden="true">·</span>
                    <span>TypeScript</span>
                    <span aria-hidden="true">·</span>
                    <span>Tailwind CSS</span>
                    <span aria-hidden="true">·</span>
                    <span>Python Sandbox</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[1])}
                    className="text-xs font-medium text-emerald-400 hover:underline"
                  >
                    View Project Details &rarr;
                  </button>

                  <a
                    href="https://github.com/Josuwapy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tertiary Card: IT Lab Workstation Portal (Span 6 columns) */}
          {filteredProjects.find((p) => p.id === 'campus-lab-tracker') && (
            <div className="lg:col-span-6 group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 transition-all overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative border-b border-slate-800">
                <img
                  src="/src/assets/images/campus_lab_portal_1791941189331.jpg"
                  alt="Torres Capitol IT Lab Workstation Portal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs text-emerald-400 font-mono">Campus Resource Management</div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Torres Capitol IT Lab Workstation Portal
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A seat reservation and hardware peripheral tracking application built for Torres Capitol College computing laboratories. Allows Section 2A students to book PCs and view installed dev packages.
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mt-3 pt-2 border-t border-slate-800">
                    <span className="font-mono text-emerald-400">Python</span>
                    <span aria-hidden="true">·</span>
                    <span>SQLAlchemy</span>
                    <span aria-hidden="true">·</span>
                    <span>Workstation Mapping</span>
                    <span aria-hidden="true">·</span>
                    <span>Session Logs</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[2])}
                    className="text-xs font-medium text-emerald-400 hover:underline"
                  >
                    View Lab System Specs &rarr;
                  </button>

                  <a
                    href="https://github.com/Josuwapy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Quaternary Card: Barangay Record & e-Services System (Span 6 columns) */}
          {filteredProjects.find((p) => p.id === 'barangay-citizen-services') && (
            <div className="lg:col-span-6 group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 transition-all overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono text-emerald-400">Community Governance</span>
                    <span>2024 Project</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Barangay Record & e-Services System
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                    A localized community management solution. Digitizes resident census records, generates official barangay clearances, certificate of residency, and indigency proofs with automated verification numbers.
                  </p>

                  <div className="grid grid-cols-2 gap-3 my-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div>
                      <div className="text-slate-400 text-[11px]">Clearance Generation</div>
                      <div className="font-bold text-emerald-400 font-mono mt-0.5">&lt; 2 seconds</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Census Records</div>
                      <div className="font-bold text-white font-mono mt-0.5">1,200+ Demo Profiles</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                    <span className="font-mono text-emerald-400">Python</span>
                    <span aria-hidden="true">·</span>
                    <span>SQLite DB</span>
                    <span aria-hidden="true">·</span>
                    <span>PDF Generation</span>
                    <span aria-hidden="true">·</span>
                    <span>Desktop + Web UI</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[3])}
                    className="text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 px-3.5 py-1.5 rounded-md transition-colors"
                  >
                    View Project Details
                  </button>

                  <a
                    href="https://github.com/Josuwapy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLiveDemo={handleOpenLiveDemo}
      />

      {/* Live Interactive Evaluation Demo */}
      <StudentFeedbackModal
        isOpen={isLiveFeedbackDemoOpen}
        onClose={() => setIsLiveFeedbackDemoOpen(false)}
      />
    </section>
  );
};
