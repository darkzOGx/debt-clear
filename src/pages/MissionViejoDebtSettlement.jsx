import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CheckCircle, Star, MapPin, Clock, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function MissionViejoDebtSettlement() {
  const consultationRef = useRef(null);

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  
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
            {/* Location Badge */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
                MISSION VIEJO DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Debt Settlement:<br />
              <span className="font-mono text-3xl lg:text-4xl">Mission Viejo, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto mb-8">
              AI-powered debt relief for Mission Viejo residents. Reduce your debt by up to 50% 
              with our licensed debt settlement specialists serving the 92691-92694 area.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-white hover:bg-neutral-100 text-black px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Mission Viejo Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/blog"
                className="border border-white text-white px-8 py-6 hover:bg-white hover:text-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Mission Viejo Info */}
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
                Serving Mission Viejo's
                <br />
                <span className="font-mono">Family Community</span>
              </h2>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Known as one of the safest cities in America with excellent schools and family amenities, 
                Mission Viejo residents often face financial challenges from maintaining high living standards 
                and educational costs. Our debt settlement specialists understand the family-focused community 
                and work with Mission Viejo residents to achieve debt freedom.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-black mb-1">Mission Viejo Family Expertise</div>
                    <div className="text-neutral-600 text-sm">Understanding of 92691-92694 family-oriented community and high living standards</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-black mb-1">Educational Debt Solutions</div>
                    <div className="text-neutral-600 text-sm">Special programs for families managing educational expenses and child-related debt</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-black mb-1">South County Access</div>
                    <div className="text-neutral-600 text-sm">Convenient location serving southern Orange County families</div>
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
              <h3 className="text-xl font-semibold text-black mb-6">Mission Viejo Demographics</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-light text-black mb-1">93,937</div>
                  <div className="text-sm text-neutral-600 font-mono">Population</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-1">$105,928</div>
                  <div className="text-sm text-neutral-600 font-mono">Median Income</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-1">17.4 sq mi</div>
                  <div className="text-sm text-neutral-600 font-mono">Area</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-1">#1</div>
                  <div className="text-sm text-neutral-600 font-mono">Safest City</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="text-sm text-neutral-600 font-mono mb-2">ZIP CODES SERVED:</div>
                <div className="text-sm text-neutral-700">
                  92691, 92692, 92694
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-sm text-neutral-600 font-mono mb-2">SCHOOL DISTRICTS:</div>
                <div className="text-sm text-neutral-700">
                  Saddleback Valley USD, Capistrano USD
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-sm text-neutral-600 font-mono mb-2">NEARBY AREAS:</div>
                <div className="text-sm text-neutral-700">
                  Lake Forest, Laguna Niguel, Laguna Hills, Aliso Viejo
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
              <span className="font-mono">Mission Viejo Families</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
              Comprehensive debt relief solutions tailored to the unique financial needs of Mission Viejo's family community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Credit Card Debt Settlement",
                description: "Negotiate with major credit card companies to reduce balances by up to 50% for Mission Viejo families.",
                features: ["Family credit card settlements", "Average 40-60% reduction", "24-48 month programs"]
              },
              {
                icon: Users,
                title: "Educational Debt Relief",
                description: "Specialized programs for Mission Viejo families managing educational expenses and child-related debt.",
                features: ["Private school tuition debt", "College preparation expenses", "Educational loan settlements"]
              },
              {
                icon: Clock,
                title: "Medical Debt Relief",
                description: "Strategic settlement of medical debt from Mission Hospital and Orange County healthcare providers.",
                features: ["Family medical bill negotiations", "Insurance dispute resolution", "Payment plan alternatives"]
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

      {/* Success Stories */}
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
              Mission Viejo Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Karen & Steve M.",
                location: "Mission Viejo, CA 92691",
                amount: "$48,000",
                reduction: "53%",
                testimonial: "As a family with three kids in private school, they understood our financial pressures and helped us save our home."
              },
              {
                name: "Lisa D.",
                location: "Near Saddleback College",
                amount: "$34,000", 
                reduction: "50%",
                testimonial: "Professional service with deep understanding of family financial challenges. They helped us plan for our children's future."
              },
              {
                name: "Robert F.",
                location: "Mission Viejo 92692",
                amount: "$41,000",
                reduction: "55%",
                testimonial: "They helped our family become debt-free while understanding the high cost of living in this beautiful community."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 border border-neutral-200"
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

      {/* Consultation Form */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div ref={consultationRef}>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
}