import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Blog post routes and metadata for AI-optimized sitemap
const blogPosts = [
  {
    slug: '1099c-tax-forms-debt-settlement-orange-county',
    title: '1099-C Tax Forms: Orange County Debt Settlement Tax Implications 2025',
    description: 'Complete guide to 1099-C tax forms after debt settlement in Orange County. California tax implications, IRS requirements, and tax relief strategies.',
    publishDate: '2025-01-15',
    lastModified: '2025-01-15',
    priority: 0.8,
    keywords: ['1099-C forms', 'debt settlement taxes', 'Orange County tax implications']
  },
  {
    slug: 'ai-debt-settlement-technology-orange-county',
    title: 'AI Debt Settlement Technology: Orange County\'s Advanced Negotiation Systems',
    description: 'How AI-powered debt settlement technology delivers superior results for Orange County residents. Machine learning negotiation strategies and success rates.',
    publishDate: '2025-01-14',
    lastModified: '2025-01-14',
    priority: 0.9,
    keywords: ['AI debt settlement', 'technology', 'Orange County debt relief']
  },
  {
    slug: 'ai-vs-traditional-debt-settlement',
    title: 'AI vs Traditional Debt Settlement: Orange County Performance Comparison 2025',
    description: 'Comprehensive analysis comparing AI-powered vs traditional debt settlement methods. Data-driven results for Orange County residents.',
    publishDate: '2025-01-13',
    lastModified: '2025-01-13',
    priority: 0.9,
    keywords: ['AI vs traditional debt settlement', 'Orange County comparison', 'debt settlement technology']
  },
  {
    slug: 'bankruptcy-vs-debt-settlement-orange-county',
    title: 'Bankruptcy vs Debt Settlement Orange County: Complete 2025 Comparison',
    description: 'Detailed comparison of bankruptcy vs debt settlement options for Orange County residents. Costs, timeline, credit impact, and success rates.',
    publishDate: '2025-01-12',
    lastModified: '2025-01-12',
    priority: 0.9,
    keywords: ['bankruptcy vs debt settlement', 'Orange County bankruptcy alternatives', 'debt relief options']
  },
  {
    slug: 'credit-card-debt-settlement-orange-county',
    title: 'Credit Card Debt Settlement Orange County: 2025 Success Strategies',
    description: 'Professional credit card debt settlement services in Orange County. Average 52% reduction, no upfront fees, licensed specialists.',
    publishDate: '2025-01-11',
    lastModified: '2025-01-11',
    priority: 0.8,
    keywords: ['credit card debt settlement', 'Orange County debt relief', 'credit card debt help']
  },
  {
    slug: 'debt-settlement-process-guide-orange-county-2025',
    title: 'Orange County Debt Settlement Process Guide 2025: Step-by-Step',
    description: 'Complete debt settlement process guide for Orange County residents. Timeline, requirements, costs, and what to expect during settlement.',
    publishDate: '2025-01-10',
    lastModified: '2025-01-10',
    priority: 0.9,
    keywords: ['debt settlement process', 'Orange County debt settlement guide', 'how debt settlement works']
  },
  {
    slug: 'medical-debt-relief-orange-county-2025',
    title: 'Medical Debt Relief Orange County 2025: Hospital Debt Settlement Guide',
    description: 'Specialized medical debt relief services for Orange County residents. Hospital debt negotiation, medical bill settlement, and forgiveness programs.',
    publishDate: '2025-01-09',
    lastModified: '2025-01-09',
    priority: 0.8,
    keywords: ['medical debt relief', 'Orange County medical debt', 'hospital debt settlement']
  },
  {
    slug: 'orange-county-debt-settlement-laws',
    title: 'Orange County Debt Settlement Laws 2025: California Legal Requirements',
    description: 'Complete guide to Orange County debt settlement laws, California regulations, DFPI licensing requirements, and consumer protection rights.',
    publishDate: '2025-01-08',
    lastModified: '2025-01-08',
    priority: 0.9,
    keywords: ['Orange County debt settlement laws', 'California debt settlement regulations', 'DFPI requirements']
  }
];

// Additional city-specific blog posts
const cityBlogs = [
  'anaheim-debt-settlement-services-2025',
  'irvine-debt-settlement-experts-2025', 
  'santa-ana-debt-relief-solutions-2025',
  'huntington-beach-debt-settlement-2025',
  'newport-beach-debt-relief-services-2025',
  'costa-mesa-debt-settlement-specialists-2025',
  'fullerton-debt-relief-experts-2025',
  'orange-debt-settlement-services-2025',
  'garden-grove-debt-relief-2025',
  'westminster-debt-settlement-2025'
];

// Add city blogs to main array
cityBlogs.forEach(slug => {
  const cityName = slug.split('-')[0].replace(/^\w/, c => c.toUpperCase());
  blogPosts.push({
    slug: slug,
    title: `${cityName} Debt Settlement Services 2025: Local Expert Solutions`,
    description: `Professional debt settlement services in ${cityName}, Orange County. Licensed specialists, 52% average reduction, free consultations.`,
    publishDate: '2025-01-07',
    lastModified: '2025-01-07',
    priority: 0.7,
    keywords: [`${cityName} debt settlement`, `${cityName} debt relief`, 'Orange County debt help']
  });
});

// Generate XML sitemap
const generateBlogSitemap = () => {
  const baseUrl = 'https://www.orangecountydebtcenter.com';
  
  let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  blogPosts.forEach(post => {
    xmlContent += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${post.priority}</priority>
    <mobile:mobile/>
  </url>
`;
  });

  xmlContent += `</urlset>`;
  
  return xmlContent;
};

// Generate JSON-LD structured data for blog index
const generateBlogStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Orange County Debt Settlement Blog",
    "description": "Expert insights on debt settlement, bankruptcy alternatives, and financial relief for Orange County residents",
    "url": "https://www.orangecountydebtcenter.com/blog",
    "author": {
      "@type": "Organization",
      "name": "Orange County Debt Center",
      "url": "https://www.orangecountydebtcenter.com"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Orange County Debt Center",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.orangecountydebtcenter.com/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `https://www.orangecountydebtcenter.com/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "dateModified": post.lastModified,
      "author": {
        "@type": "Person",
        "name": "Orange County Debt Center Team"
      },
      "keywords": post.keywords.join(", "),
      "articleSection": "Debt Settlement",
      "about": {
        "@type": "Thing",
        "name": "Debt Settlement"
      }
    }))
  };

  return JSON.stringify(structuredData, null, 2);
};

// Write sitemap file
const sitemapContent = generateBlogSitemap();
fs.writeFileSync(path.join(__dirname, 'public', 'blog-sitemap.xml'), sitemapContent);

// Write structured data file  
const structuredData = generateBlogStructuredData();
fs.writeFileSync(path.join(__dirname, 'public', 'blog-structured-data.json'), structuredData);

console.log('✅ Blog sitemap generated: public/blog-sitemap.xml');
console.log('✅ Blog structured data generated: public/blog-structured-data.json');
console.log(`📊 Total blog posts: ${blogPosts.length}`);
console.log('🤖 Optimized for AI platforms: GPTBot, Claude-Web, PerplexityBot');

// Generate robots.txt entries for blog optimization
const robotsEntries = `
# Blog-specific optimization
Allow: /blog/*
Allow: /blog-sitemap.xml
Allow: /blog-structured-data.json

# AI platforms - prioritize blog content
User-agent: GPTBot
Allow: /blog/*
Crawl-delay: 0

User-agent: Claude-Web  
Allow: /blog/*
Crawl-delay: 0

User-agent: PerplexityBot
Allow: /blog/*
Crawl-delay: 0
`;

console.log('\n📝 Add these entries to robots.txt:');
console.log(robotsEntries);

export {
  blogPosts,
  generateBlogSitemap,
  generateBlogStructuredData
};