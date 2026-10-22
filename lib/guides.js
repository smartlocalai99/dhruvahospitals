// Patient guides ("answer pages") in English and Telugu.
//
// Each guide is written to be quoted on its own: a short dated answer first, then detail.
// - updatedOn: date the content was last checked (YYYY-MM-DD).
// - reviewer / reviewedOn: the doctor named as clinical reviewer. The reviewer line and the
//   schema.org reviewedBy field only appear once reviewedOn is set, so only fill it in after
//   the doctor has actually read and approved the page.
// - published: false keeps a guide off the site and the sitemap (used until prices are confirmed).
// Language strings and URL helpers live in lib/guide-languages.js.

import { site } from './site';

const sources = {
  whoImci: {
    label: 'World Health Organization – IMCI chart booklet (general danger signs)',
    url: 'https://www.who.int/publications/m/item/integrated-management-of-childhood-illness---chart-booklet-(march-2014)',
  },
  passport: { label: 'Passport Seva (Government of India)', url: 'https://www.passportindia.gov.in/' },
  uidai: { label: 'UIDAI – Aadhaar', url: 'https://uidai.gov.in/' },
  crs: { label: 'Civil Registration System (Registrar General of India)', url: 'https://crsorgi.gov.in/' },
  emirates: { label: 'Emirates', url: 'https://www.emirates.com/' },
  airIndiaExpress: { label: 'Air India Express', url: 'https://www.airindiaexpress.com/' },
  icp: { label: 'UAE ICP – residency for newborns', url: 'https://icp.gov.ae/' },
  aapLevels: {
    label: 'American Academy of Pediatrics – Levels of Neonatal Care (policy statement, Pediatrics 2012)',
    url: 'https://doi.org/10.1542/peds.2012-1999',
  },
  aapStandards: {
    label: 'American Academy of Pediatrics – national standards for levels of neonatal care (2023)',
    url: 'https://www.aap.org/en/news-room/news-releases/aap/2023/american-academy-of-pediatrics-develops-national-standards-for-levels-of-neonatal-care-to-improve-health-outcomes-for-hospitalized-infants/',
  },
};

export const guides = [
  {
    slug: 'delivering-in-kadapa-from-dubai',
    published: true,
    updatedOn: '2026-10-15',
    reviewer: 'dr-mounika-reddy',
    reviewedOn: null,
    sources: [sources.emirates, sources.airIndiaExpress],
    en: {
      title: 'Delivering in Kadapa when you live in Dubai: a week-by-week plan',
      seoTitle: 'Delivering in Kadapa from Dubai: Week-by-Week Plan',
      description:
        'A week-by-week plan for Gulf families delivering at Dhruva Hospitals, Kadapa: records, video consult, insurance, fit-to-fly letter, last safe flight and documents.',
      answer:
        'Aim to reach Kadapa by about 32 weeks in a single pregnancy. Gulf airlines usually ask for a fit-to-fly letter from week 28 or 29 and stop carrying pregnant passengers at 36 weeks (32 weeks for twins). Before you fly, send your reports to our NRI desk, have a video consult with our obstetrician, get a written answer from your insurer on what it covers in India, and pack your antenatal records.',
      sections: [
        {
          heading: 'Week by week',
          steps: [
            {
              label: 'Weeks 12–20',
              title: 'Share your records',
              text: 'Send your dating scan, NT scan, blood group and antenatal blood tests to our NRI desk on WhatsApp. Include notes from any earlier caesarean or complicated delivery. We reply with any questions before your consult.',
            },
            {
              label: 'Weeks 20–24',
              title: 'Video consult with the obstetrician',
              text: 'Speak with Dr. S Mounika Reddy before you travel. Together you agree an arrival date, which tests to finish in Dubai (including the anomaly scan at 18–22 weeks) and anything that makes flying unsafe for you.',
            },
            {
              label: 'Weeks 24–28',
              title: 'Insurance letter and flights',
              text: 'Ask your insurer in writing whether your policy covers delivery outside the UAE, whether it pays the hospital directly or reimburses you, and whether your newborn is covered. Book a flight that lands before 32 weeks and check your airline’s pregnancy rules.',
            },
            {
              label: 'Weeks 28–29',
              title: 'Fit-to-fly certificate',
              text: 'Get a letter from your doctor in Dubai stating your due date, that you are fit to fly, and whether you are carrying one baby or more. Airlines set how recent it must be, so get it close to your flight date.',
            },
            {
              label: 'By week 32',
              title: 'Arrive in Kadapa',
              text: 'Book your first visit for the days after you land. The doctor reviews your records, examines you and repeats any tests that are due.',
            },
            {
              label: 'Weeks 32–40',
              title: 'Antenatal visits and delivery',
              text: 'Visits usually happen every two weeks, then weekly from 36 weeks, or as your obstetrician advises. Our Level III NICU is in the same building if your baby needs it.',
            },
            {
              label: 'After birth',
              title: 'Your baby’s documents',
              text: 'Collect the birth certificate first, then apply for Baal Aadhaar and the baby’s passport. Leave a few weeks for this before your return flight.',
              link: { href: 'baby-birth-certificate-aadhaar-passport-nri', label: 'Birth certificate, Aadhaar and passport guide' },
            },
          ],
        },
        {
          heading: 'Last safe flight: airline rules (checked 15 October 2026)',
          body: [
            'These are the published rules of two airlines that fly between the UAE and South India. Rules change and other airlines differ, so confirm with your airline before you book.',
          ],
          table: {
            columns: ['Airline', 'Certificate needed', 'Last week to fly'],
            rows: [
              ['Emirates', 'From week 29: due date, fit to fly, single or multiple pregnancy', 'End of week 36 (week 32 for twins); later only with Emirates medical clearance'],
              ['Air India Express', 'Weeks 28–35: obstetrician’s certificate dated within 3 days of the flight', 'Not accepted from week 36'],
            ],
          },
        },
        {
          heading: 'What to bring',
          list: [
            'Passports and UAE residence visas for both parents',
            'Aadhaar cards of both parents (used for the birth registration)',
            'Your antenatal card and every scan and blood report',
            'Notes from any earlier caesarean, surgery or complicated delivery',
            'Current medicines and a list of allergies',
            'Fit-to-fly certificate and your insurer’s written reply',
          ],
        },
      ],
      faqs: [
        {
          question: 'When should I fly from Dubai to Kadapa to deliver?',
          answer:
            'Aim to arrive by about 32 weeks in a single pregnancy, after your obstetrician agrees it is safe. That keeps you well inside airline limits and leaves time for antenatal visits in Kadapa.',
        },
        {
          question: 'Do I need a medical certificate to fly while pregnant?',
          answer:
            'Usually yes from week 28 or 29. Emirates asks for one from week 29; Air India Express asks for one dated within 3 days of the flight between weeks 28 and 35 (checked 15 October 2026).',
        },
        {
          question: 'Will my UAE insurance cover a delivery in India?',
          answer:
            'Only your insurer can confirm this. Ask them in writing before 28 weeks whether delivery outside the UAE and newborn care are covered, and how claims are paid.',
        },
        {
          question: 'Can I speak to the doctor before I travel?',
          answer:
            'Yes. Our NRI desk books a pre-arrival video consult with obstetrician Dr. S Mounika Reddy after reviewing your reports.',
        },
      ],
    },
    te: {
      title: 'దుబాయ్‌లో ఉంటూ కడపలో ప్రసవం: వారం వారీ ప్రణాళిక',
      seoTitle: 'దుబాయ్ నుంచి కడపలో ప్రసవం: వారం వారీ ప్రణాళిక',
      description:
        'దుబాయ్, గల్ఫ్ దేశాల్లో ఉంటూ కడప ధ్రువ హాస్పిటల్స్‌లో ప్రసవం కోరుకునే కుటుంబాల కోసం వారం వారీ ప్రణాళిక: రిపోర్టులు, వీడియో కన్సల్ట్, ఇన్సూరెన్స్ లేఖ, ఫిట్-టు-ఫ్లై సర్టిఫికెట్, చివరి సురక్షిత ప్రయాణం, తీసుకురావాల్సిన పత్రాలు.',
      answer:
        'ఒక్క బిడ్డ గర్భం అయితే సుమారు 32 వారాల లోపు కడప చేరుకోవడం మంచిది. గల్ఫ్ విమాన సంస్థలు సాధారణంగా 28 లేదా 29వ వారం నుంచి ఫిట్-టు-ఫ్లై లేఖ అడుగుతాయి, 36 వారాల తర్వాత (కవలలైతే 32 వారాలు) గర్భిణులను ఎక్కించవు. ప్రయాణానికి ముందు మీ రిపోర్టులను మా NRI డెస్క్‌కు పంపండి, మా ప్రసూతి వైద్యురాలితో వీడియో కన్సల్ట్ చేయండి, భారత్‌లో ఏమి కవర్ అవుతుందో మీ ఇన్సూరెన్స్ సంస్థ నుంచి లిఖితపూర్వకంగా తెలుసుకోండి, మీ గర్భ రికార్డులన్నీ వెంట తెచ్చుకోండి.',
      sections: [
        {
          heading: 'వారం వారీగా',
          steps: [
            {
              label: '12–20 వారాలు',
              title: 'మీ రిపోర్టులు పంపండి',
              text: 'డేటింగ్ స్కాన్, NT స్కాన్, బ్లడ్ గ్రూప్, గర్భ సమయ రక్త పరీక్షలను మా NRI డెస్క్‌కు WhatsApp లో పంపండి. ఇంతకు ముందు సిజేరియన్ లేదా క్లిష్టమైన ప్రసవం జరిగి ఉంటే ఆ నోట్స్ కూడా పంపండి. కన్సల్ట్‌కు ముందే మా ప్రశ్నలు మీకు తెలియజేస్తాం.',
            },
            {
              label: '20–24 వారాలు',
              title: 'ప్రసూతి వైద్యురాలితో వీడియో కన్సల్ట్',
              text: 'ప్రయాణానికి ముందు డా. ఎస్. మౌనిక రెడ్డి గారితో మాట్లాడండి. మీరు ఎప్పుడు రావాలి, దుబాయ్‌లోనే పూర్తి చేయాల్సిన పరీక్షలు (18–22 వారాల అనామలీ స్కాన్‌తో సహా), మీకు ప్రయాణం సురక్షితం కాని కారణాలు ఏమైనా ఉన్నాయా అనేవి కలిసి నిర్ణయిస్తారు.',
            },
            {
              label: '24–28 వారాలు',
              title: 'ఇన్సూరెన్స్ లేఖ, విమాన టికెట్లు',
              text: 'UAE బయట ప్రసవానికి మీ పాలసీ వర్తిస్తుందా, ఆసుపత్రికి నేరుగా చెల్లిస్తారా లేక తర్వాత తిరిగి ఇస్తారా, పుట్టిన బిడ్డకు కవర్ ఉందా అని మీ ఇన్సూరెన్స్ సంస్థను లిఖితపూర్వకంగా అడగండి. 32 వారాల లోపు చేరే విమానం బుక్ చేసుకోండి, మీ విమాన సంస్థ గర్భిణుల నియమాలు చూసుకోండి.',
            },
            {
              label: '28–29 వారాలు',
              title: 'ఫిట్-టు-ఫ్లై సర్టిఫికెట్',
              text: 'మీ ప్రసవ తేదీ, మీరు ప్రయాణానికి ఫిట్‌గా ఉన్నారని, గర్భంలో ఒక్క బిడ్డా లేక ఎక్కువా అని తెలిపే లేఖను దుబాయ్‌లోని మీ డాక్టర్ నుంచి తీసుకోండి. అది ఎంత తాజాగా ఉండాలో విమాన సంస్థ నిర్ణయిస్తుంది, కాబట్టి ప్రయాణ తేదీకి దగ్గరగా తీసుకోండి.',
            },
            {
              label: '32వ వారం లోపు',
              title: 'కడప చేరుకోండి',
              text: 'దిగిన తర్వాత కొద్ది రోజుల్లోనే మొదటి అపాయింట్‌మెంట్ తీసుకోండి. డాక్టర్ మీ రికార్డులు చూసి, పరీక్షించి, అవసరమైన పరీక్షలు మళ్లీ చేయిస్తారు.',
            },
            {
              label: '32–40 వారాలు',
              title: 'గర్భ పరీక్షలు, ప్రసవం',
              text: 'సాధారణంగా రెండు వారాలకు ఒకసారి, 36 వారాల నుంచి వారానికి ఒకసారి, లేదా మీ డాక్టర్ సూచించినట్లు చెకప్‌లు ఉంటాయి. బిడ్డకు అవసరమైతే మా లెవల్ III NICU అదే భవనంలో ఉంది.',
            },
            {
              label: 'ప్రసవం తర్వాత',
              title: 'బిడ్డ పత్రాలు',
              text: 'ముందుగా జనన ధృవీకరణ పత్రం తీసుకోండి, తర్వాత బాల ఆధార్, బిడ్డ పాస్‌పోర్ట్ కోసం దరఖాస్తు చేయండి. తిరుగు ప్రయాణానికి ముందు దీనికి కొన్ని వారాల సమయం ఉంచుకోండి.',
              link: { href: 'baby-birth-certificate-aadhaar-passport-nri', label: 'జనన పత్రం, ఆధార్, పాస్‌పోర్ట్ మార్గదర్శి' },
            },
          ],
        },
        {
          heading: 'చివరి సురక్షిత ప్రయాణం: విమాన సంస్థల నియమాలు (15 అక్టోబర్ 2026 నాటికి)',
          body: [
            'UAE నుంచి దక్షిణ భారతానికి నడిచే రెండు విమాన సంస్థలు ప్రచురించిన నియమాలు ఇవి. నియమాలు మారుతుంటాయి, ఇతర సంస్థల నియమాలు వేరుగా ఉంటాయి, కాబట్టి టికెట్ బుక్ చేసే ముందు మీ విమాన సంస్థతో నిర్ధారించుకోండి.',
          ],
          table: {
            columns: ['విమాన సంస్థ', 'అవసరమైన సర్టిఫికెట్', 'ప్రయాణించగల చివరి వారం'],
            rows: [
              ['Emirates', '29వ వారం నుంచి: ప్రసవ తేదీ, ప్రయాణానికి ఫిట్, ఒక్క బిడ్డా లేక ఎక్కువా', '36వ వారం చివరి వరకు (కవలలైతే 32 వారాలు); ఆ తర్వాత Emirates వైద్య అనుమతితో మాత్రమే'],
              ['Air India Express', '28–35 వారాలు: ప్రయాణానికి 3 రోజుల లోపు తేదీతో ప్రసూతి వైద్యుల సర్టిఫికెట్', '36వ వారం నుంచి అనుమతించరు'],
            ],
          },
        },
        {
          heading: 'వెంట తీసుకురావాల్సినవి',
          list: [
            'తల్లిదండ్రులిద్దరి పాస్‌పోర్ట్‌లు, UAE రెసిడెన్స్ వీసాలు',
            'తల్లిదండ్రులిద్దరి ఆధార్ కార్డులు (జనన నమోదుకు అవసరం)',
            'మీ గర్భ కార్డు, అన్ని స్కాన్‌లు, రక్త పరీక్షల రిపోర్టులు',
            'ఇంతకు ముందు జరిగిన సిజేరియన్, ఆపరేషన్ లేదా క్లిష్టమైన ప్రసవం నోట్స్',
            'ప్రస్తుతం వాడుతున్న మందులు, అలర్జీల జాబితా',
            'ఫిట్-టు-ఫ్లై సర్టిఫికెట్, ఇన్సూరెన్స్ సంస్థ లిఖిత సమాధానం',
          ],
        },
      ],
      faqs: [
        {
          question: 'ప్రసవం కోసం దుబాయ్ నుంచి కడపకు ఎప్పుడు రావాలి?',
          answer:
            'ఒక్క బిడ్డ గర్భం అయితే, మీ ప్రసూతి వైద్యులు సురక్షితమని చెప్పిన తర్వాత, సుమారు 32 వారాల లోపు రావడం మంచిది. దీనివల్ల విమాన సంస్థల పరిమితులకు చాలా ముందే ప్రయాణం అవుతుంది, కడపలో చెకప్‌లకు సమయం ఉంటుంది.',
        },
        {
          question: 'గర్భంతో విమాన ప్రయాణానికి మెడికల్ సర్టిఫికెట్ అవసరమా?',
          answer:
            'సాధారణంగా 28 లేదా 29వ వారం నుంచి అవసరం. Emirates 29వ వారం నుంచి అడుగుతుంది; Air India Express 28–35 వారాల మధ్య ప్రయాణానికి 3 రోజుల లోపు తేదీతో సర్టిఫికెట్ అడుగుతుంది (15 అక్టోబర్ 2026 నాటికి).',
        },
        {
          question: 'నా UAE ఇన్సూరెన్స్ భారత్‌లో ప్రసవానికి వర్తిస్తుందా?',
          answer:
            'దీన్ని మీ ఇన్సూరెన్స్ సంస్థ మాత్రమే నిర్ధారించగలదు. UAE బయట ప్రసవం, బిడ్డ సంరక్షణ కవర్ అవుతాయా, క్లెయిమ్ ఎలా చెల్లిస్తారో 28 వారాల లోపే లిఖితపూర్వకంగా అడగండి.',
        },
        {
          question: 'ప్రయాణానికి ముందే డాక్టర్‌తో మాట్లాడవచ్చా?',
          answer:
            'అవును. మీ రిపోర్టులు చూసిన తర్వాత మా NRI డెస్క్ ప్రసూతి వైద్యురాలు డా. ఎస్. మౌనిక రెడ్డి గారితో ప్రయాణానికి ముందు వీడియో కన్సల్ట్ ఏర్పాటు చేస్తుంది.',
        },
      ],
    },
  },

  {
    slug: 'nicu-levels-of-care',
    published: true,
    updatedOn: '2026-10-22',
    reviewer: 'dr-sudarshan-reddy',
    reviewedOn: null,
    sources: [sources.aapLevels, sources.aapStandards],
    en: {
      title: 'NICU at Dhruva: what levels of care we provide',
      description:
        'A factual list of the newborn intensive care available in the Level III NICU at Dhruva Hospitals, Kadapa, led by neonatologist Dr. Sudarshan Reddy K.',
      answer:
        'Dhruva Hospitals has a Level III NICU, open 24 hours a day and led by neonatologist Dr. Sudarshan Reddy K (MBBS, DNB Paediatrics, IAP Fellowship in Neonatology). It cares for premature and critically ill newborns with continuous monitoring, HFNC and CPAP breathing support, ventilator support and phototherapy for jaundice.',
      sections: [
        {
          heading: 'What our NICU provides',
          list: [
            'Care for babies born before 37 weeks',
            'Continuous monitoring of oxygen level, heart rate and temperature',
            'High-flow nasal cannula (HFNC) oxygen',
            'CPAP breathing support',
            'Ventilator support for critically ill newborns',
            'Phototherapy for newborn jaundice',
            'A neonatal and paediatric emergency team on duty 24/7',
            'Delivery rooms, operation theatres and the NICU in the same building',
          ],
        },
        {
          heading: 'What the NICU levels mean',
          body: [
            'Hospitals describe newborn units by level. The level tells you how sick or premature a baby the unit is equipped to look after.',
          ],
          table: {
            columns: ['Level', 'What it covers'],
            rows: [
              ['Level I', 'Care for healthy newborns, including routine checks and feeding support'],
              ['Level II', 'Special care for babies who are moderately ill or born from about 32 weeks, including short-term breathing support'],
              ['Level III', 'Intensive care for very premature and critically ill babies, including continuous breathing support and ventilation'],
            ],
          },
        },
        {
          heading: 'Who looks after your baby',
          body: [
            'The NICU is led by Dr. Sudarshan Reddy K, Senior Consultant in Paediatrics and Neonatology. Dr. Sudarshan Reddy K trained in paediatrics at Apollo Hospitals, Mysore, and completed an IAP Fellowship in Neonatology at Ankura Hospital, Hyderabad.',
            'Visiting is restricted in the NICU to protect the babies. The team will explain when parents can be with their baby.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What level is the NICU at Dhruva Hospitals?',
          answer: 'Level III. It provides intensive care for premature and critically ill newborns, 24 hours a day.',
        },
        {
          question: 'Who runs the NICU at Dhruva Hospitals?',
          answer:
            'Neonatologist Dr. Sudarshan Reddy K (MBBS, DNB Paediatrics, IAP Fellowship in Neonatology – Ankura Hospital, Hyderabad).',
        },
        {
          question: 'Does the NICU provide breathing support?',
          answer: 'Yes. HFNC oxygen, CPAP and ventilator support are available.',
        },
        {
          question: 'Is the NICU in the same building as the delivery rooms?',
          answer: 'Yes. Deliveries and newborn intensive care happen under one roof, so a baby who needs the NICU does not need to be transferred.',
        },
      ],
    },
    te: {
      title: 'ధ్రువ NICU: మేము అందించే సంరక్షణ స్థాయిలు',
      description:
        'కడప ధ్రువ హాస్పిటల్స్ లెవల్ III NICU లో అందుబాటులో ఉన్న నవజాత శిశు సంరక్షణ వివరాలు. నవజాత శిశు నిపుణులు డా. సుదర్శన్ రెడ్డి కె గారి నేతృత్వంలో.',
      answer:
        'ధ్రువ హాస్పిటల్స్‌లో 24 గంటలూ పనిచేసే లెవల్ III NICU ఉంది. దీనికి నవజాత శిశు నిపుణులు డా. సుదర్శన్ రెడ్డి కె (MBBS, DNB పీడియాట్రిక్స్, IAP నియోనాటాలజీ ఫెలోషిప్) నేతృత్వం వహిస్తారు. నెలలు నిండకుండా పుట్టిన, తీవ్ర అనారోగ్యంతో ఉన్న శిశువులకు నిరంతర పర్యవేక్షణ, HFNC, CPAP శ్వాస సహాయం, వెంటిలేటర్ సహాయం, కామెర్లకు ఫోటోథెరపీ అందిస్తాం.',
      sections: [
        {
          heading: 'మా NICU లో అందించేవి',
          list: [
            '37 వారాల కంటే ముందు పుట్టిన శిశువుల సంరక్షణ',
            'ఆక్సిజన్ స్థాయి, గుండె వేగం, ఉష్ణోగ్రతల నిరంతర పర్యవేక్షణ',
            'హై-ఫ్లో నేసల్ కాన్యులా (HFNC) ఆక్సిజన్',
            'CPAP శ్వాస సహాయం',
            'తీవ్ర అనారోగ్య శిశువులకు వెంటిలేటర్ సహాయం',
            'నవజాత కామెర్లకు ఫోటోథెరపీ',
            '24/7 అందుబాటులో నవజాత, పిల్లల అత్యవసర బృందం',
            'ప్రసవ గదులు, ఆపరేషన్ థియేటర్లు, NICU అన్నీ ఒకే భవనంలో',
          ],
        },
        {
          heading: 'NICU స్థాయిల అర్థం',
          body: [
            'ఆసుపత్రులు నవజాత శిశు విభాగాలను స్థాయిల వారీగా వివరిస్తాయి. ఎంత అనారోగ్యంతో లేదా ఎంత ముందుగా పుట్టిన శిశువును చూసుకోగల సదుపాయాలు ఉన్నాయో స్థాయి తెలియజేస్తుంది.',
          ],
          table: {
            columns: ['స్థాయి', 'ఏమి ఉంటుంది'],
            rows: [
              ['లెవల్ I', 'ఆరోగ్యవంతమైన నవజాత శిశువుల సంరక్షణ, సాధారణ పరీక్షలు, పాలు పట్టడంలో సహాయం'],
              ['లెవల్ II', 'మధ్యస్థ అనారోగ్యం ఉన్న లేదా సుమారు 32 వారాల నుంచి పుట్టిన శిశువులకు ప్రత్యేక సంరక్షణ, కొద్దికాలం శ్వాస సహాయం'],
              ['లెవల్ III', 'చాలా ముందుగా పుట్టిన, తీవ్ర అనారోగ్య శిశువులకు ఇంటెన్సివ్ కేర్, నిరంతర శ్వాస సహాయం, వెంటిలేషన్'],
            ],
          },
        },
        {
          heading: 'మీ బిడ్డను ఎవరు చూసుకుంటారు',
          body: [
            'NICU కి పీడియాట్రిక్స్, నియోనాటాలజీ సీనియర్ కన్సల్టెంట్ డా. సుదర్శన్ రెడ్డి కె నేతృత్వం వహిస్తారు. వారు మైసూరు అపోలో హాస్పిటల్స్‌లో పీడియాట్రిక్స్ శిక్షణ, హైదరాబాద్ అంకుర హాస్పిటల్‌లో IAP నియోనాటాలజీ ఫెలోషిప్ పూర్తి చేశారు.',
            'శిశువుల రక్షణ కోసం NICU లో సందర్శనలు పరిమితంగా ఉంటాయి. తల్లిదండ్రులు బిడ్డ దగ్గర ఎప్పుడు ఉండవచ్చో బృందం వివరిస్తుంది.',
          ],
        },
      ],
      faqs: [
        {
          question: 'ధ్రువ హాస్పిటల్స్ NICU ఏ స్థాయిది?',
          answer: 'లెవల్ III. నెలలు నిండకుండా పుట్టిన, తీవ్ర అనారోగ్య శిశువులకు 24 గంటలూ ఇంటెన్సివ్ కేర్ అందిస్తుంది.',
        },
        {
          question: 'ధ్రువ హాస్పిటల్స్ NICU ను ఎవరు నడుపుతారు?',
          answer:
            'నవజాత శిశు నిపుణులు డా. సుదర్శన్ రెడ్డి కె (MBBS, DNB పీడియాట్రిక్స్, IAP నియోనాటాలజీ ఫెలోషిప్ – అంకుర హాస్పిటల్, హైదరాబాద్).',
        },
        {
          question: 'NICU లో శ్వాస సహాయం ఉందా?',
          answer: 'అవును. HFNC ఆక్సిజన్, CPAP, వెంటిలేటర్ సహాయం అందుబాటులో ఉన్నాయి.',
        },
        {
          question: 'NICU ప్రసవ గదులు ఉన్న భవనంలోనే ఉందా?',
          answer: 'అవును. ప్రసవం, నవజాత ఇంటెన్సివ్ కేర్ ఒకే చోట జరుగుతాయి, కాబట్టి NICU అవసరమైన బిడ్డను వేరే ఆసుపత్రికి తరలించాల్సిన అవసరం లేదు.',
        },
      ],
    },
  },

  {
    slug: 'baby-birth-certificate-aadhaar-passport-nri',
    published: true,
    updatedOn: '2026-10-15',
    reviewer: 'dr-sudarshan-reddy',
    reviewedOn: null,
    sources: [sources.crs, sources.uidai, sources.passport, sources.icp],
    en: {
      title: 'Birth certificate, Aadhaar and passport for a baby born in Kadapa to NRI parents',
      seoTitle: 'Baby’s Birth Certificate, Aadhaar & Passport for NRIs',
      description:
        'The order to get a newborn’s birth certificate, Baal Aadhaar and Indian passport after a birth at Dhruva Hospitals, Kadapa, for parents who live abroad.',
      answer:
        'The hospital reports every birth to the local Registrar of Births, and the birth must be registered within 21 days. Get the birth certificate first, then use it to apply for the baby’s Baal Aadhaar and Indian passport. Keep both parents’ passports and Aadhaar numbers ready, make sure names match your passports exactly, and allow a few weeks before your return flight.',
      sections: [
        {
          heading: 'Step by step',
          steps: [
            {
              label: 'Before discharge',
              title: 'Give us the details for registration',
              text: 'Share both parents’ names exactly as in your passports, your Aadhaar numbers and your address. Check the spelling on the form: it must match the passports used later. If you have not chosen a name, the baby’s name can be added to the record later; adding it within 12 months of birth is simplest.',
            },
            {
              label: 'Within 21 days',
              title: 'Birth certificate',
              text: 'The hospital reports the birth to the Registrar of Births, who issues the certificate. Since October 2023, the birth certificate is the single document used to prove date of birth for Aadhaar, passport and school admission.',
            },
            {
              label: 'Next',
              title: 'Baal Aadhaar',
              text: 'Visit an Aadhaar enrolment centre with the birth certificate and one parent’s Aadhaar. Children under 5 get a Baal Aadhaar with a photo only; fingerprints and iris are added at ages 5 and 15.',
            },
            {
              label: 'Next',
              title: 'Indian passport',
              text: 'Apply on Passport Seva and book a Passport Seva Kendra appointment. Carry the birth certificate, both parents’ passports and Annexure D (a declaration signed by both parents). If one parent is abroad, check the Passport Seva rules for consent before you apply.',
            },
            {
              label: 'Before you fly',
              title: 'Your baby’s UAE visa',
              text: 'Once the baby has a passport, the parent who sponsors the family applies for the baby’s UAE entry permit or residence visa. Check the current rules with ICP or GDRFA Dubai.',
            },
          ],
        },
        {
          heading: 'If a parent is not an Indian citizen',
          body: [
            'A baby’s citizenship, and so its documents, depends on the parents’ citizenship. If either parent holds a foreign passport, check with the passport office or the Indian mission before you travel; the baby may need a foreign passport and an OCI card instead.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Who registers a birth that happens at Dhruva Hospitals?',
          answer:
            'The hospital reports the birth to the local Registrar of Births. Parents give the details for the record before discharge.',
        },
        {
          question: 'How soon must a birth be registered in India?',
          answer: 'Within 21 days of the birth. Later registration is possible but needs extra steps.',
        },
        {
          question: 'Which documents does a newborn need for an Indian passport?',
          answer:
            'The birth certificate, both parents’ passports and Annexure D signed by both parents. Apply through Passport Seva (checked 15 October 2026).',
        },
        {
          question: 'Can a newborn get Aadhaar?',
          answer:
            'Yes. Children under 5 get Baal Aadhaar using the birth certificate and a parent’s Aadhaar. Only a photo is taken.',
        },
      ],
    },
    te: {
      title: 'NRI తల్లిదండ్రులకు కడపలో పుట్టిన బిడ్డకు జనన పత్రం, ఆధార్, పాస్‌పోర్ట్',
      seoTitle: 'NRI శిశువుకు జనన పత్రం, ఆధార్, పాస్‌పోర్ట్',
      description:
        'విదేశాల్లో ఉండే తల్లిదండ్రులకు కడప ధ్రువ హాస్పిటల్స్‌లో పుట్టిన బిడ్డకు జనన ధృవీకరణ పత్రం, బాల ఆధార్, భారత పాస్‌పోర్ట్ పొందే క్రమం.',
      answer:
        'ప్రతి జననాన్ని ఆసుపత్రి స్థానిక జనన రిజిస్ట్రార్‌కు తెలియజేస్తుంది, జననం జరిగిన 21 రోజుల లోపు నమోదు కావాలి. ముందుగా జనన పత్రం తీసుకోండి, దానితో బిడ్డ బాల ఆధార్, భారత పాస్‌పోర్ట్‌కు దరఖాస్తు చేయండి. తల్లిదండ్రులిద్దరి పాస్‌పోర్ట్‌లు, ఆధార్ నంబర్లు సిద్ధంగా ఉంచుకోండి, పేర్లు పాస్‌పోర్ట్‌లో ఉన్నట్లే ఉన్నాయో చూసుకోండి, తిరుగు ప్రయాణానికి ముందు కొన్ని వారాల సమయం ఉంచుకోండి.',
      sections: [
        {
          heading: 'దశల వారీగా',
          steps: [
            {
              label: 'డిశ్చార్జ్‌కు ముందు',
              title: 'నమోదుకు వివరాలు ఇవ్వండి',
              text: 'తల్లిదండ్రులిద్దరి పేర్లు పాస్‌పోర్ట్‌లో ఉన్నట్లుగా, ఆధార్ నంబర్లు, చిరునామా ఇవ్వండి. ఫారంలో స్పెల్లింగ్ సరిచూసుకోండి: తర్వాత వాడే పాస్‌పోర్ట్‌లతో సరిపోలాలి. బిడ్డ పేరు ఇంకా నిర్ణయించకపోతే తర్వాత చేర్చవచ్చు; పుట్టిన 12 నెలల లోపు చేర్చడం సులభం.',
            },
            {
              label: '21 రోజుల లోపు',
              title: 'జనన ధృవీకరణ పత్రం',
              text: 'ఆసుపత్రి జననాన్ని జనన రిజిస్ట్రార్‌కు తెలియజేస్తుంది, వారు పత్రం జారీ చేస్తారు. అక్టోబర్ 2023 నుంచి ఆధార్, పాస్‌పోర్ట్, పాఠశాల ప్రవేశాలకు పుట్టిన తేదీ రుజువుగా జనన పత్రం ఒక్కటే సరిపోతుంది.',
            },
            {
              label: 'తర్వాత',
              title: 'బాల ఆధార్',
              text: 'జనన పత్రం, తల్లిదండ్రుల్లో ఒకరి ఆధార్‌తో ఆధార్ నమోదు కేంద్రానికి వెళ్లండి. 5 ఏళ్ల లోపు పిల్లలకు ఫోటో మాత్రమే తీసుకుని బాల ఆధార్ ఇస్తారు; వేలిముద్రలు, కనుపాప 5, 15 ఏళ్ల వయసులో చేరుస్తారు.',
            },
            {
              label: 'తర్వాత',
              title: 'భారత పాస్‌పోర్ట్',
              text: 'Passport Seva లో దరఖాస్తు చేసి, పాస్‌పోర్ట్ సేవా కేంద్రంలో అపాయింట్‌మెంట్ తీసుకోండి. జనన పత్రం, తల్లిదండ్రులిద్దరి పాస్‌పోర్ట్‌లు, ఇద్దరూ సంతకం చేసిన Annexure D తీసుకెళ్లండి. తల్లిదండ్రుల్లో ఒకరు విదేశాల్లో ఉంటే, దరఖాస్తుకు ముందే అనుమతి నియమాలను Passport Seva లో చూసుకోండి.',
            },
            {
              label: 'ప్రయాణానికి ముందు',
              title: 'బిడ్డ UAE వీసా',
              text: 'బిడ్డకు పాస్‌పోర్ట్ వచ్చిన తర్వాత, కుటుంబానికి స్పాన్సర్‌గా ఉన్న తల్లి లేదా తండ్రి బిడ్డ UAE ఎంట్రీ పర్మిట్ లేదా రెసిడెన్స్ వీసాకు దరఖాస్తు చేయాలి. ప్రస్తుత నియమాలను ICP లేదా GDRFA దుబాయ్‌తో నిర్ధారించుకోండి.',
            },
          ],
        },
        {
          heading: 'తల్లిదండ్రుల్లో ఒకరు భారత పౌరులు కాకపోతే',
          body: [
            'బిడ్డ పౌరసత్వం, అందువల్ల బిడ్డ పత్రాలు, తల్లిదండ్రుల పౌరసత్వంపై ఆధారపడతాయి. తల్లిదండ్రుల్లో ఎవరికైనా విదేశీ పాస్‌పోర్ట్ ఉంటే, ప్రయాణానికి ముందే పాస్‌పోర్ట్ కార్యాలయం లేదా భారత రాయబార కార్యాలయంతో నిర్ధారించుకోండి; బిడ్డకు విదేశీ పాస్‌పోర్ట్, OCI కార్డు అవసరం కావచ్చు.',
          ],
        },
      ],
      faqs: [
        {
          question: 'ధ్రువ హాస్పిటల్స్‌లో జరిగిన జననాన్ని ఎవరు నమోదు చేస్తారు?',
          answer: 'ఆసుపత్రి జననాన్ని స్థానిక జనన రిజిస్ట్రార్‌కు తెలియజేస్తుంది. డిశ్చార్జ్‌కు ముందు తల్లిదండ్రులు వివరాలు ఇస్తారు.',
        },
        {
          question: 'భారత్‌లో జననాన్ని ఎంత సమయంలో నమోదు చేయాలి?',
          answer: 'జననం జరిగిన 21 రోజుల లోపు. ఆలస్యంగా కూడా నమోదు చేయవచ్చు కానీ అదనపు ప్రక్రియలు ఉంటాయి.',
        },
        {
          question: 'నవజాత శిశువు భారత పాస్‌పోర్ట్‌కు ఏ పత్రాలు కావాలి?',
          answer:
            'జనన పత్రం, తల్లిదండ్రులిద్దరి పాస్‌పోర్ట్‌లు, ఇద్దరూ సంతకం చేసిన Annexure D. Passport Seva ద్వారా దరఖాస్తు చేయాలి (15 అక్టోబర్ 2026 నాటికి).',
        },
        {
          question: 'నవజాత శిశువుకు ఆధార్ వస్తుందా?',
          answer: 'అవును. 5 ఏళ్ల లోపు పిల్లలకు జనన పత్రం, తల్లిదండ్రుల ఆధార్‌తో బాల ఆధార్ ఇస్తారు. ఫోటో మాత్రమే తీసుకుంటారు.',
        },
      ],
    },
  },

  {
    slug: 'gynaecology-appointment-kadapa',
    published: true,
    updatedOn: '2026-10-17',
    reviewer: 'dr-mounika-reddy',
    reviewedOn: null,
    sources: [],
    en: {
      title: 'Seeing a gynaecologist in Kadapa: how to book, what to bring and what to ask',
      seoTitle: 'Seeing a Gynaecologist in Kadapa: Booking & Checklist',
      description:
        'How to book a gynaecologist at Dhruva Hospitals, Kadapa, what to bring to the consultation and which questions to ask, with OPD hours and phone numbers.',
      answer: `To see a gynaecologist at Dhruva Hospitals in Kadapa, call ${site.phones.main.display} or ${site.phones.mobile.display}, or WhatsApp ${site.phones.main.display}; the OPD runs ${site.hours.opd}. Our gynaecologist is Dr. S Mounika Reddy (MBBS, MS OBG, FRM, FMAS, FIRM). Bring the date your last period started, your previous reports and a list of your medicines, and write your questions down before you come.`,
      sections: [
        {
          heading: 'Step by step',
          steps: [
            {
              label: 'Before you call',
              title: 'Note your symptoms and dates',
              text: 'Write down what is bothering you, when it started and the date your last period began. If you might be pregnant, take a home pregnancy test or mention it when you book.',
            },
            {
              label: 'Booking',
              title: 'Call or WhatsApp',
              text: `Call ${site.phones.main.display} or ${site.phones.mobile.display}, or WhatsApp ${site.phones.main.display}. Say whether it is a new problem, a follow-up or a pregnancy visit. OPD hours are ${site.hours.opd}.`,
            },
            {
              label: 'On the day',
              title: 'Bring your records',
              text: 'Bring an ID and every relevant report: scans, blood tests, Pap smear results, previous prescriptions and notes from any surgery or delivery.',
            },
            {
              label: 'In the consultation',
              title: 'Ask your questions',
              text: 'The doctor will ask about your periods, pregnancies and medical history, and may examine you or suggest tests such as an ultrasound. The questions below can help.',
            },
            {
              label: 'Afterwards',
              title: 'Follow-up and results',
              text: 'Keep your prescription and test reports together, and come back for follow-up visits as advised.',
            },
          ],
        },
        {
          heading: 'What to bring',
          list: [
            'An ID',
            'The date your last period started',
            'Previous reports: scans, blood and hormone tests, Pap smear results',
            'Prescriptions and the medicines you take now',
            'Notes from any earlier surgery, delivery or fertility treatment',
          ],
        },
        {
          heading: 'Questions worth asking',
          list: [
            'What could be causing my symptoms?',
            'Which tests do I need, and why?',
            'What are my treatment options, including ones that don’t need surgery?',
            'If surgery is advised, can it be done laparoscopically, and how long is the recovery?',
            'Will this affect my periods or my plans for pregnancy?',
            'When should I come back, and which symptoms mean I should come sooner?',
          ],
        },
        {
          heading: 'Gynaecology at Dhruva Hospitals',
          body: [
            'Care for period problems, PCOD/PCOS, fibroids and ovarian cysts, hysteroscopy, open and laparoscopic hysterectomy, cystectomy, family planning, adolescent gynaecology and screening for women’s cancers.',
          ],
          links: [
            { href: '/services/gynaecology', label: 'Gynaecology care in Kadapa' },
            { href: '/doctors/dr-mounika-reddy', label: 'Dr. S Mounika Reddy' },
          ],
        },
      ],
      faqs: [
        {
          question: 'How do I book a gynaecologist in Kadapa at Dhruva Hospitals?',
          answer: `Call ${site.phones.main.display} or ${site.phones.mobile.display}, or WhatsApp ${site.phones.main.display}. Outpatient (OPD) hours are ${site.hours.opd}.`,
        },
        {
          question: 'Who is the gynaecologist at Dhruva Hospitals?',
          answer:
            'Dr. S Mounika Reddy (MBBS, MS Obstetrics & Gynaecology, FRM, FMAS, FIRM), Senior Consultant in Obstetrics, Gynaecology and Infertility.',
        },
        {
          question: 'Can I book a gynaecology appointment from Dubai or Kuwait?',
          answer: `Yes. Call or WhatsApp the same numbers from any country. The OPD runs ${site.hours.opd} India time, which is 7:30 AM – 6:30 PM in the UAE and 6:30 AM – 5:30 PM in Kuwait.`,
        },
      ],
    },
    te: {
      title: 'కడపలో గైనకాలజిస్ట్‌ను కలవడం: అపాయింట్‌మెంట్, తీసుకురావాల్సినవి, అడగాల్సిన ప్రశ్నలు',
      seoTitle: 'కడపలో గైనకాలజిస్ట్: బుకింగ్, చెక్‌లిస్ట్',
      description:
        'కడప ధ్రువ హాస్పిటల్స్‌లో గైనకాలజిస్ట్ అపాయింట్‌మెంట్ ఎలా బుక్ చేయాలి, కన్సల్టేషన్‌కు ఏమి తీసుకురావాలి, ఏమి అడగాలి: OPD సమయాలు, ఫోన్ నంబర్లతో.',
      answer: `కడప ధ్రువ హాస్పిటల్స్‌లో గైనకాలజిస్ట్‌ను కలవడానికి ${site.phones.main.display} లేదా ${site.phones.mobile.display} కి కాల్ చేయండి, లేదా ${site.phones.main.display} కి WhatsApp చేయండి; OPD సమయం ${site.hours.opd}. మా గైనకాలజిస్ట్ డా. ఎస్. మౌనిక రెడ్డి (MBBS, MS OBG, FRM, FMAS, FIRM). మీ చివరి పీరియడ్ మొదలైన తేదీ, పాత రిపోర్టులు, వాడుతున్న మందుల జాబితా తీసుకురండి; మీ ప్రశ్నలను ముందే రాసుకోండి.`,
      sections: [
        {
          heading: 'దశల వారీగా',
          steps: [
            {
              label: 'కాల్ చేసే ముందు',
              title: 'లక్షణాలు, తేదీలు రాసుకోండి',
              text: 'మీకు ఉన్న సమస్య, అది ఎప్పుడు మొదలైంది, చివరి పీరియడ్ ఏ తేదీన మొదలైందో రాసుకోండి. గర్భం వచ్చి ఉండవచ్చనిపిస్తే ఇంట్లో ప్రెగ్నెన్సీ టెస్ట్ చేసుకోండి, లేదా బుక్ చేసేటప్పుడు చెప్పండి.',
            },
            {
              label: 'బుకింగ్',
              title: 'కాల్ లేదా WhatsApp చేయండి',
              text: `${site.phones.main.display} లేదా ${site.phones.mobile.display} కి కాల్ చేయండి, లేదా ${site.phones.main.display} కి WhatsApp చేయండి. కొత్త సమస్య, ఫాలో-అప్ లేదా గర్భ సంబంధిత చెకప్‌లో ఏదో చెప్పండి. OPD సమయం ${site.hours.opd}.`,
            },
            {
              label: 'అపాయింట్‌మెంట్ రోజు',
              title: 'రికార్డులు తీసుకురండి',
              text: 'గుర్తింపు కార్డు, సంబంధిత రిపోర్టులన్నీ తీసుకురండి: స్కాన్‌లు, రక్త పరీక్షలు, పాప్ స్మియర్ ఫలితాలు, పాత ప్రిస్క్రిప్షన్లు, ఏదైనా ఆపరేషన్ లేదా ప్రసవం నోట్స్.',
            },
            {
              label: 'కన్సల్టేషన్‌లో',
              title: 'మీ ప్రశ్నలు అడగండి',
              text: 'డాక్టర్ మీ పీరియడ్స్, గర్భాలు, ఆరోగ్య చరిత్ర గురించి అడుగుతారు; పరీక్షించవచ్చు లేదా అల్ట్రాసౌండ్ వంటి పరీక్షలు సూచించవచ్చు. కింద ఉన్న ప్రశ్నలు ఉపయోగపడతాయి.',
            },
            {
              label: 'తర్వాత',
              title: 'ఫాలో-అప్, ఫలితాలు',
              text: 'ప్రిస్క్రిప్షన్, పరీక్ష రిపోర్టులను ఒకే చోట ఉంచుకోండి; డాక్టర్ చెప్పినప్పుడు ఫాలో-అప్‌కు రండి.',
            },
          ],
        },
        {
          heading: 'వెంట తీసుకురావాల్సినవి',
          list: [
            'గుర్తింపు కార్డు',
            'చివరి పీరియడ్ మొదలైన తేదీ',
            'పాత రిపోర్టులు: స్కాన్‌లు, రక్త, హార్మోన్ పరీక్షలు, పాప్ స్మియర్ ఫలితాలు',
            'ప్రిస్క్రిప్షన్లు, ప్రస్తుతం వాడుతున్న మందులు',
            'ఇంతకు ముందు జరిగిన ఆపరేషన్, ప్రసవం లేదా సంతాన చికిత్స నోట్స్',
          ],
        },
        {
          heading: 'అడగదగిన ప్రశ్నలు',
          list: [
            'నా లక్షణాలకు కారణం ఏమై ఉండవచ్చు?',
            'నాకు ఏ పరీక్షలు అవసరం, ఎందుకు?',
            'ఆపరేషన్ అవసరం లేని వాటితో సహా నాకు ఉన్న చికిత్స మార్గాలు ఏమిటి?',
            'ఆపరేషన్ అవసరమైతే లాపరోస్కోపీతో చేయవచ్చా, కోలుకోవడానికి ఎంత సమయం పడుతుంది?',
            'ఇది నా పీరియడ్స్‌పై లేదా గర్భం ప్లాన్‌పై ప్రభావం చూపుతుందా?',
            'మళ్లీ ఎప్పుడు రావాలి, ఏ లక్షణాలు కనిపిస్తే ముందే రావాలి?',
          ],
        },
        {
          heading: 'ధ్రువ హాస్పిటల్స్‌లో గైనకాలజీ',
          body: [
            'పీరియడ్స్ సమస్యలు, PCOD/PCOS, ఫైబ్రాయిడ్స్, అండాశయ సిస్ట్‌లకు చికిత్స, హిస్టెరోస్కోపీ, ఓపెన్ మరియు లాపరోస్కోపిక్ హిస్టెరెక్టమీ, సిస్టెక్టమీ, కుటుంబ నియంత్రణ, కౌమార బాలికల గైనకాలజీ, మహిళల క్యాన్సర్ స్క్రీనింగ్.',
          ],
          links: [
            { href: '/services/gynaecology', label: 'కడపలో గైనకాలజీ సేవలు (English)' },
            { href: '/doctors/dr-mounika-reddy', label: 'డా. ఎస్. మౌనిక రెడ్డి (English)' },
          ],
        },
      ],
      faqs: [
        {
          question: 'కడప ధ్రువ హాస్పిటల్స్‌లో గైనకాలజిస్ట్ అపాయింట్‌మెంట్ ఎలా బుక్ చేయాలి?',
          answer: `${site.phones.main.display} లేదా ${site.phones.mobile.display} కి కాల్ చేయండి, లేదా ${site.phones.main.display} కి WhatsApp చేయండి. OPD సమయం ${site.hours.opd}.`,
        },
        {
          question: 'ధ్రువ హాస్పిటల్స్‌లో గైనకాలజిస్ట్ ఎవరు?',
          answer:
            'డా. ఎస్. మౌనిక రెడ్డి (MBBS, MS ప్రసూతి & గైనకాలజీ, FRM, FMAS, FIRM), ప్రసూతి, గైనకాలజీ, సంతాన సాఫల్య విభాగం సీనియర్ కన్సల్టెంట్.',
        },
        {
          question: 'దుబాయ్ లేదా కువైట్ నుంచి గైనకాలజీ అపాయింట్‌మెంట్ బుక్ చేయవచ్చా?',
          answer: `అవును. ఏ దేశం నుంచైనా ఇవే నంబర్లకు కాల్ లేదా WhatsApp చేయవచ్చు. OPD భారత కాలమానం ప్రకారం ${site.hours.opd}; అంటే UAE లో ఉదయం 7:30 – సాయంత్రం 6:30, కువైట్‌లో ఉదయం 6:30 – సాయంత్రం 5:30.`,
        },
      ],
    },
  },

  {
    slug: 'paediatrician-appointment-kadapa',
    published: true,
    updatedOn: '2026-10-17',
    reviewer: 'dr-sudarshan-reddy',
    reviewedOn: null,
    sources: [sources.whoImci],
    en: {
      title: 'Taking your child to a paediatrician in Kadapa: how to book, what to bring and when to go to emergency',
      seoTitle: 'Paediatrician in Kadapa: Booking & Emergency Signs',
      description:
        'How to book a paediatrician at Dhruva Hospitals, Kadapa, what to bring for your child’s visit, questions to ask, and the warning signs that need the 24/7 emergency team.',
      answer: `To book a paediatrician at Dhruva Hospitals in Kadapa, call ${site.phones.main.display} or ${site.phones.mobile.display}, or WhatsApp ${site.phones.main.display} (OPD ${site.hours.opd}). Our paediatrician is Dr. Sudarshan Reddy K (MBBS, DNB Paediatrics, IAP Fellowship in Neonatology). Bring your child’s vaccination card and previous reports. If your child has trouble breathing, has a fit, cannot drink or feed, vomits everything or is unusually drowsy, don’t wait for an appointment: call ${site.phones.emergency.display} or come to the emergency department, open 24/7.`,
      sections: [
        {
          heading: 'When to go straight to emergency',
          body: [
            `Don’t wait for an appointment if your child shows any of these signs. Call ${site.phones.emergency.display} or come to our emergency department, which is open 24 hours a day. Most are the World Health Organization’s “general danger signs” for sick children.`,
          ],
          list: [
            'Has trouble breathing, or is breathing very fast',
            'Has had a fit (convulsion), or is having one now',
            'Cannot drink or breastfeed',
            'Vomits everything, including water and medicines',
            'Is unusually sleepy, floppy or hard to wake',
            'Is a baby under 2 months with a fever, a cold body or poor feeding',
          ],
        },
        {
          heading: 'Booking a visit, step by step',
          steps: [
            {
              label: 'Before you call',
              title: 'Note what you have seen',
              text: 'Write down the symptoms, when they started, any temperature readings with times, and how well your child is eating, drinking and passing urine.',
            },
            {
              label: 'Booking',
              title: 'Call or WhatsApp',
              text: `Call ${site.phones.main.display} or ${site.phones.mobile.display}, or WhatsApp ${site.phones.main.display}. OPD hours are ${site.hours.opd}.`,
            },
            {
              label: 'On the day',
              title: 'Bring the records',
              text: 'Bring the vaccination card, previous prescriptions and reports, the medicines your child is taking, and for a young baby the discharge summary from birth.',
            },
            {
              label: 'In the consultation',
              title: 'What happens',
              text: 'The paediatrician checks your child’s weight and height, asks about the symptoms, feeding, development and vaccinations, and examines your child.',
            },
            {
              label: 'Vaccinations',
              title: 'Keep the schedule',
              text: 'Vaccines are given as per the IAP (Indian Academy of Paediatrics) schedule. Ask when the next one is due and note it on the card.',
            },
          ],
        },
        {
          heading: 'What to bring',
          list: [
            'Your child’s vaccination card',
            'Previous prescriptions and reports',
            'The medicines your child takes, with doses',
            'For a young baby, the discharge summary from birth',
            'Notes on symptoms, temperature readings and feeding',
          ],
        },
        {
          heading: 'Questions worth asking',
          list: [
            'What is the likely cause, and how should I care for my child at home?',
            'How much medicine should I give, how often and for how long?',
            'Which signs mean I should come back or go to emergency?',
            'Is my child’s growth and development on track?',
            'Which vaccine is due next, and when?',
          ],
        },
        {
          heading: 'Child care at Dhruva Hospitals',
          body: [
            'Check-ups and illness visits, vaccinations, growth and development monitoring, a paediatric ward, ICU support and a 24/7 neonatal and paediatric emergency team, with a Level III NICU for newborns in the same building.',
          ],
          links: [
            { href: '/services/paediatrics', label: 'Paediatrician & child care in Kadapa' },
            { href: '/services/neonatal', label: 'Newborn care & NICU' },
            { href: '/doctors/dr-sudarshan-reddy', label: 'Dr. Sudarshan Reddy K' },
          ],
        },
      ],
      faqs: [
        {
          question: 'How do I book a paediatrician appointment in Kadapa?',
          answer: `Call ${site.phones.main.display} or ${site.phones.mobile.display}, or WhatsApp ${site.phones.main.display}. Outpatient (OPD) hours at Dhruva Hospitals are ${site.hours.opd}.`,
        },
        {
          question: 'Who is the paediatrician at Dhruva Hospitals?',
          answer:
            'Dr. Sudarshan Reddy K (MBBS, DNB Paediatrics, IAP Fellowship in Neonatology), Senior Consultant in Paediatrics and Neonatology.',
        },
        {
          question: 'When should I take my child to emergency instead of waiting for an appointment?',
          answer: `If your child has trouble breathing, has a fit, cannot drink or breastfeed, vomits everything or is unusually sleepy or hard to wake. Call ${site.phones.emergency.display}; the emergency department is open 24/7.`,
        },
        {
          question: 'Do you give children’s vaccinations?',
          answer: 'Yes, following the IAP immunisation schedule. Bring the vaccination card to every visit.',
        },
      ],
    },
    te: {
      title: 'కడపలో పిల్లల డాక్టర్ (పీడియాట్రిషియన్) వద్దకు: అపాయింట్‌మెంట్, తీసుకురావాల్సినవి, ఎప్పుడు ఎమర్జెన్సీకి వెళ్లాలి',
      seoTitle: 'కడపలో పిల్లల డాక్టర్: బుకింగ్, ప్రమాద సంకేతాలు',
      description:
        'కడప ధ్రువ హాస్పిటల్స్‌లో పిల్లల డాక్టర్ అపాయింట్‌మెంట్ ఎలా బుక్ చేయాలి, ఏమి తీసుకురావాలి, ఏమి అడగాలి, 24/7 ఎమర్జెన్సీ అవసరమయ్యే ప్రమాద సంకేతాలు.',
      answer: `కడప ధ్రువ హాస్పిటల్స్‌లో పిల్లల డాక్టర్‌ను కలవడానికి ${site.phones.main.display} లేదా ${site.phones.mobile.display} కి కాల్ చేయండి, లేదా ${site.phones.main.display} కి WhatsApp చేయండి (OPD ${site.hours.opd}). మా పీడియాట్రిషియన్ డా. సుదర్శన్ రెడ్డి కె (MBBS, DNB పీడియాట్రిక్స్, IAP నియోనాటాలజీ ఫెలోషిప్). బిడ్డ వ్యాక్సినేషన్ కార్డు, పాత రిపోర్టులు తీసుకురండి. బిడ్డకు శ్వాస తీసుకోవడం కష్టంగా ఉంటే, ఫిట్స్ వస్తే, తాగలేకపోతే లేదా పాలు తాగలేకపోతే, తిన్నదంతా వాంతి చేసుకుంటే లేదా అసాధారణంగా మగతగా ఉంటే అపాయింట్‌మెంట్ కోసం ఆగకండి: ${site.phones.emergency.display} కి కాల్ చేయండి లేదా 24/7 తెరిచి ఉండే ఎమర్జెన్సీ విభాగానికి నేరుగా రండి.`,
      sections: [
        {
          heading: 'ఎప్పుడు నేరుగా ఎమర్జెన్సీకి వెళ్లాలి',
          body: [
            `బిడ్డలో ఈ సంకేతాలలో ఏది కనిపించినా అపాయింట్‌మెంట్ కోసం ఆగకండి. ${site.phones.emergency.display} కి కాల్ చేయండి లేదా 24 గంటలూ తెరిచి ఉండే మా ఎమర్జెన్సీ విభాగానికి రండి. వీటిలో చాలా వరకు ప్రపంచ ఆరోగ్య సంస్థ (WHO) పేర్కొన్న పిల్లల “సాధారణ ప్రమాద సంకేతాలు”.`,
          ],
          list: [
            'శ్వాస తీసుకోవడం కష్టంగా ఉండటం, లేదా చాలా వేగంగా శ్వాస తీసుకోవడం',
            'ఫిట్స్ (మూర్ఛ) రావడం, లేదా ఇప్పుడే వస్తూ ఉండటం',
            'ఏమీ తాగలేకపోవడం లేదా తల్లిపాలు తాగలేకపోవడం',
            'నీళ్లు, మందులతో సహా తిన్నదంతా వాంతి చేసుకోవడం',
            'అసాధారణంగా మగతగా, నీరసంగా ఉండటం లేదా లేపడం కష్టంగా ఉండటం',
            '2 నెలల లోపు శిశువుకు జ్వరం, శరీరం చల్లబడటం లేదా సరిగా పాలు తాగకపోవడం',
          ],
        },
        {
          heading: 'అపాయింట్‌మెంట్ దశల వారీగా',
          steps: [
            {
              label: 'కాల్ చేసే ముందు',
              title: 'మీరు గమనించినవి రాసుకోండి',
              text: 'లక్షణాలు, అవి ఎప్పుడు మొదలయ్యాయి, జ్వరం రీడింగ్‌లు సమయాలతో, బిడ్డ ఎంత తింటోంది, తాగుతోంది, మూత్రం ఎంత పోస్తోంది అనేవి రాసుకోండి.',
            },
            {
              label: 'బుకింగ్',
              title: 'కాల్ లేదా WhatsApp చేయండి',
              text: `${site.phones.main.display} లేదా ${site.phones.mobile.display} కి కాల్ చేయండి, లేదా ${site.phones.main.display} కి WhatsApp చేయండి. OPD సమయం ${site.hours.opd}.`,
            },
            {
              label: 'అపాయింట్‌మెంట్ రోజు',
              title: 'రికార్డులు తీసుకురండి',
              text: 'వ్యాక్సినేషన్ కార్డు, పాత ప్రిస్క్రిప్షన్లు, రిపోర్టులు, బిడ్డ వాడుతున్న మందులు, చిన్న శిశువు అయితే పుట్టినప్పటి డిశ్చార్జ్ సమ్మరీ తీసుకురండి.',
            },
            {
              label: 'కన్సల్టేషన్‌లో',
              title: 'ఏమి జరుగుతుంది',
              text: 'డాక్టర్ బిడ్డ బరువు, ఎత్తు చూస్తారు; లక్షణాలు, ఆహారం, ఎదుగుదల, టీకాల గురించి అడిగి పరీక్షిస్తారు.',
            },
            {
              label: 'టీకాలు',
              title: 'షెడ్యూల్ పాటించండి',
              text: 'టీకాలు IAP (ఇండియన్ అకాడమీ ఆఫ్ పీడియాట్రిక్స్) షెడ్యూల్ ప్రకారం ఇస్తాం. తదుపరి టీకా ఎప్పుడో అడిగి కార్డుపై రాసుకోండి.',
            },
          ],
        },
        {
          heading: 'వెంట తీసుకురావాల్సినవి',
          list: [
            'బిడ్డ వ్యాక్సినేషన్ కార్డు',
            'పాత ప్రిస్క్రిప్షన్లు, రిపోర్టులు',
            'బిడ్డ వాడుతున్న మందులు, మోతాదులతో',
            'చిన్న శిశువు అయితే పుట్టినప్పటి డిశ్చార్జ్ సమ్మరీ',
            'లక్షణాలు, జ్వరం రీడింగ్‌లు, ఆహారం గురించి నోట్స్',
          ],
        },
        {
          heading: 'అడగదగిన ప్రశ్నలు',
          list: [
            'దీనికి కారణం ఏమై ఉండవచ్చు, ఇంట్లో బిడ్డను ఎలా చూసుకోవాలి?',
            'మందు ఎంత మోతాదులో, రోజుకు ఎన్నిసార్లు, ఎన్ని రోజులు ఇవ్వాలి?',
            'ఏ సంకేతాలు కనిపిస్తే మళ్లీ రావాలి లేదా ఎమర్జెన్సీకి వెళ్లాలి?',
            'బిడ్డ ఎదుగుదల, అభివృద్ధి వయసుకు తగినట్లు ఉందా?',
            'తదుపరి టీకా ఏది, ఎప్పుడు?',
          ],
        },
        {
          heading: 'ధ్రువ హాస్పిటల్స్‌లో పిల్లల సంరక్షణ',
          body: [
            'చెకప్‌లు, అనారోగ్య సందర్శనలు, టీకాలు, ఎదుగుదల పర్యవేక్షణ, పిల్లల వార్డు, ICU సహాయం, 24/7 నవజాత & పిల్లల ఎమర్జెన్సీ బృందం; నవజాత శిశువులకు అదే భవనంలో లెవల్ III NICU.',
          ],
          links: [
            { href: '/services/paediatrics', label: 'కడపలో పిల్లల వైద్య సేవలు (English)' },
            { href: '/services/neonatal', label: 'నవజాత శిశు సంరక్షణ & NICU (English)' },
            { href: '/doctors/dr-sudarshan-reddy', label: 'డా. సుదర్శన్ రెడ్డి కె (English)' },
          ],
        },
      ],
      faqs: [
        {
          question: 'కడపలో పిల్లల డాక్టర్ అపాయింట్‌మెంట్ ఎలా బుక్ చేయాలి?',
          answer: `${site.phones.main.display} లేదా ${site.phones.mobile.display} కి కాల్ చేయండి, లేదా ${site.phones.main.display} కి WhatsApp చేయండి. ధ్రువ హాస్పిటల్స్‌లో OPD సమయం ${site.hours.opd}.`,
        },
        {
          question: 'ధ్రువ హాస్పిటల్స్‌లో పిల్లల డాక్టర్ ఎవరు?',
          answer: 'డా. సుదర్శన్ రెడ్డి కె (MBBS, DNB పీడియాట్రిక్స్, IAP నియోనాటాలజీ ఫెలోషిప్), పీడియాట్రిక్స్ & నియోనాటాలజీ సీనియర్ కన్సల్టెంట్.',
        },
        {
          question: 'అపాయింట్‌మెంట్ కోసం ఆగకుండా ఎప్పుడు ఎమర్జెన్సీకి తీసుకెళ్లాలి?',
          answer: `బిడ్డకు శ్వాస తీసుకోవడం కష్టంగా ఉంటే, ఫిట్స్ వస్తే, తాగలేకపోతే లేదా తల్లిపాలు తాగలేకపోతే, తిన్నదంతా వాంతి చేసుకుంటే, లేదా అసాధారణంగా మగతగా ఉంటే. ${site.phones.emergency.display} కి కాల్ చేయండి; ఎమర్జెన్సీ విభాగం 24/7 తెరిచి ఉంటుంది.`,
        },
        {
          question: 'పిల్లలకు టీకాలు వేస్తారా?',
          answer: 'అవును, IAP టీకా షెడ్యూల్ ప్రకారం. ప్రతి సందర్శనకు వ్యాక్సినేషన్ కార్డు తీసుకురండి.',
        },
      ],
    },
  },

  {
    // Unpublished until the hospital confirms price ranges: fill in each `range`, set
    // `pricesCheckedOn`, then set `published: true`.
    slug: 'cost-of-delivery-and-nicu',
    published: false,
    updatedOn: '2026-10-15',
    reviewer: 'dr-mounika-reddy',
    reviewedOn: null,
    sources: [],
    pricesCheckedOn: null,
    prices: [
      { key: 'normal', range: null },
      { key: 'caesarean', range: null },
      { key: 'nicu', range: null },
    ],
    en: {
      title: 'Cost of normal delivery, C-section and NICU per day at Dhruva',
      description: 'Price ranges for a normal delivery, a caesarean section and a day in the NICU at Dhruva Hospitals, Kadapa.',
      answer: 'Price ranges for a normal delivery, a caesarean section and a day in the NICU at Dhruva Hospitals are listed below. Your final bill depends on your room, the length of your stay and any extra treatment you or your baby need.',
      priceLabels: { normal: 'Normal delivery', caesarean: 'Caesarean section (C-section)', nicu: 'NICU, per day' },
      priceIncludes: 'Room, nursing, doctor’s fees and routine medicines for the stated stay.',
      sections: [
        {
          heading: 'What changes the final bill',
          list: [
            'The room you choose',
            'Days in hospital beyond the usual stay',
            'Extra tests, medicines or procedures',
            'Your baby’s NICU stay and the support needed, such as CPAP or ventilation',
          ],
        },
        {
          heading: 'Before you are admitted',
          body: ['Ask the front desk or the NRI desk for a written estimate. If your insurer pays the hospital directly, bring your policy details and pre-authorisation.'],
        },
      ],
      faqs: [],
    },
    te: {
      title: 'ధ్రువలో సాధారణ ప్రసవం, సిజేరియన్, NICU రోజుకు ఖర్చు',
      description: 'కడప ధ్రువ హాస్పిటల్స్‌లో సాధారణ ప్రసవం, సిజేరియన్, NICU లో ఒక రోజు ఖర్చుల శ్రేణి.',
      answer: 'ధ్రువ హాస్పిటల్స్‌లో సాధారణ ప్రసవం, సిజేరియన్, NICU లో ఒక రోజుకు ధరల శ్రేణి కింద ఉంది. మీ తుది బిల్లు మీరు ఎంచుకునే గది, ఆసుపత్రిలో ఉండే రోజులు, మీకు లేదా బిడ్డకు అవసరమైన అదనపు చికిత్సపై ఆధారపడుతుంది.',
      priceLabels: { normal: 'సాధారణ ప్రసవం', caesarean: 'సిజేరియన్', nicu: 'NICU, రోజుకు' },
      priceIncludes: 'పేర్కొన్న రోజులకు గది, నర్సింగ్, డాక్టర్ ఫీజు, సాధారణ మందులు.',
      sections: [
        {
          heading: 'తుది బిల్లును మార్చేవి',
          list: [
            'మీరు ఎంచుకునే గది',
            'సాధారణ రోజుల కంటే ఎక్కువ ఆసుపత్రిలో ఉండటం',
            'అదనపు పరీక్షలు, మందులు లేదా ప్రక్రియలు',
            'బిడ్డ NICU లో ఉండే రోజులు, CPAP లేదా వెంటిలేషన్ వంటి సహాయం',
          ],
        },
        {
          heading: 'అడ్మిట్ అయ్యే ముందు',
          body: ['ఫ్రంట్ డెస్క్ లేదా NRI డెస్క్ నుంచి లిఖితపూర్వక అంచనా అడగండి. మీ ఇన్సూరెన్స్ ఆసుపత్రికి నేరుగా చెల్లిస్తే, పాలసీ వివరాలు, ముందస్తు అనుమతి తీసుకురండి.'],
        },
      ],
      faqs: [],
    },
  },
];

export const publishedGuides = guides.filter((guide) => guide.published);

export function getGuide(slug) {
  return publishedGuides.find((guide) => guide.slug === slug);
}

// Small link lists, so pages that only link to guides don't ship the guide text to the browser.
export function guideLinks(lang = 'en', slugs = null) {
  const list = slugs ? slugs.map(getGuide).filter(Boolean) : publishedGuides;
  return list.map((guide) => ({ slug: guide.slug, title: guide[lang].title }));
}

