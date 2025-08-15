import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // For now, we'll store locally and show success
      // In production, replace with your actual email service endpoint
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Store in localStorage to track subscriptions
      const subscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
      
      // Check if already subscribed
      if (subscriptions.some(sub => sub.email === email)) {
        setError('This email is already subscribed!');
        setIsLoading(false);
        return;
      }
      
      subscriptions.push({
        email: email,
        date: new Date().toISOString()
      });
      localStorage.setItem('newsletter_subscriptions', JSON.stringify(subscriptions));
      
      // Log for testing (remove in production)
      console.log('Newsletter subscription added:', email);
      console.log('Total subscriptions:', subscriptions.length);
      
      setShowSuccess(true);
      setEmail('');
      
      // Optional: Send to a webhook or API endpoint when available
      // You can integrate with services like:
      // - Mailchimp: https://mailchimp.com/developer/
      // - SendGrid: https://sendgrid.com/
      // - ConvertKit: https://developers.convertkit.com/
      // - Or create your own backend endpoint
      
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Newsletter subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="py-12 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-light mb-4">
            Stay Updated on <span className="font-mono">Orange County</span> Debt Laws
          </h3>
          
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
            Get monthly insights on debt settlement regulations, consumer protection updates, 
            and success stories from Orange County.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-black text-sm font-mono"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-white text-black hover:bg-neutral-100 text-sm font-mono uppercase tracking-wide transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          {error && (
            <p className="text-red-400 text-sm mt-4">{error}</p>
          )}
          
          <p className="text-xs text-neutral-500 mt-4">
            No spam. Unsubscribe anytime. Orange County debt relief updates only.
          </p>
        </div>
      </section>

      {/* Success Popup Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                
                <h3 className="text-2xl font-semibold text-black mb-3">
                  Successfully Subscribed!
                </h3>
                
                <p className="text-neutral-600 mb-6">
                  Thank you for subscribing to our Orange County debt relief newsletter. 
                  You'll receive monthly updates with valuable insights and resources.
                </p>
                
                <button
                  onClick={() => setShowSuccess(false)}
                  className="bg-black text-white px-6 py-3 hover:bg-neutral-800 transition-colors font-mono text-sm uppercase tracking-wide"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}