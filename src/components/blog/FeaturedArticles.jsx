import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedArticles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const featuredArticles = [
    {
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

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredArticles.length - 3 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= featuredArticles.length - 3 ? 0 : prevIndex + 1
    );
  };

  const visibleArticles = featuredArticles.slice(currentIndex, currentIndex + 3);
  
  // If we don't have 3 articles to show, wrap around
  if (visibleArticles.length < 3) {
    const remaining = 3 - visibleArticles.length;
    visibleArticles.push(...featuredArticles.slice(0, remaining));
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white border-y border-blue-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
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
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full border border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              aria-label="Previous articles"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              aria-label="Next articles"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {visibleArticles.map((article, index) => (
            <motion.article
              key={`${article.slug}-${currentIndex}-${index}`}
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
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.badge}
                      </span>
                      <span className="text-blue-600 text-sm font-medium">
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
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(featuredArticles.length / 3) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * 3)}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(currentIndex / 3) === i 
                  ? 'bg-blue-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedArticles;