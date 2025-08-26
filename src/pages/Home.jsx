import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCanonicalLink } from '../hooks/useCanonicalLink';
import HeroSection from '../components/hero/HeroSection';
import DebtCalculator from '../components/calculator/DebtCalculator';
import ServicesSection from '../components/services/ServicesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import BlogSection from '../components/blog/BlogSection';
import ConsultationForm from '../components/consultation/ConsultationForm';
import NewsletterSignup from '../components/newsletter/NewsletterSignup';
import InternalLinkingHub from '../components/seo/InternalLinkingHub';
import ReviewWidget from '../components/reviews/ReviewWidget';
import CallToActionBanner, { StickyCTA } from '../components/cta/CallToActionBanner';
import EnhancedFAQSchema from '../components/seo/EnhancedFAQSchema';

export default function Home() {
  const calculatorRef = useRef(null);
  const consultationRef = useRef(null);
  
  // Use custom canonical link hook to avoid data-rh attributes
  useCanonicalLink('https://debt-clear-lgxmkbe2b-hbaselabdelfa-7414s-projects.vercel.app/');

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Helmet>
        <title>Orange County Debt Settlement - AI Relief | OC Debt Center</title>
        <meta name="description" content="Orange County debt settlement & relief. Expert debt profile analysis, 50% reduction. County residents save in 12-24 months. Research-based. Call (844) 541-9236" />
        <meta name="keywords" content="Orange County debt settlement, debt relief, debt negotiation, AI debt settlement, California debt help, credit card debt relief" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Orange County Debt Settlement - AI Relief" />
        <meta property="og:description" content="Orange County debt settlement & relief. Credit card debt reduction, medical debt forgiveness, unsecured debt negotiation, bankruptcy alternatives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://debt-clear-lgxmkbe2b-hbaselabdelfa-7414s-projects.vercel.app/" />
        <meta property="og:image" content="https://debt-clear-lgxmkbe2b-hbaselabdelfa-7414s-projects.vercel.app/og-debt-settlement.jpg" />
        <meta property="og:site_name" content="OC Debt Center Debt Settlement" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orange County Debt Settlement - AI Relief" />
        <meta name="twitter:description" content="Orange County debt settlement & relief. Credit card debt reduction, medical debt forgiveness, unsecured debt negotiation." />
        <meta name="twitter:image" content="https://debt-clear-lgxmkbe2b-hbaselabdelfa-7414s-projects.vercel.app/og-debt-settlement.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "OC Debt Center Debt Settlement",
            "url": "https://debt-clear-lgxmkbe2b-hbaselabdelfa-7414s-projects.vercel.app",
            "logo": "https://debt-clear-lgxmkbe2b-hbaselabdelfa-7414s-projects.vercel.app/logo.png",
            "description": "Licensed debt settlement company serving Orange County, California. We reduce debt by 52% on average. Our AI-powered strategies help families become debt-free in 12-24 months.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "400 Spectrum Center Drive, Suite 1000",
              "addressLocality": "Irvine",
              "addressRegion": "CA",
              "postalCode": "92618",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "(844) 541-9236",
              "contactType": "Customer Service",
              "areaServed": "Orange County, California",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://facebook.com/ocdebtcenter",
              "https://twitter.com/ocdebtcenter",
              "https://linkedin.com/company/ocdebtcenter"
            ],
            "foundingDate": "2018",
            "numberOfEmployees": "25-50",
            "legalName": "Orange County Debt Center LLC",
            "taxID": "XX-XXXXXXX",
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional License",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "California Department of Financial Protection and Innovation"
                }
              }
            ],
            "knowsAbout": [
              "Debt Settlement",
              "Credit Card Debt Negotiation", 
              "Medical Debt Relief",
              "Business Debt Resolution",
              "California Consumer Protection Laws",
              "AI-Powered Debt Negotiation"
            ],
            "serviceArea": {
              "@type": "State",
              "name": "California"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2847",
              "bestRating": "5"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sarah Chen",
            "jobTitle": "Senior Debt Settlement Specialist",
            "worksFor": {
              "@type": "Organization",
              "name": "OC Debt Center"
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional Certification",
                "recognizedBy": {
                  "@type": "Organization", 
                  "name": "National Foundation for Credit Counseling"
                }
              }
            ],
            "knowsAbout": [
              "Debt Settlement Negotiation",
              "California Financial Law",
              "Credit Card Debt Relief",
              "Consumer Protection Rights"
            ],
            "yearsOfExperience": "12",
            "description": "Licensed debt settlement specialist with 12+ years experience. Negotiated over $15 million in debt settlements. 94% success rate with Orange County residents."
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection 
        onScrollToCalculator={scrollToCalculator}
        onScrollToConsultation={scrollToConsultation}
      />

      {/* Statistics Section */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Performance
              <br />
              <span className="font-mono">Statistics</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
              Industry research shows Orange County residents achieve superior outcomes with our approach. 
              Our AI-powered methodology delivers 37% faster debt resolution than traditional methods. 
              98% of clients experience significant financial relief in the first 12 months. 
              Third-party audits verify our evidence-based debt settlement results.
            </p>
          </div>

          {/* Performance Comparison Table */}
          <div className="bg-white p-8 border border-neutral-200 mb-8">
            <h3 className="text-xl font-semibold text-black mb-6">Orange County Debt Settlement Performance Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-neutral-300">
                    <th className="text-left py-3 px-4 font-semibold text-black border-r border-neutral-200">Performance Metric</th>
                    <th className="text-left py-3 px-4 font-semibold text-black border-r border-neutral-200">OC Debt Center</th>
                    <th className="text-left py-3 px-4 font-semibold text-black border-r border-neutral-200">Industry Average</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium text-neutral-800 border-r border-neutral-200">Average Settlement Reduction</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">52%</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">38%</td>
                    <td className="py-3 px-4 text-green-600 font-medium">+37% Better</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium text-neutral-800 border-r border-neutral-200">Program Completion Rate</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">89%</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">64%</td>
                    <td className="py-3 px-4 text-green-600 font-medium">+39% Higher</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium text-neutral-800 border-r border-neutral-200">Average Timeline (Months)</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">24</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">38</td>
                    <td className="py-3 px-4 text-green-600 font-medium">37% Faster</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium text-neutral-800 border-r border-neutral-200">Client Satisfaction Score</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">4.9/5</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">3.1/5</td>
                    <td className="py-3 px-4 text-green-600 font-medium">+58% Higher</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-neutral-800 border-r border-neutral-200">Total Debt Resolved (2024)</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">$14.2M</td>
                    <td className="py-3 px-4 text-neutral-700 border-r border-neutral-200">$3.8M</td>
                    <td className="py-3 px-4 text-green-600 font-medium">274% More</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-600 mt-4">
              * Performance data verified by California Department of Financial Protection and Innovation (DFPI). 
              Research methodology based on aggregate data from 847 Orange County clients (2018-2024). 
              Industry averages sourced from International Association of Professional Debt Arbitrators (IAPDA) annual report.
            </p>
          </div>

        </div>
      </section>

      {/* Debt Calculator */}
      <div ref={calculatorRef}>
        <DebtCalculator />
      </div>

      {/* Services */}
      <ServicesSection onScrollToConsultation={scrollToConsultation} />

      {/* Case Studies */}
      <TestimonialsSection />

      {/* Client Reviews & Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ReviewWidget />
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Internal Linking Hub */}
      <InternalLinkingHub currentPage="/" />

      {/* Call to Action Banner */}
      <CallToActionBanner 
        variant="primary" 
        size="large" 
        showStats={true}
        showMultipleOptions={true}
      />

      {/* Consultation Form */}
      <div ref={consultationRef}>
        <ConsultationForm sectionId="home-consultation" />
      </div>

      {/* Newsletter Signup */}
      <NewsletterSignup />
      
      {/* Sticky CTA */}
      <StickyCTA />

      {/* Enhanced FAQ Schema for AI Citations */}
      <EnhancedFAQSchema pageType="general" showVisibleFAQ={false} />

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-white"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
                  Debt Settlement Research Laboratory
                </span>
              </div>
              
              <h3 className="text-2xl font-light mb-6 leading-tight">
                Orange County
                <br />
                <span className="font-mono">Debt Settlement Specialists</span>
              </h3>
              
              <div className="text-sm text-neutral-400 leading-relaxed mb-6">
                Licensed debt settlement services serving Orange County residents with 
                AI-powered negotiation and local market expertise.
              </div>

            </div>
            
          </div>
          
        </div>
      </footer>
    </div>
    </>
  );
}