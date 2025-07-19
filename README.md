# Cosmic Core Website

A modern, responsive website for an edu-tech startup built with React, TypeScript, and Tailwind CSS.

![Cosmic Core Website](public/cosmicLogo.jpeg)

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

The `npm run build` command creates a `build` folder with static files that can be deployed to any web hosting service.

## 📝 Content Management

The website is designed to be easily maintainable by non-technical people. Content is separated from code and stored in TypeScript files.

### Adding/Editing Content

#### 1. **Courses** (`src/content/courses.ts`)

To add a new course, add an object to the `courses` array:

```typescript
{
  id: 'your-course-id',
  title: 'Course Title',
  description: 'Course description...',
  duration: '6 months',
  level: 'Intermediate', // 'Beginner' | 'Intermediate' | 'Advanced'
  price: '$999',
  features: [
    'Feature 1',
    'Feature 2',
    // ... more features
  ],
  image: '/images/courses/your-course.jpg'
}
```

#### 2. **Internships** (`src/content/internships.ts`)

To add a new internship, add an object to the `internships` array:

```typescript
{
  id: 'internship-id',
  title: 'Internship Title',
  description: 'Internship description...',
  duration: '3-6 months',
  stipend: '$800-1200/month',
  requirements: [
    'Requirement 1',
    'Requirement 2',
    // ... more requirements
  ],
  benefits: [
    'Benefit 1',
    'Benefit 2',
    // ... more benefits
  ],
  image: '/images/internships/internship.jpg'
}
```

#### 3. **Projects** (`src/content/projects.ts`)

To add a new project, add an object to the `projects` array:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Project description...',
  technologies: ['React', 'Node.js', 'MongoDB'],
  duration: '8 weeks',
  difficulty: 'Medium', // 'Easy' | 'Medium' | 'Hard'
  image: '/images/projects/project.jpg',
  githubUrl: 'https://github.com/example/project',
  liveUrl: 'https://project-demo.example.com'
}
```

#### 4. **Team Members** (`src/content/team.ts`)

To add a new team member, add an object to the `teamMembers` array:

```typescript
{
  id: 'member-id',
  name: 'Member Name',
  role: 'Job Title',
  bio: 'Member bio...',
  image: '/images/team/member.jpg',
  linkedin: 'https://linkedin.com/in/member',
  twitter: 'https://twitter.com/member',
  github: 'https://github.com/member'
}
```

#### 5. **Contact Information** (`src/content/contact.ts`)

Update contact information in the `contactInfo` object:

```typescript
{
  email: 'your-email@example.com',
  phone: '+1 (555) 123-4567',
  address: 'Your Address',
  socialMedia: {
    linkedin: 'https://linkedin.com/company/yourcompany',
    twitter: 'https://twitter.com/yourcompany',
    facebook: 'https://facebook.com/yourcompany',
    instagram: 'https://instagram.com/yourcompany'
  }
}
```

### Adding Images

1. **Place images** in the `public/images/` directory
2. **Organize them** by category:
   - `public/images/courses/`
   - `public/images/internships/`
   - `public/images/projects/`
   - `public/images/team/`
3. **Reference images** in content files using the path starting with `/images/`

## 🎨 Styling

The website uses Tailwind CSS for styling. Custom styles are defined in `src/index.css`.

### Custom Classes

- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.section-padding` - Standard section padding
- `.container-custom` - Custom container width
- `.mobile-card` - Mobile-optimized card styles

### Color Scheme

- **Primary**: Blue shades (`primary-50` to `primary-900`)
- **Secondary**: Gray shades (`secondary-50` to `secondary-900`)

### Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Optimized for touch interactions
- **Tablet**: Enhanced layouts for medium screens
- **Desktop**: Full-featured experience for large screens

## 📁 Project Structure

```
cosmic-core-website/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   ├── index.html         # Main HTML file
│   ├── 404.html           # SPA routing support
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── content/           # Content data files
│   │   ├── courses.ts     # Course information
│   │   ├── internships.ts # Internship data
│   │   ├── projects.ts    # Project showcase
│   │   ├── team.ts        # Team members
│   │   └── contact.ts     # Contact information
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Home page
│   │   ├── About.tsx      # About page
│   │   ├── Courses.tsx    # Courses page
│   │   ├── Projects.tsx   # Projects page
│   │   └── Contact.tsx    # Contact page
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Content interfaces
│   ├── App.tsx            # Main app component
│   ├── index.tsx          # App entry point
│   └── index.css          # Global styles
├── scripts/               # Deployment scripts
│   ├── deploy.sh          # GitHub Pages deployment
│   └── verify-build.sh    # Build verification
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Run linting**: `npm run lint`
5. **Build the project**: `npm run build`
6. **Commit your changes**: `git commit -m 'Add amazing feature'`
7. **Push to the branch**: `git push origin feature/amazing-feature`
8. **Open a Pull Request**

### Code Standards

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design works on all devices
- Test on multiple browsers

### Content Guidelines

- Keep content clear and concise
- Use consistent formatting
- Ensure all links work correctly
- Optimize images for web use
- Follow accessibility guidelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help:

- **Email**: [your-email@example.com]
- **GitHub Issues**: [Create an issue](https://github.com/vamsi/cosmic-core-website/issues)
- **Documentation**: Check the [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help

---

**Built with ❤️ by the Cosmic Core Technologies team**
