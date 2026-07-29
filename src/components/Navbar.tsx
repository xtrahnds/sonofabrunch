import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { NAV_TEXT, PHONE_NUMBER } from '../data/translations';
import { Globe, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#philosophy', label: NAV_TEXT.philosophy[lang] },
    { href: '#services', label: NAV_TEXT.services[lang] },
    { href: '#pricing', label: NAV_TEXT.pricing[lang] },
    { href: '#location', label: NAV_TEXT.location[lang] },
    { href: '#contact', label: NAV_TEXT.contact[lang] },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md hairline-b py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent py-5 hairline-b'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group flex flex-col">
            <span className="font-serif-en text-xl sm:text-2xl font-semibold tracking-tight uppercase text-[#F3E8D2] group-hover:text-[#C78A3B] transition-colors">
              {NAV_TEXT.brand}
            </span>
            <span className="text-[10px] uppercase letter-spaced opacity-60 text-[#C9A35E] font-serif-tc">
              {NAV_TEXT.subBrand}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase letter-spaced font-light text-[#F3E8D2]/80 hover:text-[#C78A3B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8B1E2D] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Phone + Language Toggle + Mobile Menu Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Direct Call Button (Desktop/Tablet) */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, '')}`}
              className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 text-xs text-[#F3E8D2] hairline hover:bg-[#F3E8D2] hover:text-[#080808] transition-all bg-[#111111]/60"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A35E]" />
              <span>{PHONE_NUMBER}</span>
            </a>

            {/* Language Switcher Button (EN | 繁中) matching theme */}
            <div className="flex items-center border border-[#F3E8D2]/20 bg-[#080808] p-0.5">
              <button
                id="lang-toggle-en"
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-[10px] font-medium tracking-widest uppercase transition-all ${
                  lang === 'en'
                    ? 'bg-[#F3E8D2] text-[#080808] font-semibold'
                    : 'text-[#F3E8D2]/60 hover:text-[#F3E8D2]'
                }`}
              >
                EN
              </button>
              <button
                id="lang-toggle-tc"
                onClick={() => setLang('tc')}
                className={`px-3 py-1 text-[10px] font-medium tracking-widest uppercase font-serif-tc transition-all ${
                  lang === 'tc'
                    ? 'bg-[#F3E8D2] text-[#080808] font-semibold'
                    : 'text-[#F3E8D2]/60 hover:text-[#F3E8D2]'
                }`}
              >
                繁中
              </button>
            </div>

            {/* Inquiry Trigger */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center px-4 py-1.5 text-[11px] uppercase letter-spaced text-[#F3E8D2] bg-[#8B1E2D] hover:bg-[#5E1A22] hairline transition-all"
            >
              {lang === 'en' ? 'Book / Inquiry' : '預約諮詢'}
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F3E8D2] hover:text-[#C9A35E] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-[#8B1E2D]/30 px-6 pt-4 pb-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-widest text-[#F3E8D2] hover:text-[#C9A35E] py-1 border-b border-[#181514]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col space-y-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center space-x-2 py-2 border border-[#8B1E2D]/40 text-xs text-[#F3E8D2]"
            >
              <Phone className="w-4 h-4 text-[#C9A35E]" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-[#F3E8D2] bg-[#8B1E2D] border border-[#C9A35E]/40"
            >
              {lang === 'en' ? 'Book / Inquiry' : '預約諮詢'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
