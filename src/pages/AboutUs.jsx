import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function AboutUs() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const teamMembers = [
    {
      name: "Sarah Chen, NFCC",
      title: "Senior Debt Settlement Specialist",
      credentials: "National Foundation for Credit Counseling Certified",
      experience: "12+ years",
      specialties: ["Credit Card Debt", "Medical Debt", "Orange County Cases"],
      bio: "Sarah has negotiated over $15 million in debt settlements for Orange County residents. Her expertise in California debt collection laws ensures clients receive maximum protection and savings."
    },
    {
      name: "Michael Rodriguez, JD",
      title: "Legal Compliance Director", 
      credentials: "Licensed California Attorney, Debt Collection Defense",
      experience: "15+ years",
      specialties: ["Consumer Protection", "Debt Collection Defense", "Legal Compliance"],
      bio: "Michael ensures all debt settlements comply with California and federal regulations. His legal background provides clients with expert protection against creditor overreach."
    },
    {
      name: "Jennifer Park, CPA",
      title: "Financial Analysis Manager",
      credentials: "Certified Public Accountant, Financial Planning",
      experience: "10+ years",
      specialties: ["Tax Implications", "Financial Planning", "Business Debt"],
      bio: "Jennifer analyzes the financial and tax implications of debt settlement to optimize outcomes for Orange County families and businesses."
    }
  ];

  const certifications = [
    {
      name: "California State License",
      description: "Licensed debt settlement company in California",
      icon: Shield
    },
    {
      name: "IAPDA Member",
      description: "International Association of Professional Debt Arbitrators",
      icon: Award
    },
    {
      name: "BBB Accredited",
      description: "Better Business Bureau A+ Rating",
      icon: Star
    },
    {
      name: "Bonded & Insured",
      description: "Full business insurance and bonding protection",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-black"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                EXPERT DEBT SETTLEMENT TEAM
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-black mb-6 leading-tight">
              Orange County's
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Debt Relief Experts</span>
            </h1>
            
            <p className="text-xl text-neutral-700 leading-relaxed mb-8 font-light">
              Licensed debt settlement specialists with over 50 years of combined experience 
              helping Orange County residents achieve financial freedom through proven debt relief strategies.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-light text-black mb-2">50+</div>
                <div className="text-sm text-neutral-600 font-mono">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">$25M+</div>
                <div className="text-sm text-neutral-600 font-mono">Debt Settled</div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">2,500+</div>
                <div className="text-sm text-neutral-600 font-mono">Clients Helped</div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">4.9★</div>
                <div className="text-sm text-neutral-600 font-mono">Client Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
                Our Mission in
                <br />
                <span className="font-mono">Orange County</span>
              </h2>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Founded in 2018, VegaX AI was created to address the growing debt crisis in Orange County. 
                With the region's high cost of living, many hardworking families found themselves trapped 
                in cycles of debt despite their best efforts.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We saw traditional debt settlement companies failing Orange County residents with 
                one-size-fits-all approaches that didn't account for California's unique economic 
                landscape and consumer protection laws.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                That's why we built a specialized practice focused exclusively on Orange County debt relief, 
                combining cutting-edge AI technology with deep local expertise to deliver superior results 
                for our neighbors.
              </p>
              
              <Link 
                to="/faq"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-neutral-800 transition-colors font-mono text-sm uppercase tracking-wide"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 p-8 border border-neutral-200"
            >
              <h3 className="text-xl font-semibold text-black mb-6">Why Orange County Chose Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">Local Expertise</div>
                    <div className="text-sm text-neutral-600">Deep understanding of OC economics and consumer needs</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">California Licensed</div>
                    <div className="text-sm text-neutral-600">Fully compliant with state debt settlement regulations</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">AI-Powered Process</div>
                    <div className="text-sm text-neutral-600">Technology-enhanced negotiations for better outcomes</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-black mb-1">Transparent Pricing</div>
                    <div className="text-sm text-neutral-600">No hidden fees, clear cost structure</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Meet Our
              <br />
              <span className="font-mono">Expert Team</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Licensed professionals with decades of experience in debt settlement, 
              consumer protection, and California financial law.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 border border-neutral-200"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-neutral-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                  <div className="text-neutral-600 font-mono text-sm mb-2">{member.title}</div>
                  <div className="text-xs text-neutral-500">{member.credentials}</div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-black mb-1">Experience</div>
                    <div className="text-sm text-neutral-600">{member.experience}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-black mb-2">Specialties</div>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-neutral-100 px-2 py-1 rounded text-neutral-700">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-black mb-1">Background</div>
                    <div className="text-sm text-neutral-600 leading-relaxed">{member.bio}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Licensed & 
              <br />
              <span className="font-mono">Certified</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our credentials and certifications ensure you receive professional, 
              compliant, and ethical debt settlement services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-neutral-50 p-6 border border-neutral-200"
              >
                <cert.icon className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">{cert.name}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Our Core
              <br />
              <span className="font-mono">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Transparency",
                description: "Clear, honest communication about our process, fees, and realistic outcomes."
              },
              {
                icon: Users,
                title: "Client-First",
                description: "Every decision is made with our clients' best interests as the top priority."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Continuous improvement and the highest standards in debt settlement services."
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "Consistent, dependable service you can count on throughout your journey."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <value.icon className="w-12 h-12 text-black mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
                Community
                <br />
                <span className="font-mono">Impact</span>
              </h2>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We're proud to be part of the Orange County community and committed to helping 
                our neighbors achieve financial stability. Beyond debt settlement, we provide 
                financial education and support local economic development.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-light text-black mb-2">$25M+</div>
                  <div className="text-sm text-neutral-600">Debt Eliminated</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-black mb-2">2,500+</div>
                  <div className="text-sm text-neutral-600">Families Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-black mb-2">15</div>
                  <div className="text-sm text-neutral-600">OC Cities Served</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-black mb-2">98%</div>
                  <div className="text-sm text-neutral-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-50 p-8 border border-neutral-200"
            >
              <h3 className="text-xl font-semibold text-black mb-6">Local Partnerships</h3>
              
              <div className="space-y-4 text-sm text-neutral-700">
                <div>• Orange County Credit Counseling Agencies</div>
                <div>• Local Bankruptcy Attorneys for Referrals</div>
                <div>• OC Financial Literacy Programs</div>
                <div>• Community Financial Education Workshops</div>
                <div>• Small Business Development Centers</div>
                <div>• Consumer Protection Organizations</div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="text-sm font-medium text-black mb-2">Community Recognition</div>
                <div className="text-sm text-neutral-600">
                  Recognized by the Orange County Business Council for our commitment 
                  to ethical debt relief practices and community financial wellness.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Ready to Work with
              <br />
              <span className="font-mono">Orange County's Best?</span>
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto font-light">
              Join thousands of Orange County residents who have achieved debt freedom 
              with our expert team. Get your free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-4 hover:bg-neutral-100 transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide"
              >
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/blog"
                className="border border-neutral-600 text-white px-8 py-4 hover:border-white transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide"
              >
                Read Our Blog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Debt Analysis Session */}
      <section id="consultation" className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
}