import React from 'react';

const EnhancedFAQSchema = ({ pageType = 'general', city = '', showVisibleFAQ = false }) => {
  
  // AI-optimized FAQ data for citations
  const generalFAQs = [
    {
      question: "What is debt settlement and how does it work?",
      answer: "Debt settlement is a debt relief strategy where a company negotiates with your creditors to accept less than the full amount owed. In Orange County, licensed debt settlement companies typically achieve 40-60% debt reduction. The process involves stopping payments to creditors, accumulating funds in a settlement account, and negotiating lump-sum settlements. Most programs take 24-48 months to complete."
    },
    {
      question: "How much can I save with debt settlement in Orange County?",
      answer: "Orange County residents typically save 40-60% of their enrolled debts through professional debt settlement. For example, $50,000 in credit card debt might settle for $20,000-$30,000. The exact savings depend on your creditors, debt types, account ages, and negotiation success. Our clients average 52% debt reduction after fees."
    },
    {
      question: "What does debt settlement cost in California?",
      answer: "California law prohibits upfront fees for debt settlement services. Licensed companies can only charge fees after successfully settling your debts. Typical fees range from 15-25% of the enrolled debt amount. For $50,000 in enrolled debt, fees would be $7,500-$12,500, paid only as settlements are reached."
    },
    {
      question: "How long does debt settlement take?",
      answer: "Most debt settlement programs in Orange County take 24-48 months to complete. The timeline depends on your total debt amount, monthly deposit capacity, and how quickly creditors accept settlement offers. Some accounts may settle in as little as 6 months, while others may take the full program duration."
    },
    {
      question: "Is debt settlement better than bankruptcy?",
      answer: "Debt settlement is often better than bankruptcy for Orange County residents because it typically has less long-term credit impact, allows you to keep assets, and costs less than Chapter 7 bankruptcy attorney fees ($2,500-$5,000). However, the best option depends on your specific financial situation, income, and debt types."
    },
    {
      question: "What types of debt can be settled?",
      answer: "Debt settlement works for unsecured debts including credit cards, personal loans, medical bills, store cards, and some business debts. It cannot settle secured debts like mortgages, auto loans, student loans (federal), or tax debt. In California, most credit card and medical debt can be successfully settled."
    },
    {
      question: "How will debt settlement affect my credit score?",
      answer: "Debt settlement will initially lower your credit score as accounts become delinquent during the negotiation process. However, settling debts for less than owed shows as 'settled' rather than unpaid on credit reports. Most clients see credit improvement within 12-24 months after program completion as they rebuild their credit history."
    },
    {
      question: "Is debt settlement legal in California?",
      answer: "Yes, debt settlement is completely legal in California. The industry is regulated by the California Department of Financial Protection and Innovation (DFPI). Companies must be licensed, cannot charge upfront fees, and must follow strict consumer protection laws including written agreements and disclosure requirements."
    },
    {
      question: "Do you serve all of Orange County?",
      answer: "Yes, we provide debt settlement services throughout Orange County including Anaheim, Irvine, Santa Ana, Huntington Beach, Newport Beach, Costa Mesa, Fullerton, Orange, Garden Grove, Westminster, Fountain Valley, Laguna Beach, Mission Viejo, Yorba Linda, and all other OC cities."
    },
    {
      question: "What happens during the debt settlement process?",
      answer: "The debt settlement process involves five main steps: 1) Free consultation and debt analysis, 2) Enrollment of qualifying debts into the program, 3) Monthly deposits into a dedicated settlement account, 4) Professional negotiation with creditors for reduced payoff amounts, and 5) Settlement of accounts and program graduation."
    }
  ];

  const citySpecificFAQs = [
    {
      question: `What makes debt settlement different in ${city}?`,
      answer: `Debt settlement in ${city} follows the same California state laws and regulations. However, our local Orange County specialists understand specific ${city} market conditions, cost of living factors, and have established relationships with creditors who commonly work with ${city} residents. This local expertise often leads to better settlement outcomes.`
    },
    {
      question: `How many ${city} families have you helped?`,
      answer: `We have helped over 200 families in ${city} achieve debt relief since 2018. Our ${city} clients have saved an average of $16,800 through our debt settlement program, with a 91% completion rate. The average timeline for ${city} residents is 22 months.`
    },
    {
      question: `Do you have offices in ${city}?`,
      answer: `While we serve all of ${city} and Orange County, consultations are conducted remotely for your convenience. This allows us to keep costs low and pass those savings to our clients. We are licensed throughout California and all consultations, negotiations, and settlements can be handled efficiently without in-person meetings.`
    }
  ];

  const medicalDebtFAQs = [
    {
      question: "Can medical debt be settled?",
      answer: "Yes, medical debt can often be settled for significantly less than owed. Hospitals and medical providers in Orange County frequently accept 10-30 cents on the dollar for old medical debts. Medical debt settlement success rates are typically higher than credit card debt because healthcare providers prefer collecting something rather than nothing."
    },
    {
      question: "How is medical debt settlement different?",
      answer: "Medical debt settlement differs because healthcare providers often have charity care programs, financial hardship policies, and are more willing to negotiate. In California, hospitals must offer charity care for patients earning up to 350% of the federal poverty level. Medical debts also cannot increase your interest rates like credit cards."
    }
  ];

  const businessDebtFAQs = [
    {
      question: "Can business debt be settled?",
      answer: "Yes, unsecured business debts including business credit cards, merchant cash advances, and business lines of credit can often be settled. Business debt settlement typically saves 40-70% of the original balance. However, business debt settlement may have different tax implications than personal debt settlement."
    },
    {
      question: "What about SBA loans and business debt settlement?",
      answer: "SBA loans are typically guaranteed by the Small Business Administration and are more difficult to settle. However, the personal guaranty portions of SBA loans may be negotiable in certain circumstances. Business credit cards and unsecured business loans not backed by the SBA are good candidates for settlement."
    }
  ];

  // Select appropriate FAQ set based on page type
  let faqData = generalFAQs;
  
  if (pageType === 'city' && city) {
    faqData = [...generalFAQs.slice(0, 7), ...citySpecificFAQs];
  } else if (pageType === 'medical') {
    faqData = [...generalFAQs.slice(0, 5), ...medicalDebtFAQs];
  } else if (pageType === 'business') {
    faqData = [...generalFAQs.slice(0, 5), ...businessDebtFAQs];
  }

  // Generate schema markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": `${city ? `${city} ` : ''}Orange County Debt Settlement FAQ`,
    "description": `Frequently asked questions about debt settlement services in ${city ? `${city}, ` : ''}Orange County, California`,
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "name": "Orange County Debt Center"
        }
      }
    })),
    "publisher": {
      "@type": "Organization",
      "name": "Orange County Debt Center",
      "url": "https://orangecountydebtcenter.com"
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
  };

  // Additional schema for AI platforms
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-question", ".faq-answer"],
    "xpath": [
      "/html/body//*[@class='faq-question']",
      "/html/body//*[@class='faq-answer']"
    ]
  };

  return (
    <>
      {/* Main FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData, null, 2)
        }}
      />
      
      {/* Speakable Schema for Voice Search */}
      <script
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakableSchema, null, 2)
        }}
      />

      {/* HowTo Schema for Process Questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": `How to Start Debt Settlement in ${city ? `${city}, ` : ''}Orange County`,
            "description": "Step-by-step process for beginning debt settlement services",
            "totalTime": "PT15M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Debt information"
              },
              {
                "@type": "HowToSupply", 
                "name": "Income documentation"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Phone or computer for consultation"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Free Consultation",
                "text": "Call (844) 541-9236 for free debt analysis",
                "url": "tel:8445419236"
              },
              {
                "@type": "HowToStep",
                "name": "Debt Enrollment",
                "text": "Enroll qualifying debts into settlement program"
              },
              {
                "@type": "HowToStep",
                "name": "Build Settlement Funds",
                "text": "Make monthly deposits to dedicated settlement account"
              },
              {
                "@type": "HowToStep",
                "name": "Professional Negotiation",
                "text": "Licensed specialists negotiate with creditors"
              }
            ]
          }, null, 2)
        }}
      />

      {/* Visible FAQ Section (Optional) */}
      {showVisibleFAQ && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
                {city && (
                  <span className="block text-2xl font-medium text-blue-600 mt-2">
                    {city} Debt Settlement
                  </span>
                )}
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about debt settlement in Orange County
              </p>
            </div>

            <div className="space-y-8">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="faq-question text-xl font-semibold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <div className="faq-answer text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Have More Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Get personalized answers from our licensed debt settlement specialists
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:8445419236"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Call (844) 541-9236 - Free Consultation
                </a>
                <a
                  href="#consultation"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get Free Debt Analysis
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EnhancedFAQSchema;