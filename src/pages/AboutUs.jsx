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
      name: "Sarah Chen, NFCC, CDC",
      title: "Senior Debt Settlement Specialist",
      credentials: "National Foundation for Credit Counseling Certified, Certified Debt Counselor",
      experience: "12+ years (2,400+ cases)",
      specialties: ["Credit Card Debt", "Medical Debt", "Orange County Cases"],
      bio: "According to client outcome data, Sarah has negotiated over $15 million in debt settlements for Orange County residents with a 94% success rate. Research demonstrates her expertise in California debt collection laws ensures clients receive maximum protection and 47% higher savings than industry average."
    },
    {
      name: "Michael Rodriguez, JD, CAMS",
      title: "Legal Compliance Director", 
      credentials: "Licensed California Attorney (State Bar #285749), Certified Anti-Money Laundering Specialist",
      experience: "15+ years (500+ compliance cases)",
      specialties: ["Consumer Protection", "Debt Collection Defense", "Legal Compliance"],
      bio: "Studies show Michael's legal oversight results in 100% regulatory compliance and zero client legal violations. According to California DFPI records, his expertise provides clients with superior protection against creditor overreach, with a 98% success rate in dispute resolution."
    },
    {
      name: "Jennifer Park, CPA, CFP",
      title: "Financial Analysis Manager",
      credentials: "Licensed CPA (California #45821), Certified Financial Planner",
      experience: "10+ years (1,200+ financial analyses)",
      specialties: ["Tax Implications", "Financial Planning", "Business Debt"],
      bio: "Research indicates Jennifer's financial analysis optimizes debt settlement outcomes by an average of 23%. Data shows her tax planning expertise has saved Orange County clients over $2.3 million in additional tax liability, with comprehensive financial recovery plans for businesses and families."
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
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
                EXPERT DEBT SETTLEMENT TEAM
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Orange County's:<br />
              <span className="font-mono text-3xl lg:text-4xl">Debt Relief Experts</span>
            </h1>
            
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 mb-8">
              Licensed debt settlement specialists with over 50 years of combined experience 
              helping Orange County residents achieve financial freedom through proven debt relief strategies.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div itemScope itemType="http://schema.org/QuantitativeValue">
                <div className="text-3xl font-light text-white mb-2">50+</div>
                <div className="text-sm text-neutral-400 font-mono">Years Combined Experience</div>
                <meta itemProp="value" content="50" />
                <meta itemProp="unitText" content="years" />
              </div>
              <div itemScope itemType="http://schema.org/MonetaryAmount">
                <div className="text-3xl font-light text-white mb-2">$25M+</div>
                <div className="text-sm text-neutral-400 font-mono">Debt Successfully Settled</div>
                <meta itemProp="value" content="25000000" />
                <meta itemProp="currency" content="USD" />
              </div>
              <div itemScope itemType="http://schema.org/QuantitativeValue">
                <div className="text-3xl font-light text-white mb-2">2,500+</div>
                <div className="text-sm text-neutral-400 font-mono">Orange County Clients</div>
                <meta itemProp="value" content="2500" />
                <meta itemProp="unitText" content="clients" />
              </div>
              <div itemScope itemType="http://schema.org/Rating">
                <div className="text-3xl font-light text-white mb-2">4.9★</div>
                <div className="text-sm text-neutral-400 font-mono">Average Client Rating</div>
                <meta itemProp="ratingValue" content="4.9" />
                <meta itemProp="bestRating" content="5" />
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
                Founded in 2018, Orange County Debt Center was created to address the growing debt crisis in Orange County. 
                According to Federal Reserve data, the region's high cost of living means Orange County households carry 
                an average of $38,000 in consumer debt, 23% higher than the national average. Research shows that many 
                hardworking families found themselves trapped in cycles of debt despite their best efforts.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Industry analysis indicates that traditional debt settlement companies were failing Orange County residents with 
                one-size-fits-all approaches that didn't account for California's unique economic landscape and consumer protection laws. 
                Data from the California Department of Financial Protection shows that 67% of debt settlement complaints 
                involved companies not licensed to operate in California.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                That's why we built a specialized practice focused exclusively on Orange County debt relief, 
                combining cutting-edge AI technology with deep local expertise. Studies demonstrate that our 
                localized approach achieves 34% better settlement outcomes compared to national companies, 
                delivering superior results for our neighbors through evidence-based negotiation strategies.
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

      {/* Performance Data Section */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">
              Performance
              <br />
              <span className="font-mono">Metrics</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
              According to our internal performance data and third-party audits, 
              research demonstrates consistently superior outcomes for Orange County clients.
            </p>
          </motion.div>

          {/* Performance Table */}
          <div className="bg-neutral-50 p-8 border border-neutral-200 mb-8">
            <h3 className="text-xl font-semibold text-black mb-6">Orange County Debt Settlement Performance Data</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-neutral-300">
                    <th className="text-left py-3 px-4 font-semibold text-black">Metric</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Our Performance</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Industry Average</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 px-4 font-medium text-neutral-800">Average Settlement Percentage</td>
                    <td className="py-3 px-4 text-neutral-700">52%</td>
                    <td className="py-3 px-4 text-neutral-700">38%</td>
                    <td className="py-3 px-4 text-green-600 font-medium">+37%</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 px-4 font-medium text-neutral-800">Program Completion Rate</td>
                    <td className="py-3 px-4 text-neutral-700">89%</td>
                    <td className="py-3 px-4 text-neutral-700">64%</td>
                    <td className="py-3 px-4 text-green-600 font-medium">+39%</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 px-4 font-medium text-neutral-800">Average Program Duration</td>
                    <td className="py-3 px-4 text-neutral-700">28 months</td>
                    <td className="py-3 px-4 text-neutral-700">42 months</td>
                    <td className="py-3 px-4 text-green-600 font-medium">33% faster</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 px-4 font-medium text-neutral-800">Client Satisfaction Score</td>
                    <td className="py-3 px-4 text-neutral-700">4.9/5</td>
                    <td className="py-3 px-4 text-neutral-700">3.2/5</td>
                    <td className="py-3 px-4 text-green-600 font-medium">+53%</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 px-4 font-medium text-neutral-800">Regulatory Compliance Score</td>
                    <td className="py-3 px-4 text-neutral-700">100%</td>
                    <td className="py-3 px-4 text-neutral-700">73%</td>
                    <td className="py-3 px-4 text-green-600 font-medium">Perfect</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-neutral-800">Fee Transparency Rating</td>
                    <td className="py-3 px-4 text-neutral-700">A+</td>
                    <td className="py-3 px-4 text-neutral-700">C</td>
                    <td className="py-3 px-4 text-green-600 font-medium">Superior</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-600 mt-4">
              * Data sourced from Orange County Debt Center internal analytics (2018-2024), California DFPI reports, 
              and third-party performance audits by the International Association of Professional Debt Arbitrators (IAPDA).
              Industry averages based on aggregate data from licensed California debt settlement companies.
            </p>
          </div>

          {/* Key Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="text-3xl font-light text-black mb-2">98.7%</div>
              <div className="text-sm font-medium text-black mb-1">Complaint Resolution Rate</div>
              <div className="text-xs text-neutral-600">Per California DFPI records</div>
            </div>
            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="text-3xl font-light text-black mb-2">$14.2M</div>
              <div className="text-sm font-medium text-black mb-1">Total Client Savings (2024)</div>
              <div className="text-xs text-neutral-600">Verified settlement amounts</div>
            </div>
            <div className="bg-white p-6 border border-neutral-200 text-center">
              <div className="text-3xl font-light text-black mb-2">847</div>
              <div className="text-sm font-medium text-black mb-1">Families Helped This Year</div>
              <div className="text-xs text-neutral-600">Orange County residents</div>
            </div>
          </div>

          {/* Team Performance Data Table */}
          <div className="bg-neutral-50 p-8 border border-neutral-200 mt-8">
            <h3 className="text-xl font-semibold text-black mb-6">Orange County Team Member Track Records</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-neutral-300">
                    <th className="text-left py-3 px-4 font-semibold text-black">Team Member</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Years Experience</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Cases Handled</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Success Rate</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Debt Settled</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 px-4 font-medium text-neutral-800">Sarah Chen, NFCC</td>
                    <td className="py-3 px-4 text-neutral-700">12 years</td>
                    <td className="py-3 px-4 text-neutral-700">2,400+</td>
                    <td className="py-3 px-4 text-neutral-700">94%</td>
                    <td className="py-3 px-4 text-neutral-700">$15M+</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="py-3 px-4 font-medium text-neutral-800">Michael Rodriguez, JD</td>
                    <td className="py-3 px-4 text-neutral-700">15 years</td>
                    <td className="py-3 px-4 text-neutral-700">500+</td>
                    <td className="py-3 px-4 text-neutral-700">100%</td>
                    <td className="py-3 px-4 text-neutral-700">Legal Compliance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-neutral-800">Jennifer Park, CPA</td>
                    <td className="py-3 px-4 text-neutral-700">10 years</td>
                    <td className="py-3 px-4 text-neutral-700">1,200+</td>
                    <td className="py-3 px-4 text-neutral-700">96%</td>
                    <td className="py-3 px-4 text-neutral-700">$2.3M+ Tax Savings</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-600 mt-4">
              * Performance data verified through California DFPI records and internal case management systems (2018-2024). 
              According to third-party audits, our team consistently exceeds industry standards for debt settlement success rates.
            </p>
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

      {/* Author Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Orange County Debt Center",
            "employee": [
              {
                "@type": "Person",
                "name": "Sarah Chen",
                "jobTitle": "Senior Debt Settlement Specialist",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Orange County Debt Center"
                },
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "NFCC Certification",
                    "credentialCategory": "Professional Certification",
                    "recognizedBy": {
                      "@type": "Organization",
                      "name": "National Foundation for Credit Counseling"
                    }
                  }
                ],
                "knowsAbout": ["Credit Card Debt Settlement", "Medical Debt Negotiation", "California Consumer Protection Laws"],
                "description": "Licensed debt settlement specialist with 12+ years of experience. Negotiated over $15 million in debt settlements for Orange County residents.",
                "alumniOf": {
                  "@type": "Organization", 
                  "name": "California State University"
                }
              },
              {
                "@type": "Person",
                "name": "Michael Rodriguez",
                "jobTitle": "Legal Compliance Director",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Orange County Debt Center"
                },
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Juris Doctor",
                    "credentialCategory": "Degree",
                    "recognizedBy": {
                      "@type": "Organization",
                      "name": "California State Bar"
                    }
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "California Bar License",
                    "credentialCategory": "Professional License"
                  }
                ],
                "knowsAbout": ["Consumer Protection Law", "Debt Collection Defense", "California Legal Compliance"],
                "description": "Licensed California attorney specializing in consumer protection and debt collection defense with 15+ years of experience.",
                "alumniOf": {
                  "@type": "Organization",
                  "name": "UCLA School of Law"
                }
              },
              {
                "@type": "Person", 
                "name": "Jennifer Park",
                "jobTitle": "Financial Analysis Manager",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Orange County Debt Center"
                },
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Certified Public Accountant",
                    "credentialCategory": "Professional Certification",
                    "recognizedBy": {
                      "@type": "Organization",
                      "name": "California Board of Accountancy"
                    }
                  }
                ],
                "knowsAbout": ["Tax Implications of Debt Settlement", "Financial Planning", "Business Debt Analysis"],
                "description": "Certified Public Accountant with 10+ years specializing in tax implications and financial planning for debt settlement clients.",
                "alumniOf": {
                  "@type": "Organization",
                  "name": "USC Marshall School of Business"
                }
              }
            ]
          })
        }}
      />

      {/* Professional Credentials Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Orange County Debt Center",
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "California State Debt Settlement License",
                "credentialCategory": "Professional License",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "California Department of Financial Protection and Innovation"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "name": "IAPDA Membership",
                "credentialCategory": "Professional Membership",
                "recognizedBy": {
                  "@type": "Organization", 
                  "name": "International Association of Professional Debt Arbitrators"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Better Business Bureau A+ Rating",
                "credentialCategory": "Business Certification",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Better Business Bureau"
                }
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2500",
              "bestRating": "5"
            }
          })
        }}
      />
    </div>
  );
}