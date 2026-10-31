# Aesthetic NFC Digital Business & Personal Website

> A minimalist, editorial digital business card designed for professionals, freelancers, creatives, entrepreneurs, and modern brands. Built for high-speed mobile tap-to-open experiences via physical NFC cards or direct web links. 100% ready for instant deployment on [Vercel](https://vercel.com).

---

## ✨ Features & Highlights

- **Mobile-First Tap Experience**: Engineered specifically for smartphone screens when tapped against an NFC business card.
- **Single-File Configuration**: Edit **every single detail** (name, role, avatar, bio, links, services, gallery, location, themes) in `src/config/profile.ts`.
- **Standards-Compliant vCard (.vcf) Generator**: Tapping **"Save Contact"** downloads a valid RFC 6350 vCard file that triggers native iOS & Android "Add to Contacts".
- **Direct Interactive Actions**:
  - 📞 **Call**: One-tap phone dialer launch.
  - ✉️ **Email**: Opens default mail client.
  - 💬 **Message**: Instant SMS or WhatsApp link.
  - 🌐 **Website**: Direct link to external portfolio/website.
  - 📋 **Copy to Clipboard**: Quick copy actions for email, phone, and links with sleek toast feedback.
  - 📲 **Two-Way Contact Exchange**: Allow contacts to quickly reply with their name and email directly to your inbox.
- **Instant QR Code Fallback**: Tap the QR icon anytime to display an on-screen QR code for older phones or devices without NFC.
- **5 Aesthetic Editorial Themes**:
  1. `minimal-white` — Timeless editorial white with obsidian typography.
  2. `elegant-black` — Deep velvet obsidian luxury with crisp white accents.
  3. `warm-beige` — Linen, oat, and espresso quiet luxury palette.
  4. `soft-sage` — Calming botanical slate/sage organic aesthetic.
  5. `custom-brand` — Fully custom background, surface, text, and accent colors.
- **Interactive Live Theme Switcher**: Floating bottom switcher allows testing and comparing all 5 themes directly in the browser (can be toggled on/off in config).
- **Zero Backend Required**: Pure static client-side application — blazing fast, highly secure, zero maintenance.
- **Vercel Optimized**: Includes `vercel.json` with SPA rewrites and immutable asset caching headers.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

---

## 🎨 Effortless Customization: `src/config/profile.ts`

Open [`src/config/profile.ts`](src/config/profile.ts) to customize your card. Here is how it is structured:

### 1. Identity & Profile Header
```typescript
name: "Elena Vance",
title: "Creative Director & Brand Strategist",
companyOrCategory: "Studio Vance • Editorial & Brand Direction",
avatarUrl: "/images/avatar.jpg", // Place your image in public/images/
shortBio: "Crafting timeless visual identities and digital experiences...",
location: "New York • Paris • Remote",
badge: {
  text: "Available for Q2 Projects",
  verified: true,
  pulseDot: true,
},
```

### 2. Contact Details
*(Only filled fields appear as active buttons; leave empty to hide)*
```typescript
contact: {
  phone: "+1 (555) 382-9014",
  email: "elena@studiovance.design",
  sms: "+15553829014",
  whatsapp: "+15553829014",
  website: "https://studiovance.design",
  websiteLabel: "studiovance.design",
},
```

### 3. Social Media Links
Choose between 3 visual styles: `'pills'`, `'cards'`, or `'minimal'`:
```typescript
socialStyle: "pills",
socialLinks: [
  { platform: "instagram", url: "https://instagram.com/...", label: "@elenavance.studio" },
  { platform: "linkedin", url: "https://linkedin.com/in/...", label: "Elena Vance" },
  { platform: "twitter", url: "https://x.com/...", label: "@elenavance" },
  { platform: "calendly", url: "https://calendly.com/...", label: "Book 15-min Call", highlight: true },
]
```
*(Supported platforms: `instagram`, `linkedin`, `tiktok`, `twitter`, `github`, `youtube`, `facebook`, `threads`, `dribbble`, `behance`, `spotify`, `substack`, `calendly`, `whatsapp`, `telegram`, etc.)*

### 4. Optional Sections
To hide any section (About, Services, Gallery, Location), simply comment it out or leave it empty in `profile.ts`.

### 5. Selecting Your Default Theme
```typescript
theme: {
  activeTheme: "minimal-white", // 'minimal-white' | 'elegant-black' | 'warm-beige' | 'soft-sage' | 'custom-brand'
  allowLivePreviewSwitch: true,  // Set to false in production if you want only your selected theme
}
```

---

## 📇 How to Program Your Physical NFC Card

You can use any standard NTAG213, NTAG215, or NTAG216 blank NFC card, sticker, or wooden card (available for ~$1 each on Amazon/AliExpress).

1. Deploy your website to **Vercel** and copy your live URL (e.g. `https://yourname.vercel.app` or your custom domain `https://yourdomain.com`).
2. Download the free **NFC Tools** app on your phone:
   - [NFC Tools for iOS (App Store)](https://apps.apple.com/app/nfc-tools/id1252962749)
   - [NFC Tools for Android (Google Play)](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc)
3. In NFC Tools:
   - Tap **Write** → **Add a record**.
   - Select **URL / URI**.
   - Enter your public URL (ensure `https://` is selected).
   - Tap **Write / Tap to Write**.
   - Hold your physical NFC card to the top edge of your iPhone or back center of your Android phone until you hear the confirmation chime.
4. **Done!** Whenever anyone taps your physical card with their smartphone, your aesthetic digital business card will instantly open in their default browser.

---

## ☁️ Deploying to Vercel (Ready in 2 Minutes)

This project is pre-configured for seamless zero-configuration deployment to Vercel.

### Method A: Deploy via GitHub (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Aesthetic NFC Card"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New..."** → **"Project"**.
4. Import your GitHub repository.
5. Vercel automatically detects **Vite**; keep all default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your site will be live on an SSL HTTPS URL within 30 seconds!

### Method B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
# When asked to deploy to production:
vercel --prod
```

### Adding a Custom Domain on Vercel
1. Go to your project dashboard on Vercel.
2. Navigate to **Settings** → **Domains**.
3. Add your custom domain (e.g. `card.yourname.com` or `yourname.com`).
4. Update your domain DNS records as instructed by Vercel.

---

## 📂 Project Directory Structure

```text
├── public/
│   ├── favicon.svg             # Minimalist contactless wave SVG icon
│   └── images/
│       ├── avatar.jpg          # Profile portrait image
│       ├── project1.jpg        # Architecture showcase sample
│       └── project2.jpg        # Brand identity showcase sample
├── src/
│   ├── config/
│   │   └── profile.ts          # ⭐ THE SINGLE CONFIG FILE FOR ALL DATA & THEMES
│   ├── types/
│   │   └── index.ts            # Strongly typed TypeScript definitions
│   ├── utils/
│   │   ├── vcard.ts            # RFC 6350 / vCard 3.0 file generation (.vcf)
│   │   └── share.ts            # Web Share API & clipboard copy utilities
│   ├── components/
│   │   ├── ProfileHeader.tsx   # Portrait, verified badges, name, bio, location
│   │   ├── ContactActions.tsx  # Save Contact, Call, Email, Message, Website
│   │   ├── SocialLinks.tsx     # Configurable social links with brand SVGs
│   │   ├── AboutSection.tsx    # Editorial bio & quote
│   │   ├── ServicesSection.tsx # Services, pricing tags, and features
│   │   ├── GallerySection.tsx  # Portfolio showcase with interactive lightbox
│   │   ├── LocationSection.tsx # Physical location & Google Maps link
│   │   ├── QrCodeModal.tsx     # On-screen QR code scanner for older phones
│   │   ├── ExchangeModal.tsx   # Two-way contact sharing form
│   │   ├── ThemeSwitcher.tsx   # Live theme preview picker
│   │   ├── Toast.tsx           # Feedback notifications
│   │   └── Footer.tsx          # Minimal footer with NFC contactless indicator
│   ├── App.tsx                 # Main application layout
│   ├── index.css               # Tailwind CSS & theme variables
│   └── main.tsx                # React entrypoint
├── tailwind.config.js          # Tailwind design tokens & animations
├── vercel.json                 # Vercel deployment configuration
├── package.json
└── tsconfig.json
```

---

## 📄 License

MIT License — Feel free to use and customize for your personal brand or client projects.
