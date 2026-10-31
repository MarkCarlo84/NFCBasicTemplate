import React, { useState } from 'react';
import { X, Copy, Check, Share2, Radio } from 'lucide-react';
import { copyToClipboard, shareProfile } from '../utils/share';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  name: string;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({
  isOpen,
  onClose,
  title,
  name,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://example.com';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=15&format=svg&data=${encodeURIComponent(
    currentUrl
  )}`;

  const handleCopy = async () => {
    const ok = await copyToClipboard(currentUrl);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    await shareProfile(
      `${name} — Digital Business Card`,
      `Connect with ${name} (${title}) via NFC digital card:`,
      currentUrl
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-sm w-full bg-theme-surface rounded-2xl p-6 border border-theme-border shadow-2xl text-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-theme-text-muted hover:text-theme-text-primary hover:bg-theme-surface-subtle transition-colors"
          aria-label="Close QR Code dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-theme-surface-subtle border border-theme-border text-[11px] font-mono text-theme-text-secondary mb-3">
          <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
          <span>Instant Scan</span>
        </div>

        <h3 className="text-lg font-serif font-medium text-theme-text-primary mb-1">
          {name}
        </h3>
        <p className="text-xs text-theme-text-muted mb-5">
          Scan with any smartphone camera to open this digital card
        </p>

        {/* QR Code Canvas / Image */}
        <div className="p-3 bg-white rounded-xl inline-block shadow-inner border border-theme-border mb-4">
          <img
            src={qrUrl}
            alt="NFC Card QR Code"
            className="w-48 h-48 sm:w-52 sm:h-52 object-contain"
            loading="eager"
          />
        </div>

        <p className="text-[11px] text-theme-text-muted font-mono mb-5 truncate px-2">
          {currentUrl}
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-theme-surface-subtle border border-theme-border text-xs font-medium text-theme-text-primary hover:border-theme-accent transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-theme-accent text-theme-accent-fg text-xs font-medium hover:opacity-90 transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Card</span>
          </button>
        </div>
      </div>
    </div>
  );
};
