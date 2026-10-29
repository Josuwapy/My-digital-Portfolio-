import React, { useState } from 'react';
import { X, CreditCard, CheckCircle, Calculator, FileText, Download, ShieldCheck, Printer } from 'lucide-react';

interface BillingSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BillingSystemModal: React.FC<BillingSystemModalProps> = ({ isOpen, onClose }) => {
  const [enrolledUnits, setEnrolledUnits] = useState<number>(20);
  const [scholarshipDiscount, setScholarshipDiscount] = useState<number>(15); // 15% Dean's List
  const [paymentTerm, setPaymentTerm] = useState<'Prelim' | 'Midterm' | 'Semi-Final' | 'Final'>('Prelim');
  const [paymentAmount, setPaymentAmount] = useState<number>(3500);
  const [isReceiptIssued, setIsReceiptIssued] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>('OR-TCC-2026-8942');

  if (!isOpen) return null;

  // Rate parameters (Torres Capitol College context)
  const tuitionPerUnit = 420;
  const labFee = 1800; // Computer lab & dev workstation access
  const miscAndRegFee = 2400;

  const rawTuition = enrolledUnits * tuitionPerUnit;
  const discountAmount = (rawTuition * scholarshipDiscount) / 100;
  const netTuition = rawTuition - discountAmount;
  const totalSemesterAssessment = netTuition + labFee + miscAndRegFee;

  // 4 installment terms
  const installmentPerTerm = Math.round(totalSemesterAssessment / 4);

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setReceiptNumber(`OR-TCC-${Date.now().toString().slice(-6)}`);
    setIsReceiptIssued(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  School Billing System · Capstone Live Simulation
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  BSIT Capstone
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Torres Capitol College (philcountryville.com) · Student Tuition & Installment Ledger
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isReceiptIssued ? (
            <form onSubmit={handleProcessPayment} className="space-y-6">
              {/* Capstone Badge Notice */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-semibold text-white">Official Capstone Architecture:</span>
                  <p className="text-slate-400">
                    Engineered to automate student ledger computation, enforce fractional installment reconciliation, and print official verified receipts (OR).
                  </p>
                </div>
              </div>

              {/* Student Identification Card */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[11px]">Enrolled Student</span>
                  <div className="font-semibold text-white mt-0.5">Joshua Kim S. Entrina</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Academic Program</span>
                  <div className="font-semibold text-emerald-400 font-mono mt-0.5">BSIT - 2A</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">School Term</span>
                  <div className="text-slate-300 mt-0.5">2nd Sem (2024-2025)</div>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Student ID No.</span>
                  <div className="font-mono text-slate-300 mt-0.5">TCC-2023-0142</div>
                </div>
              </div>

              {/* Interactive Assessment Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <label className="block text-xs font-semibold text-slate-200">
                    Enrolled Academic Units: <span className="font-mono text-emerald-400">{enrolledUnits} Units</span>
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="26"
                    step="1"
                    value={enrolledUnits}
                    onChange={(e) => setEnrolledUnits(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>12 units (Part-time)</span>
                    <span>20 units (BSIT 2A)</span>
                    <span>26 units (Max)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <label className="block text-xs font-semibold text-slate-200">
                    Scholarship / Grant Voucher
                  </label>
                  <select
                    value={scholarshipDiscount}
                    onChange={(e) => setScholarshipDiscount(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 font-medium"
                  >
                    <option value={0}>Standard Assessment (No Discount)</option>
                    <option value={15}>Dean's Honor Grantee (15% Tuition Off)</option>
                    <option value={25}>Academic Excellence Scholar (25% Off)</option>
                    <option value={50}>College Varsity / Leadership (50% Off)</option>
                  </select>
                  <div className="text-[11px] text-slate-400">
                    Discount applied directly against base lecture unit tuition.
                  </div>
                </div>
              </div>

              {/* Tuition & Fee Breakdown Ledger */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs">
                <div className="font-semibold text-white uppercase tracking-wider text-[11px] pb-1 border-b border-slate-800 flex items-center justify-between">
                  <span>Tuition & Fee Breakdown (Torres Capitol College Schedule)</span>
                  <span className="font-mono text-emerald-400">Auto-Calculated</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Lecture Units ({enrolledUnits} units × ₱{tuitionPerUnit}):</span>
                  <span className="font-mono">₱{rawTuition.toLocaleString()}</span>
                </div>

                {scholarshipDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Scholarship Grant ({scholarshipDiscount}% Discount):</span>
                    <span className="font-mono">-₱{discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-300">
                  <span>Computer Laboratory Fee (Programming Labs):</span>
                  <span className="font-mono">₱{labFee.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Registration, Library & Athletic Dues:</span>
                  <span className="font-mono">₱{miscAndRegFee.toLocaleString()}</span>
                </div>

                <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm text-white">
                  <span>Total Assessment for Semester:</span>
                  <span className="font-mono text-emerald-400">₱{totalSemesterAssessment.toLocaleString()}</span>
                </div>
              </div>

              {/* Installment Term Schedule */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-300">
                  Select Installment Term to Settle:
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {(['Prelim', 'Midterm', 'Semi-Final', 'Final'] as const).map((term) => (
                    <button
                      type="button"
                      key={term}
                      onClick={() => {
                        setPaymentTerm(term);
                        setPaymentAmount(installmentPerTerm);
                      }}
                      className={`p-3 rounded-lg border text-left transition-colors ${
                        paymentTerm === term
                          ? 'bg-slate-900 border-emerald-400 text-white shadow-sm'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-semibold">{term} Term</div>
                      <div className="font-mono text-[11px] text-emerald-400 mt-1">
                        ₱{installmentPerTerm.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Payment Amount to Transact (₱ PHP)
                  </label>
                  <input
                    type="number"
                    min="500"
                    max={totalSemesterAssessment}
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(Number(e.target.value))}
                    className="w-full px-3.5 py-2 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Process Cashier Transaction & Print Receipt</span>
                </button>
              </div>
            </form>
          ) : (
            /* Official Receipt View */
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-700 space-y-4 font-mono text-xs text-slate-200 relative overflow-hidden">
                <div className="text-center space-y-1 pb-4 border-b border-dashed border-slate-700">
                  <div className="font-bold text-white text-base font-sans">TORRES CAPITOL COLLEGE</div>
                  <div className="text-[11px] text-slate-400 font-sans">Countryville Campus · Registrar & Cashier Office</div>
                  <div className="text-[11px] text-emerald-400">OFFICIAL STUDENT BILLING RECEIPT</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div>OR Number: <span className="text-white font-bold">{receiptNumber}</span></div>
                  <div className="text-right">Date: <span>{new Date().toLocaleDateString()}</span></div>
                  <div>Student: <span className="text-white">Joshua Kim S. Entrina</span></div>
                  <div className="text-right">ID: <span className="text-white">TCC-2023-0142</span></div>
                  <div>Program: <span className="text-white">BSIT (Section 2A)</span></div>
                  <div className="text-right">Term Settle: <span className="text-emerald-400 font-bold">{paymentTerm}</span></div>
                </div>

                <div className="py-3 border-y border-dashed border-slate-700 space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span>Enrolled Units:</span>
                    <span>{enrolledUnits} Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Assessed Term Obligation:</span>
                    <span>₱{installmentPerTerm.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-400 text-xs">
                    <span>Amount Tendered / Paid:</span>
                    <span>₱{paymentAmount.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Remaining Balance:</span>
                    <span>₱{Math.max(0, totalSemesterAssessment - paymentAmount).toLocaleString()}.00</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-[10px] text-slate-400">
                  <span>Cashier: J. Entrina (Student Capstone Simulation)</span>
                  <span className="text-emerald-400 font-bold">STATUS: VERIFIED & POSTED</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsReceiptIssued(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  New Transaction
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
