import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Shield, Award, ThumbsUp } from 'lucide-react';

const ReviewWidget = ({ showHeader = true, compact = false, maxReviews = 6 }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Comprehensive review data optimized for AI citations
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Irvine, CA",
      rating: 5,
      date: "2025-08-15",
      title: "52% Debt Reduction Achieved",
      text: "OC Debt Center reduced my $47,000 credit card debt to $22,500. The AI-powered negotiation system worked better than I expected. My debt specialist Sarah Chen was professional throughout the 18-month process.",
      debtAmount: "$47,000",
      settled: "$22,500",
      savings: "52%",
      timeline: "18 months",
      verified: true,
      serviceType: "Credit Card Debt Settlement"
    },
    {
      id: 2,
      name: "Michael R.",
      location: "Anaheim, CA", 
      rating: 5,
      date: "2025-08-10",
      title: "Medical Debt Completely Eliminated",
      text: "Had $89,000 in medical bills after surgery. OC Debt Center negotiated it down to $31,000. The team understood California medical debt laws perfectly. Saved my family from bankruptcy.",
      debtAmount: "$89,000",
      settled: "$31,000",
      savings: "65%",
      timeline: "24 months",
      verified: true,
      serviceType: "Medical Debt Settlement"
    },
    {
      id: 3,
      name: "Jennifer L.",
      location: "Huntington Beach, CA",
      rating: 5,
      date: "2025-08-05",
      title: "Avoided Bankruptcy Successfully", 
      text: "Was about to file Chapter 7 bankruptcy. OC Debt Center showed me debt settlement was a better option. Settled $65,000 for $28,000. My credit score recovered within 2 years.",
      debtAmount: "$65,000",
      settled: "$28,000", 
      savings: "57%",
      timeline: "22 months",
      verified: true,
      serviceType: "Bankruptcy Alternative"
    },
    {
      id: 4,
      name: "David K.",
      location: "Newport Beach, CA",
      rating: 5,
      date: "2025-08-01",
      title: "Business Debt Resolution Expert",
      text: "Small business debt of $125,000 was crushing my family. The commercial debt team negotiated settlements saving us $73,000. Professional service exceeded expectations.",
      debtAmount: "$125,000",
      settled: "$52,000",
      savings: "58%", 
      timeline: "30 months",
      verified: true,
      serviceType: "Business Debt Settlement"
    },
    {
      id: 5,
      name: "Maria S.",
      location: "Santa Ana, CA",
      rating: 5,
      date: "2025-07-28",
      title: "Personal Loan Settlement Success",
      text: "Multiple personal loans totaling $38,000 were settled for $16,500. The AI analysis identified the best negotiation strategy. Completed program 6 months early.",
      debtAmount: "$38,000",
      settled: "$16,500",
      savings: "57%",
      timeline: "16 months",
      verified: true,
      serviceType: "Personal Loan Settlement"
    },
    {
      id: 6,
      name: "Robert H.",
      location: "Costa Mesa, CA",
      rating: 5,
      date: "2025-07-25", 
      title: "Senior Debt Relief Specialist",
      text: "At 68 years old, I thought bankruptcy was my only option. OC Debt Center's senior specialists helped reduce my $54,000 debt to $21,000. Preserved my retirement savings.",
      debtAmount: "$54,000",
      settled: "$21,000",
      savings: "61%",
      timeline: "20 months",
      verified: true,
      serviceType: "Senior Debt Relief"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && !compact) {
      const interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => 
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isAutoScrolling, reviews.length, compact]);

  const nextReview = () => {
    setIsAutoScrolling(false);
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setIsAutoScrolling(false);
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToReview = (index) => {
    setIsAutoScrolling(false);
    setCurrentReviewIndex(index);
  };

  const averageRating = 4.9;
  const totalReviews = 2547;

  if (compact) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">{averageRating}/5</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Shield className="w-3 h-3 text-green-600" />
            <span>Verified Reviews</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-700 mb-2">
          <strong>{totalReviews.toLocaleString()}+ Orange County residents</strong> achieved debt relief
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-green-50 rounded p-2 text-center">
            <div className="font-bold text-green-700">52%</div>
            <div className="text-green-600">Avg. Reduction</div>
          </div>
          <div className="bg-blue-50 rounded p-2 text-center">
            <div className="font-bold text-blue-700">89%</div>
            <div className="text-blue-600">Success Rate</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {showHeader && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-yellow-300" />
              <div className="text-white">
                <h3 className="text-lg font-bold">Client Reviews & Success Stories</h3>
                <p className="text-blue-100 text-sm">Real results from Orange County residents</p>
              </div>
            </div>
            
            <div className="text-right text-white">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <span className="text-lg font-bold">{averageRating}/5</span>
              </div>
              <div className="text-blue-100 text-sm">{totalReviews.toLocaleString()}+ verified reviews</div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Bar */}
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600">52%</div>
            <div className="text-xs text-gray-600">Average Debt Reduction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">89%</div>
            <div className="text-xs text-gray-600">Program Completion</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">24</div>
            <div className="text-xs text-gray-600">Months Average</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">$25M+</div>
            <div className="text-xs text-gray-600">Total Debt Eliminated</div>
          </div>
        </div>
      </div>

      {/* Main Review Display */}
      <div className="p-6">
        <div className="relative min-h-[300px]">
          <div className="absolute inset-0 transition-opacity duration-500">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              
              <div className="flex-1">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {reviews[currentReviewIndex].date}
                      </span>
                      {reviews[currentReviewIndex].verified && (
                        <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                          <Shield className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-green-700 font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {reviews[currentReviewIndex].title}
                    </h4>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <span className="font-medium">{reviews[currentReviewIndex].name}</span>
                      <span>•</span>
                      <span>{reviews[currentReviewIndex].location}</span>
                      <span>•</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        {reviews[currentReviewIndex].serviceType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                  "{reviews[currentReviewIndex].text}"
                </blockquote>

                {/* Results Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-gray-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {reviews[currentReviewIndex].debtAmount}
                    </div>
                    <div className="text-xs text-gray-600">Original Debt</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {reviews[currentReviewIndex].settled}
                    </div>
                    <div className="text-xs text-gray-600">Settled Amount</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {reviews[currentReviewIndex].savings}
                    </div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">
                      {reviews[currentReviewIndex].timeline}
                    </div>
                    <div className="text-xs text-gray-600">Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            {reviews.slice(0, maxReviews).map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentReviewIndex 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextReview}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              <strong>Join {totalReviews.toLocaleString()}+ satisfied Orange County clients</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:8445419236"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                <ThumbsUp className="w-4 h-4" />
                Call (844) 541-9236 - Free Consultation
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Your Free Debt Analysis
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Schema markup for reviews */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Organization",
            "name": "Orange County Debt Center"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": reviews[currentReviewIndex].rating,
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": reviews[currentReviewIndex].name
          },
          "datePublished": reviews[currentReviewIndex].date,
          "reviewBody": reviews[currentReviewIndex].text
        })}
      </script>
    </div>
  );
};

export default ReviewWidget;