import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services',
      href: '#',
      submenu: [
        { name: 'Debt Settlement Anaheim', href: '/debt-settlement-anaheim' },
        { name: 'Debt Settlement Irvine', href: '/debt-settlement-irvine' },
        { name: 'Debt Settlement Santa Ana', href: '/debt-settlement-santa-ana' },
        { name: 'Debt Settlement Huntington Beach', href: '/debt-settlement-huntington-beach' },
      ]
    },
    { name: 'Resources', href: '/blog' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <span className="text-white font-mono text-sm font-bold">V</span>
              </div>
              <div>
                <span className="text-xl font-light text-black">VegaX</span>
                <span className="text-xl font-mono text-black ml-1">AI</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm font-mono uppercase tracking-wide text-neutral-700 hover:text-black transition-colors">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-200 shadow-lg">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-black transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-mono uppercase tracking-wide transition-colors ${
                      isActive(item.href)
                        ? 'text-black font-semibold'
                        : 'text-neutral-700 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="#consultation"
              className="bg-black text-white px-6 py-2 text-sm font-mono uppercase tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-700 hover:text-black transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button 
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left text-sm font-mono uppercase tracking-wide text-neutral-700 hover:text-black transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesOpen && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block text-sm text-neutral-600 hover:text-black transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block text-sm font-mono uppercase tracking-wide transition-colors ${
                        isActive(item.href)
                          ? 'text-black font-semibold'
                          : 'text-neutral-700 hover:text-black'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-neutral-200">
                <Link
                  to="#consultation"
                  className="block w-full bg-black text-white px-6 py-3 text-sm font-mono uppercase tracking-wide text-center hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}