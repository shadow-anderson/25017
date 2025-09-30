# AlumniConnect

A modern, responsive alumni data management and engagement platform built with React, Vite, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Tech Stack**: Built with Vite + React + JavaScript
- **Beautiful UI**: Tailwind CSS + shadcn/ui components
- **Responsive Design**: Mobile-first approach with desktop support
- **Complete Navigation**: React Router DOM for seamless page transitions
- **Alumni Engagement**: Features for networking, mentorship, events, and donations

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   └── input.jsx
│   ├── Navbar.jsx        # Navigation component
│   ├── Footer.jsx        # Footer component
│   ├── FeatureCard.jsx   # Reusable feature card
│   └── CTASection.jsx    # Call-to-action section
├── pages/
│   ├── Landing.jsx       # Landing page
│   ├── About.jsx         # About page
│   ├── Contact.jsx       # Contact page
│   ├── Login.jsx         # Login page
│   ├── Register.jsx      # Registration page
│   └── ForgotPassword.jsx # Password reset page
├── lib/
│   └── utils.js          # Utility functions
├── App.jsx               # Main app with routing
└── index.css             # Tailwind CSS styles
```

## 🛠 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Clone or download the project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📦 Dependencies

### Core Dependencies
- **React** - UI library
- **React Router DOM** - Client-side routing
- **Lucide React** - Modern icon library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind
- **shadcn/ui components** - High-quality React components
- **class-variance-authority** - Component variants
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes
- **tailwindcss-animate** - Animation utilities

### Development
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🎨 Design System

### Colors
- **Primary**: Blue (blue-600)
- **Secondary**: Slate (slate-50 to slate-900)
- **Accent**: Purple (purple-600)
- **Success**: Green (green-600)
- **Warning**: Orange (orange-600)

### Components
- **Responsive navigation** with mobile menu
- **Hero sections** with gradient backgrounds
- **Feature cards** with icons and descriptions
- **Forms** with validation styling
- **Buttons** with multiple variants and sizes
- **Professional footer** with links and contact info

## 📱 Pages Overview

1. **Landing Page** (`/`)
   - Hero banner with CTAs
   - Features section (Networking, Mentorship, Events, Donations)
   - About section
   - Call-to-action section

2. **About Page** (`/about`)
   - Mission and vision
   - Core values
   - Company story
   - Statistics cards

3. **Contact Page** (`/contact`)
   - Contact form
   - Contact information cards
   - Support details

4. **Authentication Pages**
   - Login (`/login`)
   - Register (`/register`)
   - Forgot Password (`/forgot-password`)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS
Configured with shadcn/ui theme variables and custom utilities.

### Vite
Optimized for React development with fast HMR.

### PostCSS
Includes Tailwind CSS and Autoprefixer plugins.

## 📄 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: support@alumniconnect.com
- Phone: 1-800-ALUMNI

---

Built with ❤️ using modern web technologies.
