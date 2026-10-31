import React from 'react';
import { Check, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-theme-accent text-theme-accent-fg shadow-soft-lg border border-theme-border text-xs sm:text-sm font-medium tracking-wide animate-slide-up transition-all duration-300 pointer-events-none"
    >
      {type === 'success' ? (
        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/20 text-current">
          <Check className="w-3 h-3 stroke-[2.5]" />
        </span>
      ) : (
        <Info className="w-3.5 h-3.5 stroke-[2]" />
      )}
      <span>{message}</span>
    </div>
  );
};
