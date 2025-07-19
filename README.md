# Cosmic Core Website

A modern, responsive website for an edu-tech startup built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🎯 Easy content management
- 🚀 Fast performance
- ♿ Accessibility friendly

## Sections

- **Home**: Hero section, features, statistics, and call-to-action
- **About Us**: Company information and team members
- **Courses**: Educational programs and learning paths
- **Internships**: Internship opportunities
- **Project Works**: Student projects showcase
- **Contact Us**: Contact information and form

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cosmic-core-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Content Management

The website is designed to be easily maintainable by non-technical people. Content is separated from code and stored in TypeScript files.

### Adding/Editing Content

#### 1. Courses (`src/content/courses.ts`)

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

#### 2. Internships (`src/content/internships.ts`)

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

#### 3. Projects (`src/content/projects.ts`)

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

#### 4. Team Members (`src/content/team.ts`)

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

#### 5. Contact Information (`src/content/contact.ts`)

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

1. Place images in the `public/images/` directory
2. Organize them by category:
   - `public/images/courses/`
   - `public/images/internships/`
   - `public/images/projects/`
   - `public/images/team/`

3. Reference images in content files using the path starting with `/images/`

### Styling

The website uses Tailwind CSS for styling. Custom styles are defined in `src/index.css`.

#### Custom Classes

- `.btn-primary`: Primary button style
- `.btn-secondary`: Secondary button style
- `.section-padding`: Standard section padding
- `.container-custom`: Custom container width

#### Color Scheme

- **Primary**: Blue shades (`primary-50` to `primary-900`)
- **Secondary**: Gray shades (`secondary-50` to `secondary-900`)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── content/            # Content data files
│   ├── courses.ts      # Course information
│   ├── internships.ts  # Internship data
│   ├── projects.ts     # Project showcase
│   ├── team.ts         # Team members
│   └── contact.ts      # Contact information
├── pages/              # Page components
│   └── Home.tsx        # Home page
├── types/              # TypeScript type definitions
│   └── index.ts        # Content interfaces
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type safety
- **React Router**: Navigation
- **Framer Motion**: Animations
- **Tailwind CSS**: Styling
- **PostCSS**: CSS processing

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect React settings
3. Deploy

### Other Platforms

The `npm run build` command creates a `build` folder with static files that can be deployed to any web hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or support, please contact the development team or create an issue in the repository.

## License

This project is licensed under the MIT License.
