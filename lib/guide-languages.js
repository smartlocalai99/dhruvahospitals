// Interface strings and URL helpers for the English and Telugu patient guides (content: lib/guides.js).

export const guideLanguages = {
  en: {
    code: 'en',
    hrefLang: 'en-IN',
    ogLocale: 'en_IN',
    basePath: '/guides',
    label: 'English',
    ui: {
      eyebrow: 'Patient guide',
      indexTitle: 'Patient Guides',
      indexSubtitle: 'Short, dated answers to the questions families ask us most, checked by our doctors.',
      shortAnswer: 'Short answer',
      updated: 'Last updated',
      reviewer: 'Clinical reviewer',
      questions: 'Common questions',
      sources: 'Official sources',
      otherGuides: 'More guides',
      allGuides: 'All guides',
      switchLabel: 'తెలుగులో చదవండి',
      readGuide: 'Read the guide',
      helpTitle: 'Talk to our NRI desk',
      helpText: 'Message us on WhatsApp with your questions or reports, or call the hospital.',
      whatsapp: 'WhatsApp the NRI desk',
      call: 'Call',
      prices: 'Price ranges',
      priceItem: 'Service',
      priceRange: 'Range',
      priceNote: 'Ranges include',
    },
  },
  te: {
    code: 'te',
    hrefLang: 'te-IN',
    ogLocale: 'te_IN',
    basePath: '/te/guides',
    label: 'తెలుగు',
    ui: {
      eyebrow: 'రోగుల మార్గదర్శి',
      indexTitle: 'రోగుల మార్గదర్శులు',
      indexSubtitle: 'కుటుంబాలు మమ్మల్ని ఎక్కువగా అడిగే ప్రశ్నలకు చిన్న, తేదీతో కూడిన సమాధానాలు.',
      shortAnswer: 'క్లుప్తంగా',
      updated: 'చివరిగా నవీకరించింది',
      reviewer: 'వైద్య సమీక్ష',
      questions: 'తరచుగా అడిగే ప్రశ్నలు',
      sources: 'అధికారిక వనరులు',
      otherGuides: 'మరిన్ని మార్గదర్శులు',
      allGuides: 'అన్ని మార్గదర్శులు',
      switchLabel: 'Read in English',
      readGuide: 'చదవండి',
      helpTitle: 'మా NRI డెస్క్‌తో మాట్లాడండి',
      helpText: 'మీ ప్రశ్నలు లేదా రిపోర్టులను WhatsApp లో పంపండి, లేదా ఆసుపత్రికి కాల్ చేయండి.',
      whatsapp: 'NRI డెస్క్‌కు WhatsApp చేయండి',
      call: 'కాల్ చేయండి',
      prices: 'ధరల శ్రేణి',
      priceItem: 'సేవ',
      priceRange: 'ధర',
      priceNote: 'ధరలో ఉన్నవి',
    },
  },
};

export function guidePath(slug, lang = 'en') {
  return `${guideLanguages[lang].basePath}/${slug}`;
}

// Formats YYYY-MM-DD the same way on the server and in the browser.
export function formatDate(isoDate, lang = 'en') {
  return new Intl.DateTimeFormat(lang === 'te' ? 'te-IN' : 'en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
