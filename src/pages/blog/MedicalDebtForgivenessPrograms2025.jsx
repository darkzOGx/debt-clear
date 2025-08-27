import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MapPin, Heart, Hospital, Shield, DollarSign, ChevronRight } from 'lucide-react';
import ConsultationForm from '../../components/consultation/ConsultationForm';
import SmartHeading from '../../components/SmartHeading';

export default function MedicalDebtForgivenessPrograms2025() {
  const [selectedHospital, setSelectedHospital] = useState('all');
  const currentYear = new Date().getFullYear();
  
  const orangeCountyHospitals = [
    {
      name: "UCI Medical Center",
      location: "Orange",
      charityCareLimit: "$85,000",
      averageReduction: "60-100%",
      processingTime: "30-45 days",
      phone: "(714) 456-6011"
    },
    {
      name: "Hoag Memorial Hospital",
      location: "Newport Beach",
      charityCareLimit: "$125,000",
      averageReduction: "70-100%",
      processingTime: "21-30 days",
      phone: "(949) 764-4624"
    },
    {
      name: "St. Jude Medical Center",
      location: "Fullerton",
      charityCareLimit: "$95,000",
      averageReduction: "50-90%",
      processingTime: "15-30 days",
      phone: "(714) 871-3280"
    },
    {
      name: "Children's Hospital of Orange County",
      location: "Orange",
      charityCareLimit: "$150,000",
      averageReduction: "80-100%",
      processingTime: "10-21 days",
      phone: "(714) 997-3000"
    }
  ];

  const faqItems = [
    {
      question: "What medical debts qualify for forgiveness programs near Orange County?",
      answer: "Most emergency room visits, hospital stays, surgeries, and diagnostic procedures from Orange County hospitals qualify. This includes UCI Medical Center, Hoag, St. Jude, CHOC, and Kaiser facilities. Forgiveness typically covers charges from uninsured or underinsured care, with many programs accepting patients earning up to $125,000 annually."
    },
    {
      question: "How do I find medical debt forgiveness programs in my Orange County city?",
      answer: "Each major Orange County hospital has financial assistance programs. Contact patient financial services at your hospital directly, or visit our office in Santa Ana for personalized assistance. We maintain updated applications for all OC hospitals and can help you apply to multiple programs simultaneously for maximum debt relief."
    },
    {
      question: "Can medical debt forgiveness programs help with emergency room bills?",
      answer: "Yes! Emergency room bills are the most commonly forgiven medical debts. Under California's Fair Pricing Act, hospitals must offer charity care for emergency services. Orange County ERs like UCI, Hoag, and St. Jude typically forgive 60-100% of emergency bills for qualifying patients."
    },
    {
      question: "What income limits apply to Orange County medical debt forgiveness?",
      answer: "Income limits vary by hospital but most Orange County programs serve families earning up to $85,000-$150,000 annually. Hoag offers assistance up to $125,000 household income, while CHOC serves families up to $150,000. Even higher-income families may qualify for partial discounts of 30-50%."
    },
    {
      question: "How long does the medical debt forgiveness application process take?",
      answer: "Processing times range from 10-60 days depending on the hospital. CHOC typically responds within 10-21 days, while Kaiser may take 45-60 days. We expedite applications by ensuring complete documentation upfront and following up directly with hospital financial departments throughout Orange County."
    },
    {
      question: "Can I apply for medical debt forgiveness after my bill went to collections?",
      answer: "Yes, but time is critical. Most Orange County hospitals accept charity care applications even after bills go to collections, but success rates drop significantly after 240 days. If you're already in collections, we can negotiate directly with collection agencies and pursue retroactive hospital forgiveness programs simultaneously."
    }
  ];

  const filteredHospitals = selectedHospital === 'all' 
    ? orangeCountyHospitals 
    : orangeCountyHospitals.filter(h => h.location.toLowerCase().includes(selectedHospital.toLowerCase()));

  return (
    <>
      <Helmet>
        <title>Medical Debt Forgiveness Programs Near Me | Orange County 2025 Directory</title>
        <meta name="description" content="Find medical debt forgiveness programs in Orange County. Hospital charity care at UCI, Hoag, St. Jude, CHOC. Get 60-100% debt elimination. Free assistance with applications." />
        <meta name="keywords" content="medical debt forgiveness programs near me, Orange County hospital charity care, emergency room bill forgiveness, UCI medical center financial assistance, Hoag charity care 2025" />
        <link rel="canonical" href="https://orangecountydebtcenter.com/" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `Medical Debt Forgiveness Programs Near Orange County - ${currentYear} Guide`,
            "description": "Complete directory of medical debt forgiveness programs in Orange County. Get hospital charity care, emergency room bill relief, and debt elimination assistance.",
            "author": {
              "@type": "Organization",
              "name": "Orange County Debt Center"
            },
            "datePublished": `${currentYear}-01-01`,
            "dateModified": new Date().toISOString().split('T')[0]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog-resources" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-300 hover:text-white transition-colors mb-8 z-10 relative">
            <ArrowLeft className="w-4 h-4" />Back to Resources</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">MEDICAL DEBT RELIEF</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Medical Debt Forgiveness Programs Near Me:<br />
            <span className="font-mono text-3xl lg:text-4xl">Orange County {currentYear} Directory</span>
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2"><Heart className="w-4 h-4" /><span>{currentYear} Updated</span></div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>12 min read</span></div>
            <div className="flex items-center gap-2"><Hospital className="w-4 h-4" /><span>Hospital Specialists</span></div>
          </div>
          <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
            If you're struggling with medical bills in Orange County, you're not alone. With over 60% of 
            bankruptcies caused by medical debt, local hospitals like UCI Medical Center, Hoag, and St. Jude offer extensive 
            forgiveness programs that can eliminate 60-100% of your medical debt. This comprehensive guide 
            shows you exactly how to access these programs and get the financial relief you deserve.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heart className="w-8 h-8 text-black mb-2" />
              <div className="text-2xl font-bold">45%</div>
              <div className="text-sm text-neutral-600">OC Residents Have Medical Debt</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <DollarSign className="w-8 h-8 text-black mb-2" />
              <div className="text-2xl font-bold">$6,800</div>
              <div className="text-sm text-neutral-600">Average ER Bill</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-black mb-2" />
              <div className="text-2xl font-bold">60-100%</div>
              <div className="text-sm text-neutral-600">Debt Forgiveness Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Hospital className="w-8 h-8 text-black mb-2" />
              <div className="text-2xl font-bold">$486M</div>
              <div className="text-sm text-neutral-600">Annual Charity Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 max-w-4xl mx-auto px-6">

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Orange County Hospital Forgiveness Programs Directory</h2>
          
          <p className="text-lg mb-4">
            Orange County's major hospitals are required by state law to provide charity care programs for qualifying patients. 
            These programs can eliminate 60-100% of medical debt for families earning up to $150,000 annually, with partial 
            assistance available for higher income levels.
          </p>

          <div className="bg-black text-white p-8 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Hospital Charity Care Quick Reference</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li>• UCI Medical Center: Up to $85,000 income</li>
                <li>• Hoag Memorial: Up to $125,000 income</li>
                <li>• St. Jude Medical: Up to $95,000 income</li>
                <li>• CHOC: Up to $150,000 income</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>• Emergency room visits always qualify</li>
                <li>• Applications accepted post-collections</li>
                <li>• Processing time: 10-45 days</li>
                <li>• Free application assistance available</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Location:
            </label>
            <select 
              value={selectedHospital} 
              onChange={(e) => setSelectedHospital(e.target.value)}
              className="w-full md:w-auto p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="all">All Orange County Hospitals</option>
              <option value="orange">Orange</option>
              <option value="newport">Newport Beach</option>
              <option value="fullerton">Fullerton</option>
            </select>
          </div>
        </section>

        {/* Hospital Directory */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Major Hospital Programs</h3>
          
          <div className="space-y-4 mb-6">
            {filteredHospitals.map((hospital, index) => (
              <div key={index} className="pl-6 border-l-4 border-neutral-200">
                <h4 className="font-bold mb-2">{hospital.name} - {hospital.location}</h4>
                <p className="text-sm mb-2">Income limit: {hospital.charityCareLimit} | Reduction: {hospital.averageReduction} | Processing: {hospital.processingTime}</p>
                <ul className="text-sm space-y-1 text-neutral-600">
                  <li>• Full charity care for qualifying households</li>
                  <li>• Partial discounts for higher income levels</li>
                  <li>• Application phone: <a href={`tel:${hospital.phone}`} className="text-blue-600 hover:underline">{hospital.phone}</a></li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consultation Section */}
        <section id="consultation" className="mb-12">
          <div className="bg-black text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Get Expert Help with Medical Debt Forgiveness</h2>
            <p className="text-xl mb-6 text-neutral-300">
              Navigate hospital charity care programs and maximize your forgiveness potential with professional assistance.
            </p>
            <div className="mb-8">
              <a href="tel:+18445419236" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-100 transition">
                <Phone className="w-6 h-6" />
                (844) 541-9236 - Free Medical Debt Assessment
              </a>
            </div>
            <ConsultationForm />
          </div>
        </section>

          <div className="bg-neutral-100 rounded-lg p-6 text-sm text-gray-600">
            <p className="mb-2">
              <strong>Important Note:</strong> This information is based on publicly available hospital policies as of {currentYear}. 
              Hospital programs and income limits may change. We recommend contacting hospitals directly or working with our specialists 
              to ensure you have the most current information for your situation.
            </p>
            <p>
              <strong>Service Area:</strong> We assist patients throughout Orange County including all major hospitals: 
              UCI Medical Center (Orange), Hoag Memorial (Newport Beach), St. Jude Medical Center (Fullerton), 
              CHOC (Orange), Kaiser Permanente locations, and all affiliated medical facilities.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}