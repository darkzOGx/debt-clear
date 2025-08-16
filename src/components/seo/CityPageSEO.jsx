import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CityPageSEO({ 
  city, 
  title, 
  description, 
  keywords, 
  slug,
  latitude,
  longitude,
  services = []
}) {
  const canonicalUrl = `https://vegaxai.com/${slug}`;
  
  const defaultServices = [
    {
      name: `Credit Card Debt Settlement ${city}`,
      description: `Reduce credit card debt 40-60% for ${city} residents`
    },
    {
      name: `Medical Debt Relief ${city}`,
      description: `Hospital and medical bill negotiation in ${city}`
    },
    {
      name: `Business Debt Settlement ${city}`,
      description: `Commercial debt relief for ${city} businesses`
    }
  ];

  const serviceList = services.length > 0 ? services : defaultServices;
  
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
      <meta property="og:type" content="website" />
      
      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `VegaX AI Debt Settlement ${city}`,
          "description": `Professional debt settlement and debt relief services in ${city}, California`,
          "url": canonicalUrl,
          "telephone": "+1-502-232-8511",
          "areaServed": {
            "@type": "City",
            "name": city,
            "containedInPlace": {
              "@type": "State",
              "name": "California"
            }
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "400 Spectrum Center Drive, Suite 1000",
            "addressLocality": "Irvine",
            "addressRegion": "CA",
            "postalCode": "92618",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": latitude,
            "longitude": longitude
          },
          "serviceType": "Debt Settlement and Debt Relief",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${city} Debt Settlement Services`,
            "itemListElement": serviceList.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.name,
                "description": service.description
              }
            }))
          }
        })}
      </script>

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
              "name": "Debt Settlement Services",
              "item": "https://vegaxai.com/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `Debt Settlement ${city}`,
              "item": canonicalUrl
            }
          ]
        })}
      </script>
    </Helmet>
  );
}