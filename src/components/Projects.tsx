import React, { useState } from 'react';
import { ExternalLink, Github, Code, Play, ArrowRight, CheckCircle2, Star, Sparkles, Gamepad2, CreditCard, Smartphone, Monitor, GraduationCap } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { StudentFeedbackModal } from './StudentFeedbackModal';
import { BillingSystemModal } from './BillingSystemModal';
import { SpaceArcadeModal } from './SpaceArcadeModal';
import { FacultyEvalModal } from './FacultyEvalModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLiveFeedbackDemoOpen, setIsLiveFeedbackDemoOpen] = useState(false);
  const [isBillingModalOpen, setIsBillingModalOpen] = useState(false);
  const [isArcadeModalOpen, setIsArcadeModalOpen] = useState(false);
  const [isFacultyModalOpen, setIsFacultyModalOpen] = useState(false);

  const filterCategories = ['All', 'Campus System', 'Game Development', 'Full-Stack', 'Python & Backend'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const handleOpenLiveDemo = (projectId: string) => {
    if (projectId === 'school-billing-system') {
      setIsBillingModalOpen(true);
    } else if (projectId === 'faculty-evaluation-system') {
      setIsFacultyModalOpen(true);
    } else if (projectId === 'mobile-space-arcade') {
      setIsArcadeModalOpen(true);
    } else if (projectId === 'student-feedback-system') {
      setIsLiveFeedbackDemoOpen(true);
    }
  };

  const billingProject = PROJECTS.find((p) => p.id === 'school-billing-system');
  const facultyProject = PROJECTS.find((p) => p.id === 'faculty-evaluation-system');
  const arcadeProject = PROJECTS.find((p) => p.id === 'mobile-space-arcade');
  const feedbackProject = PROJECTS.find((p) => p.id === 'student-feedback-system');
  const portfolioProject = PROJECTS.find((p) => p.id === 'digital-portfolio');
  const labProject = PROJECTS.find((p) => p.id === 'campus-lab-tracker');
  const barangayProject = PROJECTS.find((p) => p.id === 'barangay-citizen-services');

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
              <span className="text-slate-400">Featured Portfolio Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Software built for real people, campuses & communities.
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Explore my official BSIT capstone project, custom Pygame mobile arcade, student feedback analytics, and laboratory systems developed for Torres Capitol College and beyond.
            </p>
          </div>

          {/* Interactive Filter Controls */}
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
          {/* 1. Flagship Capstone: School Billing System (Span 8 cols) */}
          {filteredProjects.some((p) => p.id === 'school-billing-system') && billingProject && (
            <div className="lg:col-span-8 group relative rounded-2xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-950 relative border-b border-slate-800">
                <img
                  src="/src/assets/images/school_billing_system_1793243886521.jpg"
                  alt="School Billing System Capstone Interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-slate-950/95 backdrop-blur-sm border border-emerald-500/40 rounded-md px-3 py-1 text-xs text-slate-200 flex items-center gap-2">
                    <span className="font-bold text-emerald-400">Torres Capitol College</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="font-semibold text-white">Official BSIT Capstone Title</span>
                  </div>

                  <button
                    onClick={() => setIsBillingModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-lg"
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Launch Billing Demo</span>
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-emerald-400 font-mono">BSIT Capstone Project · Research & Dev</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                      School Billing System
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Joshua's official Capstone project for Torres Capitol College. Computes matriculation fees by enrolled academic units, generates 4-term semestral installment ledgers (Prelim, Midterm, Semi-Final, Final), manages student scholarship discount vouchers, and outputs verified Official Receipts (OR).
                  </p>

                  <div className="grid grid-cols-3 gap-3 my-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div>
                      <div className="text-slate-400 text-[11px]">Installment Terms</div>
                      <div className="font-bold text-emerald-400 font-mono mt-0.5">4 Scheds (Prelim-Final)</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Voucher System</div>
                      <div className="font-bold text-white font-mono mt-0.5">Dean's & Academic</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Receipt Engine</div>
                      <div className="font-bold text-emerald-400 font-mono mt-0.5">&lt; 1.2s Fast OR</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800">
                    <span className="font-mono text-emerald-400">Python</span>
                    <span aria-hidden="true">·</span>
                    <span>Django / Flask</span>
                    <span aria-hidden="true">·</span>
                    <span>SQLite Ledger</span>
                    <span aria-hidden="true">·</span>
                    <span>Tuition Assessment</span>
                    <span aria-hidden="true">·</span>
                    <span>PDF Official Receipt</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsBillingModalOpen(true)}
                      className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors inline-flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Test Billing Ledger</span>
                    </button>
                    <button
                      onClick={() => setSelectedProject(billingProject)}
                      className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      View Capstone Architecture &rarr;
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

          {/* 2. Mobile Space Arcade (Pygame on Pydroid 3) (Span 4 cols) */}
          {filteredProjects.some((p) => p.id === 'mobile-space-arcade') && arcadeProject && (
            <div className="lg:col-span-4 group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative border-b border-slate-800">
                <img
                  src="/src/assets/images/mobile_space_arcade_1793243886797.jpg"
                  alt="Mobile Space Arcade Pygame on Pydroid 3"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="bg-slate-950/90 backdrop-blur-sm border border-cyan-500/40 rounded-md px-2.5 py-1 text-[11px] text-cyan-300 flex items-center gap-1.5">
                    <Gamepad2 className="w-3 h-3 text-cyan-400" />
                    <span>Pygame on Pydroid 3</span>
                  </div>

                  <button
                    onClick={() => setIsArcadeModalOpen(true)}
                    className="px-2.5 py-1 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors shadow-sm"
                  >
                    Play (60 FPS)
                  </button>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs text-cyan-400 font-mono">Python Game Development</div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Mobile Space Arcade
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A fast-paced 2D retro arcade shooter developed natively on smartphone using Pydroid 3 and Pygame. Featuring particle thrusters, laser blasts, asteroid collision physics, and responsive controls for touch & PC.
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mt-3 pt-2 border-t border-slate-800">
                    <span className="font-mono text-cyan-400">Python 3</span>
                    <span aria-hidden="true">·</span>
                    <span>Pygame 2</span>
                    <span aria-hidden="true">·</span>
                    <span>Pydroid 3 (Android)</span>
                    <span aria-hidden="true">·</span>
                    <span>60 FPS Loop</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setIsArcadeModalOpen(true)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Play Arcade Demo &rarr;</span>
                  </button>

                  <button
                    onClick={() => setSelectedProject(arcadeProject)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Game Specs
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. Upcoming Capstone: Faculty Evaluation System (Span 8 cols) */}
          {filteredProjects.some((p) => p.id === 'faculty-evaluation-system') && facultyProject && (
            <div className="lg:col-span-8 group relative rounded-2xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-950 relative border-b border-slate-800">
                <img
                  src="/src/assets/images/faculty_eval_mockup_1793244976470.jpg"
                  alt="Faculty Evaluation System Dual-Device Architecture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-slate-950/95 backdrop-blur-sm border border-emerald-500/40 rounded-md px-3 py-1 text-xs text-slate-200 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-bold text-emerald-400">Torres Capitol College</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="font-semibold text-white">Upcoming BSIT Capstone Title</span>
                  </div>

                  <button
                    onClick={() => setIsFacultyModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-lg"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Dual-Device</span>
                    <span>Simulator</span>
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-emerald-400 font-mono flex items-center gap-2">
                      <span>Future BSIT Capstone</span>
                      <span>·</span>
                      <span className="text-cyan-300">100% Responsive for Mobile & Desktop</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                      Faculty Evaluation System
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Joshua's future Capstone thesis project for Torres Capitol College. Conceived and architected from scratch to run seamlessly on both smartphones (touch-first student appraisal forms) and Windows desktop PCs (dean & faculty analytics dashboards). Features cryptographic single-use evaluation tokens, CHED NBC 461 pedagogical weighting, and Python-driven reporting.
                  </p>

                  <div className="grid grid-cols-3 gap-3 my-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div>
                      <div className="text-slate-400 text-[11px]">Viewport Engine</div>
                      <div className="font-bold text-emerald-400 font-mono mt-0.5">Mobile + Desktop</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Quality Standards</div>
                      <div className="font-bold text-cyan-300 font-mono mt-0.5">CHED NBC 461</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">Ballot Privacy</div>
                      <div className="font-bold text-emerald-400 font-mono mt-0.5">SHA-256 Hashed</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800">
                    <span className="font-mono text-emerald-400">Python</span>
                    <span aria-hidden="true">·</span>
                    <span>FastAPI / Flask</span>
                    <span aria-hidden="true">·</span>
                    <span>React 19</span>
                    <span aria-hidden="true">·</span>
                    <span>Responsive Viewports</span>
                    <span aria-hidden="true">·</span>
                    <span>CHED NBC 461</span>
                    <span aria-hidden="true">·</span>
                    <span>PDF Dossiers</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsFacultyModalOpen(true)}
                      className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors inline-flex items-center gap-1.5 shadow-md"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Test Dual-Platform Simulator</span>
                    </button>
                    <button
                      onClick={() => setSelectedProject(facultyProject)}
                      className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      View Capstone Architecture &rarr;
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

          {/* 4. Student Feedback System (Span 6 cols) */}
          {filteredProjects.some((p) => p.id === 'student-feedback-system') && feedbackProject && (
            <div className="lg:col-span-6 group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 transition-all overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative border-b border-slate-800">
                <img
                  src="/src/assets/images/feedback_system_hero_1791941188202.jpg"
                  alt="Student Feedback System"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="bg-slate-950/90 backdrop-blur-sm border border-slate-700/60 rounded-md px-2.5 py-1 text-[11px] text-slate-300">
                    <span className="text-emerald-400 font-semibold">Torres Capitol College</span> · Evaluation System
                  </div>

                  <button
                    onClick={() => setIsLiveFeedbackDemoOpen(true)}
                    className="px-2.5 py-1 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
                  >
                    Try Live Survey
                  </button>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs text-emerald-400 font-mono">Academic Sentiment Analysis</div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Student Feedback System
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Faculty appraisal and student sentiment platform. Automates anonymous student reviews, computes weighted faculty ratings across pedagogy dimensions, and outputs department summary reports.
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 mt-3 pt-2 border-t border-slate-800">
                    <span className="font-mono text-emerald-400">Python 3</span>
                    <span aria-hidden="true">·</span>
                    <span>Flask API</span>
                    <span aria-hidden="true">·</span>
                    <span>SQLite</span>
                    <span aria-hidden="true">·</span>
                    <span>Radar Sentiment</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setIsLiveFeedbackDemoOpen(true)}
                    className="text-xs font-medium text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Run Evaluation Demo</span>
                  </button>

                  <button
                    onClick={() => setSelectedProject(feedbackProject)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    View Details &rarr;
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 4. Digital Portfolio & Python Sandbox (Span 6 cols) */}
          {filteredProjects.some((p) => p.id === 'digital-portfolio') && portfolioProject && (
            <div className="lg:col-span-6 group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 transition-all overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative border-b border-slate-800">
                <img
                  src="/src/assets/images/developer_workspace_1791941188781.jpg"
                  alt="Digital Portfolio Developer Setup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xs text-emerald-400 font-mono">Personal Showcase & Sandbox</div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Digital Portfolio & Python Sandbox
                  </h3>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Designed for high viewport performance across smartphones and Windows PCs. Houses the interactive in-browser Python terminal, preset scripts, and CV exporter.
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
                    onClick={() => setSelectedProject(portfolioProject)}
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

          {/* 5. IT Lab Workstation Portal (Span 6 cols) */}
          {filteredProjects.some((p) => p.id === 'campus-lab-tracker') && labProject && (
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
                    onClick={() => setSelectedProject(labProject)}
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

          {/* 6. Barangay Record & e-Services System (Span 6 cols) */}
          {filteredProjects.some((p) => p.id === 'barangay-citizen-services') && barangayProject && (
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
                    onClick={() => setSelectedProject(barangayProject)}
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

      {/* Official Capstone: School Billing System Modal */}
      <BillingSystemModal
        isOpen={isBillingModalOpen}
        onClose={() => setIsBillingModalOpen(false)}
      />

      {/* 2D Pygame: Mobile Space Arcade Modal */}
      <SpaceArcadeModal
        isOpen={isArcadeModalOpen}
        onClose={() => setIsArcadeModalOpen(false)}
      />

      {/* Upcoming Capstone: Faculty Evaluation System Modal */}
      <FacultyEvalModal
        isOpen={isFacultyModalOpen}
        onClose={() => setIsFacultyModalOpen(false)}
      />
    </section>
  );
};
