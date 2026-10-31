import React from 'react';
import { ExternalLink, ChevronRight, Share2 } from 'lucide-react';
import type { SocialLink, SocialPlatform } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
  style?: 'pills' | 'cards' | 'minimal';
}

// Clean, high-fidelity SVGs for all platforms
const PlatformIcon: React.FC<{ platform: SocialPlatform; className?: string }> = ({
  platform,
  className = 'w-4 h-4',
}) => {
  switch (platform) {
    case 'instagram':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );

    case 'github':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );

    case 'youtube':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      );

    case 'facebook':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );

    case 'twitter':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case 'tiktok':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.49v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.86-.09z" />
        </svg>
      );

    case 'threads':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 11.5c0-2.5-1.5-4-4-4s-4.5 1.8-4.5 4.5 2 4.5 4.5 4.5c1.8 0 3-.8 3.5-1.8" />
          <path d="M12 9v6" />
        </svg>
      );

    case 'dribbble':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
          <path d="M8.5 2.5c2.4 4.5 4.8 9.5 5.5 19" />
        </svg>
      );

    case 'behance':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.971 3-3.659 0-5.755-2.756-5.755-6 0-3.418 2.372-6 5.679-6 3.633 0 5.234 2.766 5.086 5.5h-8.081c.075 1.704 1.282 3.5 3.321 3.5 1.543 0 2.479-.785 2.915-1.5H23.726zm-7.61-4.5h5.45c-.078-1.516-1.047-3-2.716-3-1.637 0-2.618 1.484-2.734 3zM2 4h6.5c3.5 0 5.5 1.5 5.5 4 0 1.5-.7 2.8-2 3.4 1.8.6 2.5 2.1 2.5 3.8 0 2.8-2.2 4.8-6 4.8H2V4zm3 6h3.2c1.2 0 2.3-.5 2.3-1.8 0-1.2-1-1.7-2.3-1.7H5V10zm0 7.5h3.5c1.4 0 2.5-.6 2.5-2 0-1.4-1.1-2-2.5-2H5v4z" />
        </svg>
      );

    case 'calendly':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
      );

    case 'whatsapp':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      );

    case 'telegram':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      );

    case 'spotify':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 11.5c3.5-1 7.5-.5 10 1" />
          <path d="M9 14.5c2.5-.5 5.5-.2 7.5 1" />
          <path d="M7 8.5c4.5-1.5 9.5-1 13 1" />
        </svg>
      );

    case 'substack':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      );

    default:
      return <Share2 className={className} />;
  }
};

const getPlatformTitle = (platform: SocialPlatform): string => {
  switch (platform) {
    case 'twitter':
      return 'X / Twitter';
    case 'linkedin':
      return 'LinkedIn';
    case 'youtube':
      return 'YouTube';
    case 'whatsapp':
      return 'WhatsApp';
    default:
      return platform.charAt(0).toUpperCase() + platform.slice(1);
  }
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  style = 'pills',
}) => {
  if (!links || links.length === 0) return null;

  return (
    <section className="w-full px-4 mb-6">
      <div className="max-w-md mx-auto">
        {/* Style A: Pill Buttons */}
        {style === 'pills' && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {links.map((link) => (
              <a
                key={link.platform + link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border hover:scale-[1.02] active:scale-[0.98] ${
                  link.highlight
                    ? 'bg-theme-accent text-theme-accent-fg border-theme-border shadow-soft-sm'
                    : 'bg-theme-surface-subtle text-theme-text-primary border-theme-border hover:border-theme-accent hover:text-theme-accent'
                }`}
                title={getPlatformTitle(link.platform)}
              >
                <PlatformIcon
                  platform={link.platform}
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110"
                />
                <span>{link.label || getPlatformTitle(link.platform)}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        )}

        {/* Style B: Full-width Cards */}
        {style === 'cards' && (
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.platform + link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-theme-surface-subtle border border-theme-border hover:border-theme-accent text-theme-text-primary transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-theme-surface border border-theme-border text-theme-text-secondary group-hover:text-theme-text-primary transition-colors">
                    <PlatformIcon platform={link.platform} className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold tracking-tight">
                      {getPlatformTitle(link.platform)}
                    </span>
                    {link.label && (
                      <span className="text-[11px] text-theme-text-muted">
                        {link.label}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-theme-text-muted group-hover:text-theme-text-primary group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>
        )}

        {/* Style C: Minimal Icon Row */}
        {style === 'minimal' && (
          <div className="flex items-center justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.platform + link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-theme-surface-subtle border border-theme-border text-theme-text-secondary hover:text-theme-text-primary hover:border-theme-accent transition-all duration-200 hover:scale-110 active:scale-95 shadow-soft-sm"
                title={link.label || getPlatformTitle(link.platform)}
              >
                <PlatformIcon platform={link.platform} className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
