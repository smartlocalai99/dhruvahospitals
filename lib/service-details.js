// FAQs and videos for each service page (lib/data.js has the rest). Kept separate so this text
// is read at build time only and isn't shipped to every page. Only facts the hospital has published.
import { site } from './site';

// How to book, used in several FAQ answers so the numbers and hours stay in one place.
const howToBook = `Call ${site.phones.main.display} or ${site.phones.mobile.display}, or send a WhatsApp message to ${site.phones.main.display}. Outpatient (OPD) hours are ${site.hours.opd}; the emergency line, ${site.phones.emergency.display}, is answered 24 hours a day.`;

// The PC & PNDT Act statement, used on pages that mention scans.
const noSexDetermination = {
  question: 'Do you tell the sex of the baby during a scan?',
  answer: 'No. Sex determination of the foetus is not done at Dhruva Hospitals. It is prohibited under the PC & PNDT Act, 1994.',
};

// Sources shown under a service page's FAQs.
const whoCervicalCancer = {
  label: 'World Health Organization – Cervical cancer fact sheet (updated 3 July 2026)',
  url: 'https://www.who.int/news-room/fact-sheets/detail/cervical-cancer',
};

export const serviceDetails = {
  pregnancy: {
    faqs: [
      {
        question: 'Does Dhruva Hospitals in Kadapa provide pregnancy care and delivery?',
        answer:
          'Yes. We provide antenatal check-ups, pregnancy scans, normal delivery with painless labour options, planned and emergency caesarean sections, and care for high-risk pregnancies such as pregnancy-induced high blood pressure (PIH) and diabetes in pregnancy.',
      },
      {
        question: 'Who is the obstetrician at Dhruva Hospitals?',
        answer:
          'Dr. S Mounika Reddy (MBBS, MS Obstetrics & Gynaecology, FRM, FMAS, FIRM), Senior Consultant in Obstetrics, Gynaecology and Infertility.',
      },
      {
        question: 'Is there a NICU if my baby needs special care after birth?',
        answer:
          'Yes. Our Level III NICU is in the same building as the delivery rooms, is open 24 hours a day and is led by neonatologist Dr. Sudarshan Reddy K.',
      },
      {
        question: 'Is Dhruva Hospitals a maternity hospital?',
        answer:
          'Yes. Pregnancy care, normal and caesarean deliveries and newborn care are at the centre of what we do, with the delivery rooms, operation theatres and Level III NICU in one building in Kadapa.',
      },
      {
        question: 'Can a caesarean section be done at night or in an emergency?',
        answer: 'Yes. Planned and emergency caesarean sections are done in our modular operation theatres, which are available 24/7.',
      },
      noSexDetermination,
      {
        question: 'What should I bring to my first pregnancy visit?',
        answer:
          'Bring an ID, the date your last period started, any pregnancy test or scan reports, your blood group and previous blood reports, a list of medicines you take, and notes from any earlier pregnancy or caesarean.',
      },
      {
        question: 'How do I book a pregnancy consultation?',
        answer: howToBook,
      },
    ],
    videos: [
      { id: 'eYO3E4763F8', title: 'Why Beta HCG Test and Scanning Are Important in Early Pregnancy' },
      { id: 'R0AAnuyieKE', title: 'Not All Medicines Are Safe During Pregnancy | Consult Your Doctor' },
      { id: 'lzLW8dOfNvs', title: 'Always Take Medicines with a Doctor’s Advice | Dhruva Hospitals' },
    ],
  },
  gynaecology: {
    faqs: [
      {
        question: 'Who is the gynaecologist (gynecologist) at Dhruva Hospitals in Kadapa?',
        answer:
          'Dr. S Mounika Reddy (MBBS, MS Obstetrics & Gynaecology, FRM, FMAS, FIRM), Senior Consultant in Obstetrics, Gynaecology and Infertility, laparoscopic surgeon and IVF specialist.',
      },
      {
        question: 'Which gynaecology treatments are available?',
        answer:
          'Care for period problems, PCOD/PCOS, fibroids and ovarian cysts; hysteroscopy; open and laparoscopic hysterectomy; cystectomy; family planning; adolescent gynaecology; and screening for cervical, breast, ovarian and uterine cancers.',
      },
      {
        question: 'Is laparoscopic (keyhole) gynaecology surgery available in Kadapa?',
        answer:
          'Yes. Hysterectomy and ovarian cyst removal (cystectomy) can be done laparoscopically in our modular operation theatres. Whether it suits you depends on your condition, and the gynaecologist will explain your options.',
      },
      {
        question: 'What should I bring to a gynaecology appointment?',
        answer:
          'The date your last period started, previous prescriptions and reports (scans, blood tests, Pap smear results), notes from any surgery, and a list of the medicines you take.',
      },
      {
        question: 'How do I book a gynaecologist appointment?',
        answer: howToBook,
      },
    ],
    videos: [
      { id: 'PJPKBzJXmR4', title: '56-Year-Old Female Patient | Gynecologist Consultation at Dhruva Hospital' },
      { id: 'cpKW7pgKkec', title: 'Vaginal Discharge Warning Signs You Shouldn’t Ignore | Doctor Explains' },
      { id: 'uH6TXvRri9w', title: 'Infertility Treatment in Kadapa | Advanced Laparoscopy at Dhruva Hospital' },
    ],
  },
  paediatrics: {
    faqs: [
      {
        question: 'Who is the paediatrician (pediatrician or child specialist) at Dhruva Hospitals in Kadapa?',
        answer:
          'Dr. Sudarshan Reddy K, Senior Consultant in Paediatrics and Neonatology and Chairman of Dhruva Hospitals: MBBS, DNB Paediatrics (Apollo Hospitals, Mysore) and IAP Fellowship in Neonatology (Ankura Hospital, Hyderabad); formerly a consultant at RIMS Kadapa and PES Medical College, Kuppam.',
      },
      {
        question: 'Do you give vaccinations for babies and children?',
        answer: "Yes, following the IAP (Indian Academy of Paediatrics) immunisation schedule. Bring your child's vaccination card to every visit.",
      },
      {
        question: 'Is there a children’s emergency service at night?',
        answer: `Yes. Our neonatal and paediatric emergency team is on duty 24 hours a day, with ICU and ventilator support for children who need intensive care. Call ${site.phones.emergency.display}.`,
      },
      {
        question: 'Can children be admitted at Dhruva Hospitals?',
        answer: 'Yes. Children who need to stay in hospital are cared for in our paediatric ward, and critically ill children receive ICU care.',
      },
      {
        question: "What should I bring to my child's appointment?",
        answer:
          "Your child's vaccination card, previous prescriptions and reports, a list of medicines with doses, and for a young baby the hospital discharge summary from birth. If your child has a fever, note the temperature readings and times.",
      },
      {
        question: 'How do I book a paediatrician appointment in Kadapa?',
        answer: howToBook,
      },
    ],
    videos: [
      { id: 'QhvX2uJfBwE', title: 'Don’t Ignore Fits in Babies! | Pediatrician Explains | Dhruva Hospitals' },
      { id: 'zHVDePNQG7I', title: 'Seizures in Children: Important Precautions Every Parent Must Know' },
      { id: 'IaV_7wXdHA0', title: 'Iron & B12 Deficiency in Children | Which Foods Should Kids Eat?' },
    ],
  },
  neonatal: {
    faqs: [
      {
        question: 'Is there a NICU at Dhruva Hospitals in Kadapa?',
        answer:
          'Yes. Our Level III NICU cares for premature and critically ill newborns day and night, in the same building as the delivery rooms, so a baby who needs intensive care is not moved to another hospital.',
      },
      {
        question: 'Who looks after babies in the NICU?',
        answer:
          'Neonatologist Dr. Sudarshan Reddy K leads the NICU team, which is on duty around the clock. He trained in paediatrics at Apollo Hospitals, Mysore and completed an IAP Fellowship in Neonatology at Ankura Hospital, Hyderabad.',
      },
      {
        question: 'What breathing support is available for newborns?',
        answer: 'Depending on what the baby needs: high-flow nasal cannula (HFNC) oxygen, CPAP, or ventilator support.',
      },
      {
        question: 'Do you treat newborn jaundice?',
        answer: 'Yes, with phototherapy.',
      },
      {
        question: 'Who do I call in a newborn emergency?',
        answer: `Call our 24/7 emergency line, ${site.phones.emergency.display}. For an ambulance, call ${site.phones.ambulance.display}.`,
      },
    ],
    videos: [
      { id: 'ZC-TLkkY6Ps', title: 'Born Premature? Know the Special Care Your Baby Needs | Dhruva Hospitals' },
      { id: '5KnGxZwo108', title: 'Expert Care for Preterm Babies with Breathing Difficulties | Dhruva Hospitals' },
      { id: 'vxwvNS8qvDg', title: 'Newborn Screening Test Explained | Dhruva Hospitals Kadapa' },
    ],
  },
  fertility: {
    faqs: [
      {
        question: 'Is IVF available in Kadapa at Dhruva Hospitals?',
        answer:
          'Yes. IUI, IVF and ICSI are done in our modular embryology lab, led by fertility specialist Dr. S Mounika Reddy (MS Obstetrics & Gynaecology, FRM, FIRM).',
      },
      {
        question: 'Is IVF the same as test tube baby treatment?',
        answer:
          'Yes. "Test tube baby" is the common name for IVF (in vitro fertilisation): eggs are fertilised with sperm in the laboratory and an embryo is placed in the uterus. Dr. S Mounika Reddy will explain whether IUI, IVF or ICSI suits you.',
      },
      {
        question: 'Do you treat male infertility?',
        answer:
          'Yes: semen analysis, advanced sperm selection (density gradient, microfluidics and MACS), and surgical sperm retrieval (TESA, TESE and PESA) for men with no sperm in the ejaculate.',
      },
      {
        question: 'What should we bring to a fertility consultation?',
        answer: 'Previous reports and prescriptions for both partners, including any semen analysis, hormone tests, scans and notes from earlier treatment.',
      },
      {
        question: 'How do we book a fertility consultation?',
        answer: howToBook,
      },
    ],
    videos: [
      { id: 'TIW3YuLW-Ts', title: 'Fertility Evaluation Before Marriage: What Every Couple Should Know' },
      { id: 'WnegE0Dyl8g', title: 'What Is Egg Pickup? Doctor Explains Egg Collection & Freezing | Dhruva Hospitals' },
      { id: 'uH6TXvRri9w', title: 'Infertility Treatment in Kadapa | Advanced Laparoscopy at Dhruva Hospital' },
    ],
  },
  cancer: {
    faqs: [
      {
        question: 'Which cancer screening tests are available for women?',
        answer:
          'Pap smear screening for cervical cancer, clinical breast examination with guidance on further imaging, and ultrasound and blood tests to check for ovarian and uterine cancers when symptoms or risk factors call for them.',
      },
      {
        question: 'When should I start cervical cancer screening, and how often?',
        answer:
          'The World Health Organization recommends regular screening from the age of 30, and from 25 for women living with HIV. How often depends on the test used. Your gynaecologist will tell you which test you need and when to repeat it.',
      },
      {
        question: 'Do I need to prepare for a Pap smear?',
        answer: 'Book it for a day when you are not on your period. The doctor will tell you if anything else is needed.',
      },
      {
        question: 'What happens if a screening test is abnormal?',
        answer:
          'An abnormal result does not mean you have cancer. The doctor explains what it shows and may suggest a repeat test, further tests or a referral for specialised care.',
      },
      {
        question: 'How do I book a screening appointment?',
        answer: howToBook,
      },
    ],
    videos: [],
    sources: [whoCervicalCancer],
  },
  diagnostics: {
    faqs: [
      {
        question: 'Which tests can be done at Dhruva Hospitals?',
        answer:
          'Blood tests, hormone tests (including thyroid and fertility hormones), semen analysis, pathology, ECG, digital X-ray, and ultrasound with Doppler studies.',
      },
      {
        question: 'Do I need to fast before a blood test?',
        answer:
          'Only for some tests, such as fasting blood sugar or a lipid profile, which need you to stop eating for several hours first. Water is usually allowed. We will tell you when you book.',
      },
      noSexDetermination,
      {
        question: 'How do I book a test?',
        answer: howToBook,
      },
    ],
    videos: [],
  },
  surgery: {
    faqs: [
      {
        question: 'Who performs general and laparoscopic surgery at Dhruva Hospitals?',
        answer:
          'Dr. M Vinay Kumar (MBBS, MS General Surgery, FMAS), Consultant in General, Laser and Laparoscopic Surgery. Gynaecological laparoscopy is done by Dr. S Mounika Reddy.',
      },
      {
        question: 'Is laparoscopic (keyhole) surgery right for me?',
        answer:
          'It depends on your condition and general health. The surgeon examines you, reviews your reports and explains whether keyhole or open surgery is safer for you.',
      },
      {
        question: 'What should I bring to a surgical consultation?',
        answer:
          'Previous scan and blood reports, the medicines you take (especially blood thinners and diabetes medicines), and notes from any earlier operations.',
      },
      {
        question: 'Is emergency surgery available at night?',
        answer: `Yes. Our operation theatres and emergency team are available 24/7. In an emergency, call ${site.phones.emergency.display}.`,
      },
    ],
    videos: [],
  },
  'general-medicine': {
    faqs: [
      {
        question: 'Is there a 24-hour emergency and ICU at Dhruva Hospitals?',
        answer: `Yes. The emergency team and ICU, with ventilator support, work 24/7. Call ${site.phones.emergency.display} in an emergency.`,
      },
      {
        question: 'Do you treat diabetes?',
        answer:
          'Yes. Physician and diabetologist Dr. B Surya (MBBS, MD General Medicine, JIPMER) provides long-term care for diabetes and related lifestyle conditions.',
      },
      {
        question: 'When should I go to the emergency department instead of the OPD?',
        answer: `Come straight to emergency, or call ${site.phones.emergency.display}, for chest pain, difficulty breathing, sudden weakness or numbness of the face, arm or leg, confusion, a fit, fainting or heavy bleeding.`,
      },
      {
        question: 'How do I book a physician consultation?',
        answer: howToBook,
      },
    ],
    videos: [],
  },
  ophthalmology: {
    faqs: [
      {
        question: 'Who is the eye doctor (ophthalmologist) at Dhruva Hospitals?',
        answer: 'Ophthalmologist Dr. Vasanta Kumari (MBBS, MS).',
      },
      {
        question: 'What should I bring to an eye appointment?',
        answer:
          'Your current glasses or contact lens details, previous eye reports and prescriptions, and a list of your medicines. If you have diabetes or high blood pressure, bring your recent reports too.',
      },
      {
        question: 'Can I drive after an eye check-up?',
        answer:
          'Some eye examinations use drops that widen the pupils and blur your vision for a few hours, so it is safer to have someone else drive you home.',
      },
      {
        question: 'How do I book an eye check-up?',
        answer: `${howToBook} Please call to confirm the eye OPD timings before you come.`,
      },
    ],
    videos: [],
  },
  orthopaedics: {
    faqs: [
      {
        question: 'Who is the orthopaedic doctor at Dhruva Hospitals?',
        answer: 'Senior orthopaedic surgeon Dr. B Someshwar Reddy (MBBS, MS Ortho).',
      },
      {
        question: 'What should I do after an injury, before reaching the hospital?',
        answer: `Keep the injured part still and supported, and do not try to straighten a limb that looks bent. If a neck or back injury is possible, do not move the person; call ${site.phones.emergency.display}.`,
      },
      {
        question: 'What should I bring to an orthopaedic appointment?',
        answer: 'Any X-rays, scan reports and prescriptions you already have, and a list of the medicines you take.',
      },
      {
        question: 'How do I book an orthopaedic consultation?',
        answer: howToBook,
      },
    ],
    videos: [],
  },
};

export function getServiceDetails(slug) {
  const details = serviceDetails[slug] || {};
  return { faqs: details.faqs || [], videos: details.videos || [], sources: details.sources || [] };
}
