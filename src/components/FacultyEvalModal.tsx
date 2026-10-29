import React, { useState } from 'react';
import {
  X,
  Smartphone,
  Monitor,
  Star,
  CheckCircle2,
  Send,
  Award,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Users,
  BookOpen,
  Check,
  ChevronRight,
  TrendingUp,
  FileText,
  Clock,
  Layers,
  GraduationCap
} from 'lucide-react';

interface FacultyEvalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPythonEngine?: () => void;
}

export const FacultyEvalModal: React.FC<FacultyEvalModalProps> = ({
  isOpen,
  onClose,
  onOpenPythonEngine,
}) => {
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'desktop'>('mobile');
  const [selectedInstructor, setSelectedInstructor] = useState('Engr. Roberto Morales, PECE, MSIT');
  const [selectedCourse, setSelectedCourse] = useState('IT211 - Data Structures & Algorithms (BSIT 2A)');

  // CHED NBC 461 / QCE standard pedagogical evaluation dimensions
  const [ratings, setRatings] = useState<{ [key: string]: number }>({
    commitment: 5,
    knowledge: 5,
    independent: 4,
    management: 5,
  });

  const [feedbackText, setFeedbackText] = useState(
    'Engr. Morales explains algorithm complexities clearly and encourages hands-on coding in Python during laboratory exercises in Section 2A.'
  );

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'demo' | 'architecture'>('demo');

  if (!isOpen) return null;

  const evaluationCriteria = [
    {
      key: 'commitment',
      name: 'A. Commitment & Punctuality',
      weight: '25%',
      desc: 'Regularly conducts classes, adheres to schedule, and is available for student consultations.',
    },
    {
      key: 'knowledge',
      name: 'B. Knowledge of Subject Matter',
      weight: '25%',
      desc: 'Demonstrates deep mastery of course competencies, theoretical concepts, and practical coding standards.',
    },
    {
      key: 'independent',
      name: 'C. Teaching for Independent Learning',
      weight: '25%',
      desc: 'Guides students to think critically, solve algorithms independently, and explore modern IT tools.',
    },
    {
      key: 'management',
      name: 'D. Management of Learning',
      weight: '25%',
      desc: 'Maintains conducive laboratory atmosphere, fair grading policies, and clear rubrics for coursework.',
    },
  ];

  const calculateWeightedScore = () => {
    const vals = Object.values(ratings);
    const sum = vals.reduce((a, b) => a + b, 0);
    const avg = sum / vals.length;
    return avg.toFixed(2);
  };

  const getVerbalInterpretation = (score: number) => {
    if (score >= 4.5) return { label: 'Outstanding', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
    if (score >= 3.5) return { label: 'Very Satisfactory', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' };
    if (score >= 2.5) return { label: 'Satisfactory', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
    if (score >= 1.5) return { label: 'Fair', color: 'text-orange-400 bg-orange-500/10 border-orange-500/30' };
    return { label: 'Poor', color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' };
  };

  const scoreNum = parseFloat(calculateWeightedScore());
  const interpretation = getVerbalInterpretation(scoreNum);

  const handleRatingChange = (key: string, val: number) => {
    setRatings((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-6 max-h-[92vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Faculty Evaluation System
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                  Upcoming BSIT Capstone Title
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Torres Capitol College · Designed with 100% Dual-Viewport Responsiveness (Smartphone & Desktop)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Viewport switcher */}
            <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  deviceMode === 'mobile'
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Preview Smartphone View (Student Touch UI)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Smartphone View</span>
              </button>
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  deviceMode === 'desktop'
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Preview Desktop View (Dean & Analytics Dashboard)"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop View</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-5 py-2 bg-slate-950/50 border-b border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-1 font-medium rounded-md transition-colors ${
                activeTab === 'demo'
                  ? 'bg-slate-800 text-emerald-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Interactive Device Simulation
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1 font-medium rounded-md transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-slate-800 text-emerald-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Future Capstone Architecture & Specifications
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400">
            <span className="font-mono text-emerald-400">Section 2A</span>
            <span>·</span>
            <span>philcountryville.com</span>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 bg-slate-950/40">
          {activeTab === 'demo' ? (
            <div className="space-y-6">
              {/* Device Mode Contextual Banner */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-start sm:items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    {deviceMode === 'mobile' ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                  </span>
                  <div>
                    <span className="font-bold text-white">
                      {deviceMode === 'mobile'
                        ? 'Simulating: Student Smartphone Interface (Responsive Mobile Web/PWA)'
                        : 'Simulating: Dean & Department Head Dashboard (Windows Desktop / Web Workstation)'}
                    </span>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      {deviceMode === 'mobile'
                        ? 'Touch-optimized 1-5 Likert scale, single-hand survey completion, encrypted anonymous token.'
                        : 'Aggregate faculty radar analytics, CHED criteria weighted averages, and downloadable accreditation dossiers.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border ${interpretation.color}`}>
                    Composite: {scoreNum.toFixed(2)} ({interpretation.label})
                  </span>
                </div>
              </div>

              {/* DUAL VIEWPORT RENDERER */}
              {deviceMode === 'mobile' ? (
                /* SMARTPHONE VIEW SIMULATOR */
                <div className="flex justify-center">
                  <div className="w-full max-w-sm bg-slate-950 border-4 border-slate-800 rounded-[36px] shadow-2xl p-4 sm:p-5 relative overflow-hidden">
                    {/* Phone speaker notch */}
                    <div className="w-28 h-4 bg-slate-900 rounded-full mx-auto mb-4 border border-slate-800 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-700 mr-2" />
                      <div className="w-10 h-1 bg-slate-700 rounded-full" />
                    </div>

                    {/* Mobile App Header */}
                    <div className="border-b border-slate-800/80 pb-3 mb-4">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                        <span className="font-bold text-emerald-400">Torres Capitol College</span>
                        <span className="font-mono text-[10px]">TCC-EVAL v1.0</span>
                      </div>
                      <h4 className="text-sm font-extrabold text-white">
                        Student Faculty Appraisal
                      </h4>
                      <div className="mt-1 flex items-center gap-1.5 text-[10px] text-slate-400">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Anonymous Ballot: #TCC-2A-98F1E</span>
                      </div>
                    </div>

                    {!submitted ? (
                      <div className="space-y-4">
                        {/* Instructor & Course Selector */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-semibold text-slate-300 block">
                            Instructor & Course
                          </label>
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                            <div className="font-bold text-white">{selectedInstructor}</div>
                            <div className="text-[11px] text-emerald-400 mt-0.5">{selectedCourse}</div>
                          </div>
                        </div>

                        {/* Interactive Criteria on Mobile */}
                        <div className="space-y-3">
                          {evaluationCriteria.map((crit) => (
                            <div
                              key={crit.key}
                              className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-white">
                                  {crit.name}
                                </span>
                                <span className="text-[10px] font-mono text-emerald-400 font-bold">
                                  {ratings[crit.key]} / 5
                                </span>
                              </div>

                              <p className="text-[10px] text-slate-400 leading-tight">
                                {crit.desc}
                              </p>

                              {/* Touch 1-5 buttons */}
                              <div className="grid grid-cols-5 gap-1 pt-1">
                                {[1, 2, 3, 4, 5].map((starVal) => {
                                  const isSelected = ratings[crit.key] === starVal;
                                  return (
                                    <button
                                      key={starVal}
                                      type="button"
                                      onClick={() => handleRatingChange(crit.key, starVal)}
                                      className={`py-2 text-xs font-bold rounded-lg transition-all flex flex-col items-center justify-center gap-0.5 ${
                                        isSelected
                                          ? 'bg-emerald-400 text-slate-950 shadow-md scale-102 ring-1 ring-emerald-300'
                                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                      }`}
                                    >
                                      <span>{starVal}</span>
                                      <Star className={`w-2.5 h-2.5 ${isSelected ? 'fill-current' : ''}`} />
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Qualitative comment input */}
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-slate-300 block">
                            Constructive Qualitative Feedback
                          </label>
                          <textarea
                            rows={3}
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            className="w-full p-2.5 text-xs bg-slate-900 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-emerald-400 resize-none"
                            placeholder="Share specific suggestions or commendations..."
                          />
                        </div>

                        {/* Mobile Submit Button */}
                        <button
                          type="button"
                          onClick={() => setSubmitted(true)}
                          className="w-full py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Anonymous Evaluation</span>
                        </button>
                      </div>
                    ) : (
                      /* Mobile Success State */
                      <div className="py-8 px-2 text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">Evaluation Recorded!</h4>
                          <p className="text-xs text-slate-300 mt-1">
                            Your rating for <span className="text-emerald-400">{selectedInstructor}</span> has been securely hashed into the department database.
                          </p>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-left space-y-1">
                          <div className="flex justify-between text-slate-400">
                            <span>Computed Rating:</span>
                            <span className="font-bold text-emerald-400">{scoreNum.toFixed(2)} / 5.00</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                            <span>Classification:</span>
                            <span className="font-semibold text-white">{interpretation.label}</span>
                          </div>
                          <div className="flex justify-between text-slate-400 text-[10px]">
                            <span>Token Hash:</span>
                            <span className="font-mono text-slate-500">sha256:7b1e...49a0</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors"
                        >
                          Evaluate Another Instructor
                        </button>
                      </div>
                    )}

                    {/* Smartphone bottom navigation home pill */}
                    <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-5" />
                  </div>
                </div>
              ) : (
                /* DESKTOP VIEW SIMULATOR */
                <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
                  {/* Desktop App Header Bar */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                        <GraduationCap className="w-4 h-4" />
                        <span>Torres Capitol College · College of Computer Studies (BSIT)</span>
                      </div>
                      <h4 className="text-xl font-extrabold text-white tracking-tight mt-1">
                        Dean & Academic Head Faculty Evaluation Dashboard
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        CHED NBC 461 / Institutional Quality Assurance (IQA) Faculty Appraisal Matrix
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-slate-400">Total BSIT 2A Responses</div>
                        <div className="text-lg font-bold text-white font-mono">42 / 45 Enrolled (93.3%)</div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Grid: Faculty Profile & Performance Radar Breakdown */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Instructor Profile Card (4 cols) */}
                    <div className="lg:col-span-4 p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-sm">
                          RM
                        </div>
                        <div>
                          <h5 className="font-bold text-white text-sm">{selectedInstructor}</h5>
                          <p className="text-[11px] text-emerald-400">Assistant Professor III · BSIT Faculty</p>
                          <p className="text-[10px] text-slate-500">Status: Regular Full-Time</p>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Assigned Subject:</span>
                          <span className="text-white font-medium">IT211 (BSIT 2A)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Syllabus Coverage:</span>
                          <span className="text-emerald-400 font-bold">96% Completed</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Composite Score:</span>
                          <span className="font-bold text-emerald-400 font-mono text-sm">
                            {scoreNum.toFixed(2)} / 5.00
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Adjectival Rating:</span>
                          <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${interpretation.color}`}>
                            {interpretation.label}
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                        <span className="text-slate-400 block text-[11px] font-semibold mb-1">
                          Latest Qualitative Comment (Sample):
                        </span>
                        &ldquo;{feedbackText}&rdquo;
                      </div>
                    </div>

                    {/* Criteria Performance Bars (8 cols) */}
                    <div className="lg:col-span-8 p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <h5 className="font-bold text-white text-sm">
                          CHED Pedagogical Evaluation Breakdown
                        </h5>
                        <span className="text-xs text-slate-400">Weights: 25% each</span>
                      </div>

                      <div className="space-y-4">
                        {evaluationCriteria.map((c) => {
                          const val = ratings[c.key] || 5;
                          const pct = (val / 5) * 100;
                          return (
                            <div key={c.key} className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-semibold text-slate-200">{c.name}</span>
                                <span className="font-mono text-emerald-400 font-bold">
                                  {val.toFixed(1)} / 5.0 ({pct.toFixed(0)}%)
                                </span>
                              </div>
                              <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                                <div
                                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500 rounded-full"
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <p className="text-[11px] text-slate-400">{c.desc}</p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Desktop Action Buttons */}
                      <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Evaluation period closes: End of Finals Week 2025</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              alert('Simulating PDF Generation: Official Faculty Appraisal Report for Torres Capitol College generated.');
                            }}
                            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors inline-flex items-center gap-1.5"
                          >
                            <FileText className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Export Dean's Report (PDF)</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* FUTURE CAPSTONE ARCHITECTURE & SPECIFICATIONS TAB */
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Capstone Title Proposal · BSIT Department</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Design & Implementation of a Dual-Platform Faculty Performance Evaluation & Analytical System for Torres Capitol College
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Conceived by <strong>Joshua Kim S. Entrina (BSIT 2A)</strong> as an official future capstone project. Designed to replace paper-based and disjointed Google Forms with an institutional-grade, mobile-first academic appraisal portal ensuring cryptographic ballot privacy, CHED NBC 461 compliance, and automated departmental sentiment analytics.
                </p>
              </div>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {/* 1. Mobile & Desktop Responsiveness */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-white text-sm">1. Dual-Device Responsiveness</h5>
                  <p className="text-slate-400 leading-relaxed">
                    Designed from the ground up for both smartphones (touch targets &ge; 48px, offline survey caching, low-bandwidth 4G) and desktop computer monitors (multi-column dean dashboards, high-density data tables).
                  </p>
                </div>

                {/* 2. Cryptographic Anonymity */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-white text-sm">2. True Student Privacy</h5>
                  <p className="text-slate-400 leading-relaxed">
                    Employs single-use SHA-256 enrollment tokens. Students can evaluate professors with zero fear of grade reprisal, while preventing duplicate entries per enrolled subject.
                  </p>
                </div>

                {/* 3. Python Backend Analytics */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-white text-sm">3. Python Analytics Engine</h5>
                  <p className="text-slate-400 leading-relaxed">
                    Weighted standard deviation calculations, automatic adjectival tier classifications, qualitative feedback tokenization, and PDF summary dossier generation using Python ReportLab.
                  </p>
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <h5 className="font-bold text-white text-sm flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Planned Full-Stack Tech Stack</span>
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 text-[10px] uppercase font-bold block">Backend</span>
                    <span className="font-bold text-emerald-400">Python (FastAPI / Flask)</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">REST API, JWT auth & token hashing</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 text-[10px] uppercase font-bold block">Frontend</span>
                    <span className="font-bold text-cyan-400">React + Tailwind CSS</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Responsive mobile + desktop layouts</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 text-[10px] uppercase font-bold block">Database</span>
                    <span className="font-bold text-white">PostgreSQL / SQLite</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Relational schema with ACID security</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 text-[10px] uppercase font-bold block">Reporting</span>
                    <span className="font-bold text-emerald-400">ReportLab + Chart.js</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Instant PDF faculty dossiers</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2 text-slate-400">
            <span>Author:</span>
            <span className="font-bold text-white">Joshua Kim S. Entrina</span>
            <span>·</span>
            <span className="text-emerald-400">Torres Capitol College BSIT 2A</span>
          </div>

          <div className="flex items-center gap-3">
            {onOpenPythonEngine && (
              <button
                onClick={() => {
                  onClose();
                  onOpenPythonEngine();
                }}
                className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Run Python Evaluation Engine</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
