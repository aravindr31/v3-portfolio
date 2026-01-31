# 🚀 Personal Portfolio - Aravind R

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

> A modern, minimalist portfolio showcasing my work as a Site Reliability Engineer. Built with Astro, React, and Tailwind CSS, featuring split-screen design.

---

## ✨ Features

- 🎨 **Split-Screen Design** - Fixed left sidebar with scrollable right content
- 🔍 **Scroll Spy Navigation** - Active section highlighting with smooth animations
- 🌊 **Liquid Background** - Interactive WebGL fluid animation (LiquidEther)
- 🎭 **Decrypted Text Effect** - Animated text reveal on page load
- 🌗 **Dark Mode** - Persistent theme toggle with localStorage
- 📱 **Fully Responsive** - Mobile-first design with hamburger menu
- ⚡ **Lightning Fast** - Static site generation with Astro
- 🎯 **SEO Optimized** - Meta tags, semantic HTML, accessibility
- 📝 **JSON Content Management** - Easy content updates via JSON files
- 🎨 **Tailwind CSS** - Utility-first styling with custom theme
- 🔄 **Smooth Animations** - Framer Motion for fluid transitions

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Astro](https://astro.build) v3 |
| **UI Library** | [React](https://react.dev) 18 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) v3 |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Components** | [shadcn/ui](https://ui.shadcn.com) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Background** | Custom WebGL Liquid Ether |
| **Deployment** | [Azure](portal.azure.com) |

---

## 📁 Project Structure

```
v3-portfolio/
├── public/                  # Static assets
│   └── favicon.svg
├── src/
│   ├── components/         # React components
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── DecryptedText.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Header.jsx
│   │   ├── LiquidEther.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillIcon.jsx
│   │   └── SkillsSection.jsx
│   ├── data/               # Content JSON files
│   │   ├── experiences.json
│   │   ├── projects.json
│   │   └── skills.json
│   ├── lib/                # Utility functions
│   │   ├── darkMode.js
│   │   └── utils.js
│   ├── pages/              # Astro pages
│   │   └── index.astro
│   └── styles.css          # Global styles
├── astro.config.mjs        # Astro configuration
├── tailwind.config.js      # Tailwind configuration
├── components.json         # shadcn/ui config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aravindr31/v3-portfolio.git
   cd v3-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:4321
   ```

---

## 📝 Content Management

All portfolio content is managed through JSON files in `src/data/`. This makes it easy to update without touching code.

### Update Experiences

Edit `src/data/experiences.json`:

```json
{
  "title": "Your Job Title",
  "company": "Company Name",
  "companyUrl": "https://company.com",
  "period": "Month Year - Present",
  "location": "City, Country",
  "highlights": ["Achievement 1", "Achievement 2"],
  "technologies": ["Tech1", "Tech2"]
}
```

### Update Projects

Edit `src/data/projects.json`:

```json
{
  "title": "Project Name",
  "description": "Project description and impact",
  "githubUrl": "https://github.com/username/repo"
}
```

### Update Skills

Edit `src/data/skills.json`:

```json
["Python", "JavaScript", "Docker", "Kubernetes"]
```

---

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro check` | Run Astro diagnostics |

---

## 🎨 Customization

### Colors

Tailwind theme colors in `tailwind.config.js`:

```javascript
colors: {
  primary: "#14b8a6",     // Teal
  background: "#ffffff",  // White
  foreground: "#0a0a0a",  // Near black
}
```

### Liquid Background

Adjust colors in `src/pages/index.astro`:

```jsx
<LiquidEther
  colors={['#60A5FA', '#34D399', '#7DD3FC']}
  opacity={0.35}
/>
```

### Typography

Font family in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

---

### Manual Build

```bash
npm run build
```

Deploy the `dist/` folder to any static hosting service.

---

## 🌟 Design Inspiration

- [Brittany Chiang](https://brittanychiang.com) - Split-screen layout
- [Vercel](https://vercel.com) - Minimalist design philosophy
- [Linear](https://linear.app) - Animation patterns

---

## 📄 License

MIT License - feel free to use this portfolio as inspiration for your own!

---

## 🤝 Connect

- **Portfolio:** [Link](https://www.aravindr.in/)
- **GitHub:** [@aravindr31](https://github.com/aravindr31)
- **LinkedIn:** [Aravind Ramesh](https://www.linkedin.com/in/aravind-r-954451118/)
- **Email:** aravindr597@gmail.com

---

**Built with ❤️ by Aravind R**
