# HAKX ED TECH

> Building the Next Generation of Tech Professionals

A modern, conversion-focused website for HAKX ED TECH - a cyber security training company offering courses, workshops, and certification programs.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom cyber/hacker theme
- **Language**: TypeScript
- **Fonts**: Geist Sans & Mono

## Features

- Dark/hacker aesthetic with neon green accents
- Fully responsive design
- Smooth scroll navigation
- SEO optimized with Open Graph & Twitter cards
- External form integration (Google Forms/Typeform)
- Component-based architecture

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind config
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Icons.tsx
│   │   └── SectionHeading.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Offerings.tsx
│   ├── WhyHakx.tsx
│   ├── Trainers.tsx
│   ├── Certification.tsx
│   ├── WhoShouldJoin.tsx
│   ├── WorkWithUs.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
└── lib/
    └── constants.ts     # All website content
```

## Configuration

### Form URLs
Update form URLs in `src/lib/constants.ts`:

```typescript
export const FORM_URLS = {
  enrollment: "YOUR_GOOGLE_FORM_URL",
  workshopEnquiry: "YOUR_WORKSHOP_FORM_URL",
};
```

### Trainer Images
Add trainer photos to `/public/trainers/` and update paths in `constants.ts`.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically on every push

## License

Private - HAKX ED TECH
