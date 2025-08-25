import React from 'react';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../../components/consultation/ConsultationForm';

export default function TestBlogPost() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-300 hover:text-white transition-colors mb-8 z-10 relative">
            <ArrowLeft className="w-4 h-4" />Back to Resources</Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">TEST</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Test Blog Post<br />
            <span className="font-mono text-3xl lg:text-4xl">Development Testing</span>
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-neutral-400 mb-8">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>August 24, 2025</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>1 min read</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>OC Debt Center Development Team</span></div>
          </div>
          <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10">
            This is a simple test blog post used for development and routing testing purposes.
          </p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <p className="text-neutral-700">This is a test blog post content area for development testing.</p>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Debt-Free Journey?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Get expert debt settlement guidance tailored to your specific situation.
          </p>
          <button 
            onClick={scrollToConsultation}
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center gap-2"
          >
            FREE CONSULTATION
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Consultation Form */}
      <div id="consultation">
        <ConsultationForm />
      </div>
    </div>
  );
}