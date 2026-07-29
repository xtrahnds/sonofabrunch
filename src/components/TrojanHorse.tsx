import React from 'react';
import { Language } from '../types';
import { PHILOSOPHY_TEXT, IMAGES } from '../data/translations';
import { ShieldCheck, Clock, Crown, HeartHandshake, Car, Sparkles } from 'lucide-react';

interface TrojanHorseProps {
  lang: Language;
}

export const TrojanHorse: React.FC<TrojanHorseProps> = ({ lang }) => {
  const isEn = lang === 'en';

  return (
    <section id="philosophy" className="py-24 bg-[#111111] relative overflow-hidden hairline-t hairline-b">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8B1E2D]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-[1px] bg-[#8B1E2D]" />
          <span className="nav-text text-[#C78A3B]">
            {isEn ? PHILOSOPHY_TEXT.badgeEn : PHILOSOPHY_TEXT.badgeTc}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-[#F3E8D2]">
              {isEn ? (
                <span className="en-heading text-3xl sm:text-4xl block text-[#F3E8D2]">
                  {PHILOSOPHY_TEXT.titleEn}
                </span>
              ) : (
                <span className="tc-heading text-3xl sm:text-4xl md:text-5xl block text-[#F3E8D2]">
                  {PHILOSOPHY_TEXT.titleTc}
                </span>
              )}
            </h2>

            <div className="body-text text-[17px] sm:text-[18px] text-[#D4C6AE] space-y-4">
              <p>{isEn ? PHILOSOPHY_TEXT.p1aEn : PHILOSOPHY_TEXT.p1aTc}</p>
              <p>
                {isEn ? (
                  <>
                    We provide a unique <strong className="text-[#F3E8D2] font-bold">【Surrogate Senior Visit】 & Driving Status Monitoring Service</strong>. A professional instructor visits under the guise of "refresher driving lessons/license practice". Through relaxed interaction, we visit your elders on your behalf while discreetly evaluating their reaction time, memory, mental state, and physical mobility. After every "lesson", we deliver a detailed health and mental well-being report directly to you in Hong Kong, giving you genuine peace of mind from afar.
                  </>
                ) : (
                  <>
                    我們提供獨特的<strong className="text-[#F3E8D2] font-bold">【代客探望】與駕駛狀態監測服務</strong>。由專業教練以『復修駕駛技巧/考牌練習』為名上門接送，在輕鬆互動中為你代探長者，同時隱密評估他們的反應力、記憶力、精神狀況與肢體靈活性。我們會在每次『學車』後，為身在香港的你提供詳細的父母健康與精神狀態報告，讓你遠距離亦能真正放心。
                  </>
                )}
              </p>
            </div>

            {/* Trojan Horse Strategy Highlight Box */}
            <div className="p-6 sm:p-8 bg-[#181514] border-l-2 border-[#8B1E2D] relative group hover:border-[#C78A3B] transition-colors">
              <div className="flex items-start space-x-4">
                <Car className="w-8 h-8 text-[#C78A3B] shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className={isEn ? "en-heading text-xl text-[#F3E8D2]" : "tc-heading text-2xl text-[#F3E8D2]"}>
                    {isEn ? PHILOSOPHY_TEXT.trojanTitleEn : PHILOSOPHY_TEXT.trojanTitleTc}
                  </h3>
                  <p className="body-text text-[16px] text-[#D4C6AE]">
                    {isEn ? PHILOSOPHY_TEXT.p2En : PHILOSOPHY_TEXT.p2Tc}
                  </p>
                </div>
              </div>
            </div>

            {/* Kris Jenner VIP Box */}
            <div className="p-6 sm:p-8 bg-[#181514] border-l-2 border-[#C78A3B] relative group hover:border-[#8B1E2D] transition-colors">
              <div className="flex items-start space-x-4">
                <Crown className="w-8 h-8 text-[#C78A3B] shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className={isEn ? "en-heading text-xl text-[#F3E8D2]" : "tc-heading text-2xl text-[#F3E8D2]"}>
                    {isEn ? PHILOSOPHY_TEXT.krisTitleEn : PHILOSOPHY_TEXT.krisTitleTc}
                  </h3>
                  <p className="body-text text-[16px] text-[#D4C6AE]">
                    {isEn ? PHILOSOPHY_TEXT.krisDescEn : PHILOSOPHY_TEXT.krisDescTc}
                  </p>
                </div>
              </div>
            </div>

            {/* Item 15: Inspired by Life Review Therapy & CST Box */}
            <div className="p-6 sm:p-8 bg-[#181514] border-l-2 border-[#8B1E2D]/60 relative group hover:border-[#C78A3B] transition-colors">
              <div className="flex items-start space-x-4">
                <Sparkles className="w-8 h-8 text-[#C78A3B] shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className={isEn ? "en-heading text-xl text-[#F3E8D2]" : "tc-heading text-2xl text-[#F3E8D2]"}>
                    {isEn ? PHILOSOPHY_TEXT.cstTitleEn : PHILOSOPHY_TEXT.cstTitleTc}
                  </h3>
                  <p className="body-text text-[16px] text-[#D4C6AE]">
                    {isEn ? PHILOSOPHY_TEXT.cstDescEn : PHILOSOPHY_TEXT.cstDescTc}
                  </p>
                </div>
              </div>
            </div>

            {/* Dignity Boundary Notice */}
            <div className="flex items-center space-x-3 p-4 bg-[#8B1E2D]/15 hairline text-xs text-[#D4C6AE]">
              <ShieldCheck className="w-5 h-5 text-[#C78A3B] shrink-0" />
              <span className="body-text text-[15px]">
                {isEn ? PHILOSOPHY_TEXT.boundaryNoticeEn : PHILOSOPHY_TEXT.boundaryNoticeTc}
              </span>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 border border-[#8B1E2D]/30 p-2 bg-[#080808]">
              <img
                src={IMAGES.driving}
                alt="Qipao Family Heritage Photo"
                className="w-full h-80 sm:h-96 object-cover filter contrast-[1.08]"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#111111] border-t border-[#8B1E2D]/20 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-[#F3E8D2] block font-serif-tc">
                    {isEn ? 'Bridging the 15-Hour Offset' : '解決15 小時跨海時差'}
                  </span>
                  <span className="text-[11px] text-[#90897F] block">
                    {isEn ? 'Hong Kong (GMT+8) ↔ Vancouver (GMT-8)' : '香港 (GMT+8) ↔ 溫哥華 (GMT-8)'}
                  </span>
                </div>
                <Clock className="w-5 h-5 text-[#C9A35E]" />
              </div>
            </div>

            {/* Decorative Offset Box */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#C9A35E]/20 -z-0 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
