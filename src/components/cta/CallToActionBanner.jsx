import React, { useState } from 'react';
import { Phone, MessageSquare, Calculator, FileText, Clock, Shield, Award, ArrowRight, X } from 'lucide-react';

const CallToActionBanner = ({ 
  variant = 'primary', 
  size = 'medium', 
  showStats = true, 
  showMultipleOptions = true,
  sticky = false,
  dismissible = false 
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const stats = [
    { value: "52%", label: "Avg. Debt Reduction" },
    { value: "89%", label: "Success Rate" },
    { value: "24hrs", label: "Response Time" },
    { value: "Free", label: "Consultation" }
  ];

  const ctaOptions = [
    {
      icon: Phone,
      action: "tel:8445419236",
      text: "Call (844) 541-9236",
      subtext: "Free Phone Consultation",
      primary: true,
      track: "phone_cta_click"
    },
    {
      icon: MessageSquare,
      action: "#calculator",
      text: "Get Free Analysis", 
      subtext: "Quick Online Form",
      primary: false,
      track: "form_cta_click"
    },
    {
      icon: Calculator,
      action: "#calculator",
      text: "Debt Calculator",
      subtext: "Estimate Your Savings",
      primary: false,
      track: "calculator_cta_click"
    },
    {
      icon: FileText,
      action: "/faq",
      text: "Read FAQ",
      subtext: "Common Questions",
      primary: false,
      track: "faq_cta_click"
    }
  ];

  const handleCTAClick = (action, trackingEvent) => {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: trackingEvent,
        value: 1
      });
    }

    // Handle different action types
    if (action.startsWith('tel:')) {
      window.location.href = action;
    } else if (action.startsWith('#')) {
      const element = document.querySelector(action);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.startsWith('/')) {
      window.location.href = action;
    }
  };

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'urgent':
        return {
          container: 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl',
          primaryBtn: 'bg-white text-red-600 hover:bg-gray-100',
          secondaryBtn: 'border-white text-white hover:bg-white hover:text-red-600'
        };
      case 'success':
        return {
          container: 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl',
          primaryBtn: 'bg-white text-green-600 hover:bg-gray-100',
          secondaryBtn: 'border-white text-white hover:bg-white hover:text-green-600'
        };
      case 'minimal':
        return {
          container: 'bg-gray-50 border-t border-b border-gray-200 text-gray-900',
          primaryBtn: 'bg-blue-600 text-white hover:bg-blue-700',
          secondaryBtn: 'border-gray-300 text-gray-700 hover:bg-gray-50'
        };
      default: // primary
        return {
          container: 'bg-gradient-to-b from-black to-neutral-900 text-white shadow-xl',
          primaryBtn: 'bg-white text-black hover:bg-neutral-200',
          secondaryBtn: 'border-white text-white hover:bg-white hover:text-black'
        };
    }
  };

  const styles = getVariantStyles();

  const sizeClasses = {
    small: 'py-4 px-4',
    medium: 'py-8 px-6',
    large: 'py-12 px-8'
  };

  return (
    <div className={`
      ${styles.container} 
      ${sizeClasses[size]} 
      ${sticky ? 'fixed bottom-0 left-0 right-0 z-50' : 'relative'}
      transition-all duration-300
    `}>
      <div className="max-w-6xl mx-auto">
        {dismissible && (
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black hover:bg-opacity-20 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="grid lg:grid-cols-12 gap-6 items-center">
          
          {/* Main Message */}
          <div className="lg:col-span-6">
            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-10 p-3 flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              
              <div>
                <h3 className="text-xl font-light mb-2">
                  Stop Struggling with Debt - Get Professional Help Now
                </h3>
                <p className="text-sm text-neutral-300 font-light mb-4">
                  Licensed Orange County debt specialists ready to reduce your debt by 40-60%. 
                  Free consultation with no upfront fees. DFPI licensed & IAPDA certified.
                </p>
                
                {/* Credibility indicators */}
                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>DFPI Licensed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>IAPDA Certified</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>6+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          {showStats && (
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white bg-opacity-10 border border-neutral-700 p-3">
                    <div className="text-lg font-mono font-bold">{stat.value}</div>
                    <div className="text-xs font-mono uppercase tracking-wide opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="lg:col-span-3">
            {showMultipleOptions ? (
              <div className="space-y-3">
                {/* Primary CTA */}
                <button
                  onClick={() => handleCTAClick(ctaOptions[0].action, ctaOptions[0].track)}
                  className={`
                    ${styles.primaryBtn} 
                    w-full px-6 py-3 rounded-lg font-bold shadow-lg 
                    transition-all duration-200 transform hover:scale-105
                    flex items-center justify-center gap-2
                  `}
                >
                  {React.createElement(ctaOptions[0].icon, { className: "w-5 h-5" })}
                  <div className="text-left">
                    <div className="text-sm font-bold">{ctaOptions[0].text}</div>
                    <div className="text-xs opacity-80">{ctaOptions[0].subtext}</div>
                  </div>
                </button>

                {/* Secondary CTA */}
                <button
                  onClick={() => handleCTAClick(ctaOptions[1].action, ctaOptions[1].track)}
                  className={`
                    ${styles.secondaryBtn} 
                    w-full px-6 py-2 rounded-lg border-2 
                    transition-all duration-200
                    flex items-center justify-center gap-2 text-sm
                  `}
                >
                  {React.createElement(ctaOptions[1].icon, { className: "w-4 h-4" })}
                  {ctaOptions[1].text}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleCTAClick(ctaOptions[0].action, ctaOptions[0].track)}
                className={`
                  ${styles.primaryBtn} 
                  w-full px-8 py-4 rounded-lg font-bold shadow-lg 
                  transition-all duration-200 transform hover:scale-105
                  flex items-center justify-center gap-2 text-lg
                `}
              >
                {React.createElement(ctaOptions[0].icon, { className: "w-6 h-6" })}
                {ctaOptions[0].text}
              </button>
            )}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-6 pt-4 border-t border-white border-opacity-20 text-center">
          <p className="text-xs opacity-80">
            <strong>2,500+ Orange County families</strong> saved an average of <strong>$18,400</strong> through our debt settlement program.
            <span className="mx-2">•</span>
            <strong>No upfront fees</strong> - You only pay after we settle your debts.
            <span className="mx-2">•</span>
            <strong>Free consultation</strong> available 24/7.
          </p>
        </div>
      </div>

      {/* Schema markup for the CTA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "telephone": "+1-844-541-9236",
          "contactType": "Customer Service",
          "areaServed": "Orange County, California",
          "availableLanguage": "English",
          "contactOption": "TollFree"
        })}
      </script>
    </div>
  );
};

// Sticky CTA Hook for pages
export const useStickyCallToAction = (showAfterScroll = 500) => {
  const [showSticky, setShowSticky] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowSticky(scrollPosition > showAfterScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  return showSticky;
};

// Preset CTA Components
export const EmergencyCTA = () => (
  <CallToActionBanner 
    variant="urgent" 
    size="large" 
    showStats={true}
    showMultipleOptions={true}
  />
);

export const SuccessCTA = () => (
  <CallToActionBanner 
    variant="success" 
    size="medium" 
    showStats={true}
    showMultipleOptions={false}
  />
);

export const MinimalCTA = () => (
  <CallToActionBanner 
    variant="minimal" 
    size="small" 
    showStats={false}
    showMultipleOptions={true}
  />
);

export const StickyCTA = () => {
  const showSticky = useStickyCallToAction(800);
  
  if (!showSticky) return null;
  
  return (
    <CallToActionBanner 
      variant="primary" 
      size="small" 
      showStats={false}
      showMultipleOptions={false}
      sticky={true}
      dismissible={true}
    />
  );
};

export default CallToActionBanner;