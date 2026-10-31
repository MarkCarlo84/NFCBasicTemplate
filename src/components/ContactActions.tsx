import React from 'react';
import {
  UserPlus,
  Phone,
  Mail,
  MessageSquare,
  Globe,
  Copy,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { ProfileConfig } from '../types';
import { generateVCard } from '../utils/vcard';
import { copyToClipboard } from '../utils/share';

interface ContactActionsProps {
  config: ProfileConfig;
  onShowToast: (message: string) => void;
}

export const ContactActions: React.FC<ContactActionsProps> = ({
  config,
  onShowToast,
}) => {
  const { contact } = config;

  // Primary action: Save Contact to phone address book
  const handleSaveContact = () => {
    try {
      generateVCard(config);
      onShowToast('Contact downloaded! Open to save.');

      // Subtle, elegant confetti micro-celebration
      try {
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#111827', '#e5e7eb', '#9ca3af'],
          ticks: 120,
          gravity: 1.2,
          scalar: 0.8,
        });
      } catch {
        // silently ignore if canvas not supported
      }
    } catch (err) {
      console.error('Error generating vCard', err);
      onShowToast('Could not generate contact card.');
    }
  };

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (contact.email) {
      const ok = await copyToClipboard(contact.email);
      if (ok) onShowToast('Email copied to clipboard!');
    }
  };

  const handleCopyPhone = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (contact.phone) {
      const ok = await copyToClipboard(contact.phone);
      if (ok) onShowToast('Phone number copied to clipboard!');
    }
  };

  const hasPhone = Boolean(contact.phone);
  const hasEmail = Boolean(contact.email);
  const hasMessage = Boolean(contact.sms || contact.whatsapp || contact.phone);
  const hasWebsite = Boolean(contact.website);

  const messageUrl = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`
    : contact.sms
    ? `sms:${contact.sms}`
    : `sms:${contact.phone}`;

  return (
    <section className="w-full px-4 mb-6">
      <div className="flex flex-col gap-3 max-w-md mx-auto">
        {/* Primary CTA: Save Contact */}
        <button
          onClick={handleSaveContact}
          className="group relative w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-theme-accent text-theme-accent-fg font-medium text-sm tracking-wide shadow-soft-sm hover:shadow-soft-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] border border-theme-border"
          aria-label="Save contact to phone address book"
        >
          <UserPlus className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:scale-110" />
          <span>Save Contact</span>
        </button>

        {/* Secondary Contact Actions Row */}
        {(hasPhone || hasEmail || hasMessage || hasWebsite) && (
          <div className="grid grid-cols-4 gap-2 w-full pt-1">
            {/* Call */}
            {hasPhone && (
              <div className="relative group flex flex-col">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-theme-surface-subtle border border-theme-border text-theme-text-primary hover:text-theme-accent hover:border-theme-accent transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  title={`Call ${contact.phone}`}
                >
                  <Phone className="w-4 h-4 mb-1 text-theme-text-secondary group-hover:text-theme-text-primary transition-colors" />
                  <span className="text-[11px] font-medium tracking-tight">Call</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  title="Copy phone"
                  className="absolute -top-1 -right-1 p-1 rounded-full bg-theme-surface border border-theme-border text-theme-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Copy phone"
                >
                  <Copy className="w-2.5 h-2.5" />
                </button>
              </div>
            )}

            {/* Email */}
            {hasEmail && (
              <div className="relative group flex flex-col">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-theme-surface-subtle border border-theme-border text-theme-text-primary hover:text-theme-accent hover:border-theme-accent transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  title={`Email ${contact.email}`}
                >
                  <Mail className="w-4 h-4 mb-1 text-theme-text-secondary group-hover:text-theme-text-primary transition-colors" />
                  <span className="text-[11px] font-medium tracking-tight">Email</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email"
                  className="absolute -top-1 -right-1 p-1 rounded-full bg-theme-surface border border-theme-border text-theme-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Copy email"
                >
                  <Copy className="w-2.5 h-2.5" />
                </button>
              </div>
            )}

            {/* Message / SMS / WhatsApp */}
            {hasMessage && (
              <a
                href={messageUrl}
                target={contact.whatsapp ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-theme-surface-subtle border border-theme-border text-theme-text-primary hover:text-theme-accent hover:border-theme-accent transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                title={contact.whatsapp ? 'Message on WhatsApp' : 'Send SMS'}
              >
                <MessageSquare className="w-4 h-4 mb-1 text-theme-text-secondary group-hover:text-theme-text-primary transition-colors" />
                <span className="text-[11px] font-medium tracking-tight">
                  {contact.whatsapp ? 'WhatsApp' : 'Message'}
                </span>
              </a>
            )}

            {/* Website */}
            {hasWebsite && (
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-theme-surface-subtle border border-theme-border text-theme-text-primary hover:text-theme-accent hover:border-theme-accent transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                title={contact.websiteLabel || 'Visit Website'}
              >
                <Globe className="w-4 h-4 mb-1 text-theme-text-secondary group-hover:text-theme-text-primary transition-colors" />
                <span className="text-[11px] font-medium tracking-tight">Website</span>
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
