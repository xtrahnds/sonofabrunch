import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { SERVICES_DATA, SMS_LINKS, WHATSAPP_LINKS } from '../data/translations';
import { Car, Stethoscope, ShoppingBag, Home, Smartphone, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ServiceMenuProps {
  lang: Language;
  onOpenInquiry: () => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Car':
      return <Car className="w-6 h-6 text-[#C9A35E]" />;
    case 'Stethoscope':
      return <Stethoscope className="w-6 h-6 text-[#C9A35E]" />;
    case 'ShoppingBag':
      return <ShoppingBag className="w-6 h-6 text-[#C9A35E]" />;
    case 'Home':
      return <Home className="w-6 h-6 text-[#C9A35E]" />;
    case 'Smartphone':
      return <Smartphone className="w-6 h-6 text-[#C9A35E]" />;
    default:
      return <Car className="w-6 h-6 text-[#C9A35E]" />;
  }
};

export const ServiceMenu: React.FC<ServiceMenuProps> = ({ lang, onOpenInquiry }) => {
  const isEn = lang === 'en';
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);

  const selectedService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#C9A35E]/40 bg-[#111111] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A35E]" />
            <span className="nav-text text-[#C78A3B]">
              {isEn ? 'CURATED LIFE CONCIERGE' : '五大尊貴隨行服務企劃'}
            </span>
          </div>
          <h2 className="text-[#F3E8D2]">
            {isEn ? (
              <span className="en-heading text-3xl sm:text-4xl block text-[#F3E8D2]">
                Detailed Service Menu
              </span>
            ) : (
              <span className="tc-heading text-4xl sm:text-5xl block text-[#F3E8D2]">
                專屬隨行與生活管理服務項目
              </span>
            )}
          </h2>
          <p className="body-text text-[17px] text-[#D4C6AE]">
            {isEn
              ? 'Tailored specifically for Cantonese-speaking senior matriarchs and patriarchs living in Vancouver.'
              : '專為居住在大溫地區的廣東話長者設計。提供看護，司機和保姆不能取代的尊嚴守護。'}
          </p>
        </div>

        {/* Desktop & Mobile Tab Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-12 border-b border-[#8B1E2D]/30 pb-4">
          {SERVICES_DATA.map((s) => {
            const isActive = s.id === activeTab;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex flex-col items-center justify-center p-4 text-center transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#181514] border-[#C9A35E] text-[#F3E8D2] shadow-lg'
                    : 'bg-[#111111]/60 border-[#8B1E2D]/20 text-[#90897F] hover:text-[#D4C6AE] hover:border-[#8B1E2D]/50'
                }`}
              >
                <div className="mb-2">{getIcon(s.iconName)}</div>
                <span className="text-xs font-semibold tracking-wider font-serif-tc">
                  {isEn ? s.titleEn : s.titleTc}
                </span>
                <span className="text-[10px] text-[#C9A35E] mt-1 opacity-80">
                  {isEn ? s.tagEn : s.tagTc}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        <div className="bg-[#111111] border border-[#8B1E2D]/30 p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B1E2D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Service Header & Intro */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#181514] border border-[#C9A35E]/30">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs text-[#C9A35E] font-semibold tracking-widest uppercase block font-serif-tc">
                    {isEn ? selectedService.tagEn : selectedService.tagTc}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F3E8D2] font-serif-tc mt-0.5">
                    {isEn ? selectedService.titleEn : selectedService.titleTc}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#C9A35E] italic font-serif-tc">
                "{isEn ? (selectedService.subtitleEn) : (selectedService.mottoTc || selectedService.subtitleTc)}"
              </p>

              <div className="space-y-3">
                <p className="text-sm sm:text-base text-[#D4C6AE] font-light leading-relaxed font-sans-tc whitespace-pre-line">
                  {isEn ? selectedService.descEn : selectedService.descTc}
                </p>
                {(isEn ? selectedService.disclaimerEn : selectedService.disclaimerTc) && (
                  <p className="text-xs text-[#C78A3B] font-light italic font-sans-tc pt-1">
                    {isEn ? selectedService.disclaimerEn : selectedService.disclaimerTc}
                  </p>
                )}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#8B1E2D] hover:bg-[#A32335] text-[#F3E8D2] text-xs font-semibold tracking-widest uppercase transition-all border border-[#C9A35E]/40"
                >
                  <span>{isEn ? 'Request This Service' : '即時預約此項服務'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A35E]" />
                </button>
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="lg:col-span-6 bg-[#181514] p-6 border border-[#8B1E2D]/20 space-y-4">
              <h4 className="text-xs font-semibold text-[#C9A35E] tracking-widest uppercase font-serif-tc border-b border-[#8B1E2D]/30 pb-3">
                {isEn ? 'Service Highlights & Protocols' : '核心陪伴細節與保障條款'}
              </h4>

              <ul className="space-y-3">
                {(isEn ? selectedService.detailsEn : selectedService.detailsTc).map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#D4C6AE]">
                    <div className="p-1 bg-[#8B1E2D]/20 border border-[#8B1E2D]/40 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#C9A35E]" />
                    </div>
                    <span className="leading-normal font-sans-tc">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
