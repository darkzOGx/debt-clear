import React from 'react';

const FeaturedSnippets = () => {
  const snippets = [
    {
      type: 'definition',
      question: 'What is debt settlement?',
      answer: 'Debt settlement is a debt relief method where you negotiate with creditors to pay less than the full amount owed, typically 40-60% of the original debt. The process involves stopping payments to creditors, saving money in a dedicated account, and then offering lump-sum settlements.',
      schema: 'Question'
    },
    {
      type: 'list',
      question: 'How does debt settlement work?',
      answer: {
        intro: 'The debt settlement process follows these steps:',
        items: [
          'Stop making payments to creditors',
          'Save money in a dedicated settlement account',
          'Creditors become motivated to negotiate',
          'Settlement company negotiates reduced payoffs',
          'Pay agreed settlement amounts',
          'Receive settlement letters confirming zero balance'
        ]
      },
      schema: 'HowTo'
    },
    {
      type: 'table',
      question: 'Debt settlement vs bankruptcy comparison',
      answer: {
        headers: ['Factor', 'Debt Settlement', 'Bankruptcy Chapter 7', 'Bankruptcy Chapter 13'],
        rows: [
          ['Time Frame', '12-48 months', '3-6 months', '3-5 years'],
          ['Credit Impact', '100-150 points', '130-240 points', '130-240 points'],
          ['Public Record', 'No', 'Yes', 'Yes'],
          ['Asset Protection', 'Yes', 'Limited', 'Yes'],
          ['Debt Reduction', '40-60%', '100%', '0-100%'],
          ['Cost', '15-25% of debt', '$1,500-3,500', '$3,500-6,000']
        ]
      },
      schema: 'Table'
    },
    {
      type: 'paragraph',
      question: 'How much does debt settlement cost?',
      answer: 'Debt settlement companies typically charge 15-25% of your enrolled debt amount. For example, if you enroll $40,000 in debt, fees would range from $6,000-$10,000. These fees are only charged after successful settlements and are often included in your monthly program payments.',
      schema: 'Question'
    },
    {
      type: 'numbered',
      question: 'Steps to qualify for debt settlement',
      answer: {
        intro: 'To qualify for debt settlement, follow these steps:',
        items: [
          'Have at least $10,000 in unsecured debt',
          'Experience genuine financial hardship',
          'Be unable to pay minimum monthly payments',
          'Have mostly credit card or medical debt',
          'Be willing to stop making payments',
          'Have income to fund settlements'
        ]
      },
      schema: 'HowTo'
    }
  ];

  const renderSnippetContent = (snippet) => {
    switch (snippet.type) {
      case 'definition':
      case 'paragraph':
        return (
          <div className="prose max-w-none">
            <p className="text-neutral-700 leading-relaxed">{snippet.answer}</p>
          </div>
        );
      
      case 'list':
      case 'numbered':
        return (
          <div className="prose max-w-none">
            <p className="text-neutral-700 mb-3">{snippet.answer.intro}</p>
            <ol className={snippet.type === 'numbered' ? 'list-decimal' : 'list-disc'}>
              {snippet.answer.items.map((item, index) => (
                <li key={index} className="ml-6 text-neutral-700 mb-1">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        );
      
      case 'table':
        return (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {snippet.answer.headers.map((header, index) => (
                    <th key={index} className="border border-neutral-300 bg-neutral-50 px-4 py-2 text-left text-sm font-semibold text-black">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {snippet.answer.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-neutral-300 px-4 py-2 text-sm text-neutral-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      default:
        return null;
    }
  };

  const getSchema = (snippet) => {
    if (snippet.schema === 'Question') {
      return {
        "@context": "https://schema.org",
        "@type": "Question",
        "name": snippet.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof snippet.answer === 'string' 
            ? snippet.answer 
            : snippet.answer.intro + ' ' + snippet.answer.items.join(', ')
        }
      };
    } else if (snippet.schema === 'HowTo') {
      return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": snippet.question,
        "step": snippet.answer.items.map((item, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": `Step ${index + 1}`,
          "text": item
        }))
      };
    } else if (snippet.schema === 'Table') {
      return {
        "@context": "https://schema.org",
        "@type": "Table",
        "about": snippet.question,
        "name": snippet.question
      };
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {snippets.map((snippet, index) => (
        <div key={index} className="bg-white border border-neutral-200 p-6">
          {/* Question/Title - Optimized for Featured Snippets */}
          <h2 className="text-xl font-semibold text-black mb-4">
            {snippet.question}
          </h2>

          {/* Answer Content - Structured for Google */}
          <div className="snippet-content">
            {renderSnippetContent(snippet)}
          </div>

          {/* Hidden Schema Markup */}
          {getSchema(snippet) && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(getSchema(snippet))
              }}
            />
          )}

          {/* Meta tags for better snippet detection */}
          <meta itemProp="name" content={snippet.question} />
          <meta itemProp="text" content={
            typeof snippet.answer === 'string' 
              ? snippet.answer 
              : snippet.answer.intro || ''
          } />
        </div>
      ))}

      {/* Position Zero Optimization Hints */}
      <div className="hidden">
        {/* Google prefers content near the top of the page */}
        <div className="featured-snippet-target">
          <h1>Debt Settlement Guide</h1>
          <div className="quick-answer">
            Debt settlement reduces your total debt by 40-60% through negotiation with creditors.
          </div>
        </div>

        {/* Common "People Also Ask" optimizations */}
        <div itemScope itemType="https://schema.org/FAQPage">
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Is debt settlement worth it?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                Debt settlement is worth it if you have over $10,000 in debt, cannot afford minimum payments, and want to avoid bankruptcy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSnippets;