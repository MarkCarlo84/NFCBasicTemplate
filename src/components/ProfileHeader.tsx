import React from 'react';
import { CheckCircle2, MapPin, Share2, Sun, Moon } from 'lucide-react';
import type { ProfileConfig } from '../types';

interface ProfileHeaderProps {
  config: ProfileConfig;
  onOpenQr?: () => void;
  onShare: () => void;
  isDark?: boolean;
  onToggleDarkLight?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  config,
  onShare,
  isDark,
  onToggleDarkLight,
}) => {
  return (
    <header className="relative flex flex-col items-center text-center pt-8 pb-6 px-4">
      {/* Top Quick Actions (Dark/Light Mode & Share) */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        {onToggleDarkLight && (
          <button
            onClick={onToggleDarkLight}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full bg-theme-surface-subtle text-theme-text-secondary hover:text-theme-text-primary border border-theme-border transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>
        )}
        <button
          onClick={onShare}
          title="Share profile"
          aria-label="Share profile"
          className="p-2 rounded-full bg-theme-surface-subtle text-theme-text-secondary hover:text-theme-text-primary border border-theme-border transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* Profile Image & Avatar */}
      <div className="relative mb-5 group">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-soft-md border border-theme-border bg-theme-surface-subtle flex items-center justify-center">
          {config.avatarUrl ? (
            <img
              src={config.avatarUrl}
              alt={config.avatarAlt || config.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="eager"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center font-serif text-3xl font-medium text-theme-text-primary bg-theme-surface-subtle border border-theme-border/50">
              <span>
                {config.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Verified Badge Overlay */}
        {config.badge?.verified && (
          <span
            className="absolute -bottom-1 -right-1 p-1 rounded-full bg-theme-surface text-emerald-600 shadow-sm border border-theme-border"
            title="Verified Profile"
          >
            <CheckCircle2 className="w-4 h-4 fill-emerald-600 text-theme-surface" />
          </span>
        )}
      </div>

      {/* Optional Status / Professional Badge */}
      {config.badge?.text && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-theme-surface-subtle text-theme-text-secondary border border-theme-border mb-3">
          {config.badge.pulseDot && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          )}
          <span>{config.badge.text}</span>
        </div>
      )}

      {/* Full Name */}
      <h1 className="text-2xl sm:text-3xl font-serif tracking-tight font-medium text-theme-text-primary mb-1">
        {config.name}
      </h1>

      {/* Professional Title & Category */}
      <p className="text-sm sm:text-base font-medium text-theme-text-secondary tracking-normal mb-1">
        {config.title}
      </p>

      {config.companyOrCategory && (
        <p className="text-xs sm:text-sm text-theme-text-muted tracking-wide mb-3 font-mono">
          {config.companyOrCategory}
        </p>
      )}

      {/* Short Personal / Business Bio */}
      {config.shortBio && (
        <p className="text-xs sm:text-sm leading-relaxed text-theme-text-secondary max-w-sm mx-auto mb-3 px-2">
          {config.shortBio}
        </p>
      )}

      {/* Optional Location */}
      {config.location && (
        <div className="inline-flex items-center gap-1.5 text-xs text-theme-text-muted">
          <MapPin className="w-3.5 h-3.5" />
          <span>{config.location}</span>
        </div>
      )}
    </header>
  );
};
