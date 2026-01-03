# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive
- 🎨 Dark mode support
- 🚀 Smooth animations with Framer Motion
- 🎯 Smooth scrolling navigation
- 📸 Project carousel with image slider
- 💼 Skills showcase
- 📧 Contact section with social links

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### 1. Update Personal Information

Edit the following files to add your personal information:

- **Hero Section** (`components/Hero.tsx`): Update your name and description
- **About Section** (`components/About.tsx`): Update your bio, location, education, and characteristics
- **Contact Section** (`components/Contact.tsx`): Update your social media links

### 2. Add Your Projects

Edit `components/Projects.tsx` to add your projects:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    year: '2025',
    description: 'Project description...',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    images: ['/project1-1.jpg', '/project1-2.jpg'], // Add images to public folder
    github: 'https://github.com/yourusername/project',
    live: 'https://yourproject.com',
  },
  // Add more projects...
];
```

### 3. Update Skills

Edit `components/Skills.tsx` to customize your skills:

```typescript
const skillCategories = {
  Frontend: [
    { name: 'React', icon: '⚛️' },
    // Add more skills...
  ],
  // Add more categories...
};
```

### 4. Add Project Images

1. Add your project images to the `public` folder
2. Update the image paths in `components/Projects.tsx`

### 5. Update Metadata

Edit `app/layout.tsx` to update the site metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Your description here",
};
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## License

MIT
