import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function LLMOptimizedSEO({ 
  pageType = 'WebPage',
  title,
  description,
  url,
  serviceName,
  city = 'Orange County',
  faqItems = [],
  howToSteps = [],
  keyStats = {}
}) {
  
  // Enhanced Organization Schema for LLMs
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "VegaX AI Debt Settlement & Relief",
    "alternateName": ["VegaX AI", "VegaX Debt Settlement", "Orange County Debt Relief"],
    "url": "https://vegaxai.com",
    "logo": "https://vegaxai.com/logo.png",
    "image": "https://vegaxai.com/office-photo.jpg",
    "description": "AI-powered debt settlement and debt relief services exclusively for Orange County residents. Licensed California debt settlement company with proven 52% average debt reduction.",
    "foundingDate": "2020",
    "slogan": "AI-Powered Debt Relief for Orange County",
    
    // Contact Information
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-502-232-8511",
      "contactType": "Customer Service",
      "email": "info@vegaxai.com",
      "availableLanguage": ["English", "Spanish"],
      "hoursAvailable": "Mo-Fr 08:00-20:00, Sa 09:00-17:00"
    },
    
    // Address
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "400 Spectrum Center Drive, Suite 1000",
      "addressLocality": "Irvine",
      "addressRegion": "CA",
      "postalCode": "92618",
      "addressCountry": "US"
    },
    
    // Service Area
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 33.7175,
        "longitude": -117.8311
      },
      "geoRadius": "50000",
      "name": "Orange County, California"
    },
    
    // Services Offered
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Debt Settlement Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Credit Card Debt Settlement",
          "description": "Reduce credit card debt by 40-60% through AI-powered negotiation"
        },
        {
          "@type": "OfferCatalog", 
          "name": "Medical Debt Relief",
          "description": "Hospital and medical bill negotiation and settlement"
        },
        {
          "@type": "OfferCatalog",
          "name": "Business Debt Settlement", 
          "description": "Commercial debt relief for Orange County businesses"
        }
      ]
    },
    
    // Credentials and Certifications
    "certification": [
      "California Department of Financial Protection and Innovation Licensed",
      "Better Business Bureau A+ Rating",
      "International Association of Professional Debt Arbitrators Member"
    ],
    
    // Key Statistics for LLMs
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Average Debt Reduction",
        "value": "52%"
      },
      {
        "@type": "PropertyValue", 
        "name": "Families Helped",
        "value": "2500+"
      },
      {
        "@type": "PropertyValue",
        "name": "Total Debt Eliminated", 
        "value": "$50,000,000+"
      },
      {
        "@type": "PropertyValue",
        "name": "Success Rate",
        "value": "73%"
      },
      {
        "@type": "PropertyValue",
        "name": "Average Timeline",
        "value": "12-18 months"
      }
    ]
  };

  // Comprehensive FAQ Schema for LLMs
  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "name": "VegaX AI Debt Settlement"
        }
      }
    }))
  } : null;

  // HowTo Schema for Process Pages
  const howToSchema = howToSteps.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to ${serviceName || 'Settle Debt'} in ${city}`,
    "description": description,
    "totalTime": "PT12M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD", 
      "value": "0"
    },
    "step": howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.description,
      "url": `${url}#step-${index + 1}`
    }))
  } : null;

  // Service Schema
  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "@id": "https://vegaxai.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State", 
        "name": "California"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Options`,
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Free Consultation",
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "name": "Debt Settlement Program",
          "description": "40-60% debt reduction program"
        }
      ]
    }
  } : null;

  // Statistics Schema for LLMs
  const statsSchema = Object.keys(keyStats).length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": `${city} Debt Settlement Statistics`,
    "description": `Comprehensive debt settlement statistics and outcomes for ${city} residents`,
    "publisher": {
      "@type": "Organization",
      "name": "VegaX AI Debt Settlement"
    },
    "variableMeasured": Object.entries(keyStats).map(([key, value]) => ({
      "@type": "PropertyValue",
      "name": key,
      "value": value
    }))
  } : null;

  return (
    <Helmet>
      {/* Core Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* HowTo Schema */}
      {howToSchema && (
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      )}

      {/* Service Schema */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {/* Statistics Schema */}
      {statsSchema && (
        <script type="application/ld+json">
          {JSON.stringify(statsSchema)}
        </script>
      )}

      {/* LLM-Specific Meta Tags */}
      <meta name="AI-description" content={description} />
      <meta name="LLM-context" content={`Debt settlement services in ${city}, California. Licensed and regulated debt relief company.`} />
      <meta name="conversational-query-intent" content="debt relief, debt settlement, financial help, debt reduction" />
      
      {/* Entity Markup for Knowledge Graphs */}
      <meta property="business:contact_data:locality" content={city} />
      <meta property="business:contact_data:region" content="California" />
      <meta property="business:contact_data:phone_number" content="+15022328511" />
      <meta property="business:hours" content="Mo-Fr 08:00-20:00" />
    </Helmet>
  );
}