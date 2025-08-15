import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, Clock, Shield, Award, ChevronRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    category: "Credit Card Debt",
    title: "Tech Professional Eliminates $127K in Credit Card Debt",
    client: "Michael R.",
    location: "Irvine, CA",
    occupation: "Software Engineer",
    initialDebt: 127000,
    finalAmount: 51000,
    savings: 76000,
    percentSaved: 60,
    timeline: "18 months",
    creditors: 7,
    summary: "After a startup failure left him with massive credit card debt, Michael worked with our AI system to negotiate settlements with 7 major creditors.",
    challenge: "Michael had accumulated debt across 7 credit cards while funding his failed startup. With interest rates averaging 24%, minimum payments exceeded $3,500/month.",
    solution: "Our AI analyzed Michael's financial situation and creditor patterns, creating a strategic negotiation plan that prioritized high-interest accounts first.",
    results: [
      "Reduced total debt by 60%",
      "Eliminated $76,000 in principal and interest",
      "Completed program 6 months ahead of schedule",
      "Now debt-free and rebuilding credit"
    ],
    testimonial: "I thought bankruptcy was my only option. VegaX AI not only saved me $76,000 but helped me keep my home and retirement accounts intact.",
    featured: true
  },
  {
    id: 2,
    category: "Medical Debt",
    title: "Retired Couple Settles $89K in Medical Bills",
    client: "Robert & Linda S.",
    location: "Laguna Woods, CA",
    occupation: "Retirees",
    initialDebt: 89000,
    finalAmount: 31000,
    savings: 58000,
    percentSaved: 65,
    timeline: "14 months",
    creditors: 4,
    summary: "After Linda's cancer treatment, this retired couple faced overwhelming medical debt that threatened their retirement security.",
    challenge: "Unexpected medical expenses from cancer treatment drained savings. Fixed income made it impossible to pay mounting medical bills.",
    solution: "Negotiated with hospital systems and medical providers, leveraging financial hardship provisions and charity care programs.",
    results: [
      "Saved $58,000 on medical debt",
      "Protected retirement accounts",
      "Maintained Laguna Woods Village residence",
      "Preserved credit for future medical needs"
    ],
    testimonial: "We never thought we'd face financial crisis in retirement. VegaX AI gave us our life back.",
    featured: true
  },
  {
    id: 3,
    category: "Business Debt",
    title: "Restaurant Owner Saves Business with $234K Settlement",
    client: "Jennifer L.",
    location: "Newport Beach, CA",
    occupation: "Restaurant Owner",
    initialDebt: 234000,
    finalAmount: 94000,
    savings: 140000,
    percentSaved: 60,
    timeline: "20 months",
    creditors: 9,
    summary: "Newport Beach restaurant owner avoided bankruptcy and kept business operational despite pandemic-related debt.",
    challenge: "COVID-19 decimated restaurant revenue. Equipment loans, vendor debt, and business credit cards totaled $234,000.",
    solution: "Created separate settlement strategies for equipment financing, vendor accounts, and credit lines while maintaining critical supplier relationships.",
    results: [
      "Business remained operational",
      "Saved $140,000 in debt reduction",
      "Preserved vendor relationships",
      "Currently profitable and growing"
    ],
    testimonial: "They understood the complexity of business debt and created solutions that kept my restaurant alive.",
    featured: false
  },
  {
    id: 4,
    category: "Personal Loans",
    title: "Young Family Eliminates $67K in Personal Loans",
    client: "David & Maria T.",
    location: "Santa Ana, CA",
    occupation: "Teacher & Nurse",
    initialDebt: 67000,
    finalAmount: 28000,
    savings: 39000,
    percentSaved: 58,
    timeline: "16 months",
    creditors: 5,
    summary: "Dual-income family with three children successfully settled personal loans taken for home repairs and medical expenses.",
    challenge: "Multiple personal loans with rates up to 36% APR. Monthly payments exceeded $2,100, straining family budget.",
    solution: "Prioritized high-interest loans, negotiated lump-sum settlements using structured payment timeline.",
    results: [
      "Reduced debt by 58%",
      "Saved $39,000",
      "Kept children in same school",
      "Avoided bankruptcy"
    ],
    testimonial: "As educators, we were embarrassed about our debt. VegaX treated us with dignity and delivered amazing results.",
    featured: false
  },
  {
    id: 5,
    category: "Mixed Debt",
    title: "Divorced Mother Settles $95K Mixed Debt Portfolio",
    client: "Sarah M.",
    location: "Anaheim, CA",
    occupation: "Marketing Manager",
    initialDebt: 95000,
    finalAmount: 38000,
    savings: 57000,
    percentSaved: 60,
    timeline: "15 months",
    creditors: 8,
    summary: "Single mother successfully navigated post-divorce debt including credit cards, personal loans, and medical bills.",
    challenge: "Divorce left Sarah with joint debt responsibility. Single income couldn't support $2,800 monthly minimums.",
    solution: "Separated joint debt obligations, prioritized settlements based on legal liability and collection risk.",
    results: [
      "Eliminated 60% of total debt",
      "Maintained custody arrangement",
      "Kept primary residence",
      "Rebuilt emergency fund"
    ],
    testimonial: "After my divorce, I felt hopeless. VegaX AI gave me a fresh start for me and my kids.",
    featured: false
  }
];

const categories = ["All", "Credit Card Debt", "Medical Debt", "Business Debt", "Personal Loans", "Mixed Debt"];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filteredStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-6">
              Real Results.
              <br />
              <span className="font-mono">Real People.</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Discover how Orange County residents eliminated millions in debt through our AI-powered settlement program.
            </p>
            
            {/* Stats Summary */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-mono text-black mb-2">$8.4M</div>
                <div className="text-sm text-neutral-600">Total Debt Eliminated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-mono text-black mb-2">312</div>
                <div className="text-sm text-neutral-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-mono text-black mb-2">58%</div>
                <div className="text-sm text-neutral-600">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-mono text-black mb-2">16 Mo</div>
                <div className="text-sm text-neutral-600">Average Timeline</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="w-4 h-4 text-neutral-600 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-mono uppercase tracking-wide whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-neutral-300 hover:border-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-neutral-200 hover:border-black transition-colors cursor-pointer"
                onClick={() => setSelectedStudy(study)}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                        {study.category}
                      </span>
                      <h3 className="text-2xl font-light text-black mt-2">
                        {study.title}
                      </h3>
                    </div>
                    {study.featured && (
                      <Award className="w-5 h-5 text-black" />
                    )}
                  </div>

                  {/* Client Info */}
                  <div className="text-sm text-neutral-600 mb-6">
                    <p>{study.client} • {study.location}</p>
                    <p>{study.occupation}</p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs font-mono uppercase text-neutral-500 mb-1">
                        Original Debt
                      </div>
                      <div className="text-xl font-mono text-black">
                        {formatCurrency(study.initialDebt)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-neutral-500 mb-1">
                        Settled For
                      </div>
                      <div className="text-xl font-mono text-black">
                        {formatCurrency(study.finalAmount)}
                      </div>
                    </div>
                  </div>

                  {/* Savings Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-mono">Saved {formatCurrency(study.savings)}</span>
                      <span className="font-mono">{study.percentSaved}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 h-2">
                      <div 
                        className="bg-black h-full"
                        style={{ width: `${study.percentSaved}%` }}
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-neutral-600 mb-6">
                    {study.summary}
                  </p>

                  {/* Footer Stats */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span><Clock className="w-3 h-3 inline mr-1" />{study.timeline}</span>
                    <span>{study.creditors} creditors</span>
                  </div>

                  {/* Read More */}
                  <button className="mt-6 flex items-center gap-2 text-black hover:gap-3 transition-all">
                    <span className="font-mono text-sm uppercase tracking-wide">Read Full Story</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Case Study Modal */}
      {selectedStudy && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedStudy(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 lg:p-12">
              {/* Close button */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="float-right text-neutral-500 hover:text-black"
              >
                ✕
              </button>

              {/* Content */}
              <span className="text-xs font-mono uppercase tracking-wide text-neutral-600">
                {selectedStudy.category}
              </span>
              <h2 className="text-3xl font-light text-black mt-2 mb-6">
                {selectedStudy.title}
              </h2>

              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-xs font-mono uppercase text-neutral-500 mb-2">Client</div>
                  <p className="text-black">{selectedStudy.client}</p>
                  <p className="text-sm text-neutral-600">{selectedStudy.location}</p>
                  <p className="text-sm text-neutral-600">{selectedStudy.occupation}</p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-neutral-500 mb-2">Debt Reduced</div>
                  <p className="text-2xl font-mono text-black">{selectedStudy.percentSaved}%</p>
                  <p className="text-sm text-neutral-600">
                    {formatCurrency(selectedStudy.savings)} saved
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-neutral-500 mb-2">Timeline</div>
                  <p className="text-2xl font-mono text-black">{selectedStudy.timeline}</p>
                  <p className="text-sm text-neutral-600">{selectedStudy.creditors} creditors</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-black mb-3">The Challenge</h3>
                  <p className="text-neutral-600">{selectedStudy.challenge}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-3">Our Solution</h3>
                  <p className="text-neutral-600">{selectedStudy.solution}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-3">Results</h3>
                  <ul className="space-y-2">
                    {selectedStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Shield className="w-4 h-4 text-black mt-0.5" />
                        <span className="text-neutral-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-50 border-l-4 border-black p-6">
                  <p className="text-neutral-700 italic">"{selectedStudy.testimonial}"</p>
                  <p className="text-sm font-mono text-neutral-500 mt-3">
                    — {selectedStudy.client}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200">
                <Link
                  to="/get-started"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-neutral-800 transition-colors"
                >
                  <span className="font-mono text-sm uppercase tracking-wide">
                    Start Your Success Story
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}