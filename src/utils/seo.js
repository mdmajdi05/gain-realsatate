export const createSitemap = () => {
  const baseUrl = 'https://gainrealstate.com';
  
  const pages = [
    '/',
    '/listings',
    '/about',
    '/contact',
  ];

  const propertyPages = [
    '/property/1',
    '/property/2',
    '/property/3',
  ];

  const allPages = [...pages, ...propertyPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const getMetaTags = (page) => {
  const metaTags = {
    home: {
      title: 'GAIN Realstate | Buy, Sell & Rent Properties in India',
      description: 'Find your dream home with GAIN Realstate. Browse 500+ premium properties across 50+ cities. Expert agents, transparent pricing, hassle-free transactions.',
      keywords: 'real estate, properties for sale, home rental, property listings',
    },
    listings: {
      title: 'Property Listings | GAIN Realstate',
      description: 'Browse our extensive collection of properties. Filter by location, price, and type. Find the perfect property today.',
      keywords: 'property listings, homes for sale, rental properties',
    },
    about: {
      title: 'About GAIN Realstate | Our Story & Values',
      description: 'Learn about GAIN Realstate\'s 15+ years of excellence in real estate. Trusted by 5000+ happy customers across India.',
      keywords: 'about us, real estate company, property agents',
    },
    contact: {
      title: 'Contact GAIN Realstate | Get In Touch',
      description: 'Have questions? Contact our expert team. We\'re here to help with all your real estate needs.',
      keywords: 'contact us, real estate agent, property inquiry',
    },
  };

  return metaTags[page] || metaTags.home;
};
