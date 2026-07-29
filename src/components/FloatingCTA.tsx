import React from 'react';
import { Language } from '../types';
import { SMS_LINKS, WHATSAPP_LINKS } from '../data/translations';
import { MessageSquare, PhoneCall, FileText } from 'lucide-react';

interface FloatingCTAProps {
  lang: Language;
  onOpenInquiry: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ lang, onOpenInquiry }) => {
  const isEn = lang === 'en';

  const smsHref = isEn ? SMS_LINKS.en : SMS_LINKS.tc;
  const waHref = isEn ? WHATSAPP_LINKS.en : WHATSAPP_LINKS.tc;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* WhatsApp Pure Icon Button (wa.me/16723803013) */}
      <a
        id="floating-whatsapp"
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp (+1 672 380-3013)"
        title="WhatsApp (+1 672 380-3013)"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-black shadow-2xl hover:scale-110 transition-all duration-300 border border-[#25D366]"
      >
        <span className="text-xl leading-none">💬</span>
      </a>

      {/* SMS Pure Icon Button (+17786512848) */}
      <a
        id="floating-sms"
        href={smsHref}
        aria-label="SMS (+1 778 651-2848)"
        title="SMS (+1 778 651-2848)"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#8B1E2D] text-[#F3E8D2] shadow-2xl hover:scale-110 transition-all duration-300 border border-[#C9A35E]/60"
      >
        <MessageSquare className="w-5 h-5 text-[#C9A35E] group-hover:text-[#F3E8D2] transition-colors" />
      </a>

      {/* Custom Quote Form Shortcut Icon Button */}
      <button
        onClick={onOpenInquiry}
        aria-label={isEn ? 'Booking Form' : '預約表單'}
        title={isEn ? 'Open Inquiry Form' : '開啟專屬預約表單'}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111111]/90 text-[#C9A35E] hover:text-[#F3E8D2] border border-[#C9A35E]/40 shadow-xl hover:scale-105 transition-all"
      >
        <FileText className="w-4 h-4" />
      </button>
    </div>
  );
};

