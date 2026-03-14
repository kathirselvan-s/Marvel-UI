# Avengers Universe — Requirements & Dependencies

## Overview
A fully interactive, immersive 3D Marvel-themed hero showcase website built with React, Three.js, Framer Motion, and TailwindCSS v4.

---

## System Requirements

| Requirement   | Minimum Version |
|---------------|-----------------|
| **Node.js**   | `>= 18.0.0`    |
| **npm**       | `>= 9.0.0`     |
| **Browser**   | Chrome 90+, Firefox 90+, Edge 90+, Safari 15+ |
| **OS**        | Windows 10+, macOS 12+, Ubuntu 20+ |

---

## Production Dependencies

### Core Framework
| Package        | Version     | Purpose                              |
|----------------|-------------|--------------------------------------|
| `react`        | `^19.2.4`   | UI component library                 |
| `react-dom`    | `^19.2.4`   | DOM rendering for React              |

### 3D Rendering Engine
| Package                      | Version    | Purpose                                        |
|------------------------------|------------|-------------------------------------------------|
| `three`                      | `^0.183.2` | WebGL-based 3D graphics library                 |
| `@react-three/fiber`         | `^9.5.0`   | React renderer for Three.js (declarative 3D)    |
| `@react-three/drei`          | `^10.7.7`  | Useful helpers for R3F (Stars, Sparkles, Cloud) |
| `@react-three/postprocessing`| `^3.0.4`   | Post-processing effects (bloom, vignette, etc.) |

### Animation Libraries
| Package          | Version     | Purpose                                        |
|------------------|-------------|------------------------------------------------|
| `framer-motion`  | `^12.36.0`  | Production-ready animations & gestures for React |
| `gsap`           | `^3.14.2`   | GreenSock Animation Platform (scroll, timeline) |

### UI Utilities
| Package         | Version     | Purpose                           |
|-----------------|-------------|-----------------------------------|
| `lucide-react`  | `^0.577.0`  | Beautiful & consistent icon library |

---

## Development Dependencies

### Build Tooling
| Package                | Version    | Purpose                              |
|------------------------|------------|--------------------------------------|
| `vite`                 | `^8.0.0`   | Next-gen frontend build tool         |
| `@vitejs/plugin-react` | `^6.0.0`  | React support for Vite (Fast Refresh)|

### Styling
| Package            | Version    | Purpose                                |
|--------------------|------------|----------------------------------------|
| `tailwindcss`      | `^4.2.1`   | Utility-first CSS framework (v4)       |
| `@tailwindcss/vite` | `^4.2.1`  | TailwindCSS v4 Vite plugin integration |

### Code Quality
| Package                       | Version    | Purpose                           |
|-------------------------------|------------|-----------------------------------|
| `eslint`                      | `^9.39.4`  | JavaScript/JSX linter             |
| `@eslint/js`                  | `^9.39.4`  | ESLint core JS config             |
| `eslint-plugin-react-hooks`   | `^7.0.1`   | Lint rules for React Hooks        |
| `eslint-plugin-react-refresh` | `^0.5.2`   | Lint rules for React Fast Refresh |
| `globals`                     | `^17.4.0`  | Global variable definitions       |

### Type Definitions
| Package            | Version     | Purpose                          |
|--------------------|-------------|----------------------------------|
| `@types/react`     | `^19.2.14`  | TypeScript types for React       |
| `@types/react-dom` | `^19.2.3`   | TypeScript types for ReactDOM    |

---

## External Resources (CDN)

### Google Fonts
Loaded via `<link>` tag in `index.html`:

| Font        | Weights                      | Usage                     |
|-------------|------------------------------|---------------------------|
| **Inter**   | 300, 400, 500, 600, 700, 800, 900 | Primary UI font      |
| **Orbitron**| 400, 500, 600, 700, 800, 900 | Accent/display font       |
| **Rajdhani**| 300, 400, 500, 600, 700      | Secondary/tag font        |

---

## Quick Start

```bash
# 1. Clone the project
git clone <repo-url>
cd MARVEL

# 2. Install all dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## Project Structure

```
MARVEL/
├── index.html                  # Entry HTML with font imports & meta tags
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite + React + TailwindCSS config
├── eslint.config.js            # ESLint configuration
├── public/
│   └── heroes/                 # Hero images (PNG/JPG)
├── src/
│   ├── main.jsx                # React root mount
│   ├── App.jsx                 # Main app with loading screen & routing
│   ├── index.css               # Global styles & design tokens
│   ├── data/
│   │   ├── heroes.js           # 15 hero profiles with full data
│   │   └── movies.js           # MCU movie data organized by phase
│   └── components/
│       ├── Navbar.jsx           # Fixed navigation bar
│       ├── HeroLanding.jsx      # Landing section with 3D background
│       ├── Scene3D.jsx          # Three.js cosmic 3D environment
│       ├── ParticleField.jsx    # Animated particle system
│       ├── AvengersLogo.jsx     # 3D extruded Avengers "A" logo
│       ├── HeroesGrid.jsx       # Searchable hero card grid
│       ├── HeroCard.jsx         # Individual 3D-tilt hero card
│       ├── HeroPanel.jsx        # Full-screen hero detail modal
│       ├── MovieTimeline.jsx    # Vertical MCU timeline by phase
│       └── Footer.jsx           # Stats & footer section
└── dist/                       # Production build output
```

---

## Scripts Reference

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start Vite dev server (hot reload)   |
| `npm run build`   | Build optimized production bundle    |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | Run ESLint on all source files       |
