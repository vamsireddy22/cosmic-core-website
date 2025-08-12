# CosmicCore Website

A modern, responsive website for an edu-tech startup built with React, TypeScript, and Tailwind CSS.

![CosmicCore Website](public/COSMIC-logo.png)

## 🌟 Features

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- ⚡ **Fast Performance** - Optimized build with code splitting and lazy loading
- 📱 **Mobile-First** - Fully responsive design that works on all devices
- 🎯 **Easy Content Management** - Content separated from code for easy updates
- 🚀 **SEO Optimized** - Meta tags, structured data, and performance optimized
- ♿ **Accessibility Friendly** - WCAG compliant with proper ARIA labels
- 🔄 **SPA Routing** - Smooth client-side navigation with React Router
- 🎭 **Animations** - Beautiful micro-interactions with Framer Motion

## 📋 Table of Contents

- [Features](#-features)
- [Sections](#sections)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Content Management](#-content-management)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## 📄 Sections

- **🏠 Home** - Hero section, features showcase, statistics, and call-to-action
- **👥 About Us** - Company information, mission, vision, and core values
- **📚 Courses** - Educational programs and learning paths with detailed information
- **💼 Internships** - Internship opportunities and application process
- **🛠️ Project Works** - Student projects showcase with technologies used
- **📞 Contact Us** - Contact information, form, and social media links

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library with hooks and functional components
- **TypeScript** - Type safety and better developer experience
- **React Router v7** - Client-side routing and navigation
- **Framer Motion** - Smooth animations and micro-interactions
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### Build Tools
- **Create React App** - Zero-configuration build setup
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### Development
- **ESLint** - Code linting and quality enforcement
- **TypeScript Compiler** - Type checking and compilation
- **GitHub Pages** - Free hosting and deployment

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vamsi/cosmic-core-website.git
   cd cosmic-core-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 💻 Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Deploy to GitHub Pages
npm run deploy
```

### Development Workflow

1. **Make changes** to your code
2. **Run linting** to check code quality: `npm run lint`
3. **Test locally** to ensure everything works
4. **Build** to check for production issues: `npm run build`
5. **Deploy** when ready: `npm run deploy`

## 🚀 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment.

1. **Automatic Deployment**:
   ```bash
   ./scripts/deploy.sh
   ```

2. **Manual Deployment**:
   ```bash
   npm run build
   npx gh-pages -d build
   ```

3. **Live URL**: [https://vamsi.github.io/cosmic-core-website](https://vamsi.github.io/cosmic-core-website)

### Other Platforms

The `