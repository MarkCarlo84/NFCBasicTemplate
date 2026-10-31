import type { ProfileConfig } from '../types';

/**
 * =======================================================================
 * NFC DIGITAL BUSINESS CARD - CONFIGURATION FILE
 * =======================================================================
 * All profile details, contact actions, social media links, optional
 * sections, and theme settings are managed directly in this single file.
 *
 * TO CUSTOMIZE:
 * 1. Replace the text fields below with your own personal or business information.
 * 2. Replace the avatar image at `public/images/avatar.svg` or provide an external image URL.
 * 3. Choose your preferred theme (`minimal-white`, `elegant-black`, `warm-beige`, `soft-sage`, or `custom-brand`).
 * 4. To hide any optional section (About, Services, Gallery, Location), simply comment it out or set items to empty `[]`.
 * =======================================================================
 */

export const profileConfig: ProfileConfig = {
  // ---------------------------------------------------------------------
  // 1. Identity & Profile Header
  // ---------------------------------------------------------------------
  name: "Lorem Ipsum",
  title: "Lorem Ipsum Dolor Sit Amet",
  companyOrCategory: "Lorem Ipsum • Consectetur Adipiscing",
  avatarUrl: "/images/avatar.svg",
  avatarAlt: "Lorem Ipsum Monogram Logo",
  shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  location: "Lorem Ipsum, Country",

  // Verification & Status Badge
  badge: {
    text: "Lorem Ipsum",
    verified: true,
    pulseDot: true,
  },

  // ---------------------------------------------------------------------
  // 2. Direct Contact Details
  // (Connected directly to phone dialer, email client, and messaging)
  // ---------------------------------------------------------------------
  contact: {
    phone: "+1 (555) 000-0000",
    email: "lorem@example.com",
    sms: "+15550000000",
    whatsapp: "+15550000000",
    website: "https://example.com",
    websiteLabel: "example.com",
  },

  // ---------------------------------------------------------------------
  // 3. Social Media Links
  // ---------------------------------------------------------------------
  socialStyle: "pills", // 'pills' | 'cards' | 'minimal'
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com",
      label: "GitHub / LoremIpsum",
      highlight: true,
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com",
      label: "LinkedIn / Lorem Ipsum",
    },
    {
      platform: "twitter",
      url: "https://x.com",
      label: "@loremipsum",
    },
    {
      platform: "instagram",
      url: "https://instagram.com",
      label: "@loremipsum",
    },
  ],

  // ---------------------------------------------------------------------
  // 4. About Me / Background
  // ---------------------------------------------------------------------
  about: {
    heading: "Lorem Ipsum",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
  },

  // ---------------------------------------------------------------------
  // 5. Core Competencies & Services
  // ---------------------------------------------------------------------
  services: {
    heading: "Lorem Ipsum Services",
    subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    items: [
      {
        id: "lorem-service-1",
        title: "Lorem Ipsum Dolor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        priceOrTag: "Lorem Tag",
        features: ["Lorem Feature", "Dolor Sit Amet", "Consectetur Adipiscing", "Sed Do Eiusmod"],
      },
      {
        id: "lorem-service-2",
        title: "Consectetur Adipiscing",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        priceOrTag: "Lorem Tag",
        features: ["Tempor Incididunt", "Labore Et Dolore", "Magna Aliqua", "Commodo Consequat"],
      },
      {
        id: "lorem-service-3",
        title: "Eiusmod Tempor",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
        priceOrTag: "Lorem Tag",
        features: ["Duis Aute", "Irure Dolor", "In Reprehenderit", "Voluptate Velit"],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 6. Location & Maps
  // ---------------------------------------------------------------------
  locationInfo: {
    address: "123 Lorem Ipsum Street",
    cityStateCountry: "Lorem Ipsum, Country 00000",
    mapsUrl: "https://maps.google.com/?q=Lorem+Ipsum",
  },

  // ---------------------------------------------------------------------
  // 7. Minimalist Footer
  // ---------------------------------------------------------------------
  footer: {
    text: "Lorem Ipsum Template",
    copyrightYear: new Date().getFullYear(),
    nfcHint: "NFC Contactless Card • Tap to connect",
    showExchangeContact: true,
  },

  // ---------------------------------------------------------------------
  // 8. Aesthetic Theme Settings
  // ---------------------------------------------------------------------
  theme: {
    activeTheme: "elegant-black",
    allowLivePreviewSwitch: true,
  },

  // ---------------------------------------------------------------------
  // 9. vCard Details (.vcf file for "Save Contact")
  // Automatically compiled into a standard vCard 3.0 file when tapped.
  // ---------------------------------------------------------------------
  vCard: {
    firstName: "Lorem",
    lastName: "Ipsum",
    organization: "Lorem Ipsum Inc.",
    jobTitle: "Lorem Ipsum Dolor Sit Amet",
    phone: "+15550000000",
    email: "lorem@example.com",
    website: "https://example.com",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Met via NFC Digital Card Template.",
    street: "123 Lorem Ipsum Street",
    city: "Lorem City",
    state: "Lorem State",
    postalCode: "00000",
    country: "Lorem Country",
  },
};
