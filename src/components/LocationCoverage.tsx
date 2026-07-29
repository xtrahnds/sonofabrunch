import React, { useState } from 'react';
import { Language } from '../types';
import { LOCATIONS_DATA } from '../data/translations';
import { MapPin, Navigation, CheckCircle, Sparkles } from 'lucide-react';

interface LocationCoverageProps {
  lang: Language;
}

export const LocationCoverage: React.FC<LocationCoverageProps> = ({ lang }) => {
  const isEn = lang === 'en';
  const [activeArea, setActiveArea] = useState<number>(0);

  const selectedLoc = LOCATIONS_DATA[activeArea] || LOCATIONS_DATA[0];

  return (
    <section id="location" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 border border-[#C9A35E]/40 bg-[#111111]">
            <MapPin className="w-3.5 h-3.5 text-[#C9A35E]" />
            <span className="nav-text text-[#C78A3B]">
              {isEn ? 'GREATER VANCOUVER SERVICE AREA' : '大溫哥華五大專屬服務分區'}
            </span>
          </div>
          <h2 className="text-[#F3E8D2]">
            {isEn ? (
              <span className="en-heading text-3xl sm:text-4xl block text-[#F3E8D2]">
                Service Coverage & Route Maps
              </span>
            ) : (
              <span className="tc-heading text-4xl sm:text-5xl block text-[#F3E8D2]">
                服務區域與專車巡遊地圖
              </span>
            )}
          </h2>
          <p className="body-text text-[17px] text-[#D4C6AE]">
            {isEn
              ? 'Our BC licensed instructors and companions cover all key Cantonese hubs and healthcare centers across Greater Vancouver.'
              : '專車覆蓋大溫地區熱門粵語社區、港式茶餐廳集中地及主要醫療院所。'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Area Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {LOCATIONS_DATA.map((loc, idx) => {
              const isActive = idx === activeArea;
              return (
                <button
                  key={loc.nameEn}
                  onClick={() => setActiveArea(idx)}
                  className={`w-full text-left p-5 border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-[#181514] border-[#C9A35E] text-[#F3E8D2] shadow-md'
                      : 'bg-[#111111]/80 border-[#8B1E2D]/20 text-[#90897F] hover:border-[#8B1E2D]/50 hover:text-[#D4C6AE]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <MapPin
                      className={`w-5 h-5 ${isActive ? 'text-[#C9A35E]' : 'text-[#8B1E2D]'}`}
                    />
                    <span className="font-semibold text-sm sm:text-base font-serif-tc">
                      {isEn ? loc.nameEn : loc.nameTc}
                    </span>
                  </div>
                  <Navigation className="w-4 h-4 text-[#C9A35E] opacity-70" />
                </button>
              );
            })}
          </div>

          {/* Right Area Details View */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#8B1E2D]/30 p-8 relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#8B1E2D]/20 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#181514] border border-[#C9A35E]/30">
                    <MapPin className="w-6 h-6 text-[#C9A35E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F3E8D2] font-serif-tc">
                    {isEn ? selectedLoc.nameEn : selectedLoc.nameTc}
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 bg-[#8B1E2D]/30 border border-[#8B1E2D]/50 text-[#C9A35E]">
                  {isEn ? 'Active Escort Zone' : '專車服務中 Zone'}
                </span>
              </div>

              <p className="text-sm text-[#D4C6AE] font-light leading-relaxed font-sans-tc">
                {isEn ? selectedLoc.descEn : selectedLoc.descTc}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold text-[#C9A35E] tracking-widest uppercase font-serif-tc">
                  {isEn ? 'Key Hubs & Escort Highlights' : '區域核心活動與熱門路線'}
                </h4>
                <ul className="space-y-2">
                  {(isEn ? selectedLoc.highlightsEn : selectedLoc.highlightsTc).map((hl, i) => (
                    <li key={i} className="flex items-center space-x-3 text-xs sm:text-sm text-[#D4C6AE]">
                      <CheckCircle className="w-4 h-4 text-[#C9A35E] shrink-0" />
                      <span className="font-sans-tc">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Note */}
              <div className="p-4 bg-[#181514] border border-[#8B1E2D]/20 text-xs text-[#90897F] mt-6">
                {isEn
                  ? 'All rides include door-to-door escort, parking assistance, and direct text updates to family in Hong Kong.'
                  : '所有專車接送包含門到門提拎與扶持、停車代繳服務及即時 SMS / WhatsApp 進度回報。'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
