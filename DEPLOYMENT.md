# GAIN Realstate - Deployment & Production Guide

## 📦 Build Output

The production build is ready in the `dist/` folder.

**Build Statistics:**
- Total Size: ~300KB (gzipped: ~100KB)
- HTML: 0.45KB
- CSS: 43.17KB
- JavaScript: 300KB+ (optimized & bundled)

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

**Step 1: Create Git Repository**
```bash
git init
git add .
git commit -m "Initial commit: GAIN Realstate website"
git remote add origin <your-github-repo-url>
git push -u origin main
```

**Step 2: Connect to Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select the repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Step 3: Custom Domain (Optional)**
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records at your domain registrar

### Option 2: Vercel

**Step 1: Push to GitHub (same as above)**

**Step 2: Deploy to Vercel**
```bash
npm install -g vercel
vercel login
vercel
```

**Or:**
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Vercel auto-detects Vite settings
4. Click Deploy

### Option 3: GitHub Pages

**Step 1: Update vite.config.js**
```js
export default {
  base: '/repository-name/',
  // ... rest of config
}
```

**Step 2: Deploy**
```bash
npm run build
# Manually upload dist folder to gh-pages branch
# Or use gh-pages package:
npm install -D gh-pages
# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

### Option 4: Traditional Hosting (Hosting Provider)

**Step 1: Build the project**
```bash
npm run build
```

**Step 2: Upload `dist` folder**
- Use FTP/SFTP client (FileZilla, Cyberduck)
- Upload entire `dist` folder contents to `public_html`

**Step 3: Configure Server (if needed)**
- Create `.htaccess` for URL rewriting (Apache):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🔧 Pre-Deployment Checklist

- [ ] Update company information in `properties.json`
- [ ] Add logo image (save as `/public/logo.png`)
- [ ] Update meta tags in `src/utils/seo.js`
- [ ] Set up environment variables
- [ ] Test all routes work correctly
- [ ] Test on mobile devices
- [ ] Verify images load properly
- [ ] Check contact form backend (if applicable)
- [ ] Test performance in production build
- [ ] Set up SSL certificate (HTTPS)

## 📝 Environment Setup

**Create `.env.production`:**
```env
VITE_API_URL=https://api.gainrealstate.com
VITE_APP_NAME=GAIN Realstate
VITE_GA_ID=G-XXXXXXXXXX
```

## 📊 Performance Optimization

### Images
- Compress all images (use TinyPNG)
- Use modern formats (WebP)
- Lazy load images below fold

### Code
- The build is already minified and tree-shaken
- CSS is optimized via Tailwind
- JavaScript is split into chunks

### Caching Headers
```
# For static assets (set 1 year)
Cache-Control: max-age=31536000

# For HTML (set 1 hour)
Cache-Control: max-age=3600
```

## 🔒 Security

### HTTPS
- Ensure HTTPS is enforced
- Set HSTS header:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### CSP Headers
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline';
```

## 📊 SEO Optimization

1. **Sitemap**: Use the provided utility in `src/utils/seo.js`
2. **Robots.txt**: Create `/public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

3. **Meta Tags**: Already configured in seo.js utility
4. **Open Graph**: Add to index.html for social sharing

## 📈 Analytics Setup

### Google Analytics
1. Create GA account at [analytics.google.com](https://analytics.google.com)
2. Get measurement ID (G-XXXXXXXXXX)
3. Add to `.env`:
```
VITE_GA_ID=G-XXXXXXXXXX
```
4. Add script to `src/main.jsx`:
```jsx
import { useEffect } from 'react';

// Load GA script
const script = document.createElement('script');
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', import.meta.env.VITE_GA_ID);
```

## 📩 Contact Form Setup

### Option A: Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create new form
3. Update contact form action:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get credentials
3. Add to `.env`:
```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

### Option C: Backend API
- Set up your own backend
- Update `src/pages/Contact.jsx` to call your API

## 🐛 Monitoring & Testing

### Uptime Monitoring
- Use UptimeRobot or similar service
- Monitor 24/7

### Error Logging
- Set up Sentry for error tracking
- Monitor JavaScript errors in production

### Performance
- Use Google PageSpeed Insights
- Use LightHouse in DevTools
- Monitor Core Web Vitals

## 📱 Mobile Testing

Test on real devices:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet landscape/portrait
- [ ] Touch interactions
- [ ] Network throttling (slow 3G)

## 🔄 Continuous Deployment

### GitHub Actions (Auto-deploy)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci && npm run build
      - uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod --dir=dist
```

## 📋 Post-Deployment

1. **Verify Deployment**
   - Test all routes
   - Check links
   - Verify images load
   - Test forms

2. **Set Up Redirects**
   - Old site → new site (301)
   - Configure in `netlify.toml` or server

3. **Notify Search Engines**
   - Submit to Google Search Console
   - Submit to Bing Webmaster Tools

4. **Social Media**
   - Update links on social profiles
   - Share launch announcement

## 🚨 Emergency Procedures

### Rollback
```bash
# If issues after deployment
git revert <commit-hash>
npm run build
# Re-deploy
```

### Maintenance Mode
Create `public/maintenance.html` and configure server to serve it during updates.

## 📞 Support Resources

- Netlify Support: support.netlify.com
- Vercel Support: vercel.com/support
- Vite Docs: vitejs.dev
- React Docs: react.dev
- Tailwind Docs: tailwindcss.com

## 🎉 Deployment Success!

Your GAIN Realstate website is now live! Monitor performance and user feedback regularly.

---

**Last Updated**: February 2024
