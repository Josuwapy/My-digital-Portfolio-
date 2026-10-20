import React from 'react';
import { ExternalLink, BookOpen, GraduationCap, MapPin, Users, CheckCircle, Code, Layers } from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_MILESTONES } from '../data/portfolioData';

export const AboutSchool: React.FC = () => {
  return (
    <section id="academic" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Academic Background</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Torres Capitol College</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Nurturing IT craftsmanship in Torres Capitol College.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            As a 2nd-year Bachelor of Science in Information Technology (BSIT) student in Section 2A, my academic focus bridges rigorous computer science theory with hands-on software development that solves tangible community and campus needs.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: College Spotlight & Section 2A Culture */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-medium text-emerald-400">Educational Institution</div>
                  <h3 className="text-xl font-bold text-white mt-0.5">Torres Capitol College</h3>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Region X / Northern Mindanao, Philippines</span>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.schoolWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors inline-flex items-center gap-1.5 shrink-0"
                >
                  <span>philcountryville.com</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Torres Capitol College (affiliated with the Countryville collegiate community) fosters career-ready IT professionals with an emphasis on practical programming laboratory hours, database design, and community-oriented technology projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Section 2A Collaborations:</span>
                    <p className="text-slate-400 mt-0.5">Coordinated student software teams for semester-end capstone presentations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Python Programming:</span>
                    <p className="text-slate-400 mt-0.5">Utilizing Python as the backbone for algorithms, scripting, and web backends.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current 2nd Year Curriculum Highlights */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-4">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>2nd Year BSIT Core Coursework (Curriculum Matrix)</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="font-mono text-emerald-400 text-[11px]">IT211</span>
                  <div className="font-semibold text-slate-200 mt-0.5">Data Structures & Algorithms</div>
                  <div className="text-slate-400 text-[11px] mt-1">Stacks, queues, linked lists, trees, and complexity analysis implemented in Python.</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="font-mono text-emerald-400 text-[11px]">IT212</span>
                  <div className="font-semibold text-slate-200 mt-0.5">Object-Oriented Programming</div>
                  <div className="text-slate-400 text-[11px] mt-1">Encapsulation, inheritance, polymorphism, and modular architecture.</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="font-mono text-emerald-400 text-[11px]">IT213</span>
                  <div className="font-semibold text-slate-200 mt-0.5">Database Management Systems</div>
                  <div className="text-slate-400 text-[11px] mt-1">Relational schema normalization, SQL queries, indexing, and SQLite/PostgreSQL.</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="font-mono text-emerald-400 text-[11px]">IT214</span>
                  <div className="font-semibold text-slate-200 mt-0.5">Web Systems & Technologies</div>
                  <div className="text-slate-400 text-[11px] mt-1">Full-stack web architecture, client-server models, responsive UI, and REST APIs.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Timeline & Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Academic Journey & Milestones</span>
              </h4>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
                {ACADEMIC_MILESTONES.map((milestone, idx) => (
                  <div key={idx} className="relative pl-8 space-y-1">
                    <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-slate-900" />
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-mono text-emerald-400">{milestone.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{milestone.institution}</span>
                    </div>
                    <div className="text-sm font-bold text-white">{milestone.title}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{milestone.description}</p>
                    <div className="text-xs text-emerald-300/90 pt-1 font-medium">{milestone.highlight}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
                <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Section 2A Representative Focus</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Active peer supporter assisting classmates in programming laboratory troubleshooting, Git version control workflows, and Python scripting fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
