import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import type { ProfileConfig } from '../types';

interface ServicesSectionProps {
  services?: ProfileConfig['services'];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  if (!services || !services.items || services.items.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-4 mb-6">
      <div className="max-w-md mx-auto text-left">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-theme-text-muted" />
            <h2 className="text-xs uppercase tracking-widest font-mono font-medium text-theme-text-muted">
              {services.heading || 'Services & Offerings'}
            </h2>
          </div>
          {services.subheading && (
            <span className="text-[11px] text-theme-text-muted hidden sm:inline">
              {services.subheading}
            </span>
          )}
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-3">
          {services.items.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-xl bg-theme-surface border border-theme-border shadow-soft-sm hover:border-theme-accent transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <h3 className="text-sm font-semibold text-theme-text-primary tracking-tight">
                  {item.title}
                </h3>
                {item.priceOrTag && (
                  <span className="shrink-0 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-theme-surface-subtle border border-theme-border text-theme-text-secondary">
                    {item.priceOrTag}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed mb-3">
                  {item.description}
                </p>
              )}

              {item.features && item.features.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-theme-border-subtle">
                  {item.features.map((feat, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] text-theme-text-muted font-mono"
                    >
                      <Check className="w-2.5 h-2.5 text-emerald-500" />
                      {feat}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
