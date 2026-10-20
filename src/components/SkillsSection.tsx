import React from 'react';
import { Terminal, Database, Layout, Shield, Cpu, Code2, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">BSIT 2A Toolkit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Core stack & engineering competencies.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Cultivated through intensive laboratory assignments at Torres Capitol College, independent Python development, and collaborative coursework projects.
          </p>
        </div>

        {/* 4-Column Grid for Technical Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pb-3 border-b border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-semibold uppercase tracking-wider text-white">{category.title}</span>
                </div>

                <div className="space-y-4 mt-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-[11px] font-mono text-emerald-400/90">{skill.level}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                Applied in Torres Capitol Coursework
              </div>
            </div>
          ))}
        </div>

        {/* Development Philosophy / Mindset Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="space-y-1.5">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Clean Code & Maintainability</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Writing readable, self-documenting Python functions following PEP 8 style guides, clear variable nomenclature, and modular classes.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Mobile & Windows Responsiveness</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Prioritizing fast load times, accessible touch targets on smartphones, and optimized multi-pane layouts on Windows workstations.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Community & Campus First</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Focusing on real utility—building systems that empower fellow students, professors, and community offices with simplified workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
