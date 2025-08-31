import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Orange County Debt Center</title>
        <meta name="description" content="Privacy policy for Orange County Debt Center. Learn how we protect your personal information and comply with California privacy laws." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.orangecountydebtcenter.com/privacy-policy" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
              PRIVACY & DATA PROTECTION
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Privacy<br />
            <span className="font-mono text-3xl lg:text-4xl">Policy</span>
          </h1>

          <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we collect, use, and protect your personal information
            when providing debt settlement services.
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <FileText className="w-4 h-4" />
            <span>Last Updated: January 1, 2025</span>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-neutral max-w-none">
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Personal Information</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We collect personal information you provide when requesting our debt settlement services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Full name, address, phone number, and email address</li>
                  <li>Social Security number for identity verification</li>
                  <li>Employment information and income details</li>
                  <li>Financial information including debts, assets, and expenses</li>
                  <li>Banking information for payment processing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Automatically Collected Information</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">How We Use Your Information</h2>
            
            <div className="space-y-4 text-neutral-700">
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide debt settlement and negotiation services</li>
                <li>Communicate with you about your debt settlement program</li>
                <li>Process payments and maintain account records</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and website functionality</li>
                <li>Send relevant financial education materials</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Information Sharing and Disclosure</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Service Providers</h3>
                <p className="text-neutral-700 leading-relaxed">
                  We may share your information with trusted third-party service providers who assist us in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mt-2">
                  <li>Credit reporting and verification services</li>
                  <li>Payment processing and banking services</li>
                  <li>Legal compliance and document preparation</li>
                  <li>Technology and data security services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Legal Requirements</h3>
                <p className="text-neutral-700 leading-relaxed">
                  We may disclose your information when required by law, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mt-2">
                  <li>Response to court orders or legal process</li>
                  <li>Compliance with regulatory investigations</li>
                  <li>Protection of our legal rights and interests</li>
                  <li>Prevention of fraud or illegal activities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Data Security</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-black" />
                  <h3 className="text-lg font-medium text-black">Encryption</h3>
                </div>
                <p className="text-sm text-neutral-700">
                  All personal data is encrypted in transit and at rest using industry-standard SSL/TLS protocols.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-black" />
                  <h3 className="text-lg font-medium text-black">Access Controls</h3>
                </div>
                <p className="text-sm text-neutral-700">
                  Access to your personal information is restricted to authorized personnel only on a need-to-know basis.
                </p>
              </div>
            </div>

            <p className="text-neutral-700 leading-relaxed mt-6">
              Despite our security measures, no method of data transmission over the internet is 100% secure. 
              We cannot guarantee absolute security but are committed to protecting your personal information 
              using reasonable safeguards.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Your Rights and Choices</h2>
            
            <div className="space-y-4 text-neutral-700">
              <p>Under California law, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and obtain copies of your personal information</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Opt out of the sale of personal information (we do not sell personal information)</li>
                <li>Receive equal service regardless of your privacy choices</li>
              </ul>

              <p className="mt-6">
                To exercise these rights, contact us at{' '}
                <a href="mailto:privacy@orangecountydebtcenter.com" className="text-black underline">
                  privacy@orangecountydebtcenter.com
                </a>{' '}
                or call (844) 541-9236.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Cookies and Tracking</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">
              Our website uses cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
              <li>Remember your preferences and improve site functionality</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Provide personalized content and advertisements</li>
              <li>Enable social media features and integrations</li>
            </ul>

            <p className="text-neutral-700 leading-relaxed">
              You can control cookies through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Contact Information</h2>
            
            <div className="bg-neutral-50 p-6 border border-neutral-200">
              <p className="text-neutral-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, contact us:
              </p>
              
              <div className="space-y-2 text-sm text-neutral-700">
                <div><strong>Email:</strong> privacy@orangecountydebtcenter.com</div>
                <div><strong>Phone:</strong> (844) 541-9236</div>
                <div><strong>Mail:</strong> Orange County Debt Center<br />
                Privacy Officer<br />
                Orange County, California</div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-600">
              This Privacy Policy may be updated periodically. We will notify you of material changes 
              by email or through our website. Your continued use of our services after changes 
              constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black mb-8 text-center">Our Privacy Commitments</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Eye className="w-8 h-8 text-black mx-auto mb-3" />
              <h3 className="font-medium text-black mb-2">Transparency</h3>
              <p className="text-sm text-neutral-600">Clear disclosure of data collection and use practices</p>
            </div>
            
            <div className="text-center">
              <Lock className="w-8 h-8 text-black mx-auto mb-3" />
              <h3 className="font-medium text-black mb-2">Security</h3>
              <p className="text-sm text-neutral-600">Industry-standard protection for your personal information</p>
            </div>
            
            <div className="text-center">
              <Shield className="w-8 h-8 text-black mx-auto mb-3" />
              <h3 className="font-medium text-black mb-2">Compliance</h3>
              <p className="text-sm text-neutral-600">Full compliance with California privacy laws</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}