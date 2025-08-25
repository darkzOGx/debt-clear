import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp, Phone, Clock, Shield, DollarSign, Mic, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/consultation/ConsultationForm';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const consultationRef = useRef(null);

  const faqCategories = [
    {
      category: "General Debt Settlement",
      questions: [
        {
          question: "What is debt settlement and how does it work?",
          answer: "Debt settlement is a process where we negotiate with your creditors to accept less than the full amount owed. Typically, creditors will accept 40-60% of the original debt amount. This allows you to resolve your debts for significantly less than what you currently owe while avoiding bankruptcy."
        },
        {
          question: "How much can I save with debt settlement?",
          answer: "Most Orange County clients save 40-60% on their enrolled debts after fees. For example, if you have $50,000 in debt, you might settle for $20,000-$30,000. The exact savings depend on your creditors, debt types, and negotiation success."
        },
        {
          question: "How long does the debt settlement process take?",
          answer: "Most debt settlement programs take 24-48 months to complete. The timeline depends on the amount of debt, your ability to save for settlements, and how quickly creditors agree to settlement offers. Some accounts may settle in as little as 6 months."
        },
        {
          question: "What types of debt can be settled?",
          answer: "We can settle unsecured debts including credit cards, personal loans, medical bills, store cards, and some business debts. We cannot settle secured debts like mortgages, auto loans, student loans, or tax debt."
        }
      ]
    },
    {
      category: "Orange County Specific",
      questions: [
        {
          question: "Do you serve all of Orange County?",
          answer: "Yes, we provide debt settlement services throughout Orange County including Anaheim, Irvine, Santa Ana, Huntington Beach, Newport Beach, Laguna Beach, Fountain Valley, Costa Mesa, and all other OC cities."
        },
        {
          question: "Are you licensed to operate in California?",
          answer: "Yes, we are fully licensed and bonded to provide debt settlement services in California. We comply with all California debt settlement regulations and the Rosenthal Fair Debt Collection Practices Act."
        },
        {
          question: "How do Orange County debt laws protect me?",
          answer: "California has strong consumer protection laws including the Rosenthal Act, which extends federal debt collection protections. Orange County residents are protected from abusive collection practices, and we ensure all settlements comply with state regulations."
        },
        {
          question: "What's the average debt load for Orange County residents?",
          answer: "Due to the high cost of living, Orange County residents often carry $25,000-$75,000 in unsecured debt. Credit card debt is particularly common due to housing costs, with many residents using credit to bridge income gaps."
        }
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          question: "What happens during the free consultation?",
          answer: "During your free consultation, we'll review your debts, income, and expenses to determine if debt settlement is right for you. We'll explain the process, estimate potential savings, and answer all your questions. There's no obligation to enroll."
        },
        {
          question: "How do you negotiate with creditors?",
          answer: "Our experienced negotiators contact your creditors to discuss settlement options. We leverage our relationships and knowledge of creditor policies to secure the best possible settlements. We handle all communication so you don't have to deal with creditor calls."
        },
        {
          question: "When do I start making payments?",
          answer: "You'll begin making monthly deposits into a dedicated savings account immediately after enrollment. These funds accumulate until we have enough to make settlement offers. You don't pay creditors directly during the program."
        },
        {
          question: "What if a creditor won't settle?",
          answer: "While most creditors will negotiate, some may refuse to settle. In these cases, we'll explore other options including payment plans, hardship programs, or removal from the program so you can handle the debt independently."
        }
      ]
    },
    {
      category: "Costs & Fees",
      questions: [
        {
          question: "How much does debt settlement cost?",
          answer: "Our fees typically range from 15-25% of the enrolled debt amount, paid only after successful settlements. For example, on $50,000 of enrolled debt, fees would be $7,500-$12,500, but only paid as debts are settled."
        },
        {
          question: "Do you charge upfront fees?",
          answer: "No, we don't charge any upfront fees. This is actually illegal in California for debt settlement companies. You only pay our fees after we successfully settle your debts."
        },
        {
          question: "Are there any hidden costs?",
          answer: "No hidden costs. Our fee structure is transparent and disclosed upfront. The only additional cost might be a small monthly account maintenance fee ($25-50) for your dedicated savings account."
        },
        {
          question: "Is debt settlement cheaper than bankruptcy?",
          answer: "Often yes. Chapter 7 bankruptcy costs $1,500-$3,500 in attorney and court fees, while Chapter 13 can cost $4,000-$6,000. Debt settlement fees are only paid on successful settlements, and you avoid the long-term credit impact of bankruptcy."
        }
      ]
    },
    {
      category: "Credit Impact",
      questions: [
        {
          question: "How will debt settlement affect my credit score?",
          answer: "Debt settlement will initially lower your credit score as accounts become delinquent. However, settling for less than owed is better than continued delinquencies or bankruptcy. Most clients see credit improvement within 12-24 months after program completion."
        },
        {
          question: "How long do settlements stay on my credit report?",
          answer: "Settled accounts remain on your credit report for 7 years from the original delinquency date. However, the negative impact decreases over time, and you can begin rebuilding credit immediately after settlement."
        },
        {
          question: "Can I get credit cards after debt settlement?",
          answer: "Yes, many clients qualify for secured credit cards during or shortly after their program. Rebuilding credit is possible, and we provide guidance on credit restoration strategies throughout the process."
        },
        {
          question: "Is debt settlement better than bankruptcy for my credit?",
          answer: "Generally yes. While both negatively impact credit initially, debt settlement doesn't carry the stigma of bankruptcy and typically allows faster credit recovery. Bankruptcy can prevent you from getting certain jobs, loans, or security clearances."
        }
      ]
    },
    {
      category: "Alternatives & Comparisons",
      questions: [
        {
          question: "What's the difference between debt settlement and debt consolidation?",
          answer: "Debt consolidation combines debts into one payment but you still owe the full amount. Debt settlement negotiates to reduce the actual debt owed. Settlement is better for financial hardship, while consolidation works for those who can afford full payments."
        },
        {
          question: "Should I consider credit counseling instead?",
          answer: "Credit counseling can help if you can afford to pay debts in full over 3-5 years with reduced interest. If you're struggling to make minimum payments or facing financial hardship, debt settlement may be more appropriate."
        },
        {
          question: "What about debt management plans?",
          answer: "Debt management plans (DMPs) through credit counseling agencies require paying debts in full, just with lower interest rates. If you can't afford full payments, debt settlement offers greater savings by reducing principal balances."
        },
        {
          question: "Can I negotiate with creditors myself?",
          answer: "While possible, creditors are more likely to offer better settlements to experienced negotiators who understand their policies and procedures. DIY settlement often results in higher settlement amounts and tax complications."
        }
      ]
    },
    {
      category: "Legal & Time Considerations",
      questions: [
        {
          question: "What is California's statute of limitations on debt collection?",
          answer: "California has a four-year statute of limitations for filing lawsuits to collect on debts based on a written agreement. After this period, creditors cannot sue you for the debt, though they can still attempt collection. For credit card debt and personal loans in Anaheim, Irvine, Santa Ana, and other Orange County cities, this four-year period starts from your last payment or activity on the account."
        },
        {
          question: "Can time-barred debts still be collected in Orange County?",
          answer: "Yes, creditors can still attempt to collect time-barred debts, but they cannot sue you. Many Orange County residents in cities like Newport Beach, Costa Mesa, and Huntington Beach successfully negotiate settlements on old debts for much lower amounts since the creditor's legal leverage is limited."
        },
        {
          question: "What should I do if creditors contact me about old debts?",
          answer: "Contact your creditors to discuss your inability to pay the full amount and propose a lump-sum payment for less than the total owed. You can pursue debt settlement independently or work with a licensed California debt settlement company that will negotiate on your behalf for a fee."
        },
        {
          question: "How do I assess my finances before debt settlement?",
          answer: "Create a detailed list of all your debts, including the total amount owed to each creditor. This comprehensive assessment helps determine which debts are eligible for settlement and allows you to make informed decisions about pursuing debt relief in Orange County."
        }
      ]
    },
    {
      category: "Property Tax & Liens",
      questions: [
        {
          question: "Are property taxes in Orange County different from other debts?",
          answer: "Yes, property taxes are secured debts that cannot be settled like credit cards or personal loans. Orange County property taxes must be paid in full to avoid liens and potential foreclosure. Cities like Laguna Beach, Mission Viejo, and Seal Beach have varying property tax rates that affect residents differently."
        },
        {
          question: "What happens with delinquent property taxes in Orange County?",
          answer: "Delinquent property taxes in Orange County cities like Placentia, Yorba Linda, and Westminster can result in tax liens against your property. These liens take priority over most other debts and can lead to foreclosure if not addressed. Property tax debt cannot be settled through traditional debt settlement methods."
        },
        {
          question: "How can I find information about Orange County property tax records?",
          answer: "Orange County maintains public records of property taxes and delinquent accounts. Residents in cities like Tustin, Villa Park, and Stanton can search the Orange County Tax Collector's website for property tax information and payment options. Court-ordered debt collection for property taxes follows different procedures than unsecured debt collection."
        },
        {
          question: "What is Prop 19 and how does it affect Orange County property taxes?",
          answer: "Proposition 19 affects property tax assessments for inherited properties and transfers between family members in Orange County. Residents in cities like Aliso Viejo, Dana Point, and Garden Grove may be impacted by these changes, which can affect overall debt management strategies when property values increase."
        }
      ]
    },
    {
      category: "Company-Specific Questions",
      questions: [
        {
          question: "What should I know about Americor debt relief services?",
          answer: "Americor is a debt settlement company that operates in California. When considering any debt settlement company in Orange County, research their customer service hours, read reviews from residents in cities like Fountain Valley, Fullerton, and La Habra, and verify their California licensing with the Department of Financial Protection and Innovation."
        },
        {
          question: "How do I research debt settlement companies serving Orange County?",
          answer: "Check the Better Business Bureau for ratings, read customer reviews from residents in cities like Laguna Hills, Laguna Niguel, and La Palma, verify California licensing, and inquire about customer service availability. Look for companies with transparent fee structures and positive reviews from Orange County clients."
        },
        {
          question: "What are the warning signs of debt settlement scams in Orange County?",
          answer: "Be cautious of companies making unrealistic promises about debt reduction. Legitimate debt settlement companies serving Orange County cities like Rancho Santa Margarita, San Clemente, and San Juan Capistrano will never guarantee specific settlement amounts or charge upfront fees before providing services."
        },
        {
          question: "How can I verify a debt settlement company's legitimacy?",
          answer: "Check with the California Department of Financial Protection and Innovation for licensing, review complaint records, and ask for references from other Orange County clients. Legitimate companies will provide clear information about their process and fees without high-pressure sales tactics."
        }
      ]
    }
  ];

  // Voice Search Functionality
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onstart = () => {
        setIsListening(true);
      };
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      window.voiceRecognition = recognition;
    }
  }, []);

  const startVoiceSearch = () => {
    if (window.voiceRecognition) {
      window.voiceRecognition.start();
    }
  };

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
               q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  // Generate schema for voice search optimization
  const generateFAQSchema = () => {
    const allQuestions = faqCategories.flatMap(cat => cat.questions);
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allQuestions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-neutral-900 text-white overflow-hidden border-b border-neutral-800">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-white font-mono">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Orange County:<br />
            <span className="font-mono text-3xl lg:text-4xl">Debt Settlement FAQ</span>
          </h1>

          <p className="text-xl text-neutral-300 leading-relaxed font-light relative z-10 max-w-3xl mx-auto">
            Get answers to the most common questions about debt settlement, the process, 
            costs, and what to expect as an Orange County resident.
          </p>
        </div>
      </section>

      {/* Voice Search Bar */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs or ask a question..."
              className="w-full px-12 py-4 text-lg border border-neutral-300 focus:border-black focus:outline-none transition-colors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <button
              onClick={startVoiceSearch}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 ${
                isListening ? 'bg-red-500 text-white' : 'bg-neutral-100 hover:bg-neutral-200'
              } transition-colors`}
              aria-label="Voice search"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>
          {searchQuery && (
            <div className="mt-4 text-sm text-neutral-600">
              Showing results for: <span className="font-semibold text-black">"{searchQuery}"</span>
              <button
                onClick={() => setSearchQuery('')}
                className="ml-4 text-black hover:underline"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <DollarSign className="w-8 h-8 text-black" />
              <div>
                <div className="text-2xl font-light text-black">40-60%</div>
                <div className="text-sm text-neutral-600 font-mono">Average Savings</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-8 h-8 text-black" />
              <div>
                <div className="text-2xl font-light text-black">24-48</div>
                <div className="text-sm text-neutral-600 font-mono">Months Typical</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-black" />
              <div>
                <div className="text-2xl font-light text-black">Licensed</div>
                <div className="text-sm text-neutral-600 font-mono">California Bonded</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-8 h-8 text-black" />
              <div>
                <div className="text-2xl font-light text-black">Free</div>
                <div className="text-sm text-neutral-600 font-mono">Consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-8 font-mono uppercase tracking-wide">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openQuestion === globalIndex;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="border border-neutral-200 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenQuestion(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                      >
                        <span className="text-lg font-medium text-black pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                        )}
                      </button>
                      
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: isOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-neutral-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Still Have Questions?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Our Orange County debt settlement specialists are standing by to answer 
              your specific questions and provide a free, no-obligation consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Read Our Blog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-black mb-8 text-center">Related Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/blog/orange-county-debt-settlement-laws"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
            >
              <h3 className="text-lg font-semibold text-black mb-3 group-hover:underline">
                Orange County Debt Settlement Laws
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Understanding California's debt settlement regulations and consumer protections.
              </p>
            </Link>
            
            <Link 
              to="/blog/bankruptcy-vs-debt-settlement-orange-county"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
            >
              <h3 className="text-lg font-semibold text-black mb-3 group-hover:underline">
                Bankruptcy vs Debt Settlement
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Complete comparison of debt relief options for Orange County residents.
              </p>
            </Link>
            
            <Link 
              to="/blog/choose-debt-settlement-company-orange-county"
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors group"
            >
              <h3 className="text-lg font-semibold text-black mb-3 group-hover:underline">
                Choosing a Debt Settlement Company
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Essential criteria for selecting the right debt settlement provider in OC.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Debt Analysis Form */}
      <div ref={consultationRef}>
        <ConsultationForm />
      </div>

      {/* Schema Markup for Voice Search SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />
    </div>
  );
}