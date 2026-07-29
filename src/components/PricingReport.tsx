import React from 'react';
import { Language } from '../types';
import { PRICING_TEXT, IMAGES } from '../data/translations';
import { DollarSign, Camera, Video, FileText, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';

interface PricingReportProps {
  lang: Language;
  onOpenSampleReport: () => void;
  onOpenInquiry: () => void;
}

export const PricingReport: React.FC<PricingReportProps> = ({
  lang,
  onOpenSampleReport,
  onOpenInquiry,
}) => {
  const isEn = lang === 'en';

  const reportItems = isEn ? PRICING_TEXT.itemsEn : PRICING_TEXT.itemsTc;

  return (
    <section id="pricing" className="py-24 bg-[#111111] relative border-t border-b border-[#8B1E2D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="nav-text text-[#C78A3B] block">
            {isEn ? 'CLEAR & HONEST PRICING' : '明碼實價 · 無隱藏條款'}
          </span>
          <h2 className="text-[#F3E8D2]">
            {isEn ? (
              <span className="en-heading text-3xl sm:text-4xl block text-[#F3E8D2]">
                {PRICING_TEXT.titleEn}
              </span>
            ) : (
              <span className="tc-heading text-4xl sm:text-5xl block text-[#F3E8D2]">
                {PRICING_TEXT.titleTc}
              </span>
            )}
          </h2>
          <p className="body-text text-[17px] text-[#D4C6AE]">
            {isEn ? PRICING_TEXT.subtitleEn : PRICING_TEXT.subtitleTc}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Flat Service Rate */}
          <div className="bg-[#181514] hairline p-8 relative overflow-hidden group hover:border-[#C78A3B] transition-all">
            <div className="flex items-center justify-between mb-6">
              <span className="nav-text text-[#C78A3B]">
                {isEn ? PRICING_TEXT.rateLabelEn : PRICING_TEXT.rateLabelTc}
              </span>
              <span className="px-2.5 py-1 bg-[#8B1E2D]/30 hairline text-[11px] text-[#F3E8D2] font-sans-app uppercase tracking-wider">
                {isEn ? 'Standard Session' : '標準 90 分鐘隨行'}
              </span>
            </div>

            <div className="flex items-baseline space-x-3 mb-4">
              <span className="font-serif-en text-6xl sm:text-7xl font-semibold tracking-[0.08em] text-[#F3E8D2]">
                {isEn ? PRICING_TEXT.rateValueEn : PRICING_TEXT.rateValueTc}
              </span>
              <span className="en-heading text-sm text-[#D4C6AE]">
                {isEn ? PRICING_TEXT.rateUnitEn : PRICING_TEXT.rateUnitTc}
              </span>
            </div>

            <p className="body-text text-[15px] text-[#90897F] mb-6">
              {isEn
                ? 'Covers 90 minutes of dedicated chauffeur escort, driving practice, medical translation, or home assistance.'
                : '包含 90 分鐘專屬駕駛導師隨行、考牌複習、診所翻譯或生活物資採購備料。'}
            </p>

            <button
              onClick={onOpenInquiry}
              className="w-full py-3 bg-[#8B1E2D] hover:bg-[#A32335] text-[#F3E8D2] nav-text transition-all hairline"
            >
              {isEn ? 'Book 90-Min Session' : '即時預約 90 分鐘服務'}
            </button>
          </div>

          {/* Card 2: Mileage Fee */}
          <div className="bg-[#181514] hairline p-8 relative overflow-hidden group hover:border-[#C78A3B] transition-all">
            <div className="flex items-center justify-between mb-6">
              <span className="nav-text text-[#C78A3B]">
                {isEn ? PRICING_TEXT.mileageLabelEn : PRICING_TEXT.mileageLabelTc}
              </span>
              <span className="px-2.5 py-1 bg-[#111111] hairline text-[11px] text-[#D4C6AE] font-sans-app uppercase tracking-wider">
                {isEn ? 'Chauffeur Fuel & Wear' : '專車路程耗油'}
              </span>
            </div>

            <div className="flex items-baseline space-x-3 mb-4">
              <span className="font-serif-en text-6xl sm:text-7xl font-semibold tracking-[0.08em] text-[#F3E8D2]">
                {isEn ? PRICING_TEXT.mileageValueEn : PRICING_TEXT.mileageValueTc}
              </span>
              <span className="en-heading text-sm text-[#D4C6AE]">
                {isEn ? PRICING_TEXT.mileageUnitEn : PRICING_TEXT.mileageUnitTc}
              </span>
            </div>

            <p className="body-text text-[15px] text-[#90897F] mb-6">
              {isEn
                ? 'Calculated based on actual driving distance across Richmond, Vancouver, Burnaby, Coquitlam, or Surrey.'
                : '依據實際接送里程按實計算（覆蓋列治文、溫哥華、本拿比、高貴林及素里大溫地區）。'}
            </p>

            <button
              onClick={onOpenInquiry}
              className="w-full py-3 bg-[#111111] hover:bg-[#181514] text-[#F3E8D2] nav-text transition-all hairline hover:border-[#C78A3B]"
            >
              {isEn ? 'Calculate Mileage Estimate' : '計算路程預估金額'}
            </button>
          </div>
        </div>

        {/* Included Remote Reporting Package Showcase */}
        <div className="bg-[#080808] border border-[#8B1E2D]/30 p-8 sm:p-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-[#C9A35E] tracking-widest uppercase block font-serif-tc">
                {isEn ? 'INCLUDED IN EVERY VISIT' : '每趟服務結束後必備隨行匯報'}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F3E8D2] font-serif-tc">
                {isEn ? PRICING_TEXT.includedTitleEn : PRICING_TEXT.includedTitleTc}
              </h3>

              <ul className="space-y-3">
                {reportItems.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#D4C6AE]">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A35E] shrink-0 mt-0.5" />
                    <span className="font-sans-tc leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenSampleReport}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#8B1E2D] hover:bg-[#A32335] text-[#F3E8D2] text-xs font-semibold tracking-widest uppercase transition-all border border-[#C9A35E]/40"
                >
                  <Eye className="w-4 h-4 text-[#C9A35E]" />
                  <span>{isEn ? PRICING_TEXT.sampleReportCtaEn : PRICING_TEXT.sampleReportCtaTc}</span>
                </button>
              </div>
            </div>

            {/* Visual Preview Box */}
            <div className="lg:col-span-5 bg-[#181514] p-4 border border-[#8B1E2D]/30 relative">
              <div className="relative">
                <img
                  src={IMAGES.dimsum}
                  alt="Sample Report Photos"
                  className="w-full h-56 object-cover filter contrast-[1.1]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F3E8D2] bg-[#080808]/80 backdrop-blur-md p-2 border border-[#8B1E2D]/30">
                  <span className="font-serif-tc">
                    {isEn ? '1 Text Brief + 10 Photos + 1 Video' : '1 份健康筆記 + 10 張照片 + 1 精選影片'}
                  </span>
                  <span className="text-[10px] text-[#C9A35E]">WhatsApp / SMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
