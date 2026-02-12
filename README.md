# Roge Mateos - Portfolio Website

A modern, fully responsive portfolio website showcasing my projects, skills, learning resources, and professional experience as a developer.

## 🌟 Features

- **Hero Section** - Eye-catching introduction with call-to-action
- **About Section** - Personal background and professional summary
- **Skills Section** - Comprehensive display of technical expertise
- **Featured Projects** - Showcase of professional and personal projects with live demos and source code links
- **Experience Timeline** - Professional work history and achievements
- **Learning Hub** - Curated learning resources, documentation, and educational content
- **Blog Integration** - Technical articles and insights
- **AI Code Review Tool** - Interactive tool for code review assistance
- **Smooth Animations** - Fluid motion effects and transitions
- **Dark/Light Theme** - Theme switching support
- **Fully Responsive** - Optimized for all device sizes

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/RogeMateos/rogeportfolio.git

# Navigate to project directory
cd rogeportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8081`

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3+** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation build tool
- **React Router** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

### Form & Validation
- **React Hook Form** - Performant flexible forms
- **Zod** - TypeScript-first schema validation

### Data & State Management
- **TanStack React Query** - Server state management
- **React Context** - State management

### Utilities
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes
- **date-fns** - Date utility library
- **Recharts** - Data visualization library

## 📜 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build locally
npm run preview

# Lint code with ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Landing section
│   ├── About.tsx             # About me section
│   ├── Skills.tsx            # Technical skills
│   ├── Projects.tsx          # Featured projects
│   ├── Experience.tsx        # Work experience timeline
│   ├── LearningHub.tsx       # Learning resources & documentation
│   ├── Blog.tsx              # Blog section
│   ├── TestAIReview.tsx      # AI code review tool
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer section
│   └── ui/                   # shadcn/ui components
├── pages/                    # Page components
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── App.tsx                   # Root component
├── App.css                   # Global styles
├── index.css                 # Tailwind & base styles
└── main.tsx                  # Entry point
```

## 🎨 Key Features Explanation

### Featured Projects
Displays professional and personal projects with:
- Project images and previews
- Technology stack tags
- Live demo links
- GitHub repository links
- Category badges (Professional, Personal, Experimental)

### Learning Hub
Curated educational resources including:
- Custom documentation (JavaScript Theory, React Theory, Tools & Webpack, TypeScript)
- Favorite YouTube channels
- News and blog sources
- Links to learning materials

### Skills Section
Organized showcase of:
- Programming languages
- Frontend technologies
- Backend technologies
- Tools and platforms
- Other relevant skills

### Experience Timeline
Professional work history with:
- Company information
- Role descriptions
- Key achievements
- Duration and dates

## 🚢 Deployment

### Netlify (Recommended)
1. Connect your repository to [Netlify](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main

### Vercel
1. Import repository into [Vercel](https://vercel.com)
2. Vercel automatically detects Vite configuration
3. Deploy with zero configuration

### GitHub Pages
1. Create a GitHub Actions workflow (if not already configured)
2. Push to main branch for automatic deployment

## 🎯 Customization

### Update Personal Information
- Edit sections in respective component files
- Update project details in `Projects.tsx`
- Modify skills in `Skills.tsx`
- Update experience in `Experience.tsx`

### Add New Projects
1. Add project data to `projects` array in `Projects.tsx`
2. Add corresponding image to `/public/images/`
3. Update image rendering logic with conditional check

### Modify Theme
- Edit Tailwind configuration in `tailwind.config.ts`
- Update color variables in CSS files
- Use theme switcher in header

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS settings
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - Code linting rules
- `postcss.config.js` - PostCSS configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Roge Mateos** - Full Stack Developer

- Portfolio: [rogemateos.dev](https://rogemateos.dev)
- GitHub: [@RogeMateos](https://github.com/RogeMateos)
- LinkedIn: [linkedin.com/in/rogeMateos](https://linkedin.com/in/rogeMateos)

## 🙏 Acknowledgments

- [shadcn/ui](https://shadcn-ui.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vite](https://vitejs.dev/) - Build tool

---

**Last Updated:** February 2025
