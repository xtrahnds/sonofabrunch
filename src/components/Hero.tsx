import React from 'react';
import { Language } from '../types';
import { HERO_TEXT, IMAGES, SMS_LINKS, WHATSAPP_LINKS, PHONE_NUMBER, NAV_TEXT } from '../data/translations';
import { MessageSquare, Phone, FileText, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenSampleReport: () => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenSampleReport, onOpenInquiry }) => {
  const isEn = lang === 'en';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#080808]">
      {/* Background Image Container with Atmospheric Wong Kar Wai Lighting & Brand Image display */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Son of a Brunch Kai Tak Wong Kar Wai Aesthetic"
          className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.12] scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Layered Cinematic Gradients for Optimal Legibility & Brand Visuals */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-[#080808]/70" />
        <div className="absolute inset-0 vignette-overlay opacity-70 pointer-events-none" />
        {/* Soft Ambient Red/Gold Tungsten Light Blooms */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B1E2D]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#C78A3B]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Subtitle Eyebrow Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#C9A35E]/40 bg-[#111111]/80 backdrop-blur-md mb-8 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A35E]" />
          <span className="nav-text text-[#C9A35E]">
            {isEn ? HERO_TEXT.taglineEn : HERO_TEXT.taglineTc}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-[#F3E8D2] mb-6 text-shadow-lg">
          {isEn ? (
            <div>
              <span className="font-serif-en font-medium md:font-semibold text-3xl sm:text-5xl md:text-6xl tracking-[0.08em] uppercase text-[#F3E8D2] block mb-2">
                SON OF A BRUNCH
              </span>
              <span className="font-serif-en font-medium md:font-semibold text-[40px] sm:text-[60px] md:text-[76px] text-[#F3E8D2] block">
                {HERO_TEXT.titleEn}
              </span>
            </div>
          ) : (
            <div>
              <span className="font-serif-en font-medium md:font-semibold text-3xl sm:text-5xl md:text-6xl tracking-[0.08em] text-[#F3E8D2] uppercase block mb-3">
                SON OF A BRUNCH
              </span>
              <span className="tc-heading font-medium md:font-semibold text-[48px] sm:text-[72px] md:text-[92px] text-[#F3E8D2] block">
                {HERO_TEXT.titleTc}
              </span>
            </div>
          )}
        </h1>

        {/* Hairline Decorative Line */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#8B1E2D] to-transparent mx-auto my-6" />

        {/* Subtitle Copy */}
        <div className="max-w-3xl mx-auto body-text text-[16px] sm:text-[18px] text-[#D4C6AE] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-10 text-left sm:text-center whitespace-pre-line leading-relaxed">
          {isEn ? HERO_TEXT.subtitleEn : HERO_TEXT.subtitleTc}
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          {/* Main Direct SMS CTA (Item 4: 即時為父母預約尊榮隨行) */}
          <a
            href={isEn ? SMS_LINKS.en : SMS_LINKS.tc}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#8B1E2D] hover:bg-[#A32335] text-[#F3E8D2] font-medium text-sm tracking-widest uppercase transition-all duration-300 border border-[#C9A35E]/50 shadow-[0_0_20px_rgba(139,30,45,0.4)] hover:shadow-[0_0_30px_rgba(201,163,94,0.6)] group"
          >
            <MessageSquare className="w-4 h-4 text-[#C9A35E] group-hover:scale-110 transition-transform" />
            <span>{NAV_TEXT.ctaHero[lang]}</span>
            <ArrowRight className="w-4 h-4 text-[#C9A35E] group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Item 5: 次要 CTA 按鈕：瀏覽 5 大專屬服務與收費 */}
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 bg-[#111111]/80 hover:bg-[#181514] text-[#F3E8D2] border border-[#8B1E2D]/40 hover:border-[#C9A35E] font-medium text-sm tracking-widest transition-all"
          >
            <span>{NAV_TEXT.ctaSecondary[lang]}</span>
          </a>

          {/* Sample Report Modal Trigger */}
          <button
            onClick={onOpenSampleReport}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 bg-transparent text-[#C9A35E] hover:text-[#F3E8D2] border border-[#C9A35E]/30 hover:border-[#C9A35E] text-sm font-medium tracking-widest transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>{NAV_TEXT.viewSampleReport[lang]}</span>
          </button>
        </div>

        {/* Section 2: Trust Badges Bar (Items 8 & 9) */}
        <div className="pt-6 border-t border-[#8B1E2D]/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-[#C9A35E] font-semibold text-xs tracking-wider">
              {isEn ? 'BC Licensed Instructor' : 'BC 持牌教車師父'}
            </span>
            <span className="text-[11px] text-[#90897F] mt-0.5">
              {isEn ? 'Zero Caregiver Stigma' : '學車為由零看護感'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#C9A35E] font-semibold text-xs tracking-wider">
              {isEn ? '100% Native Cantonese & English' : '100% 正宗粵語與雙語'}
            </span>
            <span className="text-[11px] text-[#90897F] mt-0.5">
              {isEn ? 'Zero Communication Barrier' : '親切零溝通隔閡'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#C9A35E] font-semibold text-xs tracking-wider">
              {isEn ? '1 Brief + 10 Photos Per Visit' : '每次 1 報告 + 10 相片'}
            </span>
            <span className="text-[11px] text-[#90897F] mt-0.5">
              {isEn ? 'Instant Real-time Delivery' : '即時發送'}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#C9A35E] font-semibold text-xs tracking-wider">
              {isEn ? 'Flat Rate $90 CAD / 90m' : '明碼實價 $90 CAD'}
            </span>
            <span className="text-[11px] text-[#90897F] mt-0.5">
              {isEn ? 'Zero Hidden Charges' : '絕無隱藏收費'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
