import React, { useState } from 'react';
import { Palette, ChevronUp, ChevronDown, Check } from 'lucide-react';
import type { ThemeId } from '../types';

interface ThemeSwitcherProps {
  currentTheme: ThemeId;
  onSelectTheme: (theme: ThemeId) => void;
}

interface ThemeOption {
  id: ThemeId;
  name: string;
  dotColor: string;
  borderColor: string;
}

const themes: ThemeOption[] = [
  {
    id: 'minimal-white',
    name: 'Minimal White',
    dotColor: '#ffffff',
    borderColor: '#d1d5db',
  },
  {
    id: 'elegant-black',
    name: 'Elegant Black',
    dotColor: '#18181b',
    borderColor: '#3f3f46',
  },
  {
    id: 'warm-beige',
    name: 'Warm Beige',
    dotColor: '#f2eee6',
    borderColor: '#c7beaf',
  },
  {
    id: 'soft-sage',
    name: 'Soft Sage',
    dotColor: '#e3ebe4',
    borderColor: '#9fb4a2',
  },
  {
    id: 'custom-brand',
    name: 'Custom Brand',
    dotColor: '#0ea5e9',
    borderColor: '#0284c7',
  },
];

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  currentTheme,
  onSelectTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-2 p-2 rounded-2xl bg-theme-surface/95 backdrop-blur-md border border-theme-border shadow-soft-lg flex flex-col gap-1 w-44 animate-slide-up text-left">
          <div className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-wider text-theme-text-muted border-b border-theme-border-subtle">
            Select Aesthetic
          </div>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                onSelectTheme(t.id);
                setIsOpen(false);
              }}
              className={`flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                currentTheme === t.id
                  ? 'bg-theme-surface-subtle text-theme-text-primary'
                  : 'text-theme-text-secondary hover:text-theme-text-primary hover:bg-theme-surface-subtle/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5 rounded-full border shadow-sm shrink-0"
                  style={{
                    backgroundColor: t.dotColor,
                    borderColor: t.borderColor,
                  }}
                />
                <span className="truncate">{t.name}</span>
              </div>
              {currentTheme === t.id && (
                <Check className="w-3.5 h-3.5 text-theme-accent shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-theme-surface/90 backdrop-blur-md border border-theme-border text-theme-text-primary shadow-soft-md hover:scale-105 active:scale-95 transition-all text-xs font-medium"
        title="Toggle Aesthetic Themes"
        aria-label="Toggle Aesthetic Themes"
      >
        <Palette className="w-3.5 h-3.5 text-theme-text-secondary" />
        <span className="hidden sm:inline">Theme</span>
        {isOpen ? (
          <ChevronDown className="w-3 h-3 text-theme-text-muted" />
        ) : (
          <ChevronUp className="w-3 h-3 text-theme-text-muted" />
        )}
      </button>
    </div>
  );
};
