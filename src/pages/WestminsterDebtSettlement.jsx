import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle, Star, MapPin, Clock, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function WestminsterDebtSettlement() {
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-neutral-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.02)_50%,transparent_75%)]"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-neutral-600" />
              <span className="text-sm font-mono uppercase tracking-wide text-neutral-600">
                Westminster, CA 92683-92685
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-black mb-6 leading-tight">
              Westminster
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Debt Settlement</span>
            </h1>
            
            <p className="text-xl text-neutral-700 leading-relaxed mb-8 font-light">
              AI-powered debt relief for Westminster residents. Reduce your debt by up to 50% 
              with our licensed debt settlement specialists serving the 92683-92685 area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={scrollToConsultation}
                className="bg-black text-white px-8 py-4 hover:bg-neutral-800 transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide"
              >
                <Phone className="w-4 h-4" />
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link 
                to="/blog"
                className="border border-neutral-300 text-black px-8 py-4 hover:border-black transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-light text-black mb-2">4.9★</div>
                <div className="text-sm text-neutral-600 font-mono">Client Rating</div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">$2.8M+</div>
                <div className="text-sm text-neutral-600 font-mono">Debt Resolved</div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">420+</div>
                <div className="text-sm text-neutral-600 font-mono">Clients Helped</div>
              </div>
              <div>
                <div className="text-3xl font-light text-black mb-2">24/7</div>
                <div className="text-sm text-neutral-600 font-mono">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Westminster Info */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
                Serving Westminster's
                <br />
                <span className="font-mono">Diverse Community</span>
              </h2>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Known for its vibrant Vietnamese community and diverse population, Westminster 
                residents face unique financial challenges with varying income levels and family 
                structures. Our debt settlement specialists understand the multicultural community 
                and work with Westminster families to achieve debt freedom.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-black mb-1">Westminster Local Expertise</div>
                    <div className="text-neutral-600 text-sm">Understanding of 92683-92685 diverse community and economic needs</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-black mb-1">Multicultural Services</div>
                    <div className="text-neutral-600 text-sm">Culturally sensitive debt relief programs for Westminster's diverse population</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-black mb-1">Central OC Access</div>
                    <div className="text-neutral-600 text-sm">Convenient location serving Westminster and surrounding communities</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 border border-neutral-200"
            >
              <h3 className="text-xl font-semibold text-black mb-6">Westminster Demographics</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-light text-black mb-1">90,857</div>
                  <div className="text-sm text-neutral-600 font-mono">Population</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-1">$66,616</div>
                  <div className="text-sm text-neutral-600 font-mono">Median Income</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-1">10.2 sq mi</div>
                  <div className="text-sm text-neutral-600 font-mono">Area</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-1">40%</div>
                  <div className="text-sm text-neutral-600 font-mono">Asian Population</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="text-sm text-neutral-600 font-mono mb-2">ZIP CODES SERVED:</div>
                <div className="text-sm text-neutral-700">
                  92683, 92684, 92685
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-sm text-neutral-600 font-mono mb-2">CULTURAL DISTRICTS:</div>
                <div className="text-sm text-neutral-700">
                  Little Saigon, Westminster Mall Area, Midway City
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-sm text-neutral-600 font-mono mb-2">NEARBY AREAS:</div>
                <div className="text-sm text-neutral-700">
                  Garden Grove, Huntington Beach, Fountain Valley, Stanton
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Debt Settlement Services for
              <br />
              <span className="font-mono">Westminster Residents</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
              Comprehensive debt relief solutions tailored to the unique financial needs of Westminster's diverse community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Credit Card Debt Settlement",
                description: "Negotiate with major credit card companies to reduce balances by up to 50% for Westminster residents.",
                features: ["Major bank negotiations", "Average 40-60% reduction", "24-48 month programs"]
              },
              {
                icon: Users,
                title: "Small Business Debt Relief",
                description: "Specialized programs for Westminster small business owners and entrepreneurs in the service industry.",
                features: ["Restaurant debt settlements", "Retail business credit lines", "Equipment loan modifications"]
              },
              {
                icon: Clock,
                title: "Medical Debt Relief",
                description: "Strategic settlement of medical debt from Westminster Community Services and Orange County providers.",
                features: ["Hospital bill negotiations", "Insurance dispute resolution", "Payment plan alternatives"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-neutral-50 p-8 border border-neutral-200 hover:border-black transition-colors"
              >
                <service.icon className="w-12 h-12 text-black mb-6" />
                <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Westminster
              <br />
              <span className="font-mono">Debt Settlement Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "Comprehensive debt analysis for Westminster residents with no upfront costs."
              },
              {
                step: "02", 
                title: "Custom Strategy",
                description: "Personalized debt settlement plan based on your Westminster financial situation."
              },
              {
                step: "03",
                title: "Creditor Negotiation",
                description: "Our experts negotiate directly with creditors to reduce your debt balances."
              },
              {
                step: "04",
                title: "Debt Freedom",
                description: "Complete your program and achieve financial freedom in Westminster."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-mono text-lg mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Westminster Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Minh N.",
                location: "Westminster, CA 92683",
                amount: "$36,000",
                reduction: "52%",
                testimonial: "They understood our community and helped my family reduce our restaurant business debt during difficult times."
              },
              {
                name: "Rosa G.",
                location: "Little Saigon Area",
                amount: "$29,000", 
                reduction: "48%",
                testimonial: "Professional service with cultural understanding. They helped us navigate debt relief while respecting our values."
              },
              {
                name: "James K.",
                location: "Westminster 92684",
                amount: "$33,000",
                reduction: "54%",
                testimonial: "They helped me become debt-free while understanding the financial challenges of our diverse community."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-neutral-50 p-8 border border-neutral-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-black fill-current" />
                  ))}
                </div>
                
                <p className="text-neutral-700 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
                
                <div className="border-t border-neutral-200 pt-4">
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600 mb-2">{testimonial.location}</div>
                  <div className="text-sm font-mono">
                    <span className="text-neutral-600">Debt Reduced:</span> {testimonial.amount} ({testimonial.reduction})
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Start Your
              <br />
              <span className="font-mono">Westminster Debt Settlement?</span>
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto font-light">
              Join hundreds of Westminster residents who have achieved debt freedom. 
              Get your free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-black px-8 py-4 hover:bg-neutral-100 transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide"
              >
                <Phone className="w-4 h-4" />
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/blog"
                className="border border-neutral-600 text-white px-8 py-4 hover:border-white transition-colors flex items-center gap-2 font-mono text-sm uppercase tracking-wide"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Form */}
      <ConsultationForm />
    </div>
  );
}