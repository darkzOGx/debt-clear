import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, CheckCircle, TrendingUp, Award, Users, MessageSquare } from 'lucide-react';

const ReviewSystem = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [userName, setUserName] = useState('');
  const [debtAmount, setDebtAmount] = useState('');
  const [savedAmount, setSavedAmount] = useState('');

  // Real-time social proof notifications
  const [notifications, setNotifications] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Irvine, CA",
      rating: 5,
      date: "2 days ago",
      debtType: "Credit Card",
      originalDebt: 67000,
      settled: 28000,
      saved: 39000,
      timeframe: "16 months",
      text: "VegaX AI helped me reduce my credit card debt by 58%. The AI system made negotiations smooth and stress-free. I'm finally debt-free!",
      verified: true,
      helpful: 47,
      platform: "Google"
    },
    {
      id: 2,
      name: "Michael C.",
      location: "Newport Beach, CA",
      rating: 5,
      date: "1 week ago",
      debtType: "Business Debt",
      originalDebt: 234000,
      settled: 94000,
      saved: 140000,
      timeframe: "20 months",
      text: "Saved my restaurant from bankruptcy during COVID. They understood business debt complexity and created solutions that kept my doors open.",
      verified: true,
      helpful: 82,
      platform: "Trustpilot"
    },
    {
      id: 3,
      name: "Jennifer & Robert L.",
      location: "Laguna Woods, CA",
      rating: 5,
      date: "2 weeks ago",
      debtType: "Medical Debt",
      originalDebt: 89000,
      settled: 31000,
      saved: 58000,
      timeframe: "14 months",
      text: "After my cancer treatment left us with overwhelming medical bills, VegaX AI negotiated with hospitals and saved us $58,000. We kept our retirement home!",
      verified: true,
      helpful: 156,
      platform: "BBB"
    },
    {
      id: 4,
      name: "David T.",
      location: "Santa Ana, CA",
      rating: 4,
      date: "3 weeks ago",
      debtType: "Personal Loans",
      originalDebt: 45000,
      settled: 20000,
      saved: 25000,
      timeframe: "12 months",
      text: "Great results overall. Saved 55% on my personal loans. Only minor issue was initial wait time, but once started, everything went perfectly.",
      verified: true,
      helpful: 31,
      platform: "Google"
    },
    {
      id: 5,
      name: "Maria S.",
      location: "Anaheim, CA",
      rating: 5,
      date: "1 month ago",
      debtType: "Mixed Debt",
      originalDebt: 95000,
      settled: 38000,
      saved: 57000,
      timeframe: "15 months",
      text: "Post-divorce debt felt hopeless. VegaX AI gave me and my kids a fresh start. Professional, compassionate, and delivered amazing results.",
      verified: true,
      helpful: 93,
      platform: "Yelp"
    }
  ];

  // Simulated real-time notifications
  useEffect(() => {
    const messages = [
      { name: "John D.", location: "Irvine", action: "just saved $45,000 on credit card debt" },
      { name: "Lisa M.", location: "Newport Beach", action: "completed their debt settlement program" },
      { name: "Robert K.", location: "Santa Ana", action: "reduced their debt by 62%" },
      { name: "Jennifer P.", location: "Huntington Beach", action: "started their debt-free journey" },
      { name: "Michael S.", location: "Laguna Beach", action: "settled $78,000 in business debt" }
    ];

    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setNotifications([randomMessage]);
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 30000); // Show every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const stats = {
    totalReviews: 312,
    averageRating: 4.9,
    totalSaved: 8400000,
    successRate: 96,
    averageSavings: 58,
    completionTime: 16
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Handle review submission
    console.log({
      rating: selectedRating,
      text: reviewText,
      name: userName,
      debtAmount,
      savedAmount
    });
    // Reset form
    setSelectedRating(0);
    setReviewText('');
    setUserName('');
    setDebtAmount('');
    setSavedAmount('');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-12">
      {/* Real-time Notification */}
      {showNotification && notifications.length > 0 && (
        <div className="fixed bottom-4 left-4 bg-white border border-neutral-200 shadow-lg p-4 max-w-sm animate-slide-up z-50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm text-black">
                <span className="font-semibold">{notifications[0].name}</span> from {notifications[0].location}
              </p>
              <p className="text-xs text-neutral-600">{notifications[0].action}</p>
            </div>
          </div>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="bg-neutral-50 border border-neutral-200 p-8">
        <h2 className="text-2xl font-light text-black mb-6 text-center">
          Trusted by <span className="font-mono">Thousands</span> in Orange County
        </h2>
        
        <div className="grid md:grid-cols-6 gap-6 text-center">
          <div>
            <div className="text-3xl font-mono text-black mb-1">{stats.totalReviews}</div>
            <div className="text-xs text-neutral-600">Verified Reviews</div>
          </div>
          <div>
            <div className="flex justify-center items-center gap-1 mb-1">
              <span className="text-3xl font-mono text-black">{stats.averageRating}</span>
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-xs text-neutral-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-mono text-black mb-1">${(stats.totalSaved / 1000000).toFixed(1)}M</div>
            <div className="text-xs text-neutral-600">Total Saved</div>
          </div>
          <div>
            <div className="text-3xl font-mono text-black mb-1">{stats.successRate}%</div>
            <div className="text-xs text-neutral-600">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-mono text-black mb-1">{stats.averageSavings}%</div>
            <div className="text-xs text-neutral-600">Avg Savings</div>
          </div>
          <div>
            <div className="text-3xl font-mono text-black mb-1">{stats.completionTime}mo</div>
            <div className="text-xs text-neutral-600">Avg Timeline</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-mono">BBB Accredited</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-mono">CA Licensed</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-mono">AFCC Member</span>
          </div>
        </div>
      </div>

      {/* Review Cards */}
      <div>
        <h3 className="text-2xl font-light text-black mb-6">
          Recent <span className="font-mono">Success Stories</span>
        </h3>
        
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-neutral-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-black">{review.name}</h4>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-xs text-green-600">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                    <span className="text-xs text-neutral-500">{review.platform}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-600">
                    <span>{review.location}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                    <span>•</span>
                    <span>{review.debtType}</span>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Savings Metrics */}
              <div className="grid grid-cols-4 gap-4 mb-4 p-4 bg-neutral-50">
                <div>
                  <div className="text-xs text-neutral-600">Original Debt</div>
                  <div className="font-mono text-black">{formatCurrency(review.originalDebt)}</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-600">Settled For</div>
                  <div className="font-mono text-black">{formatCurrency(review.settled)}</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-600">Total Saved</div>
                  <div className="font-mono text-green-600">{formatCurrency(review.saved)}</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-600">Timeline</div>
                  <div className="font-mono text-black">{review.timeframe}</div>
                </div>
              </div>

              <p className="text-neutral-700 mb-4">{review.text}</p>

              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-black">
                  <ThumbsUp className="w-4 h-4" />
                  Helpful ({review.helpful})
                </button>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-mono text-green-600">
                    {Math.round((review.saved / review.originalDebt) * 100)}% Saved
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Review Form */}
      <div className="bg-white border border-neutral-200 p-8">
        <h3 className="text-2xl font-light text-black mb-6">
          Share Your <span className="font-mono">Success Story</span>
        </h3>
        
        <form onSubmit={handleSubmitReview} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Your Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setSelectedRating(rating)}
                  onMouseEnter={() => setHoveredRating(rating)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1"
                >
                  <Star
                    className={`w-8 h-8 ${
                      rating <= (hoveredRating || selectedRating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-neutral-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 focus:border-black focus:outline-none"
                placeholder="John D."
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Original Debt Amount
              </label>
              <input
                type="text"
                value={debtAmount}
                onChange={(e) => setDebtAmount(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 focus:border-black focus:outline-none"
                placeholder="$50,000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Amount Saved
            </label>
            <input
              type="text"
              value={savedAmount}
              onChange={(e) => setSavedAmount(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 focus:border-black focus:outline-none"
              placeholder="$30,000"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Your Experience
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-neutral-300 focus:border-black focus:outline-none"
              placeholder="Share your debt settlement journey..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 hover:bg-neutral-800 transition-colors font-mono uppercase tracking-wide"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Schema Markup for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "VegaX AI Debt Settlement",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": stats.averageRating,
              "reviewCount": stats.totalReviews,
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": reviews.map(r => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.rating,
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": r.name
              },
              "reviewBody": r.text,
              "datePublished": new Date().toISOString()
            }))
          })
        }}
      />
    </div>
  );
};

export default ReviewSystem;