import React from 'react';
import { Wifi, ArrowUpRight } from 'lucide-react';
import type { ProfileConfig } from '../types';

interface FooterProps {
  footer: ProfileConfig['footer'];
  onOpenExchange?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ footer, onOpenExchange }) => {
  return (
    <footer className="w-full pt-6 pb-12 px-4 mt-auto text-center border-t border-theme-border-subtle">
      <div className="max-w-md mx-auto flex flex-col items-center gap-3">
        {/* Subtle Contactless / NFC indicator */}
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-theme-text-muted">
          <Wifi className="w-3 h-3 rotate-90 text-theme-text-secondary" />
          <span>{footer.nfcHint || 'NFC Contactless Card'}</span>
        </div>

        {/* Exchange Contact Action */}
        {footer.showExchangeContact && onOpenExchange && (
          <button
            onClick={onOpenExchange}
            className="inline-flex items-center gap-1 text-xs font-medium text-theme-text-secondary hover:text-theme-text-primary transition-colors py-1"
          >
            <span>Exchange your contact</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </button>
        )}

        {/* Copyright notice */}
        <p className="text-[11px] text-theme-text-muted font-mono">
          © {footer.copyrightYear || new Date().getFullYear()} {footer.text}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
