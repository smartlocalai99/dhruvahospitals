// FAQs and videos for each service page (lib/data.js has the rest). Kept separate so this text
// is read at build time only and isn't shipped to every page. Only facts the hospital has published.
import { site } from './site';

// How to book, used in several FAQ answers so the numbers and hours stay in one place.
const howToBook = `Call ${site.phones.main.display} or ${site.phones.mobile.display}, or send a WhatsApp message to ${site.phones.main.display}. Outpatient (OPD) hours are ${site.hours.opd}; the emergency line, ${site.phones.emergency.display}, is answered 24 hours a day.`;

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
        question: 'Can a caesarean section be done at night or in an emergency?',
        answer: 'Yes. Planned and emergency caesarean sections are done in our modular operation theatres, which are available 24/7.',
      },
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
        question: 'Who is the gynaecologist at Dhruva Hospitals in Kadapa?',
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
        question: 'Who is the paediatrician (child specialist) at Dhruva Hospitals in Kadapa?',
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
        question: 'What level is the NICU at Dhruva Hospitals?',
        answer: 'Level III. It provides intensive care for premature and critically ill newborns, 24 hours a day.',
      },
      {
        question: 'Who looks after babies in the NICU?',
        answer:
          'The NICU is led by neonatologist Dr. Sudarshan Reddy K (MBBS, DNB Paediatrics, IAP Fellowship in Neonatology – Ankura Hospital, Hyderabad).',
      },
      {
        question: 'What breathing support is available for newborns?',
        answer: 'High-flow nasal cannula (HFNC) oxygen, CPAP and ventilator support.',
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
        question: 'How do I book a screening appointment?',
        answer: howToBook,
      },
    ],
    videos: [],
  },
  diagnostics: {
    faqs: [
      {
        question: 'Which tests can be done at Dhruva Hospitals?',
        answer:
          'Blood tests, hormone tests (including thyroid and fertility hormones), semen analysis, pathology, ECG, digital X-ray, and ultrasound with Doppler studies.',
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
    ],
    videos: [],
  },
  'general-medicine': {
    faqs: [
      {
        question: 'Is there a 24-hour emergency and ICU at Dhruva Hospitals?',
        answer: `Yes. The emergency team and ICU, with ventilator support, work 24/7. Call ${site.phones.emergency.display} in an emergency.`,
      },
    ],
    videos: [],
  },
};

export function getServiceDetails(slug) {
  return serviceDetails[slug] || { faqs: [], videos: [] };
}
