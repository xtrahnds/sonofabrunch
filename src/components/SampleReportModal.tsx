import React from 'react';
import { Language } from '../types';
import { SAMPLE_REPORT } from '../data/translations';
import { X, CheckCircle2, Camera, Video, Clock, MapPin, User, FileText, Share2 } from 'lucide-react';

interface SampleReportModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const SampleReportModal: React.FC<SampleReportModalProps> = ({ lang, isOpen, onClose }) => {
  if (!isOpen) return null;

  const isEn = lang === 'en';
  const report = SAMPLE_REPORT;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#111111] border border-[#C9A35E]/40 shadow-2xl overflow-hidden my-8 my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#181514] border-b border-[#8B1E2D]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#8B1E2D]/20 border border-[#8B1E2D]/50 text-[#C9A35E]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="nav-text text-[#C78A3B] block text-[10px]">
                {isEn ? 'REMOTE WELLBEING REPORT' : '遙距安心隨行視覺化簡報'}
              </span>
              <h3 className={isEn ? "en-heading text-base sm:text-lg text-[#F3E8D2]" : "tc-heading text-lg text-[#F3E8D2]"}>
                {isEn ? 'Post-Visit Brief Sent to HK Family' : '發送給香港家屬之服務簡報範本'}
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans-tc text-xs sm:text-sm">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#181514] p-4 border border-[#8B1E2D]/20">
            <div>
              <span className="text-[10px] text-[#90897F] uppercase block">{isEn ? 'Date & Time' : '服務時間'}</span>
              <span className="text-xs font-semibold text-[#F3E8D2]">{report.date}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#90897F] uppercase block">{isEn ? 'VIP Parent' : '尊貴長者'}</span>
              <span className="text-xs font-semibold text-[#C9A35E]">{report.parentName}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#90897F] uppercase block">{isEn ? 'Companion' : '隨行專員'}</span>
              <span className="text-xs font-semibold text-[#F3E8D2]">{report.companionName}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#90897F] uppercase block">{isEn ? 'Location' : '服務地點'}</span>
              <span className="text-xs font-semibold text-[#F3E8D2]">{report.location}</span>
            </div>
          </div>

          {/* Executive Summary Narrative */}
          <div className="p-5 bg-[#080808] border-l-2 border-[#C9A35E] space-y-2">
            <span className="text-[10px] font-semibold text-[#C9A35E] tracking-widest uppercase block font-serif-tc">
              {isEn ? 'Companion Text Briefing' : '隨行專員簡報筆記'}
            </span>
            <p className="text-xs sm:text-sm text-[#D4C6AE] leading-relaxed whitespace-pre-line">
              {isEn ? report.summaryTextEn : report.summaryTextTc}
            </p>
          </div>

          {/* Key Bullet Highlights */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-[#C9A35E] tracking-widest uppercase block font-serif-tc">
              {isEn ? 'Session Highlights & Health Check' : '當日重點觀察與健康隨筆'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(isEn ? report.highlightsEn : report.highlightsTc).map((hl, i) => (
                <div key={i} className="flex items-start space-x-2.5 p-3 bg-[#181514] border border-[#8B1E2D]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A35E] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#D4C6AE] leading-snug">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photos Showcase Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#C9A35E] tracking-widest uppercase block font-serif-tc">
                {isEn ? 'High-Res Candid Photos (10 Included)' : '隨行側拍精彩紀錄（每次附送 10 張高畫質照片）'}
              </span>
              <span className="text-[10px] text-[#90897F] flex items-center gap-1">
                <Camera className="w-3.5 h-3.5 text-[#C9A35E]" /> 1080p Candid Capture
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {report.photos.map((p, idx) => (
                <div key={idx} className="bg-[#181514] border border-[#8B1E2D]/30 overflow-hidden group">
                  <img
                    src={p.url}
                    alt={isEn ? p.captionEn : p.captionTc}
                    className="w-full h-40 object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-3 bg-[#080808]">
                    <p className="text-[11px] text-[#D4C6AE] leading-tight font-serif-tc">
                      {isEn ? p.captionEn : p.captionTc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Clip Indicator */}
          <div className="p-4 bg-[#8B1E2D]/15 border border-[#8B1E2D]/40 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Video className="w-5 h-5 text-[#C9A35E]" />
              <div>
                <span className="text-xs font-semibold text-[#F3E8D2] block">
                  {isEn ? '15-Second Highlights Video Clip' : '15秒尊貴出遊精華短片'}
                </span>
                <span className="text-[11px] text-[#90897F]">
                  {isEn ? 'Delivered via private WhatsApp link' : '經加密 WhatsApp / SMS 連線發送至家屬手機'}
                </span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#C9A35E] border border-[#C9A35E]/30 px-2.5 py-1">
              HD Video
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#181514] border-t border-[#8B1E2D]/30 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-[#90897F]">
            {isEn ? 'Son Of A Brunch — Remote Peace of Mind System' : 'Son Of A Brunch 銀髮助理 遙距安心系統'}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#8B1E2D] hover:bg-[#A32335] text-[#F3E8D2] text-xs font-semibold tracking-widest uppercase transition-all"
          >
            {isEn ? 'Close Preview' : '關閉預覽'}
          </button>
        </div>
      </div>
    </div>
  );
};
