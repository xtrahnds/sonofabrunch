export type Language = 'en' | 'tc';

export interface ServiceItem {
  id: string;
  iconName: string;
  titleEn: string;
  titleTc: string;
  tagEn: string;
  tagTc: string;
  subtitleEn: string;
  subtitleTc: string;
  mottoTc?: string;
  descEn: string;
  descTc: string;
  detailsEn: string[];
  detailsTc: string[];
  disclaimerTc?: string;
  disclaimerEn?: string;
}

export interface ServiceArea {
  nameEn: string;
  nameTc: string;
  descEn: string;
  descTc: string;
  highlightsEn: string[];
  highlightsTc: string[];
}

export interface SampleReportData {
  date: string;
  parentName: string;
  companionName: string;
  location: string;
  durationMinutes: number;
  summaryTextEn: string;
  summaryTextTc: string;
  highlightsEn: string[];
  highlightsTc: string[];
  photos: { url: string; captionEn: string; captionTc: string }[];
}
