/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://landing-page-nextjs-two-orcin.vercel.app',
    generateRobotsTxt: true,           // optional
    sitemapSize: 5000,                 // optional: max URLs per sitemap
    changefreq: 'daily',               // optional
    priority: 0.7,                     // optional
  };
