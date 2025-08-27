import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';

const ContactInfo = ({ variant = 'default', showIcons = true, className = '' }) => {
  const contacts = {
    phone: '(844) 541-9236',
    primaryEmail: 'contact@orangecountydebtcenter.com',
    secondaryEmail: 'info@orangecountydebtcenter.com',
    address: {
      street: '400 Spectrum Center Drive',
      suite: 'Suite 1000',
      city: 'Irvine',
      state: 'CA',
      zip: '92618'
    }
  };

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          {showIcons && <Phone className="w-4 h-4" />}
          <a href={`tel:${contacts.phone}`} className="font-mono hover:text-black transition-colors">
            {contacts.phone}
          </a>
        </div>
        <div className="w-px h-6 bg-neutral-300"></div>
        <a 
          href={`mailto:${contacts.primaryEmail}`}
          className="flex items-center gap-2 text-sm text-neutral-600 hover:text-black transition-colors"
        >
          {showIcons && <Mail className="w-4 h-4" />}
          <span className="font-mono">Contact</span>
        </a>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`space-y-4 text-sm text-neutral-400 ${className}`} itemScope itemType="http://schema.org/Organization">
        <div className="font-semibold text-white mb-6">
          <span itemProp="name">Orange County Debt Center</span>
        </div>
        
        {/* Phone Contact */}
        <div className="flex items-center gap-3">
          {showIcons && <Phone className="w-4 h-4 text-neutral-500" />}
          <div className="font-semibold text-white">
            <a href={`tel:${contacts.phone}`} className="hover:text-neutral-300 transition-colors">
              <span itemProp="telephone">{contacts.phone}</span>
            </a>
          </div>
        </div>
        
        {/* Email Contacts */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            {showIcons && <Mail className="w-4 h-4 text-neutral-500" />}
            <div>
              <div className="text-white font-medium">
                <a 
                  href={`mailto:${contacts.primaryEmail}`} 
                  className="hover:text-neutral-300 transition-colors"
                >
                  <span itemProp="email">{contacts.primaryEmail}</span>
                </a>
              </div>
              <div className="text-xs text-neutral-500">Direct Contact</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {showIcons && <Mail className="w-4 h-4 text-neutral-600" />}
            <div>
              <div className="text-neutral-300">
                <a 
                  href={`mailto:${contacts.secondaryEmail}`} 
                  className="hover:text-white transition-colors"
                >
                  {contacts.secondaryEmail}
                </a>
              </div>
              <div className="text-xs text-neutral-500">General Inquiries</div>
            </div>
          </div>
        </div>
        
        {/* Address */}
        <div className="flex items-start gap-3" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          {showIcons && <MapPin className="w-4 h-4 text-neutral-500 mt-0.5" />}
          <div>
            <div itemProp="streetAddress" className="text-neutral-300">{contacts.address.street}</div>
            <div itemProp="streetAddress" className="text-neutral-300">{contacts.address.suite}</div>
            <div className="text-neutral-300">
              <span itemProp="addressLocality">{contacts.address.city}</span>, 
              <span itemProp="addressRegion"> {contacts.address.state}</span> 
              <span itemProp="postalCode"> {contacts.address.zip}</span>
            </div>
            <meta itemProp="addressCountry" content="US" />
          </div>
        </div>
        
        <div className="text-xs text-neutral-500 pt-2 border-t border-neutral-800">
          <span itemProp="areaServed">Serving Orange County, California</span>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`border border-neutral-200 bg-white p-6 ${className}`}>
        <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-700 mb-4">
          Contact Information
        </h3>
        <div className="h-px bg-neutral-200 mb-6"></div>
        
        <div className="space-y-4">
          {/* Primary Contact */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              {showIcons && <Phone className="w-4 h-4 text-neutral-600" />}
              <div>
                <div className="font-semibold text-black">
                  <a href={`tel:${contacts.phone}`} className="hover:text-neutral-700 transition-colors">
                    {contacts.phone}
                  </a>
                </div>
                <div className="text-xs text-neutral-500">Free Consultation</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {showIcons && <Mail className="w-4 h-4 text-neutral-600" />}
              <div>
                <div className="font-semibold text-black">
                  <a 
                    href={`mailto:${contacts.primaryEmail}`} 
                    className="hover:text-neutral-700 transition-colors"
                  >
                    {contacts.primaryEmail}
                  </a>
                </div>
                <div className="text-xs text-neutral-500">Direct Contact</div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-3 pt-2 border-t border-neutral-100">
            {showIcons && <Clock className="w-4 h-4 text-neutral-600 mt-0.5" />}
            <div>
              <div className="font-medium text-black">Business Hours</div>
              <div className="text-sm text-neutral-600 space-y-1">
                <div>Mon - Fri: 8:00 AM - 8:00 PM PST</div>
                <div>Saturday: 9:00 AM - 5:00 PM PST</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="flex items-start gap-3 pt-2 border-t border-neutral-100">
            {showIcons && <Shield className="w-4 h-4 text-neutral-600 mt-0.5" />}
            <div>
              <div className="font-medium text-black">Licensed & Certified</div>
              <div className="text-sm text-neutral-600">
                California DFPI Certified Debt Settlement Company
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-3">
        {showIcons && <Phone className="w-5 h-5 text-neutral-600" />}
        <div>
          <div className="font-semibold text-black">
            <a href={`tel:${contacts.phone}`} className="hover:text-neutral-700 transition-colors">
              {contacts.phone}
            </a>
          </div>
          <div className="text-sm text-neutral-600">Free Consultation</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {showIcons && <Mail className="w-5 h-5 text-neutral-600" />}
        <div>
          <div className="font-semibold text-black">
            <a 
              href={`mailto:${contacts.primaryEmail}`} 
              className="hover:text-neutral-700 transition-colors"
            >
              {contacts.primaryEmail}
            </a>
          </div>
          <div className="text-sm text-neutral-600">Direct Contact</div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {showIcons && <MapPin className="w-5 h-5 text-neutral-600 mt-0.5" />}
        <div>
          <div className="font-semibold text-black">Orange County Office</div>
          <div className="text-sm text-neutral-600">
            {contacts.address.street}<br />
            {contacts.address.suite}<br />
            {contacts.address.city}, {contacts.address.state} {contacts.address.zip}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;