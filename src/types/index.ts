export type ThemeId =
  | 'minimal-white'
  | 'elegant-black'
  | 'warm-beige'
  | 'soft-sage'
  | 'custom-brand';

export interface CustomThemeColors {
  background: string;
  surface: string;
  surfaceSubtle: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderSubtle: string;
  accent: string;
  accentForeground: string;
  accentHover: string;
  shadow?: string;
}

export type SocialPlatform =
  | 'instagram'
  | 'linkedin'
  | 'tiktok'
  | 'twitter'
  | 'github'
  | 'youtube'
  | 'facebook'
  | 'threads'
  | 'dribbble'
  | 'behance'
  | 'spotify'
  | 'substack'
  | 'whatsapp'
  | 'telegram'
  | 'calendly'
  | 'other';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string; // Optional custom label, e.g. "@username"
  highlight?: boolean; // Subtle pill highlight
}

export interface ContactDetails {
  phone?: string;
  email?: string;
  sms?: string;
  whatsapp?: string;
  website?: string;
  websiteLabel?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  priceOrTag?: string; // e.g. "From $2,500" or "Retainer"
  features?: string[];
  actionUrl?: string;
  actionText?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category?: string;
  imageUrl: string;
  description?: string;
  link?: string;
}

export interface LocationConfig {
  address: string;
  cityStateCountry: string;
  mapsUrl: string;
  googleMapsEmbedUrl?: string;
}

export interface ProfileBadge {
  text: string;
  verified?: boolean;
  pulseDot?: boolean;
}

export interface ProfileConfig {
  // 1. Identity & Profile Header
  name: string;
  title: string;
  companyOrCategory?: string;
  avatarUrl: string;
  avatarAlt?: string;
  shortBio: string;
  badge?: ProfileBadge;
  location?: string;

  // 2. Direct Contact Actions (Call, Email, Message, Website, Save Contact)
  contact: ContactDetails;

  // 3. Social Media Links
  socialLinks: SocialLink[];
  socialStyle?: 'pills' | 'cards' | 'minimal';

  // 4. About Me / About Business (Optional - auto-hides if empty)
  about?: {
    heading?: string;
    paragraphs: string[];
    quote?: string;
  };

  // 5. Services or Highlights (Optional - auto-hides if empty)
  services?: {
    heading?: string;
    subheading?: string;
    items: ServiceItem[];
  };

  // 6. Gallery or Portfolio (Optional - auto-hides if empty)
  gallery?: {
    heading?: string;
    subheading?: string;
    items: GalleryItem[];
  };

  // 7. Location & Google Maps (Optional - auto-hides if empty)
  locationInfo?: LocationConfig;

  // 8. Footer
  footer: {
    text: string;
    copyrightYear?: number | string;
    nfcHint?: string;
    showExchangeContact?: boolean;
  };

  // 9. Aesthetic Theme Settings
  theme: {
    activeTheme: ThemeId;
    allowLivePreviewSwitch?: boolean;
    customColors?: CustomThemeColors;
  };

  // 10. vCard Details (.vcf export for "Save Contact")
  vCard: {
    firstName: string;
    lastName: string;
    organization?: string;
    jobTitle?: string;
    phone?: string;
    email?: string;
    website?: string;
    note?: string;
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
}
