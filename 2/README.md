# Solara Fields — Live Agrivoltaic Modeling Tool

A production-ready website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, faithfully implementing the Figma design specifications from `folder-1`.

---

## 🌟 Highlights & Features

- **Pixel-Accurate Design Match**: Matches the typography (`Fraunces` editorial serif & `IBM Plex Sans` technical mono-hybrid), color palette (`#1b4332` Deep Forest, `#f6f1e4` Warm Cream, `#f5a623` Solar Amber, `#3aafd9` Sky Water, `#b55b34` Terracotta), and layout structures from Figma.
- **3-Second Branded Calibrator Loader**:
  - Displays for exactly 3 seconds (3,000 ms) on initial site load.
  - Features animated Solara Fields BrandMark, progress bar, real-time stage telemetry, and a smooth CSS cubic-bezier fade-out.
  - Uses session storage to prevent blocking subsequent page navigations.
- **Interactive Agrivoltaic Simulator**:
  - Live parameter adjustment: Plot Size (20–500 acres), Region, Crop (Processing Tomato, Leafy Greens, Bell Peppers, etc.), Panel Clearance (8–14 ft), and Row Spacing (16–32 ft).
  - One-click presets: *Default (24ft / 10ft)*, *Max Solar Density (18ft / 8ft)*, and *Wide Harvester (28ft / 12ft)*.
  - Interactive SVG cross-section schematic updating panel tilt, clearance markers, row pitch, shade envelope, and furrow crops in real time.
  - 4 dynamic metric cards: Modeled Crop Yield (103.0%), Water Saved (17%), Annual Energy (17,868 MWh), and Modeled Ground Shade (22%).
  - Expandable model assumptions reference drawer.
- **Three Complete Pages Matching All Figma Frames**:
  - **Product / Home (`/`)**: Hero section with `FarmSceneIllustration`, benchmark pitch-vs-model cards, interactive simulator, mechanism chain callout, and 3-step workflow.
  - **Case Study (`/case-study`)**: 120-acre Central Valley tomato scenario with operational dilemma, trade-off flow diagram, interactive comparison toggle (*Initial 18ft Deck* vs *In-Room 24ft Agreement*), and complete assumptions matrix.
  - **About (`/about`)**: Solara Fields origin story, mission & vision, and "Values in behavior" tri-card grid (*Proof over persuasion*, *Built for the room*, *Dual by design*).
  - **Contact / Walkthrough (`/contact` & Modal)**: Accessible live demonstration booking flow with role selection, site parameter inputs, and confirmation feedback.
- **Mobile-First Responsive Design**: Fluid layout adapting across mobile, tablet, and desktop breakpoints with responsive mobile drawer navigation.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router, React Server Components by default, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` tokens
- **Typography**: Google Fonts via `next/font/google` (`Fraunces` & `IBM Plex Sans`)
- **Icons**: Scalable inline SVGs matching Figma vectors + `lucide-react`

---

## 📁 Project Architecture

```
folder-2/
├── app/
│   ├── about/              # About Solara Fields page
│   ├── case-study/         # 120-acre illustrative case study page
│   ├── contact/            # Dedicated walkthrough request page
│   ├── globals.css         # Tailwind v4 theme tokens & range slider styles
│   ├── icon.svg            # Custom SVG Brand favicon
│   ├── layout.tsx          # Root layout, Google fonts, SEO metadata
│   ├── not-found.tsx       # Branded 404 handler
│   └── page.tsx            # Home / Product landing page
├── components/
│   ├── AgrivoltaicSimulator.tsx  # Flagship interactive calculator & SVG cross-section
│   ├── BrandLogo.tsx             # Solara Fields sun & panel geometry mark
│   ├── FarmSceneIllustration.tsx # Agrivoltaic farm landscape illustration with badges
│   ├── Footer.tsx                # Global footer with disclaimers & replay loader
│   ├── GlobalLoader.tsx          # 3-second branded initial page loader
│   ├── LayoutShell.tsx           # Client layout orchestrator & modal provider
│   ├── Navbar.tsx                # Responsive navigation with mobile drawer
│   └── WalkthroughModal.tsx      # Accessible booking dialog & confirmation
├── lib/
│   ├── constants.ts        # Presets, regions, crop baseline coefficients
│   └── simulator.ts        # Mathematical modeling for shade, yield, water, energy
├── public/                 # Static assets & icons
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.18+ or Node.js 20+ (Node v24 recommended)
- npm or pnpm or yarn

### 1. Installation

Navigate into the project directory and install dependencies:

```bash
cd folder-2
npm install
```

### 2. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

To test and build the production bundle:

```bash
npm run build
npm start
```
