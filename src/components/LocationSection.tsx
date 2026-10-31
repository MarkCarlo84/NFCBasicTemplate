import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import type { ProfileConfig } from '../types';

interface LocationSectionProps {
  locationInfo?: ProfileConfig['locationInfo'];
}

export const LocationSection: React.FC<LocationSectionProps> = ({ locationInfo }) => {
  if (!locationInfo || !locationInfo.address) {
    return null;
  }

  return (
    <section className="w-full px-4 mb-6">
      <div className="max-w-md mx-auto text-left">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3 px-1">
          <MapPin className="w-3.5 h-3.5 text-theme-text-muted" />
          <h2 className="text-xs uppercase tracking-widest font-mono font-medium text-theme-text-muted">
            Location
          </h2>
        </div>

        {/* Location Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-theme-surface border border-theme-border shadow-soft-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-theme-text-primary tracking-tight">
              {locationInfo.address}
            </p>
            <p className="text-xs text-theme-text-secondary">
              {locationInfo.cityStateCountry}
            </p>
          </div>

          <a
            href={locationInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-theme-surface-subtle text-theme-text-primary border border-theme-border text-xs font-medium hover:border-theme-accent hover:text-theme-accent transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open Maps</span>
            <ExternalLink className="w-3 h-3 opacity-50" />
          </a>
        </div>
      </div>
    </section>
  );
};
