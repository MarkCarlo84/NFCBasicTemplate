import React, { useState, useEffect, useMemo } from 'react';
import { profileConfig } from './config/profile';
import type { ThemeId } from './types';
import { ProfileHeader } from './components/ProfileHeader';
import { ContactActions } from './components/ContactActions';
import { SocialLinks } from './components/SocialLinks';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { QrCodeModal } from './components/QrCodeModal';
import { ExchangeModal } from './components/ExchangeModal';
import { shareProfile, copyToClipboard } from './utils/share';

export const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nfc_theme_id') as ThemeId | null;
      if (saved) return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'elegant-black';
      }
    }
    return profileConfig.theme.activeTheme || 'elegant-black';
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);

  const isDark = currentTheme === 'elegant-black';

  const handleToggleDarkLight = () => {
    const nextTheme: ThemeId = isDark ? 'minimal-white' : 'elegant-black';
    setCurrentTheme(nextTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nfc_theme_id', nextTheme);
    }
    showToast(isDark ? 'Switched to Light mode' : 'Switched to Dark mode');
  };

  const handleSelectTheme = (t: ThemeId) => {
    setCurrentTheme(t);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nfc_theme_id', t);
    }
  };

  // Sync html dark class with active theme
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDark]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2800);
  };

  // Sync mobile browser status bar color with active theme
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      let color = '#fafafa';
      if (currentTheme === 'elegant-black') color = '#09090b';
      else if (currentTheme === 'warm-beige') color = '#f5f2ec';
      else if (currentTheme === 'soft-sage') color = '#edf2ee';
      else if (currentTheme === 'custom-brand' && profileConfig.theme.customColors) {
        color = profileConfig.theme.customColors.background;
      }
      metaThemeColor.setAttribute('content', color);
    }
  }, [currentTheme]);

  // Compute CSS custom properties if 'custom-brand' is active
  const customBrandStyles = useMemo(() => {
    if (currentTheme !== 'custom-brand' || !profileConfig.theme.customColors) {
      return {};
    }
    const c = profileConfig.theme.customColors;
    return {
      '--theme-bg': c.background,
      '--theme-surface': c.surface,
      '--theme-surface-subtle': c.surfaceSubtle,
      '--theme-text-primary': c.textPrimary,
      '--theme-text-secondary': c.textSecondary,
      '--theme-text-muted': c.textMuted,
      '--theme-border': c.border,
      '--theme-border-subtle': c.borderSubtle,
      '--theme-accent': c.accent,
      '--theme-accent-fg': c.accentForeground,
      '--theme-accent-hover': c.accentHover,
      '--theme-shadow': c.shadow || 'rgba(0,0,0,0.2)',
    } as React.CSSProperties;
  }, [currentTheme]);

  const handleShare = async () => {
    const shareUrl =
      typeof window !== 'undefined'
        ? window.location.href
        : (profileConfig.contact.website || 'https://example.com');
    const shared = await shareProfile(
      `${profileConfig.name} — Digital Card`,
      `Connect with ${profileConfig.name} (${profileConfig.title})`,
      shareUrl
    );

    if (!shared) {
      const ok = await copyToClipboard(shareUrl);
      if (ok) {
        showToast('Profile link copied to clipboard!');
      } else {
        setIsQrOpen(true);
      }
    }
  };

  return (
    <div
      className={`theme-${currentTheme} min-h-screen w-full bg-theme-bg text-theme-text-primary transition-colors duration-300 flex flex-col items-center justify-start`}
      style={customBrandStyles}
    >
      {/* Centered Mobile-First Container */}
      <main className="w-full max-w-md sm:my-8 sm:rounded-3xl sm:border sm:border-theme-border sm:shadow-soft-lg bg-theme-bg sm:bg-theme-surface/40 backdrop-blur-sm overflow-hidden flex flex-col transition-all duration-300">
        {/* Profile Header */}
        <ProfileHeader
          config={profileConfig}
          onShare={handleShare}
          isDark={isDark}
          onToggleDarkLight={handleToggleDarkLight}
        />

        {/* Contact Actions (Save Contact, Call, Email, Message, Website) */}
        <ContactActions config={profileConfig} onShowToast={showToast} />

        {/* Social Links */}
        <SocialLinks
          links={profileConfig.socialLinks}
          style={profileConfig.socialStyle || 'pills'}
        />

        {/* Optional: About Me / Business */}
        <AboutSection about={profileConfig.about} />

        {/* Optional: Services or Highlights */}
        <ServicesSection services={profileConfig.services} />

        {/* Optional: Gallery or Portfolio */}
        <GallerySection gallery={profileConfig.gallery} />

        {/* Optional: Location */}
        <LocationSection locationInfo={profileConfig.locationInfo} />

        {/* Footer */}
        <Footer
          footer={profileConfig.footer}
          onOpenExchange={() => setIsExchangeOpen(true)}
        />
      </main>

      {/* Interactive Theme Switcher Preview */}
      {profileConfig.theme.allowLivePreviewSwitch && (
        <ThemeSwitcher
          currentTheme={currentTheme}
          onSelectTheme={handleSelectTheme}
        />
      )}

      {/* Instant QR Code Scanner Modal */}
      <QrCodeModal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
        name={profileConfig.name}
        title={profileConfig.title}
      />

      {/* Two-way Contact Exchange Modal */}
      <ExchangeModal
        isOpen={isExchangeOpen}
        onClose={() => setIsExchangeOpen(false)}
        config={profileConfig}
        onShowToast={showToast}
      />

      {/* Feedback Toast */}
      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
