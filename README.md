# Krish Tomar — 3D Personal Portfolio

A sleek, modern, immersive 3D personal portfolio for **Krish Tomar** — Delegate, Leader, Athlete, and Strategist. Built with Vite, React, TypeScript, Three.js (@react-three/fiber, @react-three/drei), Framer Motion, and Tailwind CSS.

Deployed to GitHub Pages: [https://ktom07.github.io/krish-portfolio/](https://ktom07.github.io/krish-portfolio/)

---

## ✨ Features & Architecture

- **3D Hero Atmosphere**: Interactive diplomatic icosahedron and globe with dual orbital rings and ambient dynamic particle clouds via Three.js / React Three Fiber.
- **Responsive & Performance First**: Lazy-loaded 3D Canvas, light fallback for low-power or mobile environments, and respect for `prefers-reduced-motion`.
- **Glassmorphism & Interactive 3D Tilt**: Micro-interactions with cursor-tracking dynamic glow and 3D card tilt.
- **Animated Statistics Counters**: Key circuit milestones (30+ conferences, Best Delegate awards, Best Parliamentarian awards) animated as they scroll into view.
- **Single Typed Data Source**: All personal data, accolades, and contact placeholders are centralized in [`src/data/content.ts`](./src/data/content.ts) for effortless maintenance.
- **Lighthouse & SEO Optimized**: Pre-configured meta tags, Open Graph and Twitter cards, semantic HTML, and Google Fonts (Inter + Space Grotesk).
- **Automated CI/CD**: GitHub Actions workflow automatically builds and deploys to GitHub Pages upon pushing to the `main` branch.

---

## 🛠️ Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 🚀 Running Locally

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/ktom07/krish-portfolio.git
   cd krish-portfolio
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the local development server**:
   \`\`\`bash
   npm run dev
   \`\`\`
   Open your browser to [http://localhost:5173/krish-portfolio/](http://localhost:5173/krish-portfolio/) (or the port specified in terminal).

4. **Build for production**:
   \`\`\`bash
   npm run build
   \`\`\`

---

## 🌐 GitHub Pages Deployment

A GitHub Actions workflow is provided at `.github/workflows/deploy.yml`.

To deploy:
1. Push your changes to the `main` branch.
2. In your GitHub repository settings:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The workflow will automatically build and publish your site at:
   `https://ktom07.github.io/krish-portfolio/`

---

## 📝 Customizing Content

All text, social handles, awards, and skills are typed and maintained in:
\`\`\`
src/data/content.ts
\`\`\`
Simply edit the exported `portfolioData` object to update conferences, contact links, or achievements!
