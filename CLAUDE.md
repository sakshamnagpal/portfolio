# Portfolio - Claude Code Instructions

## Project Overview
Personal data science and AI portfolio for Saksham Nagpal (Sak).
Built with Next.js (App Router), TypeScript, Tailwind CSS.
Hosted on Vercel. GitHub repo: YOUR_REPO_URL

## Design System

### Theme
Dark theme. Base background #0A0A0F, never pure black.

### Colour Tokens (defined in tailwind.config.ts)
- bg-base: #0A0A0F
- bg-surface: #13131A
- bg-elevated: #1C1C27
- accent: #06B6D4
- accent-hover: #0891B2
- text-primary: #F0F0F5
- text-secondary: #8888A0

### Fonts
- Display: Syne (headings)
- Body: DM Sans (body text)
- Mono: IBM Plex Mono (tags, labels, code)

### Component Conventions
- Cards: bg-surface, border border-white/5, rounded-xl, p-6
- Section padding: py-24
- Max content width: max-w-6xl mx-auto px-6
- Hover transitions: duration-200
- Tags/Badges: font-mono text-xs in accent colour

## Folder Structure
- /components/ui/ - reusable primitives (Badge, SectionWrapper, etc.)
- /components/sections/ - full page sections (Hero, Projects, etc.)
- /lib/ - constants, data, helper functions
- /public/ - static assets

## Coding Conventions
- TypeScript strict mode
- Functional components only, no class components
- All section data (projects, skills, experience) lives in /lib/data.ts - never hardcoded in JSX
- Use next/font for all Google Fonts - never a <link> tag
- Use next/image for all images
- Mobile-first responsive design

## Sections to Build (in order)
1. [ ] Design system setup (tailwind.config.ts, globals.css, fonts)
2. [ ] Layout + Navbar
3. [ ] Hero
4. [ ] Projects
5. [ ] Skills
6. [ ] Experience
7. [ ] Contact (Formspree)

## Contact Form
Using Formspree (free tier). No backend/SMTP needed.
Formspree endpoint to be added once account is set up.

## Out of Scope
- No authentication
- No CMS
- No database
- No paid services

## Backlog
- [ ] Individual project pages (/projects/[slug]) - full writeup per project
      including: problem context, approach, architecture, key decisions,
      learnings, and charts/visuals where relevant. Data already structured
      in lib/data.ts with slug field ready for dynamic routing.