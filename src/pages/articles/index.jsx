import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const ArticlesIndex = () => {
  const articles = [
    {
      id: 'orange-county-debt-settlement-laws',
      title: 'Orange County Debt Settlement Laws: What Every Resident Needs to Know in 2025',
      excerpt: 'Complete guide to understanding California debt settlement regulations, DFPI licensing requirements, and your legal rights as an Orange County resident.',
      category: 'Legal & Regulations',
      readTime: '12 min read',
      publishDate: 'August 26, 2025',
      keywords: ['debt settlement laws', 'DFPI licensing', 'consumer rights'],
      path: '/articles/orange-county-debt-settlement-laws'
    },
    {
      id: 'dfpi-licensed-debt-settlement-orange-county',
      title: 'DFPI Licensed Debt Settlement Orange County: Why Licensing Matters',
      excerpt: 'Learn the critical differences between licensed and unlicensed debt settlement companies and how DFPI licensing protects your financial future.',
      category: 'Licensing & Protection',
      readTime: '10 min read',
      publishDate: 'August 26, 2025',
      keywords: ['DFPI licensing', 'consumer protection', 'licensed companies'],
      path: '/articles/dfpi-licensed-debt-settlement-orange-county'
    },
    {
      id: 'irvine-debt-relief-companies-comparison',
      title: 'Irvine Debt Relief Companies Comparison: Your 2025 Guide',
      excerpt: 'Expert comparison of debt relief options for Irvine residents, including national vs. local companies and what to look for when choosing a partner.',
      category: 'Local Guides',
      readTime: '11 min read',
      publishDate: 'August 26, 2025',
      keywords: ['Irvine debt relief', 'company comparison', 'local services'],
      path: '/articles/irvine-debt-relief-companies-comparison'
    },
    {
      id: 'orange-county-medical-debt-forgiveness',
      title: 'Orange County Medical Debt Forgiveness: Complete Healthcare Debt Relief Guide',
      excerpt: 'Comprehensive guide to medical debt relief in Orange County, including hospital charity programs, settlement strategies, and legal protections.',
      category: 'Medical Debt',
      readTime: '13 min read',
      publishDate: 'August 26, 2025',
      keywords: ['medical debt forgiveness', 'hospital charity care', 'healthcare debt'],
      path: '/articles/orange-county-medical-debt-forgiveness'
    },
    {
      id: 'santa-ana-credit-card-debt-settlement',
      title: 'Santa Ana Credit Card Debt Settlement: Your Local Guide to Financial Recovery',
      excerpt: 'Detailed guide to credit card debt settlement for Santa Ana residents, covering the process, legal protections, and success strategies.',
      category: 'Credit Card Debt',
      readTime: '12 min read',
      publishDate: 'August 26, 2025',
      keywords: ['Santa Ana debt settlement', 'credit card debt', 'financial recovery'],
      path: '/articles/santa-ana-credit-card-debt-settlement'
    }
  ];

  const categories = ['All', 'Legal & Regulations', 'Licensing & Protection', 'Local Guides', 'Medical Debt', 'Credit Card Debt'];

  return (
    <>
      <Helmet>
        <title>Orange County Debt Settlement Articles & Guides | Expert Insights</title>
        <meta name="description" content="Expert articles and guides on debt settlement, medical debt forgiveness, and financial recovery for Orange County residents. Written by licensed professionals with 15+ years experience." />
        <meta name="keywords" content="Orange County debt settlement articles, debt relief guides, financial recovery, DFPI licensed advice" />
        <link rel="canonical" href="https://orangecountydebtcenter.com/" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                Expert Debt Settlement Articles & Guides
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                In-depth insights from 15+ years of helping Orange County families achieve financial freedom. 
                All articles written by DFPI-licensed debt settlement professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === 'All' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article 
                  key={article.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    {/* Category & Meta */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.publishDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      <Link 
                        to={article.path}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.keywords.map((keyword) => (
                        <span 
                          key={keyword}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <Link 
                      to={article.path}
                      className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated on Debt Relief News
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest articles, regulatory updates, and expert insights delivered to your inbox. 
                Join over 5,000 Orange County residents who rely on our expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-blue-50 border-l-4 border-blue-400 p-8 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Need Personalized Debt Relief Guidance?
                </h3>
                <p className="text-blue-800 mb-6 max-w-3xl mx-auto">
                  Our DFPI-licensed specialists provide free consultations to Orange County residents. 
                  Get expert advice tailored to your specific financial situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:8445419236"
                    className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Call (844) 541-9236 - Free Consultation
                  </a>
                  <a
                    href="#consultation"
                    className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Get Free Debt Analysis
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default ArticlesIndex;