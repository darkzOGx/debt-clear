import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Orange County Debt Center</title>
        <meta name="description" content="Terms of service for Orange County Debt Center debt settlement services. Legal terms, fees, and client obligations explained." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.orangecountydebtcenter.com/terms-of-service" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
              LEGAL TERMS & CONDITIONS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Terms of<br />
            <span className="font-mono text-3xl lg:text-4xl">Service</span>
          </h1>

          <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto">
            Please read these terms carefully before using our debt settlement services. 
            These terms govern your relationship with Orange County Debt Center.
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

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Acceptance of Terms</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              By accessing our website or using our debt settlement services, you agree to be bound by these 
              Terms of Service and all applicable laws and regulations. If you do not agree with any part 
              of these terms, you may not use our services.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              These terms constitute a legally binding agreement between you and Orange County Debt Center, 
              a licensed debt settlement company operating in California.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Our Services</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Debt Settlement Services</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We provide professional debt settlement services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Negotiation with creditors to reduce outstanding debt balances</li>
                  <li>Development of customized debt settlement strategies</li>
                  <li>Communication with creditors on your behalf</li>
                  <li>Financial analysis and debt evaluation services</li>
                  <li>Educational resources and ongoing support</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">Important Disclaimer</h4>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Debt settlement services may negatively impact your credit score and credit report. 
                      Not all creditors will agree to settle debts, and results cannot be guaranteed. 
                      You should consider all debt relief options before enrolling in our program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Client Obligations</h2>
            
            <div className="space-y-4 text-neutral-700">
              <p>As our client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information about your financial situation</li>
                <li>Make required monthly deposits into your dedicated savings account</li>
                <li>Refrain from making payments to enrolled creditors during the program</li>
                <li>Notify us immediately of any changes to your contact information or financial status</li>
                <li>Cooperate with our debt settlement process and follow our recommendations</li>
                <li>Review and approve all settlement offers before we proceed</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Fees and Payment Terms</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">Fee Structure</h3>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                  <li>Our fees typically range from 15-25% of the total enrolled debt amount</li>
                  <li>Fees are only charged after successful settlement of your debts</li>
                  <li>No upfront fees are charged, as prohibited by California law</li>
                  <li>Monthly account maintenance fees may apply for savings account management</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Payment Schedule</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  You will make monthly deposits into a dedicated savings account. These funds will accumulate 
                  to pay settlement amounts and our fees. We will only collect our fees after successfully 
                  settling your debts.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Cancellation and Refund Policy</h2>
            
            <div className="bg-green-50 border border-green-200 p-6 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-green-800 mb-2">3-Day Right to Cancel</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    You have the right to cancel your debt settlement agreement within 3 business days 
                    of signing without penalty, as required by California law.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-neutral-700">
              <h3 className="text-lg font-medium text-black mb-3">General Cancellation Rights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may cancel your agreement at any time with written notice</li>
                <li>Upon cancellation, you will receive any accumulated funds in your savings account</li>
                <li>Fees will only be charged for debts successfully settled before cancellation</li>
                <li>We may terminate the agreement if you fail to meet your obligations</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Limitations and Disclaimers</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">No Guarantees</h3>
                <p className="text-neutral-700 leading-relaxed">
                  While we will make every effort to negotiate favorable settlements, we cannot guarantee 
                  specific results, settlement amounts, or timeframes. Creditor cooperation varies, and 
                  some may refuse to settle or may pursue legal action.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">Limitation of Liability</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Our liability to you is limited to the fees you have paid for our services. We are not 
                  responsible for creditor actions, credit score impacts, tax consequences, or other 
                  indirect damages resulting from debt settlement.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Privacy and Confidentiality</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">
              We maintain strict confidentiality regarding your personal and financial information. 
              Our privacy practices are detailed in our Privacy Policy, which is incorporated into 
              these Terms of Service by reference.
            </p>
            
            <p className="text-neutral-700 leading-relaxed">
              We may share information with service providers necessary to perform our services, 
              but only under strict confidentiality agreements.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Compliance and Licensing</h2>
            
            <div className="bg-blue-50 border border-blue-200 p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-3">California Licensed</h3>
              <p className="text-blue-700 text-sm leading-relaxed mb-4">
                Orange County Debt Center is licensed by the California Department of Financial 
                Protection and Innovation to provide debt settlement services in California.
              </p>
              
              <div className="space-y-2 text-sm text-blue-700">
                <div>• Compliant with California debt settlement regulations</div>
                <div>• Member of International Association of Professional Debt Arbitrators (IAPDA)</div>
                <div>• Better Business Bureau A+ Rating</div>
                <div>• Bonded and insured for client protection</div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Governing Law</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              These Terms of Service are governed by the laws of the State of California. Any disputes 
              will be resolved in the courts of Orange County, California. If any provision of these 
              terms is found to be unenforceable, the remaining provisions will remain in full force.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">Contact Information</h2>
            
            <div className="bg-neutral-50 p-6 border border-neutral-200">
              <p className="text-neutral-700 mb-4">
                For questions about these Terms of Service or our debt settlement services:
              </p>
              
              <div className="space-y-2 text-sm text-neutral-700">
                <div><strong>Phone:</strong> (844) 541-9236</div>
                <div><strong>Email:</strong> info@orangecountydebtcenter.com</div>
                <div><strong>Mail:</strong> Orange County Debt Center<br />
                Legal Department<br />
                Orange County, California</div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-600">
              These Terms of Service may be updated periodically to reflect changes in our services 
              or legal requirements. We will provide notice of material changes. Your continued use 
              of our services after changes constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Safeguards */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black mb-8 text-center">Your Legal Protections</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Scale className="w-8 h-8 text-black mx-auto mb-3" />
              <h3 className="font-medium text-black mb-2">California Licensed</h3>
              <p className="text-sm text-neutral-600">Fully licensed and regulated by California DFPI</p>
            </div>
            
            <div className="text-center">
              <AlertTriangle className="w-8 h-8 text-black mx-auto mb-3" />
              <h3 className="font-medium text-black mb-2">3-Day Cancellation</h3>
              <p className="text-sm text-neutral-600">Right to cancel within 3 business days without penalty</p>
            </div>
            
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-black mx-auto mb-3" />
              <h3 className="font-medium text-black mb-2">No Upfront Fees</h3>
              <p className="text-sm text-neutral-600">Fees only charged after successful debt settlement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}