import React, { useState } from 'react';
import { Language } from '../types';
import { PHONE_NUMBER_RAW, SMS_LINKS, WHATSAPP_LINKS } from '../data/translations';
import { X, MessageSquare, Phone, Send, Check, Calculator } from 'lucide-react';

interface InquiryModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ lang, isOpen, onClose }) => {
  if (!isOpen) return null;

  const isEn = lang === 'en';

  const [selectedCity, setSelectedCity] = useState<string>('Richmond');
  const [selectedService, setSelectedService] = useState<string>('driving-escort');
  const [sessionHours, setSessionHours] = useState<number>(1.5);
  const [notes, setNotes] = useState<string>('');

  const servicesList = [
    { id: 'driving-escort', en: 'Driving & Escort', tc: '駕駛護航' },
    { id: 'medical-escort', en: 'Medical & Doctor Escort', tc: '診所陪診與翻譯' },
    { id: 'grocery-mealprep', en: 'Grocery & Meal Prep', tc: '生活採購與備料' },
    { id: 'home-assistance', en: 'Home Maintenance', tc: '家居安全檢視' },
    { id: 'tech-companion', en: 'Tech Companion', tc: '3C 科技伴讀' },
  ];

  const currentServiceObj = servicesList.find((s) => s.id === selectedService) || servicesList[0];
  const activeServiceName = isEn ? currentServiceObj.en : currentServiceObj.tc;

  const estimatedCost = sessionHours * 60; // $90 per 90 mins -> $60/hr rate equivalent for display

  const generateCustomText = () => {
    if (isEn) {
      return `Hi Son of a Brunch team! I'm inquiring from HK about a ${activeServiceName} session for my parents in ${selectedCity}. Notes: ${
        notes || 'No special requirements'
      }.`;
    } else {
      return `你好 Son of a Brunch！我喺香港想查詢溫哥華專車隨行服務。地點：${selectedCity}，服務：${activeServiceName}。備註：${
        notes || '無特別要求'
      }。`;
    }
  };

  const currentSmsUrl = `sms:${PHONE_NUMBER_RAW}?body=${encodeURIComponent(generateCustomText())}`;
  const currentWhatsAppUrl = `https://wa.me/16723803013?text=${encodeURIComponent(generateCustomText())}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#8B1E2D]/40 shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#181514] border-b border-[#8B1E2D]/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#8B1E2D]/20 border border-[#8B1E2D]/50 text-[#C9A35E]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-[#C9A35E] tracking-widest uppercase block font-serif-tc">
                {isEn ? 'DIRECT INQUIRY & BOOKING' : '尊榮預約與隨行規劃'}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#F3E8D2] font-serif-tc">
                {isEn ? 'Book Senior Chauffeur & Escort Service' : '預約尊榮隨行與代探服務'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#90897F] hover:text-[#F3E8D2] hover:bg-[#8B1E2D]/30 transition-all"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="p-6 sm:p-8 space-y-6 font-sans-tc text-xs sm:text-sm">
          <p className="text-xs text-[#D4C6AE] font-serif-tc border-b border-[#8B1E2D]/20 pb-3">
            {isEn
              ? 'We immediately create a tailored escort plan for your family. Please select your preferences below:'
              : '我們即時為你建立專屬隨行計劃，請選擇以下需求：'}
          </p>

          {/* City Selection (Item 54c) */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#C9A35E] tracking-wider uppercase block font-serif-tc">
              1. {isEn ? 'Service Zone in Greater Vancouver' : '居住分區'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['Richmond', 'Vancouver', 'Burnaby', 'Coquitlam', 'Surrey'].map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`p-2.5 text-center text-xs font-medium border transition-all ${
                    selectedCity === city
                      ? 'bg-[#8B1E2D] border-[#C9A35E] text-[#F3E8D2]'
                      : 'bg-[#181514] border-[#8B1E2D]/20 text-[#D4C6AE] hover:border-[#8B1E2D]/50'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Service Selection (Item 54d) */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#C9A35E] tracking-wider uppercase block font-serif-tc">
              2. {isEn ? 'Primary Service Requested' : '所需服務'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {servicesList.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => setSelectedService(svc.id)}
                  className={`p-2.5 text-left text-xs font-medium border transition-all ${
                    selectedService === svc.id
                      ? 'bg-[#8B1E2D] border-[#C9A35E] text-[#F3E8D2]'
                      : 'bg-[#181514] border-[#8B1E2D]/20 text-[#D4C6AE] hover:border-[#8B1E2D]/50'
                  }`}
                >
                  {isEn ? svc.en : svc.tc}
                </button>
              ))}
            </div>
          </div>

          {/* Special Notes Input (Item 54e) */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#C9A35E] tracking-wider uppercase block font-serif-tc">
              3. {isEn ? 'Special Instructions or Parent Habits (Optional)' : '特別交代事項與老大人習慣 (選填)'}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={
                isEn
                  ? 'e.g. Mother prefers Cantonese tea house in Richmond; Father needs assistance into clinic...'
                  : '例如：媽媽想去 Richmond 麗晶廣場飲茶；爸爸需要協助進入診所...'
              }
              className="w-full p-3 bg-[#181514] border border-[#8B1E2D]/30 text-[#F3E8D2] focus:border-[#C9A35E] focus:outline-none text-xs"
            />
          </div>

          {/* Generated Text Message Preview (Item 54f) */}
          <div className="p-4 bg-[#080808] border border-[#8B1E2D]/30 space-y-2">
            <span className="text-[10px] font-semibold text-[#C9A35E] uppercase block font-serif-tc">
              {isEn ? 'Auto-generated Message Preview:' : '自動生成對話預覽：'}
            </span>
            <p className="text-xs text-[#D4C6AE] font-serif-tc italic bg-[#111111] p-3 border border-[#181514]">
              "{generateCustomText()}"
            </p>
          </div>

          {/* Send Buttons (Item 54g) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={currentSmsUrl}
              className="flex items-center justify-center space-x-2 py-3.5 bg-[#8B1E2D] hover:bg-[#A32335] text-[#F3E8D2] font-semibold text-xs tracking-widest uppercase transition-all border border-[#C9A35E]/40"
            >
              <Send className="w-4 h-4 text-[#C9A35E]" />
              <span>{isEn ? 'Send via SMS' : '發送專屬預約簡訊 (SMS)'}</span>
            </a>

            <a
              href={currentWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3.5 bg-[#181514] hover:bg-[#111111] text-[#F3E8D2] font-semibold text-xs tracking-widest uppercase transition-all border border-[#2ED3A6]/40 hover:border-[#2ED3A6]"
            >
              <span className="text-xs text-[#2ED3A6]">WhatsApp</span>
              <span>{isEn ? 'Inquire via WhatsApp' : '發送 WhatsApp 專人查詢'}</span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#181514] border-t border-[#8B1E2D]/30 text-center">
          <span className="text-[11px] text-[#90897F]">
            {isEn ? 'Direct Line: +1 (778) 651-2848 | WhatsApp: +1 (672) 380-3013' : '專線 SMS：+1 (778) 651-2848 ｜ WhatsApp：+1 (672) 380-3013'}
          </span>
        </div>
      </div>
    </div>
  );
};
