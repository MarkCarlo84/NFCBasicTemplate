import React from 'react';
import type { ProfileConfig } from '../types';

interface AboutSectionProps {
  about?: ProfileConfig['about'];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  if (!about || !about.paragraphs || about.paragraphs.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-4 mb-6">
      <div className="max-w-md mx-auto p-5 sm:p-6 rounded-2xl bg-theme-surface border border-theme-border shadow-soft-sm text-left">
        {about.heading && (
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-xs uppercase tracking-widest font-mono font-medium text-theme-text-muted">
              {about.heading}
            </h2>
            <div className="h-px flex-1 bg-theme-border-subtle" />
          </div>
        )}

        <div className="space-y-3 text-xs sm:text-sm text-theme-text-secondary leading-relaxed font-sans">
          {about.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {about.quote && (
          <blockquote className="mt-4 pt-4 border-t border-theme-border-subtle italic font-serif text-xs sm:text-sm text-theme-text-primary leading-relaxed opacity-90">
            {about.quote}
          </blockquote>
        )}
      </div>
    </section>
  );
};
