# GAIN Realstate - Premium Real Estate Website

A modern, fully-featured real estate platform built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🏠 Core Functionality
- **Home Page** - Stunning landing page with hero section, featured properties, services, stats, testimonials
- **Property Listings** - Advanced search, filter and sort capabilities
- **Property Details** - Image gallery, features, pricing, contact agent
- **About Page** - Company story, mission, values, and achievements
- **Contact Page** - Contact form, company info, and social links

### 🎨 Design & UX
- Responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- Modern gradient UI with Tailwind CSS
- Glass-morphism effects
- Interactive components with hover states

### 📱 Advanced Features
- Mobile-friendly navigation menu
- Newsletter subscription form
- FAQ section with accordion
- How it works step-by-step guide
- Statistics and trust indicators
- Enhanced footer with quick links
- Property image gallery with thumbnails
- Dynamic property filtering and sorting

### ⚡ Performance
- Code splitting with lazy loading
- Optimized images
- Production build optimization
- Fast load times with Vite

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Create .env.local from .env.example (optional)
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Landing page
│   ├── Listings.jsx          # Property listings
│   ├── Property.jsx          # Property details
│   ├── About.jsx             # About page
│   └── Contact.jsx           # Contact page
├── components/
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Services.jsx
│   │   ├── FeaturedProperties.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Newsletter.jsx
│   │   ├── FAQ.jsx
│   │   └── TestimonialsEnhanced.jsx
│   ├── layout/
│   │   ├── HeaderEnhanced.jsx
│   │   ├── FooterEnhanced.jsx
│   │   └── Loading.jsx
│   └── ui/
│       ├── PropertyCard.jsx
│       └── PopUp.jsx
├── data/
│   └── data.json (used instead of previous properties.json)
├── utils/
│   ├── seo.js
│   └── analytics.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🛠 Technologies Used

- React 18
- Tailwind CSS 4
- Framer Motion
- React Router DOM v6
- React Icons
- Vite

## 📱 Responsive & Mobile Ready
- Fully responsive design
- Mobile menu navigation
- Touch-friendly buttons
- Optimized layouts for all screen sizes

## 🚢 Deployment Ready

### Netlify
```bash
npm run build
# Deploy dist folder
```

### Vercel / GitHub Pages
Same build process, different hosting

## 🎨 Customization

Change colors in `tailwind.config.js`
Update data in `src/data/data.json`
Modify company info in data.json

## 📊 Features Breakdown

✅ Hero section with search
✅ Featured properties grid
✅ Services showcase
✅ Statistics section
✅ Advanced property search & filter
✅ Property detail pages
✅ About company page
✅ Contact form
✅ Testimonials carousel
✅ FAQ accordion
✅ Newsletter signup
✅ Mobile menu
✅ Footer with social links
✅ Loading animations
✅ Welcome popup

## 🔐 Production Ready

- Optimized build (minified, tree-shaken)
- SEO utilities included
- Responsive images
- Analytics support
- Environment variables support

## 📈 Performance Optimized

- Lazy loading components
- Image optimization
- Code splitting
- CSS minification
- Fast refresh in development

---

**GAIN Realstate** - Your Trusted Real Estate Partner

