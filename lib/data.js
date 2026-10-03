import { site } from './site';

export const stats = [
  { value: '5,000+', label: 'Happy patients' },
  { value: '500+', label: 'IVF successes' },
  { value: '15+', label: 'Expert specialists' },
  { value: '24/7', label: 'Emergency & NICU care' },
];

export const whyChooseUs = [
  'Expert, fellowship-trained doctors',
  '24/7 emergency & ICU support',
  'Advanced modular operation theatres',
  'Patient-centric, transparent care',
  'Modern infrastructure & equipment',
  'Affordable & ethical treatment',
];

export const services = [
  {
    slug: 'fertility',
    title: 'Fertility & IVF',
    summary: 'Advanced reproductive medicine with IVF, IUI and ICSI procedures for couples hoping to start a family.',
    intro:
      'Our fertility centre brings advanced reproductive medicine to Kadapa, with a modular embryology lab and ICSI facilities. Led by IVF specialist Dr. S Mounika Reddy, we create a personalised plan for every couple, with transparent costs and compassionate support at every step.',
    image: '/images/dept-child-care.jpg',
    imageAlt: 'Doctor holding a smiling baby',
    treatments: [
      { name: 'IUI', description: 'Intrauterine insemination places prepared, healthy sperm directly into the uterus around ovulation.' },
      { name: 'IVF', description: 'In vitro fertilisation: eggs and sperm are fertilised in our embryology lab and the healthiest embryo is transferred.' },
      { name: 'ICSI', description: 'A single sperm is injected directly into each egg, offering precise treatment for male-factor infertility.' },
      { name: 'Male Infertility (DG, MF, MACS)', description: 'Advanced sperm-selection techniques — density gradient, microfluidics and MACS — to choose the healthiest sperm.' },
      { name: 'TESA / TESE / PESA', description: 'Surgical sperm retrieval for men with no sperm in the ejaculate (azoospermia).' },
      { name: 'Semen Analysis', description: 'Computer-aided testing of sperm count, motility and shape.' },
      { name: 'Ovulation Study', description: 'Ultrasound follicular monitoring to time treatment precisely.' },
    ],
    highlights: [
      'Personalised fertility protocols',
      'Modular embryology lab with ICSI facilities',
      'Transparent cost structure',
      'Compassionate emotional support',
      'Pre-conception genetic screening',
    ],
    doctors: ['dr-mounika-reddy'],
  },
  {
    slug: 'pregnancy',
    title: 'Pregnancy Care',
    summary: 'Comprehensive antenatal, delivery and postnatal care for mother and baby.',
    intro:
      "From the first pregnancy test to your baby's arrival and beyond, our obstetric team provides continuous care. Antenatal check-ups, pregnancy scans, safe normal and caesarean deliveries, and close support for high-risk pregnancies are all available under one roof, backed by our Level III NICU.",
    image: '/images/service-maternity.jpg',
    imageAlt: 'Doctor consulting with a pregnant woman',
    treatments: [
      { name: 'Pregnancy Tests & Treatment', description: 'Pregnancy confirmation, regular antenatal check-ups and treatment of pregnancy-related concerns.' },
      { name: 'Ultrasound Scanning', description: "Pregnancy scans to monitor your baby's growth and well-being." },
      { name: 'Normal Delivery', description: 'Natural birth with continuous monitoring, including painless labour options.' },
      { name: 'Caesarean Section', description: 'Planned and emergency caesarean deliveries in modular operation theatres, available 24/7.' },
      { name: 'High-Risk Pregnancy', description: 'Specialised care for conditions such as pregnancy-induced hypertension (PIH) and diabetes in pregnancy.' },
      { name: 'Ectopic Pregnancy', description: 'Prompt diagnosis and treatment, with minimally invasive surgery when needed.' },
    ],
    highlights: [
      'Level III NICU with a specialist neonatologist',
      'High-risk pregnancy management (PIH, diabetes)',
      'Painless labour & natural delivery options',
      '24/7 access to modular operation theatres',
    ],
    doctors: ['dr-mounika-reddy', 'dr-sudarshan-reddy'],
  },
  {
    slug: 'gynaecology',
    title: 'Gynaecology',
    summary: 'Expert management of gynaecological conditions using the latest minimally invasive techniques.',
    intro:
      "We provide expert care for women's health at every stage of life. Our gynaecologists specialise in minimally invasive laparoscopic and hysteroscopic surgery, which means smaller incisions, less pain and a quicker return to daily life.",
    image: '/images/service-gynaecology.jpg',
    imageAlt: 'Gynaecologist in her consultation room at Dhruva Hospitals',
    treatments: [
      { name: 'Hysterectomy (Open & Laparoscopic)', description: 'Removal of the uterus when medically needed; laparoscopic surgery means smaller cuts and faster recovery.' },
      { name: 'Cystectomy', description: 'Removal of ovarian cysts while preserving healthy ovarian tissue, often by laparoscopy.' },
      { name: 'Hysteroscopy', description: 'A thin camera examines the inside of the uterus to diagnose and treat problems such as polyps or abnormal bleeding.' },
      { name: 'Fibroid Treatment', description: 'Medical and surgical options for uterine fibroids, tailored to your symptoms and family plans.' },
      { name: 'PCOD / PCOS', description: 'Diagnosis and long-term management of hormonal imbalance, irregular cycles and related fertility concerns.' },
      { name: 'Period Problems', description: 'Care for heavy, painful, irregular or missed periods.' },
      { name: 'Family Planning', description: 'Counselling and contraception options to plan your family with confidence.' },
      { name: 'Adolescent Gynaecology', description: "Sensitive, confidential care for teenage girls' menstrual and hormonal health." },
    ],
    highlights: [
      'Laparoscopic hysterectomy & cystectomy',
      'Fibroid & PCOD management',
      'Family planning & contraception',
      'Adolescent gynaecology',
    ],
    doctors: ['dr-mounika-reddy'],
  },
  {
    slug: 'cancer',
    title: 'Cancer Screening',
    summary: "Early detection and comprehensive screening programmes for women's cancers.",
    intro:
      "Screening helps detect women's cancers early, when treatment is most effective. Our specialists guide you through the right tests for your age and risk factors, ensuring timely intervention and peace of mind.",
    image: '/images/about-team.jpg',
    imageAlt: 'Doctors at Dhruva Hospitals in a consultation room',
    treatments: [
      { name: 'Cervical Cancer Screening', description: 'Pap smear screening to detect early cell changes in the cervix, when they are most treatable.' },
      { name: 'Breast Cancer Screening', description: 'Clinical breast examination, with guidance on further imaging when needed.' },
      { name: 'Ovarian Cancer Screening', description: 'Pelvic ultrasound and blood tests when symptoms or risk factors call for them.' },
      { name: 'Uterine Cancer Screening', description: 'Evaluation of abnormal bleeding, especially after menopause, with ultrasound and further tests if needed.' },
    ],
    highlights: [
      'Screening for cervical, breast, ovarian & uterine cancers',
      'Early detection for timely intervention',
      'Guidance on the right tests for your age and risk',
      'Private, respectful consultations',
    ],
    doctors: ['dr-mounika-reddy'],
  },
  {
    slug: 'neonatal',
    title: 'Neonatal & Paediatric Care',
    summary: '24-hour Level III NICU with advanced support for premature and critically ill newborns.',
    intro:
      'Our Level III NICU, managed by neonatologist Dr. Sudarshan Reddy K, provides round-the-clock, life-saving support for premature and critically ill newborns. As your child grows, our paediatric team continues the care with vaccinations, growth monitoring and 24-hour emergency support.',
    image: '/images/service-pediatric.jpg',
    imageAlt: 'Paediatrician examining a baby held by her mother',
    treatments: [
      { name: 'Preterm Baby Care', description: 'Expert care for babies born before 37 weeks in our Level III NICU.' },
      { name: 'NICU Support', description: 'Continuous monitoring of oxygen, heart rate and temperature for critically ill newborns.' },
      { name: 'HFNC & CPAP Therapy', description: 'Gentle, non-invasive breathing support for newborns with breathing difficulties.' },
      { name: 'Jaundice Treatment', description: 'Phototherapy for effective treatment of neonatal jaundice.' },
      { name: 'Vaccination', description: 'Complete immunisation schedules as per IAP guidelines, in a clean, child-friendly setting.' },
      { name: 'Growth Monitoring', description: 'Regular tracking of physical and developmental milestones for a healthy childhood.' },
      { name: '24-Hour Emergency Care', description: 'Our neonatal and paediatric emergency team is ready day and night.' },
    ],
    highlights: [
      'Level III NICU, open 24/7',
      'Managed by neonatologist Dr. Sudarshan Reddy K',
      'Continuous oxygen, heart-rate & temperature monitoring',
      'Rapid admission protocols',
    ],
    doctors: ['dr-sudarshan-reddy'],
  },
  {
    slug: 'diagnostics',
    title: 'Diagnostics & Lab',
    summary: 'Fully automated laboratory and imaging services for accurate, timely diagnosis.',
    intro:
      'Our in-house laboratory and imaging units deliver accurate results with rapid turnaround, so your doctors can make timely clinical decisions. From routine blood tests to hormone and semen analysis, digital X-ray and ultrasound, most tests are available under one roof.',
    image: '/images/service-xray.jpg',
    imageAlt: 'Doctor reviewing a chest X-ray',
    treatments: [
      { name: 'Blood Tests', description: 'Routine and specialised blood tests on fully automated analysers.' },
      { name: 'Hormone Analysis', description: 'Thyroid, fertility and other hormone tests to guide treatment.' },
      { name: 'Semen Analysis', description: 'Computer-aided assessment of sperm count, motility and shape.' },
      { name: 'Pathology', description: 'Laboratory examination of samples to support accurate diagnosis.' },
      { name: 'ECG & Basic Diagnostics', description: 'Quick heart checks and routine diagnostic tests.' },
      { name: 'Digital X-Ray', description: 'Clear digital images with quick turnaround.' },
      { name: 'Ultrasound & Doppler', description: 'Imaging for pregnancy, abdominal and pelvic conditions, with Doppler studies of blood flow.' },
    ],
    highlights: [
      'Fully automated in-house laboratory',
      'Digital X-ray, ultrasound & Doppler',
      'Rapid turnaround times',
      'Accurate results for better clinical decisions',
    ],
    doctors: [],
  },
  {
    slug: 'surgery',
    title: 'General & Laparoscopic Surgery',
    summary: 'Safe, minimally invasive procedures by experienced surgeons in modern operation theatres.',
    intro:
      'Our surgeons perform general, laser and laparoscopic (keyhole) procedures in modular operation theatres with laminar air flow. Minimally invasive techniques mean smaller incisions, less pain and a faster recovery, with dedicated nursing and ICU support after surgery.',
    image: '/images/operation-theatre.jpg',
    imageAlt: 'Modular operation theatre at Dhruva Hospitals',
    treatments: [
      { name: 'Laparoscopic Surgery', description: 'Keyhole surgery through small incisions, for less pain and a quicker return home.' },
      { name: 'Laser Surgery', description: 'Precise laser procedures with minimal bleeding and fast recovery.' },
      { name: 'General Surgery', description: 'Planned and emergency surgical care by experienced surgeons.' },
      { name: 'Modular Operation Theatres', description: 'Sterile theatres with laminar air flow and advanced surgical equipment.' },
      { name: 'Post-operative Care', description: 'Dedicated nursing and ICU support for a smooth recovery.' },
    ],
    highlights: [
      'Modular operation theatres with laminar air flow',
      'Laparoscopic & laser techniques',
      'Sterile, safety-first environment',
      'ICU & nursing support after surgery',
    ],
    doctors: ['dr-m-vinay-kumar', 'dr-mounika-reddy'],
  },
  {
    slug: 'general-medicine',
    title: 'General Medicine & Critical Care',
    summary: 'Round-the-clock emergency care, ICU support and expert physician consultations.',
    intro:
      'Our physicians diagnose and treat everyday illnesses and long-term conditions such as diabetes, while our critical care team supports seriously ill patients round the clock. Modern ICU and ventilator facilities and a 24/7 emergency team mean expert help is always close at hand.',
    image: '/images/service-diagnostics.jpg',
    imageAlt: 'Doctor explaining an X-ray to a patient',
    treatments: [
      { name: '24/7 Emergency Care', description: 'Immediate medical attention for accidents, sudden illness and other emergencies, day and night.' },
      { name: 'ICU & Ventilator Support', description: 'Intensive care for high-risk pregnancy, medical, surgical, paediatric and neonatal patients.' },
      { name: 'Critical Care Management', description: 'Close monitoring and coordinated treatment for seriously ill patients.' },
      { name: 'Diabetes & Lifestyle Medicine', description: 'Long-term care for diabetes and related lifestyle conditions.' },
      { name: 'General Medicine Consultations', description: 'Diagnosis and treatment of everyday illnesses and chronic conditions.' },
      { name: 'Preventive Health Checkups', description: 'Consultations and screening tests to help your family stay ahead of health concerns.' },
    ],
    highlights: [
      '24/7 emergency team',
      'ICU & ventilator support',
      'Physician trained at JIPMER',
      'Diabetes & lifestyle care',
    ],
    doctors: ['dr-b-surya'],
  },
];

export const facilities = [
  {
    title: 'Intensive Care Unit',
    description:
      'Round-the-clock critical care with ventilator support for high-risk pregnancy, medical, surgical and paediatric patients.',
    items: ['24/7 Patient Monitoring', 'Advanced Ventilators', 'Critical Care Support', 'Emergency Response'],
  },
  {
    title: 'Modular Operation Theatres',
    description: 'Modular operation theatres equipped for laparoscopic, laser and general surgery.',
    items: ['Laminar Air Flow', 'Advanced Surgical Equipment', 'Sterile Environment', '24/7 Availability'],
  },
  {
    title: 'Level III NICU',
    description: 'Neonatal intensive care for premature and critically ill newborns, managed by our neonatologist.',
    items: ['Preterm Baby Care', 'HFNC & CPAP Support', '24/7 Vital Monitoring', 'Phototherapy for Jaundice'],
  },
  {
    title: 'IVF & Embryology Lab',
    description: 'A modular embryology lab with ICSI facilities for advanced fertility treatment.',
    items: ['IVF & ICSI', 'IUI', 'Semen Analysis', 'Follicular Monitoring'],
  },
  {
    title: 'Mother & Child Wing',
    description: 'Dedicated maternity and paediatric care, from safe delivery suites to postnatal support.',
    items: ['Safe Delivery Suites', 'Painless Labour Options', 'High-Risk Pregnancy Care', 'Postnatal Care'],
  },
  {
    title: 'Diagnostic Center',
    description: 'In-house laboratory and imaging for accurate, timely diagnosis.',
    items: ['Digital X-Ray', 'Ultrasound & Doppler', 'ECG', 'Automated Laboratory'],
  },
  {
    title: 'In-House Pharmacy',
    description: 'Round-the-clock access to essential medicines, surgical supplies and medical equipment.',
    items: ['Open 24/7', 'Essential Medicines', 'Surgical Supplies', 'Quality-Assured Products'],
  },
  {
    title: 'Emergency & Ambulance',
    description: 'Round-the-clock emergency care with a fully equipped ambulance service.',
    items: ['24/7 Emergency Team', 'Life Support Equipment', 'Trained Paramedics', 'Rapid Response'],
  },
  {
    title: 'Patient Rooms',
    description: 'Comfortable patient rooms with modern amenities and dedicated nursing support.',
    items: ['AC Rooms', 'Modern Amenities', '24/7 Nursing Care', 'Comfortable Beds'],
  },
];

export const doctors = [
  {
    slug: 'dr-sudarshan-reddy',
    name: 'Dr. Sudarshan Reddy K',
    title: 'Paediatrician & Neonatologist',
    credentials: 'MBBS, DNB (Paediatrics)',
    designation: 'Senior Consultant – Paediatrics & Neonatology',
    role: 'Chairman, Dhruva Hospitals',
    image: '/images/doctors/dr-sudarshan-reddy.jpg',
    bio: 'Chairman of Dhruva Hospitals. Trained at Apollo Hospitals, Mysore and Ankura Hospital, Hyderabad, and formerly a consultant at RIMS Kadapa and PES Medical College, Kuppam.',
    qualifications: ['MBBS', 'DNB Paediatrics (Apollo Hospitals, Mysore)'],
    fellowships: ['IAP Fellowship in Neonatology – Ankura Hospital, Hyderabad'],
    experience: [
      'Ex-Consultant – RIMS, Kadapa',
      'Ex-Consultant – PES Medical College, Kuppam',
      'Neonatology Fellowship – Ankura Hospital, Hyderabad',
    ],
    languages: ['Telugu', 'English', 'Kannada'],
    services: ['neonatal', 'pregnancy'],
    bookable: true,
  },
  {
    slug: 'dr-mounika-reddy',
    name: 'Dr. S Mounika Reddy',
    title: 'IVF Specialist & Laparoscopic Surgeon',
    credentials: 'MBBS, MS (OBG), FRM, FMAS',
    designation: 'Senior Consultant – Obstetrics, Gynaecology & Infertility',
    image: '/images/doctors/dr-mounika-reddy.jpg',
    bio: 'Expert in advanced IVF, IUI and ICSI, and in minimally invasive gynaecological surgery. Trained at Hegde Hospitals and KIMS, Hyderabad.',
    qualifications: ['MBBS', 'MS (Obstetrics & Gynaecology)'],
    fellowships: [
      'FRM – Hegde Hospitals, Hyderabad',
      'FMAS – KIMS, Hyderabad',
      'FIRM – Ferty9, Hyderabad',
      'Fellowship in Fetal Scans – Abhishek Scan, Hyderabad',
    ],
    experience: [
      'Advanced Reproductive Medicine – Hegde Hospitals, Hyderabad',
      'Minimal Access Surgery – KIMS, Hyderabad',
      'Fertility & Reproductive Medicine – Ferty9, Hyderabad',
    ],
    languages: ['Telugu', 'English', 'Hindi'],
    services: ['fertility', 'pregnancy', 'gynaecology', 'cancer'],
    bookable: true,
  },
  {
    slug: 'dr-b-surya',
    name: 'Dr. B Surya',
    title: 'Physician, Diabetologist & Critical Care',
    credentials: 'MBBS, MD General Medicine (JIPMER)',
    designation: 'Consultant Physician & Critical Care Specialist',
    image: '/images/doctors/dr-b-surya.jpg',
    bio: 'Physician and diabetologist trained at JIPMER, specialising in critical care and complex medical management.',
    qualifications: ['MBBS', 'MD General Medicine (JIPMER)'],
    fellowships: [],
    experience: ['MD General Medicine – JIPMER', 'Critical Care Management', 'Diabetes & Lifestyle Medicine'],
    languages: ['Telugu', 'English', 'Tamil'],
    services: ['general-medicine'],
    bookable: true,
  },
  {
    slug: 'dr-m-vinay-kumar',
    name: 'Dr. M Vinay Kumar',
    title: 'General, Laser & Laparoscopic Surgeon',
    credentials: 'MBBS, MS (General Surgery), FMAS',
    designation: 'Consultant – General, Laser & Laparoscopic Surgery',
    image: '/images/doctors/dr-m-vinay-kumar.jpg',
    bio: 'Specialist in general and laser surgery, offering advanced laparoscopic and minimally invasive surgical care.',
    qualifications: ['MBBS', 'MS General Surgery', 'FMAS'],
    fellowships: ['Laparoscopic & Laser Surgery'],
    experience: ['MS General Surgery', 'Laser Surgery Procedures', 'Minimal Access Surgery'],
    languages: ['Telugu', 'English'],
    services: ['surgery'],
    bookable: true,
  },
  {
    slug: 'dr-vasanta-kumari',
    name: 'Dr. Vasanta Kumari',
    title: 'Ophthalmologist',
    credentials: 'MBBS, MS',
    image: '/images/doctors/dr-vasanta-kumari.jpg',
    department: 'Eye Care (Ophthalmology)',
    bookable: true,
  },
  {
    slug: 'dr-someshwar-reddy',
    name: 'Dr. B Someshwar Reddy',
    title: 'Senior Orthopaedic Surgeon',
    credentials: 'MBBS, MS (Ortho)',
    image: '/images/doctors/dr-someshwar-reddy.jpg',
    department: 'Orthopaedics',
    bookable: true,
  },
  {
    slug: 'dr-christina',
    name: 'Dr. Christina',
    title: 'Duty Medical Officer',
    credentials: 'Pharm.D',
    image: '/images/doctors/dr-christina.jpg',
  },
  {
    slug: 'dr-yousuf-khan',
    name: 'Dr. Yousuf Khan',
    title: 'Duty Medical Officer',
    credentials: 'Pharm.D',
    image: '/images/doctors/dr-yousuf-khan.jpg',
  },
];

export function hasProfile(doctor) {
  return Boolean(doctor.bio);
}

export function getDoctor(slug) {
  return doctors.find((doctor) => doctor.slug === slug);
}

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}

// Options for the appointment form.
export const departments = [
  ...services.map((service) => service.title),
  ...doctors.filter((doctor) => doctor.department).map((doctor) => doctor.department),
];

export const bookableDoctors = doctors.filter((doctor) => doctor.bookable);

export function primaryDepartment(doctor) {
  if (!doctor) return '';
  if (doctor.services?.length) return getService(doctor.services[0])?.title || '';
  return doctor.department || '';
}

export const testimonials = [
  {
    name: 'Lakshmi Devi',
    location: 'Kadapa',
    service: 'Pregnancy Care',
    quote: 'The care I received during my pregnancy was exceptional. Dr. Mounika Reddy and her team are very supportive.',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Proddatur',
    service: 'Neonatal Care',
    quote: 'Our baby was in NICU for 10 days. Thanks to Dr. Sudarshan Reddy, our child is now healthy and happy.',
  },
  {
    name: 'Sravani P',
    location: 'Rayachoti',
    service: 'Fertility Treatment',
    quote: 'Successful IVF treatment after 5 years of waiting. We are forever grateful to Dhruva Hospitals.',
  },
  {
    name: 'Venkata Rao',
    location: 'Kadapa',
    service: 'Paediatrics',
    quote: 'Best hospital for children in the region. Very professional and friendly staff.',
  },
];

export const faqs = [
  {
    question: 'What medical services does Dhruva Hospitals provide?',
    answer:
      'We offer fertility and IVF treatment, pregnancy care, gynaecology, cancer screening, a Level III NICU with paediatric care, diagnostics, general and laparoscopic surgery, and general medicine with critical care. Eye care and orthopaedic consultations are also available, along with 24/7 emergency support.',
  },
  {
    question: 'Is IVF treatment available at Dhruva Hospitals?',
    answer:
      'Yes. Dr. S Mounika Reddy, our infertility specialist, offers comprehensive fertility treatments including IUI, IVF, ICSI and advanced male infertility procedures.',
  },
  {
    question: 'Is Dhruva Hospitals open 24/7?',
    answer: `Yes. Emergency, NICU and critical care services are available 24/7. Outpatient (OPD) consultations run from ${site.hours.opd}.`,
  },
  {
    question: 'Does Dhruva Hospitals provide maternity and high-risk pregnancy care?',
    answer:
      'Yes. Our obstetric team provides antenatal care, normal and caesarean deliveries, and specialised management of high-risk pregnancies such as PIH and diabetes in pregnancy, backed by our Level III NICU.',
  },
  {
    question: 'Do you have a NICU for newborns?',
    answer:
      'Yes. Our Level III NICU, managed by neonatologist Dr. Sudarshan Reddy K, cares for premature and critically ill newborns round the clock, with HFNC and CPAP breathing support.',
  },
  {
    question: 'How can I book an appointment at Dhruva Hospitals?',
    answer: `Book online using the Book Now form, message us on WhatsApp at ${site.phones.main.display}, or call our reception. Our team will confirm a convenient time with you.`,
  },
  {
    question: 'What are the visiting hours?',
    answer:
      'General visiting hours are 10:00 AM – 12:00 PM and 4:00 PM – 6:00 PM. Visiting is restricted in critical care units.',
  },
  {
    question: 'What should I bring for my appointment?',
    answer:
      'Please bring a valid identification document, previous medical reports, current prescriptions, and any scan or laboratory results related to your visit.',
  },
  {
    question: 'Does the hospital offer diagnostic services?',
    answer:
      'Yes. Our in-house laboratory and imaging units offer blood tests, hormone analysis, semen analysis, pathology, ECG, digital X-ray, ultrasound and Doppler studies.',
  },
  {
    question: 'How do I contact Dhruva Hospitals in an emergency?',
    answer: `Call our 24/7 emergency line at ${site.phones.emergency.display}. For an ambulance, call ${site.phones.ambulance.display}.`,
  },
];

export const gallery = [
  { src: '/images/hospital-exterior.jpg', alt: 'Dhruva Hospitals building, Kadapa' },
  { src: '/images/gallery/hospital-entrance.jpg', alt: 'Hospital entrance' },
  { src: '/images/gallery/reception.jpg', alt: 'Reception area' },
  { src: '/images/gallery/consultation-room.jpg', alt: 'Consultation room' },
  { src: '/images/gallery/paediatric-consultation.jpg', alt: 'Paediatric consultation' },
  { src: '/images/operation-theatre.jpg', alt: 'Modular operation theatre' },
  { src: '/images/gallery/paediatric-ward.jpg', alt: 'Paediatric ward' },
  { src: '/images/gallery/corridor.jpg', alt: 'Hospital corridor' },
  { src: '/images/gallery/consultation-cabin.jpg', alt: "Dr. Sudarshan Reddy's consultation room" },
];

export const videos = [
  { id: 'QhvX2uJfBwE', title: "Don't Ignore Fits in Babies! A Pediatrician Explains" },
  { id: 'zHVDePNQG7I', title: 'Seizures in Children: Important Precautions Every Parent Must Know' },
  { id: 'TIW3YuLW-Ts', title: 'Fertility Evaluation Before Marriage: What Every Couple Should Know' },
  { id: 'PGqVFTy6LM0', title: 'Expert Gynecology & Pediatric Care at Dhruva Hospitals' },
  { id: '5KnGxZwo108', title: 'Expert Care for Preterm Babies with Breathing Difficulties' },
];
