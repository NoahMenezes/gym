# Iron Fitness - Gym Website

A premium, modern, vibe-coded gym website built using Next.js, React, Tailwind CSS, and custom styling. Designed and built for **Noah Menezes, by VGen Studio**.

## 🚀 Features

- **Sleek Dark Theme**: Implemented a state-of-the-art dark gym aesthetic (`#0f0f0f` background) with glowing neon green accents (`#00ff66`).
- **Interactive Webflow Animations**: Preserves original complex animations and layouts, using hard-navigation bypass to ensure smooth vendor script execution in Next.js.
- **WhatsApp Integration**: Fast call-to-actions linking directly to WhatsApp (`https://wa.me/9518346262`) for booking.
- **Rebranded Team & Services**: Replaced all legacy placeholder medical terminology with premium gym services and athletic trainer face profiles.
- **Optimized Performance**: Sourced optimized `.webp` media formats for fast loading speeds on mobile and desktop.

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.10 (Turbopack support)
- **Styling**: Vanilla CSS (`iron.css`), Tailwind CSS
- **Package Manager**: Bun

## 📦 Getting Started

### 1. Install dependencies:
```bash
bun install
```

### 2. Run the development server:
```bash
bun run dev
```

### 3. Build for production:
```bash
bun run build
```

## 📂 Project Structure

- `app/` - Next.js routes (Home, About, Services, Terms & Conditions, Privacy, Cookies, etc.)
- `public/assets/` - Static assets:
  - `/img/` - Optimized `.webp` and `.svg` visual elements
  - `/css/` - Custom template stylesheets (`iron.css`)
  - `/js/` - Vendor scripts for animations and layouts
- `app/globals.css` - Custom styling overrides, dark theme definitions, and neon highlights
- `app/HardNavigation.tsx` - High-performance custom routing layer built to bridge vendor scripts with Next.js SPA lifecycle
