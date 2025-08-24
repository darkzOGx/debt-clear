import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  const articles = [
    {
      title: "Orange County Debt Settlement Laws: What You Need to Know",
      excerpt: "Understanding California's debt settlement regulations and how they protect Orange County residents from predatory practices.",
      slug: "/blog/orange-county-debt-settlement-laws",
      date: "Aug 15, 2025",
      readTime: "8 min read",
      category: "Legal Guide"
    },
    {
      title: "AI vs Traditional Debt Settlement: Orange County Case Studies",
      excerpt: "Real results comparing AI-powered debt negotiation with traditional companies for Orange County families.",
      slug: "/blog/ai-vs-traditional-debt-settlement",
      date: "Aug 10, 2025", 
      readTime: "12 min read",
      category: "Technology"
    },
    {
      title: "How to Choose a Debt Settlement Company in Orange County",
      excerpt: "Essential criteria for selecting a debt settlement provider, including licensing, fees, and success rates.",
      slug: "/blog/choose-debt-settlement-company-orange-county",
      date: "Aug 5, 2025",
      readTime: "10 min read",
      category: "Consumer Guide"
    }
  ];

  return (
    <>
    <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
              DEBT SETTLEMENT INSIGHTS
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Orange County:<br />
            <span className="font-mono text-3xl lg:text-4xl">Debt Relief Resources</span>
          </h2>
          
          <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto">
            Expert insights, legal updates, and success stories from Orange County's leading 
            debt settlement specialists.
          </p>
        </div>
      </div>
    </section>

    {/* Articles Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-50 border border-neutral-200 overflow-hidden hover:border-black transition-colors duration-200"
            >
              <Link 
                to={article.slug}
                className="block p-6 h-full cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wide text-neutral-500">
                    {article.category}
                  </span>
                  <div className="h-px flex-1 bg-neutral-200"></div>
                </div>

                <h3 className="text-xl font-semibold text-black mb-4 leading-tight">
                  {article.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-black">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Resources Link */}
        <div className="text-center mt-8">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-neutral-800 text-sm font-mono uppercase tracking-wide transition-colors"
          >
            View All Resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
    </>
  );
}