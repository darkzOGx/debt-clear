import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "I'm the Debt Settlement Lab research assistant. I can provide information about our methodologies, analyze your debt situation, or schedule a consultation session.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response with predefined answers
    const response = generateResponse(inputValue);
    
    // Log conversation locally (no external API needed)
    console.log('Chat interaction:', {
      message: inputValue,
      response: response,
      intent: detectIntent(inputValue)
    });

    const botMessage = {
      id: Date.now() + 1,
      text: response,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);

    setIsTyping(false);
  };

  const generateResponse = (message) => {
    const intent = detectIntent(message);
    const responses = {
      calculator: "I recommend using our debt analysis tool above to calculate your projected savings. Our research-based algorithm analyzes your profile against 50,000+ Orange County cases to provide accurate reduction estimates.",
      consultation: "Our research team offers confidential consultation sessions to review your debt profile. These sessions analyze your specific situation using our proprietary methodologies. Would you like to schedule a consultation?",
      services: "Our laboratory uses evidence-based debt settlement methodologies with a 52.7% average debt reduction rate. We operate on a performance-based fee structure with no upfront costs and maintain an A+ BBB rating with IAPDA certification.",
      testimonials: "Our research has successfully analyzed over 50,000 cases with an average debt reduction of 52.7%. Clients typically see resolution in 12-24 months. Each case is handled with strict confidentiality and professional oversight.",
      question: "I can provide information about our research methodologies, debt analysis protocols, or consultation services. Our laboratory specializes in evidence-based debt settlement with proven results across Orange County residents."
    };
    return responses[intent] || responses.question;
  };

  const detectIntent = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('calculat') || lowerMessage.includes('analyz')) return 'calculator';
    if (lowerMessage.includes('consult') || lowerMessage.includes('session')) return 'consultation';
    if (lowerMessage.includes('method') || lowerMessage.includes('how')) return 'services';
    if (lowerMessage.includes('case') || lowerMessage.includes('result')) return 'testimonials';
    return 'question';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 2 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-none bg-black hover:bg-neutral-800 text-white"
        >
          {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-40"
          >
            <div className="border border-neutral-200 bg-white shadow-2xl">
              {/* Header */}
              <div className="bg-black text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-mono">Research Assistant</div>
                      <div className="text-xs text-neutral-300">Debt Settlement Lab</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10 w-6 h-6"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-neutral-50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-6 h-6 flex items-center justify-center ${
                        message.isBot ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-600'
                      }`}>
                        {message.isBot ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                      </div>
                      <div className={`px-3 py-2 text-sm ${
                        message.isBot 
                          ? 'bg-white border border-neutral-200 text-neutral-800' 
                          : 'bg-black text-white'
                      }`}>
                        {message.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-black text-white flex items-center justify-center">
                        <Bot className="w-3 h-3" />
                      </div>
                      <div className="bg-white border border-neutral-200 px-3 py-2">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-neutral-400 animate-bounce"></div>
                          <div className="w-1 h-1 bg-neutral-400 animate-bounce delay-75"></div>
                          <div className="w-1 h-1 bg-neutral-400 animate-bounce delay-150"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input */}
              <div className="p-4 border-t border-neutral-200 bg-white">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our research methodologies..."
                    className="flex-1 border-neutral-200 focus:border-black focus-visible:ring-0 font-mono text-sm"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="icon"
                    className="bg-black hover:bg-neutral-800 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}