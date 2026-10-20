import React, { useState } from 'react';
import { Mail, Github, Facebook, Instagram, Send, Copy, Check, ExternalLink, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry / Collaboration',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email.address);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyGithub = () => {
    navigator.clipboard.writeText('Josuwapy');
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending and open user's mail client as well if preferred
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Let's build something remarkable together.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Whether you have a Python project, academic inquiry, or tech internship opportunity, my inbox and direct channels are always open.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Gmail</div>
                    <div className="text-sm font-semibold text-white">{PERSONAL_INFO.contacts.email.address}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Response time: Usually within 24h</span>
                <a
                  href={`mailto:${PERSONAL_INFO.contacts.email.address}`}
                  className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
                >
                  Compose Email <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">GitHub Repository Profile</div>
                    <div className="text-sm font-semibold text-white font-mono">@{PERSONAL_INFO.contacts.github.username}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyGithub}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy GitHub handle"
                >
                  {copiedGithub ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Repositories: Python, Web & Coursework</span>
                <a
                  href={PERSONAL_INFO.contacts.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
                >
                  Visit Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Network Cards: Facebook & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Facebook */}
              <a
                href={PERSONAL_INFO.contacts.facebook.url}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors group space-y-2 block"
              >
                <div className="flex items-center justify-between">
                  <Facebook className="w-5 h-5 text-blue-400" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Facebook</div>
                  <div className="text-xs font-semibold text-white mt-0.5">{PERSONAL_INFO.contacts.facebook.name}</div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={PERSONAL_INFO.contacts.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 transition-colors group space-y-2 block"
              >
                <div className="flex items-center justify-between">
                  <Instagram className="w-5 h-5 text-pink-400" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-pink-400 transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Instagram</div>
                  <div className="text-xs font-semibold text-white mt-0.5 font-mono">@{PERSONAL_INFO.contacts.instagram.handle}</div>
                </div>
              </a>
            </div>

            {/* Academic Alma Mater Link */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Torres Capitol College (BSIT Section 2A)</span>
              </div>
              <a
                href={PERSONAL_INFO.schoolWebsite}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
              >
                philcountryville.com <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Message Box */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">Send a Direct Message</h3>
                  <p className="text-xs text-slate-400">
                    Have a question about my Student Feedback System, Python projects, or potential tech opportunities? Send a message directly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maria Santos"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maria@example.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, inquiry, or feedback here..."
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors leading-relaxed resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Sent directly to joshuaentrina9@gmail.com
                    </span>

                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Thank you, {formData.name}!</h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto">
                      Your message has been received. Joshua Kim S. Entrina will review and respond to <span className="font-mono text-emerald-400">{formData.email}</span> shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
                    }}
                    className="mt-2 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
