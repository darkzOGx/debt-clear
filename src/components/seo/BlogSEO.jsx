import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlogSEO({ 
  title, 
  description, 
  keywords, 
  slug, 
  author = "VegaX AI Research Team",
  datePublished,
  dateModified = "2025-08-16",
  faqItems = []
}) {
  const canonicalUrl = `https://vegaxai.com/blog/${slug}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      
      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "author": {
            "@type": "Organization",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "VegaX AI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://vegaxai.com/logo.png"
            }
          },
          "datePublished": datePublished,
          "dateModified": dateModified,
          "description": description,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          }
        })}
      </script>

      {/* FAQ Schema */}
      {faqItems.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      )}

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://vegaxai.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://vegaxai.com/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": title.replace(" | VegaX AI 2025", "").replace(" - ", " "),
              "item": canonicalUrl
            }
          ]
        })}
      </script>
    </Helmet>
  );
}