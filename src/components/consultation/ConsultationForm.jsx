import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    debt_amount: '',
    debt_types: [],
    preferred_contact: 'phone',
    consultation_time: '',
    additional_notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDebtTypeChange = (type, checked) => {
    setFormData(prev => ({
      ...prev,
      debt_types: checked 
        ? [...prev.debt_types, type]
        : prev.debt_types.filter(t => t !== type)
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get Formspree form ID from environment variables
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
      
      if (!formspreeId) {
        throw new Error('Formspree form ID not configured. Please add VITE_FORMSPREE_ID to your environment variables.');
      }

      // Submit form data to Formspree
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          debt_amount: parseFloat(formData.debt_amount) || 0,
          debt_types: formData.debt_types.join(', '),
          preferred_contact: formData.preferred_contact,
          consultation_time: formData.consultation_time,
          additional_notes: formData.additional_notes,
          form_name: 'Debt Settlement Consultation',
          submission_date: new Date().toISOString()
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error(`Form submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting consultation:', error);
      alert('There was an error submitting your consultation request. Please try again or contact us directly.');
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="consultation" className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="border border-neutral-200 bg-white p-12">
              <div className="w-12 h-12 bg-black flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              
              <h2 className="text-3xl font-light text-black mb-6">
                Research Session Scheduled
              </h2>
              
              <div className="text-sm font-mono text-neutral-600 mb-8">
                CONFIRMATION: {formData.full_name.toUpperCase()}
              </div>
              
              <div className="space-y-4 text-left max-w-md mx-auto mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-black mt-2 flex-shrink-0"></div>
                  <div className="text-sm text-neutral-700">
                    Debt specialist will analyze your case within 24 hours
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-black mt-2 flex-shrink-0"></div>
                  <div className="text-sm text-neutral-700">
                    Research consultation via {formData.preferred_contact}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-black mt-2 flex-shrink-0"></div>
                  <div className="text-sm text-neutral-700">
                    Personalized debt reduction protocol development
                  </div>
                </div>
              </div>
              
              <div className="text-xs font-mono text-neutral-500">
                REFERENCE: DSL-{Date.now().toString().slice(-6)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
              RESEARCH CONSULTATION
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Schedule Debt
            <br />
            <span className="font-mono">Analysis Session</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl font-light">
            Confidential consultation with certified debt specialist. Comprehensive analysis 
            of your debt profile with evidence-based reduction protocols.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="border border-neutral-200 bg-neutral-50 p-8">
              <form onSubmit={submitForm} className="space-y-8">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-700 mb-4">
                    Contact Information
                  </div>
                  <div className="h-px bg-neutral-200 mb-6"></div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-mono text-neutral-800 mb-3 block">
                        Full Name
                      </Label>
                      <Input
                        type="text"
                        required
                        value={formData.full_name}
                        onChange={(e) => handleInputChange('full_name', e.target.value)}
                        className="border-0 border-b-2 border-neutral-300 rounded-none bg-transparent px-0 py-4 font-mono focus-visible:ring-0 focus:border-black"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-sm font-mono text-neutral-800 mb-3 block">
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-0 border-b-2 border-neutral-300 rounded-none bg-transparent px-0 py-4 font-mono focus-visible:ring-0 focus:border-black"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-700 mb-4">
                    Debt Profile
                  </div>
                  <div className="h-px bg-neutral-200 mb-6"></div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label className="text-sm font-mono text-neutral-800 mb-3 block">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-0 border-b-2 border-neutral-300 rounded-none bg-transparent px-0 py-4 font-mono focus-visible:ring-0 focus:border-black"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-sm font-mono text-neutral-800 mb-3 block">
                        Total Debt Amount ($)
                      </Label>
                      <Input
                        type="number"
                        required
                        value={formData.debt_amount}
                        onChange={(e) => handleInputChange('debt_amount', e.target.value)}
                        className="border-0 border-b-2 border-neutral-300 rounded-none bg-transparent px-0 py-4 font-mono focus-visible:ring-0 focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label className="text-sm font-mono text-neutral-800 mb-4 block">
                      Debt Categories
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { value: 'credit_cards', label: 'Credit Cards' },
                        { value: 'personal_loans', label: 'Personal Loans' },
                        { value: 'medical_debt', label: 'Medical Debt' },
                        { value: 'business_debt', label: 'Business Debt' },
                        { value: 'other', label: 'Other Unsecured' }
                      ].map((type) => (
                        <div key={type.value} className="flex items-center space-x-2">
                          <Checkbox
                            id={type.value}
                            checked={formData.debt_types.includes(type.value)}
                            onCheckedChange={(checked) => handleDebtTypeChange(type.value, checked)}
                          />
                          <Label htmlFor={type.value} className="text-xs font-mono text-neutral-700">
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-mono text-neutral-800 mb-3 block">
                    Additional Context (Optional)
                  </Label>
                  <Textarea
                    value={formData.additional_notes}
                    onChange={(e) => handleInputChange('additional_notes', e.target.value)}
                    className="border border-neutral-300 bg-white font-mono text-sm min-h-24 focus:border-black focus-visible:ring-0"
                    placeholder="Describe your current financial situation..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black hover:bg-neutral-800 text-white py-6 text-sm font-mono uppercase tracking-wide"
                >
                  {isSubmitting ? 'Processing Request...' : 'Schedule Research Session'}
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="space-y-8">
              <div className="border border-neutral-200 bg-white p-6">
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-700 mb-4">
                  Session Protocol
                </div>
                <div className="h-px bg-neutral-200 mb-6"></div>
                
                <div className="space-y-4">
                  {[
                    'Confidential debt profile analysis',
                    'Creditor behavior assessment', 
                    'Settlement probability calculation',
                    'Timeline and cost projections',
                    'Risk mitigation strategies'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-black mt-2 flex-shrink-0"></div>
                      <div className="text-sm text-neutral-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-neutral-200 bg-neutral-900 text-white p-6">
                <div className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-400 mb-4">
                  Research Standards
                </div>
                <div className="h-px bg-neutral-700 mb-6"></div>
                
                <div className="space-y-3">
                  <div className="text-xs font-mono text-neutral-300">
                    NO UPFRONT FEES
                  </div>
                  <div className="text-xs font-mono text-neutral-300">
                    CONFIDENTIAL ANALYSIS
                  </div>
                  <div className="text-xs font-mono text-neutral-300">
                    EVIDENCE-BASED PROTOCOLS
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}