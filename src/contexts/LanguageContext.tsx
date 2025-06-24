
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Hero Section
    "hero_title": "Puskeraswarnath Temple",
    "hero_title_hindi": "पुष्केरश्वरनाथ मंदिर",
    "hero_subtitle": "Dedicated to Lord Shiva • Established June 5, 2025",
    "hero_description": "A sacred sanctuary where devotion meets divinity, nestled in the embrace of nature's grandeur",
    "hero_donate": "DONATE NOW",
    "hero_contact": "Send Message",
    "hero_learn": "Learn More",

    // About Section
    "about_title": "About Puskeraswarnath Temple",
    "about_description": "A divine sanctuary established on June 5, 2025, dedicated to Lord Shiva - the destroyer of evil and transformer of the universe",
    "about_mission_title": "Our Sacred Mission",
    "about_mission_p1": "Puskeraswarnath Temple stands as a beacon of divine light, where ancient traditions meet modern devotion. Our temple serves as a spiritual haven for devotees seeking blessings from Lord Shiva, the Mahadev who resides in the mountains and in our hearts.",
    "about_mission_p2": "Established with the vision of spreading peace, prosperity, and spiritual awakening, we conduct daily prayers, special ceremonies, and community service activities that benefit all of society.",
    "about_quote": "Shiva is peace, Shiva is oneness, Shiva is the ultimate reality",
    "about_quote_sanskrit": ""शिवम् शान्तम् अद्वैतम्" - Shivam Shantam Advaitam",
    "about_architecture": "Sacred Architecture",
    "about_architecture_desc": "Built with traditional architectural principles that harmonize with nature and cosmic energies",
    "about_worship": "Daily Worship",
    "about_worship_desc": "Regular prayers, aarti, and special ceremonies conducted by learned priests following ancient traditions",
    "about_service": "Community Service",
    "about_service_desc": "Dedicated to serving society through food distribution, education, and healthcare initiatives",

    // Shiva Powers Section
    "powers_title": "The Divine Powers of Lord Shiva",
    "powers_description": "Explore the magnificent aspects of Mahadev - the supreme consciousness who governs the universe",
    "power_nataraja": "Nataraja - The Cosmic Dancer",
    "power_nataraja_desc": "Lord Shiva's dance represents the cosmic cycles of creation and destruction, maintaining the rhythm of the universe.",
    "power_mahadev": "Mahadev - The Great God",
    "power_mahadev_desc": "The supreme deity who transcends all forms, the source of all creation and the ultimate reality.",
    "power_rudra": "Rudra - The Fierce One",
    "power_rudra_desc": "The destroyer of evil and ignorance, protecting devotees and maintaining cosmic balance.",
    "power_yogeshwar": "Yogeshwar - Lord of Yoga",
    "power_yogeshwar_desc": "The ultimate yogi who shows the path to self-realization and spiritual liberation.",
    "power_gangadhar": "Gangadhar - Bearer of Ganga",
    "power_gangadhar_desc": "Who holds the sacred river Ganga in his locks, symbolizing purification and grace.",
    "power_neelkanth": "Neelkanth - The Blue-Throated",
    "power_neelkanth_desc": "Who consumed poison to save the universe, showing infinite compassion for all beings.",
    "mantras_title": "Sacred Mantras",
    "maha_mantra": "Maha Mantra",
    "maha_mantra_desc": "The five-syllable mantra that connects us to divine consciousness",
    "mrityunjaya_mantra": "Mrityunjaya Mantra",
    "mrityunjaya_desc": "The great mantra for overcoming death and achieving immortality",

    // Donations Section
    "donations_title": "Support Our Sacred Mission",
    "donations_description": "Your generous donations help us serve the community and maintain this sacred space for future generations",
    "donation_categories": "Choose Your Seva (Service)",
    "temple_maintenance": "Temple Maintenance",
    "temple_maintenance_desc": "Support daily upkeep, repairs, and maintenance of the sacred temple premises",
    "food_distribution": "Annadanam (Food Distribution)",
    "food_distribution_desc": "Provide free meals to devotees and those in need - the highest form of service",
    "education": "Education & Learning",
    "education_desc": "Support educational programs, Sanskrit learning, and spiritual knowledge sharing",
    "medical_aid": "Medical & Healthcare",
    "medical_aid_desc": "Provide medical assistance and healthcare support to the community",
    "make_donation": "Make a Donation",
    "full_name": "Full Name",
    "email": "Email",
    "phone": "Phone Number",
    "amount": "Donation Amount (₹)",
    "category": "Donation Category",
    "message_optional": "Message (Optional)",
    "submit_donation": "Submit Donation Request",
    "processing": "Processing...",
    "donation_form_note": "After submitting, you'll see the QR code to complete your payment",
    "complete_donation": "Complete Your Donation",
    "donation_saved": "Your donation request has been saved. Please complete the payment using the QR code below.",
    "make_another": "Make Another Donation",
    "thank_you_donation": "Thank you for your generous donation!",
    "transaction_note": "After completing the payment, please keep the transaction reference for your records.",

    // Contact Section
    "contact_title": "Connect With Us",
    "contact_description": "Have questions, need guidance, or want to know more about our temple activities? We're here to help.",
    "temple_info": "Temple Information",
    "address": "Address",
    "temple_address": "Puskeraswarnath Temple\nSacred Hills, Divine Valley\nNear Mountain Springs\nPIN: 123456",
    "temple_timings": "Temple Timings",
    "temple_schedule": "Morning: 5:00 AM - 12:00 PM\nEvening: 4:00 PM - 9:00 PM\nSpecial ceremonies as announced",
    "daily_activities": "Daily Activities",
    "morning_aarti": "• Morning Aarti: 6:00 AM",
    "abhishek": "• Abhishek: 8:00 AM - 11:00 AM",
    "afternoon_prayers": "• Afternoon Prayers: 12:00 PM",
    "evening_aarti": "• Evening Aarti: 7:00 PM",
    "night_prayer": "• Night Prayer: 8:30 PM",
    "send_message": "Send us a Message",
    "subject": "Subject",
    "contact_message": "Message",
    "contact_message_placeholder": "Write your message, question, or query here...",
    "sending": "Sending...",
    "contact_form_note": "Your message will be saved and we'll respond within 24 hours",

    // Footer
    "footer_blessing": "May Lord Shiva's blessings always be upon you",
    "quick_links": "Quick Links",
    "about_temple": "About Temple",
    "donations": "Donations",
    "contact_us": "Contact Us",
    "admin_panel": "Admin Panel",
    "footer_timings": "Temple Timings",
    "footer_schedule": "Morning: 5:00 AM - 12:00 PM\nEvening: 4:00 PM - 9:00 PM\nSpecial prayers on Mondays",
    "copyright": "© 2024 Shiva Temple. All rights reserved. 🙏",

    // Admin Panel
    "admin_title": "Admin Panel - Contact Messages",
    "admin_description": "All contact messages from website visitors",
    "total_messages": "total",
    "no_messages": "No contact messages found.",
    "name": "Name",
    "date": "Date",
    "actions": "Actions",
    "view": "View",
    "hide": "Hide",
    "not_provided": "Not provided",
    "no_subject": "No subject",
    "loading_messages": "Loading messages...",

    // Common
    "required": "*",
    "select_placeholder": "Select...",
    "enter_name": "Enter your full name",
    "enter_email": "Enter your email",
    "enter_phone": "Enter your phone number",
    "enter_amount": "Enter amount in rupees",
    "select_category": "Select donation category",
    "share_thoughts": "Share your thoughts or prayers...",
    "message_placeholder": "Write your message here...",
    "subject_placeholder": "Subject of your message",
  },
  hi: {
    // Hero Section
    "hero_title": "पुष्केरश्वरनाथ मंदिर",
    "hero_title_hindi": "Puskeraswarnath Temple",
    "hero_subtitle": "भगवान शिव को समर्पित • स्थापना: 5 जून, 2025",
    "hero_description": "एक पवित्र अभयारण्य जहाँ भक्ति और दिव्यता का मिलन होता है, प्रकृति की भव्यता के आलिंगन में स्थित",
    "hero_donate": "अभी दान करें",
    "hero_contact": "संदेश भेजें",
    "hero_learn": "और जानें",

    // About Section
    "about_title": "पुष्केरश्वरनाथ मंदिर के बारे में",
    "about_description": "5 जून, 2025 को स्थापित एक दिव्य अभयारण्य, भगवान शिव को समर्पित - बुराई के संहारक और ब्रह्मांड के रूपांतरकर्ता",
    "about_mission_title": "हमारा पवित्र मिशन",
    "about_mission_p1": "पुष्केरश्वरनाथ मंदिर दिव्य प्रकाश के एक दीपस्तंभ के रूप में खड़ा है, जहाँ प्राचीन परंपराएं आधुनिक भक्ति से मिलती हैं। हमारा मंदिर उन भक्तों के लिए एक आध्यात्मिक आश्रयस्थल का काम करता है जो भगवान शिव के आशीर्वाद की तलाश में हैं, महादेव जो पहाड़ों में और हमारे दिलों में निवास करते हैं।",
    "about_mission_p2": "शांति, समृद्धि और आध्यात्मिक जागृति फैलाने की दृष्टि के साथ स्थापित, हम दैनिक प्रार्थनाएं, विशेष समारोह और सामुदायिक सेवा गतिविधियां आयोजित करते हैं जो पूरे समाज को लाभान्वित करती हैं।",
    "about_quote": "शिव शांति है, शिव एकता है, शिव परम सत्य है",
    "about_quote_sanskrit": ""शिवम् शान्तम् अद्वैतम्" - शिवम् शान्तम् अद्वैतम्",
    "about_architecture": "पवित्र वास्तुकला",
    "about_architecture_desc": "पारंपरिक वास्तुकला सिद्धांतों के साथ निर्मित जो प्रकृति और ब्रह्मांडीय ऊर्जाओं के साथ तालमेल बिठाते हैं",
    "about_worship": "दैनिक पूजा",
    "about_worship_desc": "प्राचीन परंपराओं का पालन करते हुए विद्वान पुजारियों द्वारा आयोजित नियमित प्रार्थनाएं, आरती और विशेष समारोह",
    "about_service": "सामुदायिक सेवा",
    "about_service_desc": "भोजन वितरण, शिक्षा और स्वास्थ्य सेवा पहलों के माध्यम से समाज की सेवा के लिए समर्पित",

    // Shiva Powers Section
    "powers_title": "भगवान शिव की दिव्य शक्तियां",
    "powers_description": "महादेव के भव्य रूपों का अन्वेषण करें - वह परम चेतना जो ब्रह्मांड का संचालन करती है",
    "power_nataraja": "नटराज - ब्रह्मांडीय नर्तक",
    "power_nataraja_desc": "भगवान शिव का नृत्य सृष्टि और विनाश के ब्रह्मांडीय चक्रों का प्रतिनिधित्व करता है, ब्रह्मांड की लय को बनाए रखता है।",
    "power_mahadev": "महादेव - महान देव",
    "power_mahadev_desc": "सर्वोच्च देवता जो सभी रूपों से परे हैं, सभी सृष्टि के स्रोत और परम सत्य।",
    "power_rudra": "रुद्र - उग्र रूप",
    "power_rudra_desc": "बुराई और अज्ञानता के संहारक, भक्तों की रक्षा करने वाले और ब्रह्मांडीय संतुलन बनाए रखने वाले।",
    "power_yogeshwar": "योगेश्वर - योग के स्वामी",
    "power_yogeshwar_desc": "परम योगी जो आत्म-साक्षात्कार और आध्यात्मिक मुक्ति का मार्ग दिखाते हैं।",
    "power_gangadhar": "गंगाधर - गंगा के धारक",
    "power_gangadhar_desc": "जो अपनी जटाओं में पवित्र गंगा नदी को धारण करते हैं, शुद्धता और कृपा का प्रतीक।",
    "power_neelkanth": "नीलकंठ - नीले कंठ वाले",
    "power_neelkanth_desc": "जिन्होंने ब्रह्मांड को बचाने के लिए विष पिया, सभी प्राणियों के लिए अनंत करुणा दिखाते हुए।",
    "mantras_title": "पवित्र मंत्र",
    "maha_mantra": "महा मंत्र",
    "maha_mantra_desc": "पांच अक्षरों का मंत्र जो हमें दिव्य चेतना से जोड़ता है",
    "mrityunjaya_mantra": "मृत्युंजय मंत्र",
    "mrityunjaya_desc": "मृत्यु पर विजय पाने और अमरता प्राप्त करने का महान मंत्र",

    // Donations Section
    "donations_title": "हमारे पवित्र मिशन का समर्थन करें",
    "donations_description": "आपके उदार दान हमें समुदाय की सेवा करने और आने वाली पीढ़ियों के लिए इस पवित्र स्थान को बनाए रखने में मदद करते हैं",
    "donation_categories": "अपनी सेवा चुनें",
    "temple_maintenance": "मंदिर रखरखाव",
    "temple_maintenance_desc": "पवित्र मंदिर परिसर के दैनिक रखरखाव, मरम्मत और रखरखाव का समर्थन करें",
    "food_distribution": "अन्नदानम (भोजन वितरण)",
    "food_distribution_desc": "भक्तों और जरूरतमंदों को मुफ्त भोजन प्रदान करें - सेवा का सर्वोच्च रूप",
    "education": "शिक्षा और अध्ययन",
    "education_desc": "शैक्षिक कार्यक्रमों, संस्कृत शिक्षा और आध्यात्मिक ज्ञान साझा करने का समर्थन करें",
    "medical_aid": "चिकित्सा और स्वास्थ्य सेवा",
    "medical_aid_desc": "समुदाय को चिकित्सा सहायता और स्वास्थ्य सेवा सहायता प्रदान करें",
    "make_donation": "दान करें",
    "full_name": "पूरा नाम",
    "email": "ईमेल",
    "phone": "फोन नंबर",
    "amount": "दान राशि (₹)",
    "category": "दान श्रेणी",
    "message_optional": "संदेश (वैकल्पिक)",
    "submit_donation": "दान अनुरोध जमा करें",
    "processing": "प्रक्रिया में...",
    "donation_form_note": "जमा करने के बाद, आपको भुगतान पूरा करने के लिए QR कोड दिखाई देगा",
    "complete_donation": "अपना दान पूरा करें",
    "donation_saved": "आपका दान अनुरोध सहेजा गया है। कृपया नीचे दिए गए QR कोड का उपयोग करके भुगतान पूरा करें।",
    "make_another": "एक और दान करें",
    "thank_you_donation": "आपके उदार दान के लिए धन्यवाद!",
    "transaction_note": "भुगतान पूरा करने के बाद, कृपया अपने रिकॉर्ड के लिए लेनदेन संदर्भ रखें।",

    // Contact Section
    "contact_title": "हमसे जुड़ें",
    "contact_description": "क्या आपके पास प्रश्न हैं, मार्गदर्शन चाहिए, या हमारी मंदिर गतिविधियों के बारे में और जानना चाहते हैं? हम यहाँ आपकी मदद के लिए हैं।",
    "temple_info": "मंदिर की जानकारी",
    "address": "पता",
    "temple_address": "पुष्केरश्वरनाथ मंदिर\nपवित्र पहाड़ियां, दिव्य घाटी\nमाउंटेन स्प्रिंग्स के पास\nपिन: 123456",
    "temple_timings": "मंदिर का समय",
    "temple_schedule": "सुबह: सुबह 5:00 बजे - दोपहर 12:00 बजे\nशाम: शाम 4:00 बजे - रात 9:00 बजे\nविशेष समारोह घोषणा के अनुसार",
    "daily_activities": "दैनिक गतिविधियां",
    "morning_aarti": "• प्रातः आरती: सुबह 6:00 बजे",
    "abhishek": "• अभिषेक: सुबह 8:00 बजे - सुबह 11:00 बजे",
    "afternoon_prayers": "• दोपहर की प्रार्थना: दोपहर 12:00 बजे",
    "evening_aarti": "• संध्या आरती: शाम 7:00 बजे",
    "night_prayer": "• रात्रि प्रार्थना: रात 8:30 बजे",
    "send_message": "हमें संदेश भेजें",
    "subject": "विषय",
    "contact_message": "संदेश",
    "contact_message_placeholder": "यहाँ अपना संदेश, प्रश्न या पूछताछ लिखें...",
    "sending": "भेजा जा रहा है...",
    "contact_form_note": "आपका संदेश सहेजा जाएगा और हम 24 घंटों के भीतर जवाब देंगे",

    // Footer
    "footer_blessing": "भगवान शिव का आशीर्वाद सदा आप पर बना रहे",
    "quick_links": "त्वरित लिंक",
    "about_temple": "मंदिर के बारे में",
    "donations": "दान",
    "contact_us": "संपर्क करें",
    "admin_panel": "एडमिन पैनल",
    "footer_timings": "मंदिर का समय",
    "footer_schedule": "सुबह: सुबह 5:00 बजे - दोपहर 12:00 बजे\nशाम: शाम 4:00 बजे - रात 9:00 बजे\nसोमवार को विशेष प्रार्थना",
    "copyright": "© 2024 शिव मंदिर। सभी अधिकार सुरक्षित। 🙏",

    // Admin Panel
    "admin_title": "एडमिन पैनल - संपर्क संदेश",
    "admin_description": "वेबसाइट आगंतुकों के सभी संपर्क संदेश",
    "total_messages": "कुल",
    "no_messages": "कोई संपर्क संदेश नहीं मिला।",
    "name": "नाम",
    "date": "दिनांक",
    "actions": "कार्य",
    "view": "देखें",
    "hide": "छुपाएं",
    "not_provided": "प्रदान नहीं किया गया",
    "no_subject": "कोई विषय नहीं",
    "loading_messages": "संदेश लोड हो रहे हैं...",

    // Common
    "required": "*",
    "select_placeholder": "चुनें...",
    "enter_name": "अपना पूरा नाम दर्ज करें",
    "enter_email": "अपना ईमेल दर्ज करें",
    "enter_phone": "अपना फोन नंबर दर्ज करें",
    "enter_amount": "रुपयों में राशि दर्ज करें",
    "select_category": "दान श्रेणी चुनें",
    "share_thoughts": "अपने विचार या प्रार्थनाएं साझा करें...",
    "message_placeholder": "यहाँ अपना संदेश लिखें...",
    "subject_placeholder": "आपके संदेश का विषय",
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('temple-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('temple-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
