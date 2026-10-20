import React, { useState } from 'react';
import { X, Star, CheckCircle, Send, Award, BarChart3, ShieldCheck } from 'lucide-react';

interface StudentFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentFeedbackModal: React.FC<StudentFeedbackModalProps> = ({ isOpen, onClose }) => {
  const [selectedInstructor, setSelectedInstructor] = useState('Engr. R. Morales');
  const [selectedSubject, setSelectedSubject] = useState('IT211 - Data Structures & Algorithms (BSIT 2A)');
  const [ratings, setRatings] = useState<{ [key: string]: number }>({
    mastery: 5,
    delivery: 5,
    punctuality: 4,
    engagement: 5,
    fairness: 5,
  });
  const [comment, setComment] = useState('Excellent teaching method in Python! Code walkthroughs during laboratory sessions are very helpful for Section 2A.');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const criteriaList = [
    { key: 'mastery', label: 'Subject Mastery & Technical Depth', desc: 'Proficiency in syllabus content and algorithm explanations' },
    { key: 'delivery', label: 'Instructional Clarity & Delivery', desc: 'Clarity of lectures, slides, and laboratory assignments' },
    { key: 'punctuality', label: 'Punctuality & Time Management', desc: 'Adherence to scheduled class hours and syllabus calendar' },
    { key: 'engagement', label: 'Student Engagement & Support', desc: 'Openness to student questions and active lab assistance' },
    { key: 'fairness', label: 'Grading Fairness & Transparency', desc: 'Objective scoring criteria and timely return of evaluations' },
  ];

  const calculateAverage = () => {
    const values = Object.values(ratings);
    const sum = values.reduce((a, b) => a + b, 0);
    return (sum / values.length).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setRatings({
      mastery: 5,
      delivery: 5,
      punctuality: 4,
      engagement: 5,
      fairness: 5,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Student Feedback System · Live Interactive Demo
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Context Notice */}
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-emerald-300">Torres Capitol College Evaluation Pipeline:</span>
                  <p className="mt-0.5 text-slate-300">
                    Submissions are tokenized and anonymized by Joshua's backend script. Test submitting an appraisal below to see the rating analytics.
                  </p>
                </div>
              </div>

              {/* Faculty & Subject Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Faculty Member
                  </label>
                  <select
                    value={selectedInstructor}
                    onChange={(e) => setSelectedInstructor(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Engr. R. Morales">Engr. R. Morales (Data Structures)</option>
                    <option value="Prof. M. Alcantara">Prof. M. Alcantara (OOP in Python)</option>
                    <option value="Dr. J. Del Rosario">Dr. J. Del Rosario (Database Systems)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Course & Section
                  </label>
                  <input
                    type="text"
                    disabled
                    value={selectedSubject}
                    className="w-full px-3 py-2 text-xs bg-slate-950/60 border border-slate-800 rounded-lg text-slate-400 font-mono"
                  />
                </div>
              </div>

              {/* 5-Criteria Star Rating Form */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-semibold text-white uppercase tracking-wider">
                  Evaluation Criteria (1 - 5 Stars)
                </div>

                {criteriaList.map((item) => (
                  <div key={item.key} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-semibold text-slate-200">{item.label}</div>
                      <div className="text-[11px] text-slate-400">{item.desc}</div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      {[1, 2, 3, 4, 5].map((starVal) => {
                        const isFilled = ratings[item.key] >= starVal;
                        return (
                          <button
                            type="button"
                            key={starVal}
                            onClick={() => setRatings({ ...ratings, [item.key]: starVal })}
                            className="p-1 hover:scale-110 transition-transform"
                            title={`${starVal} Star${starVal > 1 ? 's' : ''}`}
                          >
                            <Star
                              className={`w-4 h-4 ${
                                isFilled ? 'text-amber-400 fill-amber-400' : 'text-slate-600'
                              }`}
                            />
                          </button>
                        );
                      })}
                      <span className="text-xs font-mono font-bold text-slate-300 ml-1.5 w-6 text-right">
                        {ratings[item.key]}.0
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Qualitative Comment Box */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Student Qualitative Feedback / Constructive Suggestions
                </label>
                <textarea
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share constructive observations regarding coursework pace, clarity, or laboratory guidance..."
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 leading-relaxed resize-none"
                />
              </div>

              {/* Live Score Preview & Submit */}
              <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-slate-400">Current Computed GPA:</span>
                  <span className="font-mono text-base font-bold text-emerald-400">
                    {calculateAverage()} / 5.00
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Anonymous Evaluation</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Submission Summary Card */
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">Evaluation Successfully Processed</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Recorded in Torres Capitol College evaluation registry under student batch <span className="font-semibold text-emerald-400">BSIT-2A</span>.
                </p>
              </div>

              {/* Computed Breakdown Table */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left space-y-3 max-w-lg mx-auto">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Instructor:</span>
                  <span className="font-semibold text-white">{selectedInstructor}</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Course Subject:</span>
                  <span className="font-mono text-emerald-400">IT211 - Data Structures</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Weighted Performance Rating:</span>
                  <span className="font-mono font-bold text-white text-sm">{calculateAverage()} / 5.00</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Status Classification:</span>
                  <span className="text-emerald-400 font-semibold uppercase text-[11px]">
                    {Number(calculateAverage()) >= 4.5 ? 'Outstanding Performance' : 'Very Satisfactory'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Submit Another Demo Review
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                >
                  Return to Portfolio
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
