import { ServiceItem, ServiceArea, SampleReportData } from '../types';

import heroImg from '../assets/images/kai_tak_airplane_hero_1785268023439.jpg';
import teaImg from '../assets/images/mrs_wong_enjoying_tea_1785265398800.jpg';
import drivingImg from '../assets/images/mrs_wong_driving_practice_1785268476625.jpg';
import dimsumImg from '../assets/images/mrs_wong_dimsum_grandma_1785268715487.jpg';

// Image paths imported via ES modules for guaranteed Vite bundling & base path compatibility
export const IMAGES = {
  hero: heroImg,
  tea: teaImg,
  driving: drivingImg,
  dimsum: dimsumImg,
};

export const PHONE_NUMBER = '+1 (778) 651-2848';
export const PHONE_NUMBER_RAW = '+17786512848';

// Exact required SMS & WhatsApp links from checklist items 51c
export const SMS_LINKS = {
  en: `sms:+17786512848?body=${encodeURIComponent("Hi! I found you guys on the Son of a Brunch website and would like to make an inquiry.")}`,
  tc: `sms:+17786512848?body=${encodeURIComponent("你好，我喺 Son of a Brunch 個網站度搵到你哋，想查詢一下。")}`,
};

export const WHATSAPP_LINKS = {
  en: `https://wa.me/16723803013?text=${encodeURIComponent("Hi! I found you guys on the Son of a Brunch website and would like to make an inquiry.")}`,
  tc: `https://wa.me/16723803013?text=${encodeURIComponent("你好，我喺 Son of a Brunch 個網站度搵到你哋，想查詢一下。")}`,
};

export const NAV_TEXT = {
  brand: 'Son Of A Brunch',
  subBrand: '銀髮助理',
  subBrandEn: 'Boutique Senior Concierge & Driving Escort',
  philosophy: { en: 'Philosophy', tc: '品牌理念' },
  trojan: { en: 'Dignity First', tc: '尊嚴同行' },
  services: { en: 'Services', tc: '專屬服務' },
  pricing: { en: 'Pricing', tc: '透明收費' },
  location: { en: 'Location', tc: '服務區域' },
  contact: { en: 'Contact', tc: '聯絡我們' },
  ctaFloating: { en: 'Chat with your clone', tc: '與Son對話' },
  ctaHero: { en: 'Book Luxury Escort', tc: '即時為父母預約尊榮隨行' },
  ctaSecondary: { en: 'Browse Services & Rates', tc: '瀏覽 5 大專屬服務與收費' },
  ctaCall: { en: 'Call Directly', tc: '致電專線' },
  viewSampleReport: { en: 'View Sample Report', tc: '預覽匯報範本' },
};

export const TRUST_BADGES = [
  { en: 'BC Licensed Instructor Team', tc: 'BC 省認可執業駕駛導師團隊' },
  { en: '100% Native Cantonese & English', tc: '100% 廣東話與英語雙語無縫溝通' },
  { en: 'Cross-Ocean WhatsApp/SMS Brief', tc: '跨海即時 WhatsApp / SMS 視覺化簡報' },
  { en: '5 Core Greater Vancouver Zones', tc: '覆蓋大溫哥華 5 大核心生活分區' },
];

export const HERO_TEXT = {
  titleEn: 'Autonomous Living, Never Alone.',
  subtitleEn: 'Living in Hong Kong and worried about your parents residing in Canada? Looking for senior visit or nursing home check-in services, but your elders resist being "cared for" or "inspected"?\n\nWe provide a unique 【Surrogate Senior Visit】 & Driving Status Monitoring Service. A professional instructor visits under the guise of "refresher driving lessons/license practice". Through relaxed interaction, we visit your elders on your behalf while discreetly evaluating their reaction time, memory, mental state, and physical mobility. After every "lesson", we deliver a detailed health and mental well-being report directly to you in Hong Kong, giving you genuine peace of mind from afar.',
  titleTc: '獨而不孤、自主生活',
  subtitleTc: '身喺香港，擔心留在加拿大的父母？想搵代探病或代探老人院服務，但老人家又排斥被『照顧』或『檢查』？\n\n我們提供獨特的【代客探望】與駕駛狀態監測服務。由專業教練以『復修駕駛技巧/考牌練習』為名上門接送，在輕鬆互動中為你代探長者，同時隱密評估他們的反應力、記憶力、精神狀況與肢體靈活性。我們會在每次『學車』後，為身在香港的你提供詳細的父母健康與精神狀態報告，讓你遠距離亦能真正放心。',
  taglineEn: 'GREATER VANCOUVER CANTONESE PRIVATE ASSISTANT & VIP CONCIERGE',
  taglineTc: '大溫哥華廣東話私人助理 · 頂級長者出行與貴賓隨行服務',
};

export const PHILOSOPHY_TEXT = {
  badgeEn: 'DIGNITY PROTECTION PHILOSOPHY',
  badgeTc: '尊嚴守護哲學',
  titleEn: 'Preserving Dignity and Quality of Life for Your Aging Parents',
  titleTc: '替你照顧長者嘅尊嚴與生活質感',
  p1En: 'Living in Hong Kong and worried about your parents residing in Canada? Looking for senior visit or nursing home check-in services, but your elders resist being "cared for" or "inspected"? We provide a unique [Surrogate Senior Visit] & Driving Status Monitoring Service. A professional instructor visits under the guise of "refresher driving lessons/license practice". Through relaxed interaction, we visit your elders on your behalf while discreetly evaluating their reaction time, memory, mental state, and physical mobility. After every "lesson", we deliver a detailed health and mental well-being report directly to you in Hong Kong, giving you genuine peace of mind from afar.',
  p1Tc: '身喺香港，擔心留在加拿大的父母？想搵代探病或代探老人院服務，但老人家又排斥被『照顧』或『檢查』？我們提供獨特的【代客探望】與駕駛狀態監測服務。由專業教練以『復修駕駛技巧/考牌練習』為名上門接送，在輕鬆互動中為你代探長者，同時隱密評估他們的反應力、記憶力、精神狀況與肢體靈活性。我們會在每次『學車』後，為身在香港的你提供詳細的父母健康與精神狀態報告，讓你遠距離亦能真正放心。',
  p1aEn: 'Living in Hong Kong and worried about your parents residing in Canada? Looking for senior visit or nursing home check-in services, but your elders resist being "cared for" or "inspected"?',
  p1aTc: '身喺香港，擔心留在加拿大的父母？想搵代探病或代探老人院服務，但老人家又排斥被『照顧』或『檢查』？',
  p1bEn: 'We provide a unique 【Surrogate Senior Visit】 & Driving Status Monitoring Service. A professional instructor visits under the guise of "refresher driving lessons/license practice". Through relaxed interaction, we visit your elders on your behalf while discreetly evaluating their reaction time, memory, mental state, and physical mobility. After every "lesson", we deliver a detailed health and mental well-being report directly to you in Hong Kong, giving you genuine peace of mind from afar.',
  p1bTc: '我們提供獨特的【代客探望】與駕駛狀態監測服務。由專業教練以『復修駕駛技巧/考牌練習』為名上門接送，在輕鬆互動中為你代探長者，同時隱密評估他們的反應力、記憶力、精神狀況與肢體靈活性。我們會在每次『學車』後，為身在香港的你提供詳細的父母健康與精神狀態報告，讓你遠距離亦能真正放心。',
  
  trojanTitleEn: 'Health & Wellness Assessment Disguised as Driving Practice',
  trojanTitleTc: '以『考牌練車』為名的健康與生活狀態評估',
  p2En: 'We completely reframe the concept of elder care. Son Of A Brunch companions are BC licensed driving instructors. To your parents, they are polite, knowledgeable junior companions guiding them through driving practice, scenic cruising, or dim sum. To you residing overseas, you monitor everything remotely, staying fully informed on their physical and mental well-being while gently upholding their dignity.',
  p2Tc: '我們徹底重塑照顧的形式。Son Of A Brunch 的隨行人員均為 BC 省認可教車師父。在父母眼中，這是一位很有禮貌、懂車又懂生活的「晚輩」陪佢哋練車、遊車河或飲茶；而身在外地的你，遙控一切，全面掌握父母實時身體及精神狀況，溫柔地接住父母不甘示弱嘅堅強外殼。',

  krisTitleEn: 'Attentive Listening & Active Companionship',
  krisTitleTc: '傾聽者與貼心隨行',
  krisDescEn: 'Seniors are never fragile individuals needing pity, but living encyclopedias of wisdom. Beyond luxury chauffeur transportation, lifestyle assistance, and clinic translation, our core strength is active listening. Through warm, organic conversation, we identify home maintenance needs or physical discomforts, recording and reporting them to you in real time.',
  krisDescTc: '長者銀髮族絕不是『需要被照顧的弱者』，而是充滿人生經驗嘅活字典。我們不單單是提供車輛接送，貼心生活協助，陪診翻譯，我們的專長是傾聽，通過『閒聊』，無論係家中維修需要，還是身體痛症，我們將紀錄並實時報告。',

  cstTitleEn: '【Active Listening & Psychological Resonance】',
  cstTitleTc: '【傾聽與心靈共鳴】',
  cstDescEn: 'Our conversational accompaniment is inspired by Life Review Therapy and Cognitive Stimulation Therapy principles. While strictly non-medical, our natural, family-like conversations guide seniors to share life stories and memories, providing emotional validation, maintaining cognitive sharpness, and nurturing deep fulfillment.',
  cstDescTc: '我們的隨行溝通藝術靈感來自生命回顧療法 (Life Review Therapy) 與 認知刺激療法 (Cognitive Stimulation Therapy) 的理念。我們並非從事任何醫療行為，而是透過如家人般自然流暢的對話與引導，讓長輩在分享人生故事與回憶的過程中獲得情緒價值，同時保持思維敏捷與心理滿足感。',

  boundaryNoticeEn: 'Dignity-First Boundary: Premium lifestyle concierge & driving companion. (Explicitly non-medical; excludes personal hygiene, bathing, or medical procedures).',
  boundaryNoticeTc: '【尊嚴與專業界線】本服務為頂級生活管家與駕駛陪伴，明確排除個人衛生洗澡、護理侵入性醫療操作等看護範疇，維護長者最高尊嚴。',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'driving-escort',
    iconName: 'Car',
    titleEn: 'Dual-Wheel Dual-Brake Safe Driving Escort',
    titleTc: '雙軚盤雙剎車駕駛護航',
    tagEn: 'BC Licensed Instructor Escort',
    tagTc: 'BC持牌駕駛導師護航',
    subtitleEn: 'Dual-Wheel Dual-Brake Safe Driving Escort | BC Licensed Instructor Escort',
    subtitleTc: '雙軚盤雙剎車駕駛護航 ｜ BC持牌駕駛導師護航',
    mottoTc: '香港人廣東話教車師傅，路面駕駛複習',
    descEn: 'Accompanied by a licensed driving instructor to learn and review Vancouver traffic regulations, whether preparing for a road test or maintaining driving confidence, our instructors cultivate safe driving habits. On the road, we observe the senior’s reaction to traffic and physical coordination, providing deeper wellness monitoring than standard caregivers.',
    descTc: '由持牌駕駛導師陪同學習與複習溫哥華最新路牌規例，無論是準備路試，還是保持駕照自信；由專業師傅幫你養成安全駕駛習慣。在路上，我們觀察老人家對路況的反應、肢體協調度，發揮比一般私家看護或跑腿更深入的健康監察作用。',
    detailsEn: [
      'BC Licensed Instructor 1-on-1 driving practice & regulations review',
      'Door-to-door luxury escort in clean, spacious vehicles',
      'Dual-wheel dual-brake instructor vehicle for top driving safety',
      'Customized learning routes tailored to student needs',
      'Empower seniors to drive themselves to dim sum, clinic & shopping with full escort',
    ],
    detailsTc: [
      'BC 持牌導師一對一路面練習與法規考評',
      '專車上門接送，舒適寬敞與專屬車廂體驗',
      '雙軚盤雙剎車師傅車保障駕駛安全',
      '按學員需要更改學習路線',
      '讓長者「自行」開車去購物，飲茶，複診，我們全程護航',
    ],
  },
  {
    id: 'medical-escort',
    iconName: 'Stethoscope',
    titleEn: 'Medical & Doctor Escort',
    titleTc: '醫療陪診與即時翻譯',
    tagEn: 'Cantonese & English Dual Fluency',
    tagTc: '廣東話與英語雙語溝通',
    subtitleEn: 'Medical & Doctor Escort | Cantonese & English Dual Fluency',
    subtitleTc: '醫療陪診與即時翻譯 ｜ 廣東話與英語雙語溝通',
    mottoTc: '診所醫院陪同、現場醫患雙語翻譯、診後紀錄整理',
    descEn: 'Escort for specialists, clinics, hospitals, or lab tests. Printing medical notes, waiting in walk-in queues, live Cantonese-English interpretation between elders and healthcare staff, and organizing doctor instructions into reports.',
    descTc: '專科、診所、醫院或化驗所陪診。代印醫生紙，walk-in排隊，現場為廣東話長者與英語醫生或醫護人員進行即時雙向翻譯，並紀錄醫生醫囑整理成報告。',
    detailsEn: [
      'On-time escort to hospitals and specialist clinics across Greater Vancouver',
      'Live Cantonese-English accurate two-way medical interpretation',
      'Prescription collection with clear Cantonese instructions on dosage and precautions',
      'Organized doctor notes & summary reports sent to family overseas',
    ],
    detailsTc: [
      '準時上門接送至大溫地區各大醫院與專科診所',
      '現場廣東話—英語醫療名詞精準雙向即時翻譯',
      '協助取藥並以廣東話清晰交代服藥時間與禁忌',
      '整理詳細醫囑筆記發送給身在外地的家屬',
    ],
  },
  {
    id: 'grocery-mealprep',
    iconName: 'ShoppingBag',
    titleEn: 'Grocery & Meal Prep Assist',
    titleTc: '採購與食材備餐',
    tagEn: 'Grocery Porter & Meal Prep',
    tagTc: '購物代提，備料煮飯',
    subtitleEn: 'Grocery & Meal Prep Assist | Grocery Porter & Meal Prep',
    subtitleTc: '採購與食材備餐 ｜ 購物代提，備料煮飯',
    mottoTc: '到 Richmond / 麗晶廣場採購新鮮食材，替長者搬運重物',
    descEn: 'Accompanying parents to Asian markets like T&T or Crystal Mall (麗晶廣場) in Richmond & Burnaby. Handling heavy rice bags and water cases, then washing, chopping, and portioning fresh ingredients.',
    descTc: '專車陪同前往 Richmond 大統華、麗晶廣場等中式超市採購新鮮食材。代勞提拎大米、箱裝飲品等重物，並協助洗菜、切肉分裝備餐。',
    detailsEn: [
      'Chauffeur transport to T&T, Crystal Mall (麗晶廣場) & Asian markets',
      'Handling heavy bags, rice sacks, and beverage cases',
      'Washing, chopping, and vacuum-sealing weekly fresh meal preps',
      'Pantry organization & expiration date sanity check',
    ],
    detailsTc: [
      '專車陪同前往 Richmond 大統華、麗晶廣場、中藥房採購',
      '主動承擔所有重物提拎、搬運大米與箱裝飲品',
      '返家後協助洗菜、切肉按餐分裝備料',
      '整理雪櫃與儲物櫃，檢查食品保質期',
    ],
  },
  {
    id: 'home-assistance',
    iconName: 'Home',
    titleEn: 'Light Home Maintenance Assistance',
    titleTc: '家居維護支援',
    tagEn: 'Repairs, Heavy Lifting, Replacement & Organizing',
    tagTc: '日常的修補、提重、更換、整理',
    subtitleEn: 'Light Home Maintenance | Repairs, Lifting, Replacement & Organizing',
    subtitleTc: '家居維護支援 ｜ 日常的修補、提重、更換、整理',
    mottoTc: '高空換燈泡、搬運重物家具、季節性防凍檢視、長者家居安全預防',
    descEn: 'Assisting with changing high-ceiling lightbulbs, moving heavy seasonal furniture, seasonal winterization visual checks, and home hazard prevention.',
    descTc: '協助日常高空更換燈泡、搬運重物家具、季節性防凍視覺檢視與長者家居安全預防。',
    detailsEn: [
      'Replacing high lightbulbs, smoke detector battery checks',
      'Folding laundry, changing heavy bed linens & duvets',
      'Moving heavy patio furniture or seasonal storage boxes',
      'Winter freeze & gutter visual inspection report',
    ],
    detailsTc: [
      '替換高處高天花燈泡、檢測煙霧警報器電池',
      '協助摺疊衣物、更換沉重床單被套',
      '搬運季節性重物、露台花盆或重型包裹',
      '秋冬季排水槽與防凍設施視覺檢查預防',
    ],
    disclaimerTc: '*（本服務屬於日常家居安全預防與視覺協助，不涉及任何需持牌水電、結構工程或法定房屋檢驗之項目。）*',
    disclaimerEn: '*(This service covers routine home safety prevention & visual assistance; it does not involve licensed plumbing, electrical, structural engineering, or statutory building inspection tasks.)*',
  },
  {
    id: 'tech-companion',
    iconName: 'Smartphone',
    titleEn: 'Tech Companion',
    titleTc: '科技伴讀與跨海連線',
    tagEn: 'Video Call, Online Shopping & Ride Hailing',
    tagTc: '教用視訊，線上購物約車',
    subtitleEn: 'Tech Companion | Video Call, Online Shopping & Ride Hailing',
    subtitleTc: '科技伴讀與跨海連線 ｜ 教用視訊，線上購物約車',
    mottoTc: '教長者用 FaceTime、WhatsApp 視訊連線，設定電視影音與線上約車',
    descEn: 'Patiently teaching seniors to use iPhone/iPad, setting large fonts and shortcuts, practicing FaceTime/WhatsApp video calls with grandkids in HK, setting up Hong Kong TVB streaming, and teaching Uber ride-hailing.',
    descTc: '耐性手把手教導長者使用 iPhone/iPad、設定大字體與快捷鍵、演練 FaceTime 及 WhatsApp 視訊連線，並協助設定香港粵語電視節目與 Uber 線上約車教學。',
    detailsEn: [
      'FaceTime & WhatsApp multi-party video call drill with HK grandkids',
      'Setting up iPad large font & quick dial shortcuts',
      'Hong Kong TVB / Cantonese streaming box setup',
      'Uber ride-hailing & mobile grocery ordering tutorial',
    ],
    detailsTc: [
      '演練 FaceTime / WhatsApp 視訊通話，一鍵打畀香港孫仔',
      '設定大字體模式、常用聯絡人快速捷徑',
      '安裝與調校香港 TVB 及粵語影音節目',
      'Uber 線上約車教學與手機超市下單指引',
    ],
  },
];

export const PRICING_TEXT = {
  headerBadgeEn: 'CLEAR & HONEST PRICING',
  headerBadgeTc: '明碼實價 · 無隱藏條款',
  titleEn: 'Transparent Pricing · Cross-Ocean Peace of Mind · Dignified Escort',
  titleTc: '透明收費 · 孝心代達 · 尊嚴隨行 · 隔空掌舵',
  subtitleEn: 'Translating your long-distance love into dignified companionship. Immediate post-session reporting keeps you seamlessly connected to your parents state from afar.',
  subtitleTc: '替你將遠程孝心落實為體面的陪伴。每次任務後即時匯報，讓身在外地的你實時掌握父母狀態，無縫接軌這份牽掛。',
  
  rateLabelEn: 'FLAT SERVICE RATE',
  rateLabelTc: '單次標準隨行',
  rateValueEn: '$90 CAD',
  rateUnitEn: '/ 90 mins (Standard Session)',
  rateValueTc: '$90 CAD',
  rateUnitTc: '/ 90 分鐘（標準單次隨行）',
  
  mileageLabelEn: 'MILEAGE FEE',
  mileageLabelTc: '專車路程油費',
  mileageValueEn: '$0.72 CAD',
  mileageUnitEn: '/ km (Richmond, Vancouver, Burnaby, Coquitlam, Surrey)',
  mileageValueTc: '$0.72 CAD',
  mileageUnitTc: '/ 公里（覆蓋 Richmond、Vancouver、Burnaby、Coquitlam、Surrey）',

  includedSubtitleEn: 'Mandatory reporting after every service visit',
  includedSubtitleTc: '每趟服務結束後必備隨行匯報',
  includedTitleEn: 'Included in EVERY Remote Briefing Package:',
  includedTitleTc: '每次服務包含的遙距匯報套餐：',

  itemsEn: [
    '1 Detailed Wellbeing & Health Text Brief sent directly via WhatsApp/SMS',
    '10 High-Resolution Candid Photos capturing real-time outing moments',
    '1 Short Video Clip documenting highlights of their VIP day',
    'Immediate alerts on home safety, prescription refills, or repair needs',
  ],
  itemsTc: [
    '1 份詳細健康與生活狀態文字報告（經 WhatsApp / SMS 即時發送）',
    '10 張照片，直擊出行實況。',
    '1 段精選短片，記錄當日專屬出遊精華',
    '及時警示任何家居安全隱患、處方藥物補充或維修需求',
  ],

  sampleReportCtaEn: 'View Real Sample Report Received in Hong Kong',
  sampleReportCtaTc: '點擊預覽香港家屬接收到的真實報告範本',
};

export const LOCATIONS_DATA: ServiceArea[] = [
  {
    nameEn: 'Richmond',
    nameTc: '列治文 (Richmond)',
    descEn: 'The heart of Cantonese dining, Asian markets (T&T, Yaohan), and specialized Chinese-speaking medical clinics.',
    descTc: '粵式飲茶名店集中地、大統華八佰伴採購、廣東話家庭醫生與專科診所密集區。',
    highlightsEn: ['Aberdeen & Yaohan Center escort', 'Richmond Hospital doctor companion', 'Minoru Park walking drives'],
    highlightsTc: ['時代廣場及八佰伴專車陪同', '列治文醫院及周邊診所陪診', 'Minoru Park 散步巡遊'],
  },
  {
    nameEn: 'Vancouver (Westside & Eastside)',
    nameTc: '溫哥華 (Vancouver 西區/東區)',
    descEn: 'Kerrisdale, Oakridge, Dunbar, Point Grey, Stanley Park scenic routes, VGH medical escort, Granville Island runs.',
    descTc: 'Kerrisdale、Oakridge、Dunbar 住宅區、VGH 溫哥華綜合醫院陪診、Stanley Park 海景巡遊。',
    highlightsEn: ['Stanley Park & Marine Drive drives', 'VGH & BC Women’s escort', 'Kerrisdale high tea & errands'],
    highlightsTc: ['Stanley Park 海岸線漫遊', 'VGH 醫院及 UBC 診所陪伴', 'Kerrisdale 街邊小店與藥房採購'],
  },
  {
    nameEn: 'Burnaby',
    nameTc: '本拿比 (Burnaby)',
    descEn: 'Metrotown shopping, Crystal Mall (麗晶廣場) fresh Asian groceries, Burnaby Hospital, and Central Park strolls.',
    descTc: 'Metrotown 購物中心、麗晶廣場中式食材大採購、本拿比醫院陪診、Central Park 散步。',
    highlightsEn: ['Crystal Mall (麗晶廣場) fresh produce assist', 'Metrotown escort', 'Burnaby Hospital companion'],
    highlightsTc: ['麗晶廣場鮮肉蔬菜搬運提拎', 'Metrotown 逛街與購物陪伴', '本拿比醫院專車隨行'],
  },
  {
    nameEn: 'Coquitlam & Port Moody',
    nameTc: '高貴林與三聯市 (Coquitlam)',
    descEn: 'Town Centre Park, Henderson Place Mall, Westwood Plateau, and local health facilities.',
    descTc: '恆基廣場（Henderson Place）、Town Centre Park 漫步、西活高原（Westwood Plateau）行車練習。',
    highlightsEn: ['Henderson Place Asian market assist', 'Town Centre Park drives', 'Local clinic escort'],
    highlightsTc: ['恆基廣場亞洲超市備糧', 'Town Centre Park 湖邊漫步', '高貴林診所陪診'],
  },
  {
    nameEn: 'Surrey & South Surrey/White Rock',
    nameTc: '素里與白石 (Surrey & White Rock)',
    descEn: 'Crescent Beach drives, Peace Arch Hospital escort, Guildford shopping, South Surrey driving refreshers.',
    descTc: '白石海灘（White Rock Pier）巡遊、Peace Arch 醫院陪伴、Guildford 購物與路面駕駛複習。',
    highlightsEn: ['White Rock Pier scenic escorts', 'Peace Arch Hospital escort', 'Driving refresher practice'],
    highlightsTc: ['白石碼頭觀景飲茶', 'Peace Arch 醫院專車陪伴', '大路考牌駕駛規例練習'],
  },
];

export const SAMPLE_REPORT: SampleReportData = {
  date: '2026-07-24 14:30 PST',
  parentName: 'Mrs. Wong (黃太太)',
  companionName: 'Marcus (BC Licensed Instructor & UBC Alumnus)',
  location: 'Kerrisdale & Richmond Sea Island',
  durationMinutes: 90,
  summaryTextEn: `Mrs. Wong was in wonderful spirits today! She proactively asked to visit Fisherman’s Wharf to buy fresh rockfish to cook at home, and happily shared that she scheduled a mahjong game with Mrs. Chan this weekend! Marcus accompanied her for a 45-minute driving practice session through busy road sections in Richmond.

【Companion Observations & Reminders】

Driving Condition: During parallel parking practice today, Mrs. Wong mistakenly stepped on the accelerator instead of the brake once. Fortunately, Marcus applied the instructor dual brake immediately. We recommend continuing dedicated driving escort practice and keeping a close eye on potential early signs of cognitive decline.

Health Observation: Noticed a slight red rash on the back of Mrs. Wong’s hand. Upon asking, we learned she ate mangoes yesterday, which may have caused a mild allergy. If the rash persists, we can accompany her to a clinic for a doctor's checkup during our next visit.

Lifestyle Support: On the way back, we assisted in collecting her prescription medication at London Drugs and replaced the filter cartridge for her kitchen water purifier.`,
  summaryTextTc: `黃太太今日精神非常飽滿，主動提出想到漁人碼頭買新鮮斑球回家親自下廚，還開心地分享週末約了陳太打牌！Marcus 陪同進行了 45 分鐘 Richmond 繁華路段駕駛練習。

【隨行觀察與溫馨提醒】

駕駛狀況： 今日練習平行泊車時，黃太太有一次錯將油門當煞車輕踩，幸好 Marcus 即時煞停。建議持續安排專車陪練，並密切關注是否有初期認知功能減退的跡象。

健康留意： 留意到黃太太手背有輕微紅疹，詢問後得知她昨日吃了芒果，可能存在輕微過敏。若紅疹未退，下次隨行可順道陪同前往診所由醫生檢查。

生活支援： 回程已協助於 London Drugs 提取處方藥物，並更換了廚房淨水器濾芯。`,
  highlightsEn: [
    'Confidence boosted during parallel parking & left-turn refresher',
    'Enjoyed steamed shrimp dumplings & egg tarts at dim sum',
    'Blood pressure medication collected; expiry dates verified',
    'Confirmed FaceTime shortcut to call HK grandkids is working smoothly',
  ],
  highlightsTc: [
    '平行泊車與左轉考牌規例練習，考牌自信大幅提升',
    '飲茶期間享用蝦餃與新鮮出爐蛋撻，心情愉悅',
    '已於藥房成功取藥，並以中文標註每日服藥時間',
    '現場測試 iPad FaceTime 一鍵撥號給香港孫仔，連線清晰',
  ],
  photos: [
    {
      url: IMAGES.tea,
      captionEn: 'Enjoying a cup of milk tea at a local cafe per Mrs. Wong’s request after driving practice',
      captionTc: '練車完畢後，按黃太太意思到茶餐廳飲杯奶茶',
    },
    {
      url: IMAGES.driving,
      captionEn: 'Mrs. Wong handled driving in the rain exceptionally well, maintaining precise speed control and safe distance',
      captionTc: '黃太太雨中駕駛的技巧已經掌握得很好，行車距離與車速控制很準確',
    },
    {
      url: IMAGES.dimsum,
      captionEn: 'Escorted Mrs. Wong to Fisherman’s Wharf after class to enjoy dim sum with Mr. Chan',
      captionTc: '落堂後送了黃太太到漁人碼頭跟陳先生飲茶',
    },
  ],
};

export const FOOTER_TEXT = {
  copyrightEn: '© 2026 Son Of A Brunch. All rights reserved.',
  copyrightTc: '© 2026 Son Of A Brunch．版權所有。',
  legalNoticeEn: 'Son Of A Brunch is a specialized division operated under Extra Hands. All services, billing, and contracts are processed through Extra Hands.',
  legalNoticeTc: '護航老人安享晚年生活。Son Of A Brunch 為 Extra Hands 旗下營運之長者奢華隨行專屬部門。所有服務、賬單及合約均由 Extra Hands 統一處理。',
  subTitleTc: '大溫哥華長者代探、醫療陪診與生活隨行專屬服務。',
  subTitleEn: 'Boutique Senior Escort, Medical Companion & Lifestyle Service in Greater Vancouver.',
  phoneLabelEn: 'Direct Line / SMS / WhatsApp:',
  phoneLabelTc: '24小時專線 / SMS / WhatsApp:',
  addressEn: 'Greater Vancouver Area, British Columbia, Canada',
  addressTc: '加拿大不列顛哥倫比亞省大溫哥華地區',
};
