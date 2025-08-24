import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function SantaAnaDebtSettlement() {
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
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Location Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <MapPin className="w-4 h-4 text-black" />
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-mono">
                SANTA ANA DEBT SETTLEMENT SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-[0.9]">
              Debt Settlement
              <br />
              <span className="font-mono text-4xl lg:text-5xl">Santa Ana, CA</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Comprehensive debt relief for Santa Ana's diverse community. Our bilingual team and AI technology 
              help reduce debt by up to 60% while providing culturally sensitive financial guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={scrollToConsultation}
                className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-base font-mono uppercase tracking-wide"
              >
                Free Santa Ana Debt Analysis
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link 
                to="/blog"
                className="border border-neutral-300 text-black px-8 py-6 hover:border-black transition-colors flex items-center gap-2 font-mono text-base uppercase tracking-wide"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Santa Ana Demographics */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black mb-4">
              Serving Santa Ana's <span className="font-mono">Diverse Community</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Understanding the unique financial needs of Orange County's most populous city
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">334K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Population Served
              </div>
              <p className="text-xs text-neutral-500">
                Orange County's largest city with diverse debt settlement needs
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">78%</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Latino Population
              </div>
              <p className="text-xs text-neutral-500">
                Bilingual services and culturally sensitive debt counseling available
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <div className="text-4xl font-mono text-black mb-2">$57K</div>
              <div className="text-sm font-mono uppercase tracking-wide text-neutral-600 mb-4">
                Median Household Income
              </div>
              <p className="text-xs text-neutral-500">
                Tailored solutions for working families and small business owners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-6">
              Debt Settlement for <span className="font-mono">Santa Ana Families</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Specialized programs designed for the unique challenges facing Santa Ana residents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Small Business Owners</h3>
                  <p className="text-neutral-600 mb-4">
                    Santa Ana's vibrant small business community faces unique debt challenges from equipment 
                    financing, inventory loans, and commercial credit cards.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Business credit card settlements</li>
                    <li>• Equipment financing negotiations</li>
                    <li>• SBA loan modifications</li>
                    <li>• Commercial debt restructuring</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Working Families</h3>
                  <p className="text-neutral-600 mb-4">
                    Many Santa Ana families juggle multiple jobs and face unexpected expenses that 
                    can quickly spiral into unmanageable debt.
                  </p>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    <li>• Medical debt from emergency care</li>
                    <li>• Credit card debt consolidation</li>
                    <li>• Auto loan modifications</li>
                    <li>• Utility payment plans</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
              <h3 className="text-2xl font-light text-black mb-8">
                <span className="font-mono">Santa Ana</span> Success Stories
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$47K</div>
                    <div className="text-sm text-neutral-600">reduced to $18K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Local restaurant owner eliminated 62% of business debt while keeping restaurant open
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$23K</div>
                    <div className="text-sm text-neutral-600">reduced to $9K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Single mother of three eliminated medical debt from emergency surgery
                  </p>
                </div>
                
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-mono text-black">$35K</div>
                    <div className="text-sm text-neutral-600">reduced to $14K</div>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Construction worker settled credit card debt while maintaining employment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilingual Services */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-black mb-6">
            Servicios de Liquidación de <span className="font-mono">Deudas en Español</span>
          </h2>
          
          <p className="text-lg text-neutral-600 mb-8">
            Ofrecemos servicios completos de liquidación de deudas en español con consejeros 
            financieros bilingües que entienden las necesidades de la comunidad latina.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 border border-neutral-200">
              <h3 className="font-semibold text-black mb-4">Servicios Disponibles</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Consulta gratuita en español</li>
                <li>• Negociación directa con acreedores</li>
                <li>• Planes de pago personalizados</li>
                <li>• Educación financiera en español</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 border border-neutral-200">
              <h3 className="font-semibold text-black mb-4">Protección Legal</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Conocimiento de leyes de California</li>
                <li>• Protección contra cobradores abusivos</li>
                <li>• Derechos del consumidor en español</li>
                <li>• Documentación legal bilingüe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Ready to Start Your <span className="font-mono">Debt-Free Journey?</span>
          </h2>
          
          <p className="text-neutral-300 mb-8 text-lg">
            Join hundreds of Santa Ana families who've eliminated their debt with VegaX AI
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={scrollToConsultation}
              className="bg-white text-black hover:bg-neutral-100 px-8 py-6 text-base font-mono uppercase tracking-wide"
            >
              Start Your Free Analysis
              <ArrowRight className="w-4 h-4 ml-3" />
            </Button>
            
          </div>
        </div>
      </section>

      {/* Schedule Research Session Form */}
      <div ref={consultationRef}>
        <ConsultationForm />
      </div>
    </div>
  );
}