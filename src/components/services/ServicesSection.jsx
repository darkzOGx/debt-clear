import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection({ onScrollToConsultation }) {
  const [showAllCities, setShowAllCities] = useState(false);
  const [cityStartIndex, setCityStartIndex] = useState(0);
  const services = [
  {
    id: "01",
    title: "AI-Powered Debt Settlement",
    scope: "Credit Cards • Personal Loans • Medical Debt • Student Loans",
    methodology: "Advanced AI algorithms analyze creditor patterns and negotiate optimal settlements for Orange County residents",
    outcome: "Average 45-60% debt reduction in 24-48 months"
  },
  {
    id: "02",
    title: "Orange County Legal Protection",
    scope: "Collection Calls • Wage Garnishment • Court Actions",
    methodology: "Local California law expertise with immediate creditor contact cessation under FDCPA guidelines",
    outcome: "100% protection from creditor harassment"
  },
  {
    id: "03",
    title: "Credit Score Rehabilitation",
    scope: "Credit Repair • Score Monitoring • Financial Education",
    methodology: "Post-settlement credit rebuilding program designed for Orange County economic conditions",
    outcome: "Average 120-point credit score improvement"
  }];

  const cityServices = [
    {
      name: "Anaheim",
      description: "Debt settlement for Disney area residents and families",
      link: "/debt-settlement-anaheim",
      zipCodes: "92801-92899"
    },
    {
      name: "Santa Ana",
      description: "County seat debt relief with bilingual services",
      link: "/debt-settlement-santa-ana", 
      zipCodes: "92701-92799"
    },
    {
      name: "Irvine",
      description: "Tech professional and high-income debt solutions",
      link: "/debt-settlement-irvine",
      zipCodes: "92602-92697"
    },
    {
      name: "Huntington Beach",
      description: "Coastal community debt settlement specialists",
      link: "/debt-settlement-huntington-beach",
      zipCodes: "92605-92649"
    },
    {
      name: "Garden Grove",
      description: "Diverse community debt relief programs",
      link: "/debt-settlement-garden-grove",
      zipCodes: "92840-92845"
    },
    {
      name: "Fullerton",
      description: "Educational community and student debt specialists",
      link: "/debt-settlement-fullerton",
      zipCodes: "92831-92837"
    },
    {
      name: "Orange",
      description: "Historic Circle City debt settlement services",
      link: "/debt-settlement-orange",
      zipCodes: "92856-92869"
    },
    {
      name: "Costa Mesa",
      description: "Business district professionals and entrepreneurs",
      link: "/debt-settlement-costa-mesa",
      zipCodes: "92626-92628"
    },
    {
      name: "Mission Viejo",
      description: "Family-oriented community financial solutions",
      link: "/debt-settlement-mission-viejo",
      zipCodes: "92691-92694"
    },
    {
      name: "Westminster",
      description: "Multicultural community debt relief services",
      link: "/debt-settlement-westminster",
      zipCodes: "92683-92685"
    },
    {
      name: "Newport Beach",
      description: "Luxury coastal debt settlement for high-net-worth",
      link: "/debt-settlement-newport-beach",
      zipCodes: "92625-92663"
    },
    {
      name: "Fountain Valley",
      description: "Family community debt relief specialists",
      link: "/debt-settlement-fountain-valley",
      zipCodes: "92708"
    },
    {
      name: "Laguna Beach",
      description: "Artistic coastal community debt settlement",
      link: "/debt-settlement-laguna-beach",
      zipCodes: "92651-92652"
    },
    {
      name: "Yorba Linda",
      description: "Suburban family debt relief services",
      link: "/debt-settlement-yorba-linda",
      zipCodes: "92886-92887"
    },
    {
      name: "Dana Point",
      description: "Harbor community debt settlement specialists",
      link: "/debt-settlement-dana-point",
      zipCodes: "92629"
    },
    {
      name: "Laguna Niguel",
      description: "Master-planned community financial solutions",
      link: "/debt-settlement-laguna-niguel",
      zipCodes: "92677"
    },
    {
      name: "Seal Beach",
      description: "Beachfront community debt relief programs",
      link: "/debt-settlement-seal-beach",
      zipCodes: "90740"
    },
    {
      name: "Laguna Woods",
      description: "Senior community specialized debt services",
      link: "/debt-settlement-laguna-woods",
      zipCodes: "92637"
    }
  ];

  return (
    <section className="py-16 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              ORANGE COUNTY DEBT RELIEF SERVICES
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Orange County Debt Relief:
            <br />
            <span className="font-mono">Expert Analysis & Reduction</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl font-light">
            Unlike national debt settlement companies, we specialize in Orange County's unique economic landscape. 
            Our AI-powered approach combines local market knowledge with advanced technology for superior results.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, index) =>
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-neutral-200 bg-white">

              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="text-xs font-mono text-neutral-400">
                      {service.id}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-11">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-xl font-light text-black mb-3 leading-tight">
                          {service.title}
                        </h3>
                        <div className="text-sm font-mono text-neutral-600">
                          {service.scope}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-3">
                          Methodology
                        </div>
                        <div className="text-sm text-neutral-700 leading-relaxed">
                          {service.methodology}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 mb-3">
                          Expected Outcome
                        </div>
                        <div className="text-sm font-mono text-black">
                          {service.outcome}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* City-Specific Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-16 border-t border-neutral-200">
          
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-4 h-4 text-black" />
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                CITY-SPECIFIC DEBT SETTLEMENT SERVICES
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-light text-black mb-6 leading-tight">
              Local Expertise for
              <br />
              <span className="font-mono">Orange County Communities</span>
            </h3>
            
            <p className="text-lg text-neutral-600 max-w-3xl font-light">
              Each Orange County city has unique economic characteristics, demographics, and financial challenges. 
              Our specialized debt settlement programs are tailored to serve the specific needs of your community.
            </p>
          </div>

          {!showAllCities ? (
            <>
              {/* Show first 3 cities */}
              <div className="grid md:grid-cols-3 gap-6">
                {cityServices.slice(0, 3).map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link 
                      to={city.link}
                      className="block bg-white border border-neutral-200 p-6 hover:border-black transition-colors h-full"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-semibold text-black group-hover:text-black transition-colors">
                          {city.name}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors flex-shrink-0" />
                      </div>
                      
                      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                        {city.description}
                      </p>
                      
                      <div className="text-xs font-mono text-neutral-500">
                        ZIP: {city.zipCodes}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* View All Cities Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAllCities(true)}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-neutral-800 transition-colors font-mono text-sm uppercase tracking-wide"
                >
                  View All 18 Cities
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Show cities with navigation */}
              <div className="flex items-center gap-4">
                {/* Previous Arrow */}
                <button
                  onClick={() => setCityStartIndex(Math.max(0, cityStartIndex - 3))}
                  disabled={cityStartIndex === 0}
                  className={`p-2 transition-colors ${
                    cityStartIndex === 0 
                      ? 'text-neutral-300 cursor-not-allowed' 
                      : 'text-black hover:bg-neutral-200'
                  }`}
                  aria-label="Previous cities"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Cities Display */}
                <div className="flex-1 grid md:grid-cols-3 gap-6">
                  {cityServices.slice(cityStartIndex, cityStartIndex + 3).map((city, index) => (
                    <motion.div
                      key={city.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <Link 
                        to={city.link}
                        className="block bg-white border border-neutral-200 p-6 hover:border-black transition-colors h-full"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-semibold text-black group-hover:text-black transition-colors">
                            {city.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors flex-shrink-0" />
                        </div>
                        
                        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                          {city.description}
                        </p>
                        
                        <div className="text-xs font-mono text-neutral-500">
                          ZIP: {city.zipCodes}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Next Arrow */}
                <button
                  onClick={() => setCityStartIndex(Math.min(cityServices.length - 3, cityStartIndex + 3))}
                  disabled={cityStartIndex >= cityServices.length - 3}
                  className={`p-2 transition-colors ${
                    cityStartIndex >= cityServices.length - 3 
                      ? 'text-neutral-300 cursor-not-allowed' 
                      : 'text-black hover:bg-neutral-200'
                  }`}
                  aria-label="Next cities"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Show Less Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setShowAllCities(false);
                    setCityStartIndex(0);
                  }}
                  className="inline-flex items-center gap-2 text-black hover:text-neutral-600 transition-colors font-mono text-sm uppercase tracking-wide"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Show Less
                </button>
              </div>

              {/* Page Indicator */}
              <div className="mt-4 text-center text-sm text-neutral-500">
                Showing {cityStartIndex + 1}-{Math.min(cityStartIndex + 3, cityServices.length)} of {cityServices.length} cities
              </div>
            </>
          )}
        </motion.div>

      </div>
    </section>);

}