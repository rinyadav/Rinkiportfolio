# 🌟 Rinki Yadav - Portfolio Website

A modern, responsive personal portfolio website showcasing professional skills, projects, experience, and achievements. Built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Features

### 🎨 Design
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **3D Effects** - Interactive buttons with depth and hover effects
- **Smooth Scrolling** - Enhanced navigation with Lenis smooth scroll

### 📱 Sections
- **Hero** - Eye-catching introduction with social links
- **About** - Personal journey and professional highlights
- **Skills** - Technical and soft skills with visual indicators
- **Projects** - Showcase of best work with live demos and GitHub links
- **Experience** - Professional timeline and certifications
- **Resume** - Downloadable PDF with complete professional details
- **Contact** - Easy-to-use contact form with social links

### 🚀 Technical Features
- **TypeScript** - Type-safe code for better maintainability
- **Component-Based** - Modular architecture with reusable components
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance** - Optimized loading and rendering
- **Accessibility** - WCAG AA compliant with proper ARIA labels

## 🛠️ Tech Stack

**Frontend:** React 18, TypeScript, Vite, React Router  
**Styling:** Tailwind CSS, shadcn/ui, Radix UI, Lucide Icons  
**Libraries:** Lenis (smooth scroll), jsPDF (PDF generation), React Hook Form, Zod, next-themes

## 📦 Project Structure

```
portfolio/
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── portfolio/      # Main portfolio components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Resume.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── pages/
│   │   └── Index.tsx       # Main page
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── App.tsx             # App entry point
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global styles & theme
│   └── routes.tsx          # Route configuration
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── DEPLOYMENT.md           # Deployment guide
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 20
- npm ≥ 10

### Installation

```bash
# Step 1: Install dependencies
npm install
# or
pnpm install

# Step 2: Run development server
npm run dev
# or
pnpm run dev

# Step 3: Build for production
npm run build
# or
pnpm run build

# Step 4: Preview production build
npm run preview
# or
pnpm run preview

# Step 5: Run lint check
npm run lint
```

## 🎨 Customization Guide

### Update Personal Information

#### 1. Hero Section (`src/components/portfolio/Hero.tsx`)
```typescript
<h1>Hi, I'm <span className="text-primary">Your Name</span></h1>
<p>Your Title & Description</p>
// Update social links (GitHub, LinkedIn, Email)
```

#### 2. About Section (`src/components/portfolio/About.tsx`)
- Update photo URL
- Modify biography text
- Change highlights

#### 3. Skills Section (`src/components/portfolio/Skills.tsx`)
- Add/remove technical skills
- Update skill levels
- Modify soft skills

#### 4. Projects Section (`src/components/portfolio/Projects.tsx`)
- Add your projects
- Update images and links
- Modify descriptions

#### 5. Resume Section (`src/components/portfolio/Resume.tsx`)
- Update education details
- Add certifications
- Modify personal information

#### 6. Contact Section (`src/components/portfolio/Contact.tsx`)
- Change email address
- Update location
- Modify social links

### Theme Customization

Edit `src/index.css` to customize colors:
```css
:root {
  --primary: 176 85% 51%;      /* Cyan */
  --background: 0 0% 100%;     /* White */
  /* ... other colors */
}

.dark {
  --primary: 176 85% 51%;      /* Cyan */
  --background: 210 20% 6%;    /* Dark blue-gray */
  /* ... other colors */
}
```

## 📊 Performance

### Lighthouse Scores (Target)
- ✅ Performance: 95+
- ✅ Accessibility: 98+
- ✅ Best Practices: 95+
- ✅ SEO: 100

### Optimizations
- Lazy loading for images
- Code splitting
- Optimized bundle size
- Fast page load times
- Smooth animations with GPU acceleration

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options

**Vercel (Recommended)**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

**GitHub Pages**
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 📝 Available Scripts

```bash
# Development server
npm run dev
# or
pnpm run dev

# Build for production
npm run build
# or
pnpm run build

# Preview production build locally
npm run preview
# or
pnpm run preview

# Lint check (TypeScript, Biome, Tailwind)
npm run lint
```

## 🔧 Code Quality

- ✅ TypeScript for type safety
- ✅ Biome for linting
- ✅ Consistent code formatting
- ✅ Component-based architecture
- ✅ 86 files checked and validated

## 👤 Author

**Rinki Yadav**  
📧 Email: rinki191006@gmail.com  
💼 LinkedIn: [linkedin.com/in/rinkiyadav](https://linkedin.com/in/rinkiyadav)  
🐙 GitHub: [github.com/rinkiyadav](https://github.com/rinkiyadav)  
📍 Location: Mumbai, India

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Lenis](https://lenis.studiofreight.com/) - Smooth scroll library

## 📞 Support

For support, email rinki191006@gmail.com or open an issue in the repository.

---

**Made with ❤️ by Rinki Yadav**

⭐ Star this repo if you find it helpful!

## Development Guidelines

### How to edit code locally?

You can choose [VSCode](https://code.visualstudio.com/Download) or any IDE you prefer. The only requirement is to have Node.js and npm installed.

### Environment Requirements

```
# Node.js ≥ 20
# npm ≥ 10
Example:
# node -v   # v20.18.3
# npm -v    # 10.8.2
```

### Installing Node.js on Windows

```
# Step 1: Visit the Node.js official website: https://nodejs.org/, click download. The website will automatically suggest a suitable version (32-bit or 64-bit) for your system.
# Step 2: Run the installer: Double-click the downloaded installer to run it.
# Step 3: Complete the installation: Follow the installation wizard to complete the process.
# Step 4: Verify installation: Open Command Prompt (cmd) or your IDE terminal, and type `node -v` and `npm -v` to check if Node.js and npm are installed correctly.
```

### Installing Node.js on macOS

```
# Step 1: Using Homebrew (Recommended method): Open Terminal. Type the command `brew install node` and press Enter. If Homebrew is not installed, you need to install it first by running the following command in Terminal:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
Alternatively, use the official installer: Visit the Node.js official website. Download the macOS .pkg installer. Open the downloaded .pkg file and follow the prompts to complete the installation.
# Step 2: Verify installation: Open Command Prompt (cmd) or your IDE terminal, and type `node -v` and `npm -v` to check if Node.js and npm are installed correctly.
```

### After installation, follow these steps:

```
# Step 1: Download the code package
# Step 2: Extract the code package
# Step 3: Open the code package with your IDE and navigate into the code directory
# Step 4: In the IDE terminal, run the command to install dependencies: npm i
# Step 5: In the IDE terminal, run the command to start the development server: npm run dev -- --host 127.0.0.1
# Step 6: if step 5 failed, try this command to start the development server: npx vite --host 127.0.0.1
```

### How to develop backend services?

Configure environment variables and install relevant dependencies.If you need to use a database, please use the official version of Supabase.

## Learn More

You can also check the help documentation: Download and Building the app（ [https://intl.cloud.baidu.com/en/doc/MIAODA/s/download-and-building-the-app-en](https://intl.cloud.baidu.com/en/doc/MIAODA/s/download-and-building-the-app-en)）to learn more detailed content.
