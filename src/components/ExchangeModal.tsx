import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import type { ProfileConfig } from '../types';

interface ExchangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProfileConfig;
  onShowToast: (msg: string) => void;
}

export const ExchangeModal: React.FC<ExchangeModalProps> = ({
  isOpen,
  onClose,
  config,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const recipientEmail = config.contact.email || 'hello@example.com';
    const subject = encodeURIComponent(`Nice meeting you! — Contact from ${name}`);
    const body = encodeURIComponent(
      `Hi ${config.name},\n\nGreat connecting via your NFC card! Here are my contact details:\n\nName: ${name}\nContact: ${emailOrPhone}\nNote: ${note}\n\nLooking forward to speaking soon!`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    onShowToast('Opening email to send your contact info...');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-sm w-full bg-theme-surface rounded-2xl p-6 border border-theme-border shadow-2xl text-left animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-theme-text-muted hover:text-theme-text-primary hover:bg-theme-surface-subtle transition-colors"
          aria-label="Close exchange contact dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-base font-semibold text-theme-text-primary mb-1">
          Share your details with {config.name}
        </h3>
        <p className="text-xs text-theme-text-muted mb-4 leading-relaxed">
          Send your name and contact details so {config.name} can follow up with you directly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="block text-[11px] font-mono text-theme-text-muted mb-1 uppercase tracking-wider">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Morgan"
              className="w-full px-3 py-2 rounded-xl bg-theme-surface-subtle border border-theme-border text-xs text-theme-text-primary placeholder:text-theme-text-muted/60 focus:outline-none focus:border-theme-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono text-theme-text-muted mb-1 uppercase tracking-wider">
              Email or Phone *
            </label>
            <input
              type="text"
              required
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="alex@company.com or +1 555-0192"
              className="w-full px-3 py-2 rounded-xl bg-theme-surface-subtle border border-theme-border text-xs text-theme-text-primary placeholder:text-theme-text-muted/60 focus:outline-none focus:border-theme-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono text-theme-text-muted mb-1 uppercase tracking-wider">
              Note (Optional)
            </label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Met at design conference, coffee next week..."
              className="w-full px-3 py-2 rounded-xl bg-theme-surface-subtle border border-theme-border text-xs text-theme-text-primary placeholder:text-theme-text-muted/60 focus:outline-none focus:border-theme-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-theme-accent text-theme-accent-fg text-xs font-medium hover:opacity-95 transition-opacity active:scale-[0.99]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Details</span>
          </button>
        </form>
      </div>
    </div>
  );
};
