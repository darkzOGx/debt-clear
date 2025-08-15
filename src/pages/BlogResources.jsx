import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogResources() {
  const [selectedCategory, setSelectedCategory] = useState('All');
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
    },
    {
      title: "Orange County Bankruptcy vs Debt Settlement: Complete Comparison",
      excerpt: "Detailed analysis of bankruptcy and debt settlement options for Orange County residents, including pros, cons, and costs.",
      slug: "/blog/bankruptcy-vs-debt-settlement-orange-county",
      date: "Aug 1, 2025",
      readTime: "15 min read",
      category: "Financial Planning"
    },
    {
      title: "Medical Debt Settlement in Orange County: Your Rights and Options",
      excerpt: "How to handle medical debt from Orange County hospitals and healthcare providers, including settlement strategies.",
      slug: "/blog/medical-debt-settlement-orange-county",
      date: "Jul 28, 2025",
      readTime: "9 min read",
      category: "Medical Debt"
    },
    {
      title: "Credit Card Debt Settlement: Orange County Success Stories",
      excerpt: "Real examples of credit card debt settlements for Orange County residents, including timeline and outcomes.",
      slug: "/blog/credit-card-debt-settlement-orange-county",
      date: "Jul 25, 2025",
      readTime: "11 min read",
      category: "Case Studies"
    },
    {
      title: "Orange County Small Business Debt Relief Options",
      excerpt: "Comprehensive guide to debt relief solutions for Orange County small businesses, from negotiation to restructuring.",
      slug: "/blog/small-business-debt-relief-orange-county",
      date: "Jul 20, 2025",
      readTime: "13 min read",
      category: "Business Finance"
    },
    {
      title: "Tax Implications of Debt Settlement in California",
      excerpt: "Understanding the tax consequences of debt settlement for Orange County residents and how to minimize impact.",
      slug: "/blog/tax-implications-debt-settlement-california",
      date: "Jul 15, 2025",
      readTime: "8 min read",
      category: "Tax Planning"
    },
    {
      title: "Debt Settlement for Orange County Seniors: Special Considerations",
      excerpt: "Age-specific debt relief strategies for Orange County seniors, including asset protection and fixed income planning.",
      slug: "/blog/debt-settlement-seniors-orange-county",
      date: "Jul 12, 2025",
      readTime: "10 min read",
      category: "Senior Finance"
    },
    {
      title: "Student Loan Debt Relief in Orange County: Options Beyond Settlement",
      excerpt: "Comprehensive guide to student loan relief programs available to Orange County residents, including forgiveness options.",
      slug: "/blog/student-loan-debt-relief-orange-county",
      date: "Jul 8, 2025",
      readTime: "14 min read",
      category: "Student Loans"
    },
    {
      title: "Orange County Property Protection During Debt Settlement",
      excerpt: "How to protect your Orange County home and assets during the debt settlement process using California exemptions.",
      slug: "/blog/property-protection-debt-settlement-orange-county",
      date: "Jul 5, 2025",
      readTime: "12 min read",
      category: "Asset Protection"
    },
    {
      title: "Debt Settlement Timeline: What Orange County Residents Can Expect",
      excerpt: "Month-by-month breakdown of the debt settlement process for Orange County clients, from consultation to completion.",
      slug: "/blog/debt-settlement-timeline-orange-county",
      date: "Jul 1, 2025",
      readTime: "9 min read",
      category: "Process Guide"
    },
    {
      title: "Orange County Debt Settlement Fees: Understanding the Costs",
      excerpt: "Transparent breakdown of debt settlement fees in Orange County, including what's legal and how to avoid overcharges.",
      slug: "/blog/debt-settlement-fees-orange-county",
      date: "Jun 28, 2025",
      readTime: "7 min read",
      category: "Cost Analysis"
    },
    {
      title: "Credit Score Recovery After Debt Settlement in Orange County",
      excerpt: "Step-by-step guide to rebuilding credit after debt settlement, with timelines and strategies for Orange County residents.",
      slug: "/blog/credit-score-recovery-debt-settlement-orange-county",
      date: "Jun 25, 2025",
      readTime: "11 min read",
      category: "Credit Repair"
    },
    {
      title: "Orange County Debt Collection Laws: Know Your Rights",
      excerpt: "Complete guide to debt collection regulations in Orange County, including illegal practices and how to file complaints.",
      slug: "/blog/debt-collection-laws-orange-county",
      date: "Jun 20, 2025",
      readTime: "10 min read",
      category: "Consumer Rights"
    },
    {
      title: "Credit Card Debt Relief Orange County: Complete 2025 Guide",
      excerpt: "Comprehensive strategies for Orange County residents struggling with credit card debt, including settlement options and AI-powered solutions.",
      slug: "/blog/credit-card-debt-relief-orange-county-2025",
      date: "Aug 15, 2025",
      readTime: "14 min read",
      category: "Credit Card Debt"
    },
    {
      title: "Medical Debt Relief Orange County: Healthcare Debt Solutions",
      excerpt: "Comprehensive guide to medical debt relief for Orange County residents, including hospital bill negotiations and insurance disputes.",
      slug: "/blog/medical-debt-relief-orange-county-2025",
      date: "Aug 15, 2025",
      readTime: "13 min read",
      category: "Medical Debt"
    },
    {
      title: "Orange County Debt Consolidation: Complete 2025 Guide",
      excerpt: "Comprehensive analysis of debt consolidation options for Orange County residents, including personal loans and balance transfers.",
      slug: "/blog/orange-county-debt-consolidation-2025",
      date: "Aug 15, 2025",
      readTime: "16 min read",
      category: "Debt Consolidation"
    },
    {
      title: "Orange County Business Debt Relief: Small Business Solutions",
      excerpt: "Comprehensive strategies for Orange County small businesses struggling with commercial debt, including SBA loan modifications.",
      slug: "/blog/business-debt-relief-orange-county-2025",
      date: "Aug 15, 2025",
      readTime: "18 min read",
      category: "Business Finance"
    },
    {
      title: "Orange County Debt Laws 2025: Consumer Protection Guide",
      excerpt: "Comprehensive overview of California debt collection laws, Orange County court procedures, and consumer rights for 2025.",
      slug: "/blog/orange-county-debt-laws-2025",
      date: "Aug 15, 2025",
      readTime: "20 min read",
      category: "Legal Guide"
    },
    {
      title: "Orange County Foreclosure Alternatives: Save Your Home in 2025",
      excerpt: "Comprehensive guide to foreclosure prevention in Orange County, including loan modifications and emergency assistance programs.",
      slug: "/blog/orange-county-foreclosure-alternatives-2025",
      date: "Aug 15, 2025",
      readTime: "17 min read",
      category: "Foreclosure Prevention"
    },
    {
      title: "Orange County Senior Debt Relief: Fixed Income Solutions",
      excerpt: "Specialized debt relief strategies for Orange County seniors on fixed incomes, including Social Security protection.",
      slug: "/blog/orange-county-senior-debt-relief-2025",
      date: "Aug 15, 2025",
      readTime: "15 min read",
      category: "Senior Finance"
    },
    {
      title: "Orange County Tax Debt Relief: IRS & State Solutions",
      excerpt: "Comprehensive guide to resolving IRS and California tax debt for Orange County residents, including installment agreements.",
      slug: "/blog/orange-county-tax-debt-relief-2025",
      date: "Aug 15, 2025",
      readTime: "19 min read",
      category: "Tax Relief"
    },
    {
      title: "Orange County Student Loan Forgiveness: 2025 Relief Programs",
      excerpt: "Complete guide to student loan forgiveness and relief programs for Orange County residents, including PSLF updates.",
      slug: "/blog/orange-county-student-loan-forgiveness-2025",
      date: "Aug 15, 2025",
      readTime: "22 min read",
      category: "Student Loans"
    },
    {
      title: "Orange County Bankruptcy Alternatives: Better Solutions 2025",
      excerpt: "Comprehensive exploration of bankruptcy alternatives for Orange County residents, including debt settlement and workout agreements.",
      slug: "/blog/orange-county-bankruptcy-alternatives-2025",
      date: "Aug 15, 2025",
      readTime: "21 min read",
      category: "Bankruptcy Alternatives"
    }
  ];

  // Get unique categories and add 'All' option
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(articles.map(article => article.category))];
    return ['All', ...uniqueCategories.sort()];
  }, []);

  // Filter articles based on selected category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') {
      return articles;
    }
    return articles.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              DEBT SETTLEMENT INSIGHTS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Orange County
            <br />
            <span className="font-mono text-3xl lg:text-4xl">Debt Relief Resources</span>
          </h1>

          <p className="text-xl text-neutral-700 leading-relaxed font-light max-w-3xl">
            Comprehensive guides, case studies, and expert insights on debt settlement, consumer protection, 
            and financial recovery specifically for Orange County residents.
          </p>
        </div>
      </section>

      {/* Category Filter Summary */}
      {selectedCategory !== 'All' && (
        <section className="py-8 bg-white border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-600">Showing articles in:</span>
                <span className="text-sm font-mono text-black bg-neutral-100 px-3 py-1">
                  {selectedCategory}
                </span>
                <span className="text-sm text-neutral-500">
                  ({filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''})
                </span>
              </div>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="text-sm font-mono text-neutral-600 hover:text-black transition-colors"
              >
                Clear Filter
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
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
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8">Browse by Category</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`p-4 border transition-colors cursor-pointer text-center ${
                  selectedCategory === category 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white border-neutral-200 hover:border-black'
                }`}
              >
                <span className={`text-sm font-mono ${
                  selectedCategory === category 
                    ? 'text-white' 
                    : 'text-neutral-700 hover:text-black'
                }`}>
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Stay Updated on <span className="font-mono">Orange County</span> Debt Laws
          </h2>
          
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
            Get monthly insights on debt settlement regulations, consumer protection updates, 
            and success stories from Orange County.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-black text-sm font-mono"
            />
            <button className="px-6 py-3 bg-white text-black hover:bg-neutral-100 text-sm font-mono uppercase tracking-wide transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-neutral-500 mt-4">
            No spam. Unsubscribe anytime. Orange County debt relief updates only.
          </p>
        </div>
      </section>
    </div>
  );
}