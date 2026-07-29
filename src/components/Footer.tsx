import React from 'react';
import { Language } from '../types';
import { FOOTER_TEXT, PHONE_NUMBER, SMS_LINKS } from '../data/translations';
import { Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isEn = lang === 'en';

  return (
    <footer id="contact" className="bg-[#080808] hairline-t pt-16 pb-24 text-[#D4C6AE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Upper Brand & Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-serif-en text-2xl font-semibold tracking-tight uppercase text-[#F3E8D2] block">
              Son Of A Brunch
            </span>
            <span className="text-[10px] uppercase letter-spaced opacity-70 text-[#C78A3B] block font-serif-tc">
              {isEn
                ? 'Boutique Senior Concierge & Driving Escort Service'
                : '溫哥華長者尊貴隨行與駕駛陪伴專屬企劃'}
            </span>
            <p className="text-xs text-[#90897F] max-w-md leading-relaxed font-sans-tc">
              {isEn
                ? "Vancouver's premier lifestyle companion and driving escort division for Hong Kong re-migrant families. Dedicated to maintaining senior dignity, autonomy, and remote family peace of mind."
                : '大溫地區首創專為回流香港家庭打造之頂級生活陪伴與駕駛護航服務，以高規格尊嚴、完全透明匯報與 100% 雙語能力，護航長者安享晚年生活。'}
            </p>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-6 bg-[#111111] hairline p-6 space-y-4">
            <h4 className="text-[10px] uppercase letter-spaced font-semibold text-[#C78A3B] font-serif-tc hairline-b pb-2">
              {isEn ? 'Direct Line for Hong Kong Families' : '香港家屬專屬 24 小時直通號碼'}
            </h4>

            <div className="space-y-3">
              <a
                href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, '')}`}
                className="flex items-center space-x-3 text-sm text-[#F3E8D2] hover:text-[#C78A3B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C78A3B]" />
                <span className="font-semibold">{PHONE_NUMBER}</span>
              </a>

              <div className="flex items-center space-x-3 text-xs text-[#90897F]">
                <MapPin className="w-4 h-4 text-[#8B1E2D]" />
                <span>{isEn ? FOOTER_TEXT.addressEn : FOOTER_TEXT.addressTc}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 bg-[#111111] hairline text-center">
          <p className="text-[11px] sm:text-xs text-[#90897F] font-sans-tc leading-relaxed">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C78A3B] inline-block mr-1.5 -mt-0.5" />
            {isEn ? FOOTER_TEXT.legalNoticeEn : FOOTER_TEXT.legalNoticeTc}
          </p>
        </div>

        {/* Bottom Copyright Row matching design spec */}
        <div className="pt-6 hairline-t flex flex-col sm:flex-row items-center justify-between text-[10px] opacity-60 letter-spaced uppercase">
          <div>{isEn ? FOOTER_TEXT.copyrightEn : FOOTER_TEXT.copyrightTc}</div>
          <div className="mt-2 sm:mt-0 flex items-center gap-1">
            +1 (778) 651-2848 • Vancouver, BC
          </div>
        </div>
      </div>
    </footer>
  );
};
