import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogResources() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoryStartIndex, setCategoryStartIndex] = useState(0);
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
      date: "Aug 14, 2025", 
      readTime: "12 min read",
      category: "Technology"
    },
    {
      title: "How to Choose a Debt Settlement Company in Orange County",
      excerpt: "Essential criteria for selecting a debt settlement provider, including licensing, fees, and success rates.",
      slug: "/blog/choose-debt-settlement-company-orange-county",
      date: "Aug 13, 2025",
      readTime: "10 min read",
      category: "Consumer Guide"
    },
    {
      title: "Orange County Bankruptcy vs Debt Settlement: Complete Comparison",
      excerpt: "Detailed analysis of bankruptcy and debt settlement options for Orange County residents, including pros, cons, and costs.",
      slug: "/blog/bankruptcy-vs-debt-settlement-orange-county",
      date: "Aug 12, 2025",
      readTime: "15 min read",
      category: "Financial Planning"
    },
    {
      title: "Medical Debt Settlement in Orange County: Your Rights and Options",
      excerpt: "How to handle medical debt from Orange County hospitals and healthcare providers, including settlement strategies.",
      slug: "/blog/medical-debt-settlement-orange-county",
      date: "Aug 11, 2025",
      readTime: "9 min read",
      category: "Medical Debt"
    },
    {
      title: "Credit Card Debt Settlement: Orange County Success Stories",
      excerpt: "Real examples of credit card debt settlements for Orange County residents, including timeline and outcomes.",
      slug: "/blog/credit-card-debt-settlement-orange-county",
      date: "Aug 10, 2025",
      readTime: "11 min read",
      category: "Case Studies"
    },
    {
      title: "Orange County Small Business Debt Relief Options",
      excerpt: "Comprehensive guide to debt relief solutions for Orange County small businesses, from negotiation to restructuring.",
      slug: "/blog/small-business-debt-relief-orange-county",
      date: "Aug 9, 2025",
      readTime: "13 min read",
      category: "Business Finance"
    },
    {
      title: "Tax Implications of Debt Settlement in California",
      excerpt: "Understanding the tax consequences of debt settlement for Orange County residents and how to minimize impact.",
      slug: "/blog/tax-implications-debt-settlement-california",
      date: "Aug 8, 2025",
      readTime: "8 min read",
      category: "Tax Planning"
    },
    {
      title: "Debt Settlement for Orange County Seniors: Special Considerations",
      excerpt: "Age-specific debt relief strategies for Orange County seniors, including asset protection and fixed income planning.",
      slug: "/blog/debt-settlement-seniors-orange-county",
      date: "Aug 7, 2025",
      readTime: "10 min read",
      category: "Senior Finance"
    },
    {
      title: "Student Loan Debt Relief in Orange County: Options Beyond Settlement",
      excerpt: "Comprehensive guide to student loan relief programs available to Orange County residents, including forgiveness options.",
      slug: "/blog/student-loan-debt-relief-orange-county",
      date: "Aug 6, 2025",
      readTime: "14 min read",
      category: "Student Loans"
    },
    {
      title: "Orange County Property Protection During Debt Settlement",
      excerpt: "How to protect your Orange County home and assets during the debt settlement process using California exemptions.",
      slug: "/blog/property-protection-debt-settlement-orange-county",
      date: "Aug 5, 2025",
      readTime: "12 min read",
      category: "Asset Protection"
    },
    {
      title: "Debt Settlement Timeline: What Orange County Residents Can Expect",
      excerpt: "Month-by-month breakdown of the debt settlement process for Orange County clients, from consultation to completion.",
      slug: "/blog/debt-settlement-timeline-orange-county",
      date: "Aug 4, 2025",
      readTime: "9 min read",
      category: "Process Guide"
    },
    {
      title: "Orange County Debt Settlement Fees: Understanding the Costs",
      excerpt: "Transparent breakdown of debt settlement fees in Orange County, including what's legal and how to avoid overcharges.",
      slug: "/blog/debt-settlement-fees-orange-county",
      date: "Aug 3, 2025",
      readTime: "7 min read",
      category: "Cost Analysis"
    },
    {
      title: "Credit Score Recovery After Debt Settlement in Orange County",
      excerpt: "Step-by-step guide to rebuilding credit after debt settlement, with timelines and strategies for Orange County residents.",
      slug: "/blog/credit-score-recovery-debt-settlement-orange-county",
      date: "Aug 2, 2025",
      readTime: "11 min read",
      category: "Credit Repair"
    },
    {
      title: "Orange County Debt Collection Laws: Know Your Rights",
      excerpt: "Complete guide to debt collection regulations in Orange County, including illegal practices and how to file complaints.",
      slug: "/blog/debt-collection-laws-orange-county",
      date: "Aug 1, 2025",
      readTime: "10 min read",
      category: "Consumer Rights"
    },
    {
      title: "Credit Card Debt Relief Orange County: Complete 2025 Guide",
      excerpt: "Comprehensive strategies for Orange County residents struggling with credit card debt, including settlement options and AI-powered solutions.",
      slug: "/blog/credit-card-debt-relief-orange-county-2025",
      date: "Jun 15, 2025",
      readTime: "14 min read",
      category: "Credit Card Debt"
    },
    {
      title: "Medical Debt Relief Orange County: Healthcare Debt Solutions",
      excerpt: "Comprehensive guide to medical debt relief for Orange County residents, including hospital bill negotiations and insurance disputes.",
      slug: "/blog/medical-debt-relief-orange-county-2025",
      date: "Jun 15, 2025",
      readTime: "13 min read",
      category: "Medical Debt"
    },
    {
      title: "Orange County Debt Consolidation: Complete 2025 Guide",
      excerpt: "Comprehensive analysis of debt consolidation options for Orange County residents, including personal loans and balance transfers.",
      slug: "/blog/orange-county-debt-consolidation-2025",
      date: "Jun 15, 2025",
      readTime: "16 min read",
      category: "Debt Consolidation"
    },
    {
      title: "Orange County Business Debt Relief: Small Business Solutions",
      excerpt: "Comprehensive strategies for Orange County small businesses struggling with commercial debt, including SBA loan modifications.",
      slug: "/blog/business-debt-relief-orange-county-2025",
      date: "Jun 15, 2025",
      readTime: "18 min read",
      category: "Business Finance"
    },
    {
      title: "Orange County Debt Laws 2025: Consumer Protection Guide",
      excerpt: "Comprehensive overview of California debt collection laws, Orange County court procedures, and consumer rights for 2025.",
      slug: "/blog/orange-county-debt-laws-2025",
      date: "Jun 15, 2025",
      readTime: "20 min read",
      category: "Legal Guide"
    },
    {
      title: "Orange County Foreclosure Alternatives: Save Your Home in 2025",
      excerpt: "Comprehensive guide to foreclosure prevention in Orange County, including loan modifications and emergency assistance programs.",
      slug: "/blog/orange-county-foreclosure-alternatives-2025",
      date: "Jun 15, 2025",
      readTime: "17 min read",
      category: "Foreclosure Prevention"
    },
    {
      title: "Orange County Senior Debt Relief: Fixed Income Solutions",
      excerpt: "Specialized debt relief strategies for Orange County seniors on fixed incomes, including Social Security protection.",
      slug: "/blog/orange-county-senior-debt-relief-2025",
      date: "Jun 15, 2025",
      readTime: "15 min read",
      category: "Senior Finance"
    },
    {
      title: "Orange County Tax Debt Relief: IRS & State Solutions",
      excerpt: "Comprehensive guide to resolving IRS and California tax debt for Orange County residents, including installment agreements.",
      slug: "/blog/orange-county-tax-debt-relief-2025",
      date: "Jun 15, 2025",
      readTime: "19 min read",
      category: "Tax Relief"
    },
    {
      title: "Orange County Student Loan Forgiveness: 2025 Relief Programs",
      excerpt: "Complete guide to student loan forgiveness and relief programs for Orange County residents, including PSLF updates.",
      slug: "/blog/orange-county-student-loan-forgiveness-2025",
      date: "Jun 15, 2025",
      readTime: "22 min read",
      category: "Student Loans"
    },
    {
      title: "Orange County Bankruptcy Alternatives: Better Solutions 2025",
      excerpt: "Comprehensive exploration of bankruptcy alternatives for Orange County residents, including debt settlement and workout agreements.",
      slug: "/blog/orange-county-bankruptcy-alternatives-2025",
      date: "Jun 15, 2025",
      readTime: "21 min read",
      category: "Bankruptcy Alternatives"
    },
    // Additional Legal Guide articles
    {
      title: "Orange County Debt Settlement Attorney vs DIY: When You Need Legal Help",
      excerpt: "Understanding when to hire a debt settlement attorney in Orange County and when you can handle debt relief negotiations yourself.",
      slug: "/blog/debt-settlement-attorney-orange-county",
      date: "Jul 30, 2025",
      readTime: "12 min read",
      category: "Legal Guide"
    },
    // Additional Technology articles
    {
      title: "How AI Debt Settlement Technology Works: Orange County Case Analysis",
      excerpt: "Deep dive into artificial intelligence debt settlement algorithms and how they optimize negotiations for Orange County residents.",
      slug: "/blog/ai-debt-settlement-technology-orange-county",
      date: "Jul 29, 2025",
      readTime: "15 min read",
      category: "Technology"
    },
    {
      title: "Machine Learning in Debt Relief: The Future of Orange County Debt Settlement",
      excerpt: "Exploring machine learning applications in debt settlement and how technology is revolutionizing debt relief in Orange County.",
      slug: "/blog/machine-learning-debt-relief-orange-county",
      date: "Jul 28, 2025",
      readTime: "13 min read",
      category: "Technology"
    },
    // Additional Consumer Guide articles
    {
      title: "Debt Settlement Scams in Orange County: Red Flags and How to Avoid Them",
      excerpt: "Comprehensive guide to identifying and avoiding debt settlement scams targeting Orange County residents, with real examples.",
      slug: "/blog/debt-settlement-scams-orange-county",
      date: "Jul 26, 2025",
      readTime: "11 min read",
      category: "Consumer Guide"
    },
    {
      title: "Orange County Debt Settlement Checklist: 15 Steps Before You Start",
      excerpt: "Essential pre-settlement checklist for Orange County residents considering debt relief, including document preparation and financial assessment.",
      slug: "/blog/debt-settlement-checklist-orange-county",
      date: "Jul 25, 2025",
      readTime: "9 min read",
      category: "Consumer Guide"
    },
    // Additional Financial Planning articles
    {
      title: "Post-Debt Settlement Financial Planning for Orange County Families",
      excerpt: "Complete financial planning guide for Orange County residents after debt settlement, including budgeting and wealth building strategies.",
      slug: "/blog/financial-planning-after-debt-settlement-orange-county",
      date: "Jul 24, 2025",
      readTime: "16 min read",
      category: "Financial Planning"
    },
    {
      title: "Emergency Fund Building After Debt Relief: Orange County Strategies",
      excerpt: "How to build emergency funds and financial stability after debt settlement for Orange County residents, with local resources.",
      slug: "/blog/emergency-fund-building-debt-relief-orange-county",
      date: "Jul 23, 2025",
      readTime: "12 min read",
      category: "Financial Planning"
    },
    // Additional Medical Debt articles
    {
      title: "Orange County Hospital Debt Settlement: Negotiating with Major Healthcare Systems",
      excerpt: "Specialized strategies for settling debt with Orange County's major hospitals including UCI Health, CHOC, and Kaiser Permanente.",
      slug: "/blog/hospital-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "14 min read",
      category: "Medical Debt"
    },
    // Additional Case Studies articles
    {
      title: "Orange County Debt Settlement Success Stories: Real Client Outcomes 2024-2025",
      excerpt: "Detailed case studies of successful debt settlements for Orange County residents, including timelines, savings, and lessons learned.",
      slug: "/blog/debt-settlement-success-stories-orange-county-2025",
      date: "Jun 15, 2025",
      readTime: "18 min read",
      category: "Case Studies"
    },
    {
      title: "Orange County Small Business Debt Settlement: 5 Real Business Case Studies",
      excerpt: "In-depth analysis of small business debt settlement cases in Orange County, showing strategies and outcomes for different industries.",
      slug: "/blog/small-business-debt-settlement-case-studies-orange-county",
      date: "Jun 15, 2025",
      readTime: "20 min read",
      category: "Case Studies"
    },
    // Additional Business Finance articles
    {
      title: "Orange County Commercial Debt Settlement: B2B Debt Relief Strategies",
      excerpt: "Comprehensive guide to commercial debt settlement for Orange County businesses, including supplier negotiations and payment plans.",
      slug: "/blog/commercial-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "17 min read",
      category: "Business Finance"
    },
    // Additional Tax Planning articles
    {
      title: "1099-C Tax Forms and Debt Settlement: Orange County Guide",
      excerpt: "Understanding 1099-C tax implications of debt settlement for Orange County residents, including form preparation and tax strategies.",
      slug: "/blog/1099c-tax-forms-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "10 min read",
      category: "Tax Planning"
    },
    {
      title: "California State Tax Implications of Debt Relief: Orange County Edition",
      excerpt: "Comprehensive guide to California state tax consequences of debt settlement for Orange County residents, with planning strategies.",
      slug: "/blog/california-tax-implications-debt-relief-orange-county",
      date: "Jun 15, 2025",
      readTime: "13 min read",
      category: "Tax Planning"
    },
    // Additional Senior Finance articles
    {
      title: "Social Security and Debt Settlement: Protection Strategies for Orange County Seniors",
      excerpt: "How Orange County seniors can protect Social Security benefits during debt settlement and maximize fixed-income debt relief options.",
      slug: "/blog/social-security-debt-settlement-orange-county-seniors",
      date: "Jun 15, 2025",
      readTime: "12 min read",
      category: "Senior Finance"
    },
    // Additional Student Loans articles
    {
      title: "Private Student Loan Settlement: Options for Orange County Graduates",
      excerpt: "Comprehensive guide to private student loan settlement for Orange County graduates, including negotiation strategies and alternatives.",
      slug: "/blog/private-student-loan-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "16 min read",
      category: "Student Loans"
    },
    // Additional Asset Protection articles
    {
      title: "California Homestead Exemption: Protecting Your Orange County Home During Debt Settlement",
      excerpt: "Complete guide to California homestead exemption laws and how Orange County residents can protect their homes during debt relief.",
      slug: "/blog/homestead-exemption-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "14 min read",
      category: "Asset Protection"
    },
    {
      title: "Orange County Asset Protection Trusts and Debt Settlement: Advanced Strategies",
      excerpt: "Advanced asset protection strategies for high-net-worth Orange County residents considering debt settlement, including trust structures.",
      slug: "/blog/asset-protection-trusts-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "19 min read",
      category: "Asset Protection"
    },
    // Additional Process Guide articles
    {
      title: "Orange County Debt Settlement Process: Step-by-Step Guide 2025",
      excerpt: "Detailed walkthrough of the debt settlement process for Orange County residents, from initial consultation to final resolution.",
      slug: "/blog/debt-settlement-process-guide-orange-county-2025",
      date: "Jun 15, 2025",
      readTime: "15 min read",
      category: "Process Guide"
    },
    {
      title: "Debt Settlement Negotiations: What Orange County Residents Should Expect",
      excerpt: "Inside look at debt settlement negotiations for Orange County residents, including creditor tactics and response strategies.",
      slug: "/blog/debt-settlement-negotiations-orange-county",
      date: "Jun 15, 2025",
      readTime: "11 min read",
      category: "Process Guide"
    },
    // Additional Cost Analysis articles
    {
      title: "Orange County Debt Settlement vs Bankruptcy: Complete Cost Comparison 2025",
      excerpt: "Detailed cost analysis comparing debt settlement and bankruptcy for Orange County residents, including hidden fees and long-term impacts.",
      slug: "/blog/debt-settlement-vs-bankruptcy-cost-comparison-orange-county",
      date: "Jun 15, 2025",
      readTime: "13 min read",
      category: "Cost Analysis"
    },
    {
      title: "Hidden Costs of Debt Settlement in Orange County: What to Watch For",
      excerpt: "Comprehensive breakdown of potential hidden costs in debt settlement for Orange County residents and how to avoid unnecessary fees.",
      slug: "/blog/hidden-costs-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "9 min read",
      category: "Cost Analysis"
    },
    // Additional Credit Repair articles
    {
      title: "Credit Repair After Debt Settlement: Orange County Success Strategies",
      excerpt: "Proven credit repair strategies for Orange County residents after debt settlement, including timeline expectations and best practices.",
      slug: "/blog/credit-repair-after-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "14 min read",
      category: "Credit Repair"
    },
    {
      title: "Building Credit During Debt Settlement: Orange County Resident Guide",
      excerpt: "How Orange County residents can maintain and improve credit scores during the debt settlement process with strategic planning.",
      slug: "/blog/building-credit-during-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "12 min read",
      category: "Credit Repair"
    },
    // Additional Consumer Rights articles
    {
      title: "Orange County Debt Collector Harassment: Know Your Rights and Remedies",
      excerpt: "Complete guide to consumer rights against debt collector harassment in Orange County, including legal remedies and complaint processes.",
      slug: "/blog/debt-collector-harassment-rights-orange-county",
      date: "Jun 15, 2025",
      readTime: "13 min read",
      category: "Consumer Rights"
    },
    {
      title: "Fair Debt Collection Practices Act: Orange County Consumer Protection",
      excerpt: "Understanding FDCPA protections for Orange County residents, including violations, reporting procedures, and legal remedies.",
      slug: "/blog/fdcpa-consumer-protection-orange-county",
      date: "Jun 15, 2025",
      readTime: "11 min read",
      category: "Consumer Rights"
    },
    // Additional Credit Card Debt articles
    {
      title: "Orange County Credit Card Debt Settlement: Major Bank Negotiation Strategies",
      excerpt: "Specialized strategies for settling credit card debt with major banks serving Orange County residents, including Chase, Bank of America, and Wells Fargo.",
      slug: "/blog/credit-card-debt-settlement-major-banks-orange-county",
      date: "Jun 15, 2025",
      readTime: "16 min read",
      category: "Credit Card Debt"
    },
    {
      title: "High-Interest Credit Card Debt Relief: Orange County Emergency Solutions",
      excerpt: "Emergency debt relief strategies for Orange County residents struggling with high-interest credit card debt and minimum payment traps.",
      slug: "/blog/high-interest-credit-card-debt-relief-orange-county",
      date: "Jun 15, 2025",
      readTime: "12 min read",
      category: "Credit Card Debt"
    },
    // Additional Debt Consolidation articles
    {
      title: "Orange County Debt Consolidation Loans: Banks vs Credit Unions vs Online Lenders",
      excerpt: "Comprehensive comparison of debt consolidation loan options for Orange County residents, including local banks and credit unions.",
      slug: "/blog/debt-consolidation-loans-comparison-orange-county",
      date: "Jun 15, 2025",
      readTime: "15 min read",
      category: "Debt Consolidation"
    },
    {
      title: "Balance Transfer vs Debt Settlement: Orange County Resident Guide",
      excerpt: "Detailed comparison of balance transfers and debt settlement for Orange County residents, including qualification requirements and outcomes.",
      slug: "/blog/balance-transfer-vs-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "13 min read",
      category: "Debt Consolidation"
    },
    // Additional Foreclosure Prevention articles
    {
      title: "Orange County Mortgage Modification vs Debt Settlement: Protecting Your Home",
      excerpt: "Comprehensive guide to mortgage modifications and debt settlement strategies for Orange County homeowners facing foreclosure.",
      slug: "/blog/mortgage-modification-vs-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "18 min read",
      category: "Foreclosure Prevention"
    },
    {
      title: "Orange County Short Sale vs Debt Settlement: Real Estate Debt Solutions",
      excerpt: "Comparing short sale and debt settlement options for Orange County homeowners with underwater mortgages and financial distress.",
      slug: "/blog/short-sale-vs-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "14 min read",
      category: "Foreclosure Prevention"
    },
    // Additional Tax Relief articles
    {
      title: "IRS Payment Plans vs Debt Settlement: Orange County Tax Relief Options",
      excerpt: "Comprehensive comparison of IRS payment plans and debt settlement for Orange County residents with federal tax debt problems.",
      slug: "/blog/irs-payment-plans-vs-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "16 min read",
      category: "Tax Relief"
    },
    {
      title: "California FTB Debt Settlement: State Tax Relief for Orange County Residents",
      excerpt: "Specialized guide to California Franchise Tax Board debt settlement and relief options for Orange County residents with state tax debt.",
      slug: "/blog/california-ftb-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "12 min read",
      category: "Tax Relief"
    },
    // Additional Bankruptcy Alternatives articles
    {
      title: "Chapter 7 vs Debt Settlement: Orange County Resident Decision Guide",
      excerpt: "Detailed comparison of Chapter 7 bankruptcy and debt settlement for Orange County residents, including eligibility and long-term impacts.",
      slug: "/blog/chapter-7-vs-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "17 min read",
      category: "Bankruptcy Alternatives"
    },
    {
      title: "Debt Management Plans vs Debt Settlement: Orange County Consumer Options",
      excerpt: "Comprehensive comparison of debt management plans and debt settlement for Orange County consumers, including pros, cons, and qualification requirements.",
      slug: "/blog/debt-management-plans-vs-debt-settlement-orange-county",
      date: "Jun 15, 2025",
      readTime: "14 min read",
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center justify-center gap-3 mb-6">
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

          <p className="text-xl text-neutral-700 leading-relaxed font-light max-w-3xl mx-auto">
            Comprehensive guides, case studies, and expert insights on debt settlement, consumer protection, 
            and financial recovery specifically for Orange County residents.
          </p>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8">Browse by Category</h2>
          
          <div className="flex items-center gap-4">
            {/* Previous Arrow */}
            <button
              onClick={() => setCategoryStartIndex(Math.max(0, categoryStartIndex - 3))}
              disabled={categoryStartIndex === 0}
              className={`p-2 transition-colors ${
                categoryStartIndex === 0 
                  ? 'text-neutral-300 cursor-not-allowed' 
                  : 'text-black hover:bg-neutral-200'
              }`}
              aria-label="Previous categories"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Categories Display */}
            <div className="flex-1 grid grid-cols-3 gap-4">
              {categories.slice(categoryStartIndex, categoryStartIndex + 3).map((category, index) => (
                <button 
                  key={categoryStartIndex + index}
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

            {/* Next Arrow */}
            <button
              onClick={() => setCategoryStartIndex(Math.min(categories.length - 3, categoryStartIndex + 3))}
              disabled={categoryStartIndex >= categories.length - 3}
              className={`p-2 transition-colors ${
                categoryStartIndex >= categories.length - 3 
                  ? 'text-neutral-300 cursor-not-allowed' 
                  : 'text-black hover:bg-neutral-200'
              }`}
              aria-label="Next categories"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
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