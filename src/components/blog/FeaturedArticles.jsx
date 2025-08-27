import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED_ARTICLES = [
  {
    id: 1,
    title: "Orange County Debt Settlement Laws: What Every Resident Needs to Know in 2025",
    excerpt: "Complete guide to understanding California debt settlement regulations, DFPI licensing requirements, and your legal rights as an Orange County resident.",
    slug: "/blog/orange-county-debt-settlement-laws",
    date: "Aug 26, 2025",
    readTime: "12 min read",
    category: "Legal & Regulations",
    author: "Licensed Debt Settlement Expert",
    featured: true,
    badge: "Expert Guide"
  },
  {
    id: 2,
    title: "DFPI Licensed Debt Settlement Orange County: Why Licensing Matters",
    excerpt: "Learn the critical differences between licensed and unlicensed debt settlement companies and how DFPI licensing protects your financial future.",
    slug: "/blog/dfpi-licensed-debt-settlement-orange-county",
    date: "Aug 26, 2025", 
    readTime: "10 min read",
    category: "Licensing & Protection",
    author: "Licensed Debt Settlement Expert",
    featured: true,
    badge: "Consumer Protection"
  },
  {
    id: 3,
    title: "Irvine Debt Relief Companies Comparison: Your 2025 Guide",
    excerpt: "Expert comparison of debt relief options for Irvine residents, including national vs. local companies and what to look for when choosing a partner.",
    slug: "/blog/irvine-debt-relief-companies-comparison",
    date: "Aug 26, 2025",
    readTime: "11 min read", 
    category: "Local Guides",
    author: "Licensed Debt Settlement Expert",
    featured: true,
    badge: "Local Expert"
  },
  {
    id: 4,
    title: "Orange County Medical Debt Forgiveness: Complete Healthcare Debt Relief Guide",
    excerpt: "Comprehensive guide to medical debt relief in Orange County, including hospital charity programs, settlement strategies, and legal protections.",
    slug: "/blog/orange-county-medical-debt-forgiveness",
    date: "Aug 26, 2025",
    readTime: "13 min read",
    category: "Medical Debt",
    author: "Licensed Debt Settlement Expert", 
    featured: true,
    badge: "Medical Debt Specialist"
  },
  {
    id: 5,
    title: "Santa Ana Credit Card Debt Settlement: Your Local Guide to Financial Recovery",
    excerpt: "Detailed guide to credit card debt settlement for Santa Ana residents, covering the process, legal protections, and success strategies.",
    slug: "/blog/santa-ana-credit-card-debt-settlement",
    date: "Aug 26, 2025",
    readTime: "12 min read",
    category: "Credit Card Debt",
    author: "Licensed Debt Settlement Expert",
    featured: true,
    badge: "Bilingual Services"
  }
];

const FeaturedArticles = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Calculate how many pages we need (5 articles, 3 per page = 2 pages)
  const articlesPerPage = 3;
  const totalPages = Math.ceil(FEATURED_ARTICLES.length / articlesPerPage);
  
  const goToPrevious = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const goToNext = () => {
    setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
  };

  // Get the articles for current page
  const startIndex = currentPage * articlesPerPage;
  const endIndex = Math.min(startIndex + articlesPerPage, FEATURED_ARTICLES.length);
  const visibleArticles = FEATURED_ARTICLES.slice(startIndex, endIndex);
  
  // Pad with empty slots if we have fewer than 3 articles on the last page
  while (visibleArticles.length < articlesPerPage && currentPage === totalPages - 1) {
    visibleArticles.push(null);
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white border-y border-blue-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-blue-600 fill-current" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Featured Articles</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Expert Debt Settlement Insights
          </h2>
          <p className="text-gray-600 max-w-2xl">
            In-depth guides from 15+ years of helping Orange County families achieve financial freedom. 
            All articles written by DFPI-licensed professionals.
          </p>
        </div>

        {/* Articles Grid with Side Navigation */}
        <div className="relative flex items-center">
          {/* Left Navigation Button */}
          <button
            onClick={goToPrevious}
            disabled={currentPage === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg border transition-all ${
              currentPage === 0 
                ? 'border-gray-200 cursor-not-allowed opacity-50' 
                : 'border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:shadow-xl'
            }`}
            aria-label="Previous articles"
          >
            <ChevronLeft className={`w-6 h-6 ${
              currentPage === 0 ? 'text-gray-400' : 'text-gray-600'
            }`} />
          </button>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-3 gap-8 w-full">
          {visibleArticles.map((article, index) => (
            article ? (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link to={article.slug} className="block h-full">
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    
                    {/* Article Header */}
                    <div className="p-6 flex-1">
                      {/* Badge & Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {article.badge}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {article.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium text-sm">DE</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{article.author}</p>
                          <p className="text-xs text-gray-500">15+ Years Experience</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Article Footer */}
                    <div className="p-6 pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:text-blue-700">
                          Read Article
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ) : (
              <div key={`empty-${index}`} className="invisible" />
            )
          ))}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={goToNext}
            disabled={currentPage >= totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg border transition-all ${
              currentPage >= totalPages - 1
                ? 'border-gray-200 cursor-not-allowed opacity-50' 
                : 'border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:shadow-xl'
            }`}
            aria-label="Next articles"
          >
            <ChevronRight className={`w-6 h-6 ${
              currentPage >= totalPages - 1 ? 'text-gray-400' : 'text-gray-600'
            }`} />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === i 
                  ? 'bg-blue-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default FeaturedArticles;