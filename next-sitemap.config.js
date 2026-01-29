/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://landing-page-nextjs-two-orcin.vercel.app',
  generateRobotsTxt: true, // Generate robots.txt file
  generateIndexSitemap: false, // Set to true if you have multiple sitemaps
  exclude: [
    '/server-sitemap-index.xml',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  // Customize sitemap generation
  transform: async (config, path) => {
    // Exclude static assets (images, icons, etc.)
    const staticAssetExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.pdf'];
    const isStaticAsset = staticAssetExtensions.some(ext => path.toLowerCase().endsWith(ext));
    
    if (isStaticAsset) {
      return null; // Exclude from sitemap
    }

    // Set priority and changefreq based on path
    let priority = 0.8;
    let changefreq = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
