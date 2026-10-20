import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Copy, Check, Download, Terminal, Code2, Sparkles, FileCode, CheckCircle2 } from 'lucide-react';
import { PYTHON_PRESETS } from '../data/portfolioData';
import { PythonCodePreset } from '../types';

export const PythonSandbox: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<PythonCodePreset>(PYTHON_PRESETS[0]);
  const [currentCode, setCurrentCode] = useState<string>(PYTHON_PRESETS[0].code);
  const [terminalOutput, setTerminalOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [executionCount, setExecutionCount] = useState<number>(1);

  // When preset changes, load code and run initially
  useEffect(() => {
    setCurrentCode(selectedPreset.code);
    runCode(selectedPreset.code, selectedPreset);
  }, [selectedPreset.id]);

  const runCode = (codeToRun: string, preset = selectedPreset) => {
    setIsRunning(true);
    setTerminalOutput('>>> Compiling bytecode and initiating Python 3.12 runtime...\n');

    setTimeout(() => {
      const output = preset.outputSimulator(codeToRun);
      setTerminalOutput(output);
      setIsRunning(false);
      setExecutionCount((prev) => prev + 1);
    }, 280);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleReset = () => {
    setCurrentCode(selectedPreset.code);
    runCode(selectedPreset.code, selectedPreset);
  };

  const handleDownload = () => {
    const blob = new Blob([currentCode], { type: 'text/x-python' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = selectedPreset.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="python-lab" className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Python Laboratory & Interactive CLI</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Josuwapy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Real Python scripts powering real campus solutions.
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Experience the Python algorithms and backend logic developed during my BSIT 2nd-year studies at Torres Capitol College. Choose a preset below or edit live in the scratchpad.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Python 3.12 (Josuwapy Runtime)</span>
          </div>
        </div>

        {/* Script Selection Segmented Tabs (Smartphone touch scroll friendly) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {PYTHON_PRESETS.map((preset) => {
            const isActive = selectedPreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setSelectedPreset(preset)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-slate-900 text-emerald-400 border-emerald-500/40 shadow-sm'
                    : 'bg-slate-900/40 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
                }`}
              >
                <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                <span>{preset.fileName}</span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">({preset.name})</span>
              </button>
            );
          })}
        </div>

        {/* Script Description Banner */}
        <div className="mb-4 text-xs text-slate-300 bg-slate-900/60 border border-slate-800 rounded-lg p-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald-400 font-mono">{selectedPreset.fileName}:</span>
            <span className="text-slate-300">{selectedPreset.description}</span>
          </div>
          <span className="text-slate-500 text-[11px] hidden md:inline shrink-0">
            Author: Joshua Kim S. Entrina (BSIT 2A)
          </span>
        </div>

        {/* Split Code Editor + Terminal View (Responsive for Windows & Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Code Editor */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
            {/* Window Top Bar (Windows / Mac style aesthetic) */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2 font-medium">
                  {selectedPreset.fileName}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  title="Copy Python Code"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                >
                  {hasCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleReset}
                  title="Reset to Original Code"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={handleDownload}
                  title="Download .py Script"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                >
                  <Download className="w-4 h-4" />
                </button>

                <button
                  onClick={() => runCode(currentCode)}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 rounded-md transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? 'Executing...' : 'Run Script'}</span>
                </button>
              </div>
            </div>

            {/* Code Textarea / Viewer */}
            <div className="relative flex-1 bg-slate-950 min-h-[360px] sm:min-h-[420px] max-h-[520px] overflow-y-auto font-mono text-xs p-4 text-slate-200">
              <textarea
                value={currentCode}
                onChange={(e) => setCurrentCode(e.target.value)}
                spellCheck={false}
                className="w-full h-full min-h-[380px] bg-transparent text-slate-200 font-mono text-xs resize-none outline-none focus:ring-0 leading-relaxed tracking-wide"
                style={{ tabSize: 4 }}
              />
            </div>

            {/* Bottom Status bar */}
            <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Lines: {currentCode.split('\n').length}</span>
              <span>UTF-8 · Python 3.x · Torres Capitol College</span>
            </div>
          </div>

          {/* Right Column: Execution Terminal / Console Output */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-semibold">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Standard Output (stdout)</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                Run #{executionCount}
              </span>
            </div>

            {/* Terminal Screen */}
            <div className="flex-1 bg-slate-950 p-4 font-mono text-xs overflow-y-auto min-h-[360px] sm:min-h-[420px] max-h-[520px] text-slate-300 whitespace-pre-wrap leading-relaxed">
              {isRunning ? (
                <div className="flex items-center gap-3 text-emerald-400 py-4">
                  <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                  <span>Executing Python script in Josuwapy runtime environment...</span>
                </div>
              ) : (
                <div>
                  <div className="text-slate-500 text-[11px] mb-3 pb-2 border-b border-slate-900 flex items-center justify-between">
                    <span>C:\Users\JoshuaEntrina\Projects\TorresCapitolCollege&gt;</span>
                    <span className="text-emerald-500/80">Exit: 0</span>
                  </div>
                  <pre className="text-slate-200 font-mono text-xs">{terminalOutput}</pre>
                </div>
              )}
            </div>

            {/* Quick Command Bar */}
            <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between gap-2">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px]">Ready for next execution</span>
              </div>

              <button
                onClick={() => runCode(currentCode)}
                className="px-3 py-1 text-xs font-mono text-emerald-400 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 rounded transition-colors"
              >
                Re-run
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
