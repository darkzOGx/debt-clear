import React, { useEffect } from 'react';
import { Star, MapPin, Clock, Phone, Globe, MessageCircle } from 'lucide-react';

const GoogleBusinessProfile = () => {
  useEffect(() => {
    // Load Google Maps JavaScript API for reviews
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const businessInfo = {
    name: "OC Debt Center Debt Settlement",
    rating: 4.9,
    reviewCount: 312,
    address: "123 Main Street, Irvine, CA 92614",
    phone: "1-800-DEBT-FREE",
    hours: {
      monday: "8:00 AM - 6:00 PM",
      tuesday: "8:00 AM - 6:00 PM",
      wednesday: "8:00 AM - 6:00 PM",
      thursday: "8:00 AM - 6:00 PM",
      friday: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    website: "https://orangecountydebtcenter.com",
    placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4" // Replace with actual Place ID
  };

  const recentReviews = [
    {
      author: "Sarah Martinez",
      rating: 5,
      date: "2 weeks ago",
      text: "OC Debt Center helped me settle $67,000 in credit card debt for just $28,000. Their AI system made the process incredibly smooth.",
      helpful: 12
    },
    {
      author: "Michael Chen",
      rating: 5,
      date: "1 month ago",
      text: "Professional service with amazing results. The team was supportive throughout the entire debt settlement process.",
      helpful: 8
    },
    {
      author: "Jennifer Williams",
      rating: 5,
      date: "1 month ago",
      text: "Saved my business from bankruptcy. They negotiated with all my creditors and reduced my debt by 58%.",
      helpful: 15
    },
    {
      author: "Robert Thompson",
      rating: 4,
      date: "2 months ago",
      text: "Great service overall. The only minor issue was the initial wait time, but once started, everything went smoothly.",
      helpful: 6
    }
  ];

  const handleWriteReview = () => {
    window.open(`https://search.google.com/local/writereview?placeid=${businessInfo.placeId}`, '_blank');
  };

  const handleGetDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address)}`, '_blank');
  };

  return (
    <div className="bg-white border border-neutral-200">
      {/* Business Header */}
      <div className="p-6 border-b border-neutral-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-light text-black mb-2">{businessInfo.name}</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-xl font-mono text-black">{businessInfo.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(businessInfo.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">({businessInfo.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="h-8"
          />
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleWriteReview}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-mono uppercase">Write Review</span>
          </button>
          <button
            onClick={handleGetDirections}
            className="flex items-center gap-2 px-4 py-2 border border-neutral-300 hover:border-black transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-mono uppercase">Get Directions</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-neutral-300 hover:border-black transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-mono uppercase">Ask Question</span>
          </button>
        </div>
      </div>

      {/* Business Info */}
      <div className="p-6 border-b border-neutral-200">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-neutral-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-black mb-1">Address</p>
                <p className="text-sm text-neutral-600">{businessInfo.address}</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Phone className="w-5 h-5 text-neutral-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-black mb-1">Phone</p>
                <p className="text-sm text-neutral-600">{businessInfo.phone}</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-start gap-3 mb-4">
              <Globe className="w-5 h-5 text-neutral-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-black mb-1">Website</p>
                <a href={businessInfo.website} className="text-sm text-blue-600 hover:underline">
                  {businessInfo.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-5 h-5 text-neutral-600" />
            <p className="text-sm font-semibold text-black">Business Hours</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {Object.entries(businessInfo.hours).map(([day, hours]) => (
              <div key={day} className="flex justify-between gap-2">
                <span className="text-neutral-600 capitalize">{day}:</span>
                <span className="text-black">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Recent Google Reviews</h3>
        <div className="space-y-4">
          {recentReviews.map((review, index) => (
            <div key={index} className="pb-4 border-b border-neutral-200 last:border-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-black">{review.author}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-neutral-600">{review.date}</span>
                  </div>
                </div>
                <img
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
                  alt="Google"
                  className="h-4"
                />
              </div>
              <p className="text-sm text-neutral-700 mb-2">{review.text}</p>
              <button className="text-xs text-neutral-600 hover:text-black">
                Helpful ({review.helpful})
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => window.open(`https://www.google.com/maps/place/?q=place_id:${businessInfo.placeId}`, '_blank')}
          className="mt-6 w-full py-3 border border-neutral-300 hover:border-black transition-colors"
        >
          <span className="font-mono text-sm uppercase">View All Google Reviews</span>
        </button>
      </div>

      {/* Schema Markup for Google Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": businessInfo.name,
            "image": "https://orangecountydebtcenter.com/logo.png",
            "@id": "https://orangecountydebtcenter.com",
            "url": businessInfo.website,
            "telephone": businessInfo.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Irvine",
              "addressRegion": "CA",
              "postalCode": "92614",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.7175,
              "longitude": -117.8311
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": businessInfo.rating,
              "reviewCount": businessInfo.reviewCount
            }
          })
        }}
      />
    </div>
  );
};

export default GoogleBusinessProfile;