// General health, surgery, eye and bone articles for the health blog. Format: see lib/blog/index.js.
import { site } from '../site';

const date = '2026-10-27';
const phone = site.phones.main.display;
const emergency = site.phones.emergency.display;
const opd = site.hours.opd;

const nhs = (label, path) => ({ label: `NHS (UK): ${label}`, url: `https://www.nhs.uk${path}` });
const who = (label, slug) => ({ label: `WHO: ${label}`, url: `https://www.who.int/news-room/fact-sheets/detail/${slug}` });
const ada = { label: 'American Diabetes Association: Diabetes diagnosis', url: 'https://diabetes.org/about-diabetes/diagnosis' };

const base = {
  category: 'general',
  service: 'general-medicine',
  doctor: 'dr-b-surya',
  publishedOn: date,
  updatedOn: date,
  reviewedOn: null,
};

export const generalPosts = [
  {
    ...base,
    slug: 'diabetes-sugar-test-normal-levels',
    title: 'Sugar test results: normal, prediabetes and diabetes levels explained',
    seoTitle: 'Normal Sugar Levels and Diabetes Ranges',
    description:
      'Normal, prediabetes and diabetes ranges for fasting sugar, HbA1c, the 2-hour glucose test and random sugar, how to prepare, and what to do next.',
    answer:
      'Fasting blood sugar below 100 mg/dL is normal, 100 to 125 mg/dL is prediabetes, and 126 mg/dL or more suggests diabetes. For HbA1c, below 5.7% is normal, 5.7 to 6.4% is prediabetes and 6.5% or more suggests diabetes. A diagnosis is usually confirmed with a repeat test on another day, unless the sugar is very high with symptoms.',
    sections: [
      {
        heading: 'Sugar test ranges',
        table: {
          columns: ['Test', 'Normal', 'Prediabetes', 'Diabetes'],
          rows: [
            ['Fasting blood sugar (after at least 8 hours without food)', 'Below 100 mg/dL', '100 to 125 mg/dL', '126 mg/dL or more'],
            ['HbA1c (average sugar over 2 to 3 months)', 'Below 5.7%', '5.7% to 6.4%', '6.5% or more'],
            ['2 hours after a 75 g glucose drink (OGTT)', 'Below 140 mg/dL', '140 to 199 mg/dL', '200 mg/dL or more'],
            ['Random blood sugar, with symptoms of diabetes', '', '', '200 mg/dL or more'],
          ],
        },
        after: [
          'These are the American Diabetes Association’s diagnostic ranges, which doctors in India also widely use. Pregnancy uses different cut-offs; see our article on the GDM test.',
        ],
      },
      {
        heading: 'How to prepare',
        list: [
          'For fasting sugar, eat nothing for at least 8 hours before the test, usually overnight. Plain water is allowed.',
          'HbA1c needs no fasting.',
          'Take your usual medicines unless your doctor says otherwise, and tell the lab what you take.',
        ],
      },
      {
        heading: 'Symptoms of diabetes',
        list: [
          'Feeling very thirsty',
          'Passing urine more often than usual',
          'Blurred vision',
          'Tiredness',
          'Losing weight without trying',
        ],
        after: [
          'Type 2 diabetes often causes mild symptoms or none for years, so regular check-ups and blood tests are the best way to find it early.',
        ],
      },
      {
        heading: 'If you have prediabetes',
        body: [
          'Prediabetes does not mean you will definitely get diabetes. Research shows that losing about 7% of your body weight and brisk walking for 30 minutes a day, five days a week, lowers the risk of type 2 diabetes by more than half. Get your sugar checked every 1 to 2 years.',
        ],
      },
      {
        heading: 'If you have diabetes',
        list: [
          'A diet plan, regular activity and, if needed, tablets or insulin',
          'Regular HbA1c checks to see how well your sugar is controlled',
          'Checks of BP, cholesterol, kidneys, eyes and feet, to prevent complications',
          'Stopping smoking',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          `Dr. B Surya (MBBS, MD General Medicine, JIPMER), our physician and diabetologist, manages diabetes and related conditions, with blood tests done in our in-house laboratory. Call ${phone} to book. OPD hours are ${opd}.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a fasting sugar of 110 mg/dL diabetes?',
        answer:
          'No. A fasting sugar of 100 to 125 mg/dL is in the prediabetes range. It is a warning sign worth acting on with diet, exercise and regular checks.',
      },
      {
        question: 'Can I check my sugar with a home glucometer instead?',
        answer:
          'A glucometer is useful for monitoring diabetes, but diagnosis should be made with a laboratory test in a healthcare setting.',
      },
    ],
    links: [
      { href: '/blog/gestational-diabetes-test-pregnancy', label: 'Sugar test in pregnancy (GDM)' },
      { href: '/blog/blood-tests-preparation-health-check', label: 'Blood tests: how to prepare' },
      { href: '/blog/cataract-diabetic-eye-check', label: 'Diabetic eye checks and cataract' },
      { href: '/services/general-medicine', label: 'Diabetes care at Dhruva Hospitals' },
    ],
    sources: [ada, who('Diabetes', 'diabetes')],
  },
  {
    ...base,
    slug: 'dengue-fever-warning-signs',
    title: 'Dengue fever: symptoms, warning signs and when to go to hospital',
    seoTitle: 'Dengue Fever: Warning Signs and Care',
    description:
      'Dengue symptoms, the warning signs of severe dengue that often appear as the fever falls, safe home care, which painkillers to avoid, and prevention.',
    answer:
      'Dengue usually causes high fever, severe headache, pain behind the eyes, body and joint pains, nausea and rash, and most people recover in 1 to 2 weeks. Severe dengue can start as the fever settles: watch for severe tummy pain, repeated vomiting, fast breathing, bleeding gums or nose, blood in vomit or stools, restlessness or cold, pale skin, and go to hospital immediately. Use paracetamol, not ibuprofen or aspirin.',
    sections: [
      {
        heading: 'Common symptoms',
        list: [
          'High fever',
          'Severe headache and pain behind the eyes',
          'Muscle and joint pains',
          'Nausea and vomiting',
          'Swollen glands and a rash',
        ],
        after: ['Symptoms usually start 4 to 10 days after an infected mosquito bite and last 2 to 7 days. Many infected people have no symptoms at all.'],
      },
      {
        heading: 'Warning signs of severe dengue',
        body: ['These often appear after the fever has gone down, so keep watching even when the temperature falls:'],
        list: [
          'Severe tummy pain',
          'Vomiting that does not stop',
          'Fast breathing',
          'Bleeding gums or nose',
          'Blood in vomit or stools',
          'Extreme tiredness, restlessness or weakness',
          'Pale, cold skin',
          'Severe thirst',
        ],
        after: [`Anyone with these signs needs hospital care immediately. Call ${emergency}.`],
      },
      {
        heading: 'Care at home for mild dengue',
        list: [
          'Rest and drink plenty of fluids.',
          'Use paracetamol for fever and pain, at the correct dose.',
          'Do not take ibuprofen, aspirin or other anti-inflammatory painkillers, as they increase the risk of bleeding.',
          'See a doctor for blood tests, which help confirm dengue and follow the platelet count.',
        ],
      },
      {
        heading: 'Who is at higher risk',
        body: [
          'People who have had dengue before are at greater risk of severe dengue with a second infection. Babies, pregnant women, older people and people with long-term illnesses also need closer watching.',
        ],
      },
      {
        heading: 'Preventing dengue',
        list: [
          'Avoid mosquito bites, especially during the day, when dengue mosquitoes bite most.',
          'Empty or cover water stored in tanks, buckets, coolers, pots and old tyres, where mosquitoes breed.',
          'Wear long sleeves and use mosquito repellent and screens or nets.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          'Our physicians and paediatricians treat dengue in adults and children, with blood tests in our laboratory, a 24/7 emergency team and an ICU for severe cases.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does papaya leaf juice cure dengue?',
        answer:
          'There is no specific medicine that cures dengue. Treatment is careful monitoring, fluids and paracetamol. Do not delay seeing a doctor in favour of home remedies.',
      },
      {
        question: 'Is a low platelet count always dangerous?',
        answer:
          'Platelets often fall in dengue. Your doctor decides how serious it is from your symptoms, the warning signs and repeated blood tests, not from one number alone.',
      },
    ],
    links: [
      { href: '/blog/fever-in-children', label: 'Fever in children' },
      { href: '/blog/general-physician-kadapa-when-to-see', label: 'When to see a general physician' },
      { href: '/services/general-medicine', label: 'General medicine at Dhruva Hospitals' },
    ],
    sources: [who('Dengue and severe dengue', 'dengue-and-severe-dengue'), nhs('Dengue', '/conditions/dengue/')],
  },
  {
    ...base,
    slug: 'general-physician-kadapa-when-to-see',
    title: 'When to see a general physician, and when to go to emergency',
    seoTitle: 'General Physician in Kadapa: When to Visit',
    description:
      'What a general physician treats, from fevers to diabetes and BP, when to get a health check-up, and emergency signs such as chest pain and stroke.',
    answer:
      'See a general physician (MD General Medicine) for fevers that last more than a few days, infections, diabetes, high BP, thyroid problems, breathlessness, tiredness, and regular health check-ups. Do not wait for an appointment if you have chest pain, sudden weakness of the face or arm, slurred speech, severe breathlessness or fainting: call an ambulance immediately.',
    sections: [
      {
        heading: 'What a general physician treats',
        list: [
          'Fevers and infections, including dengue, typhoid and urine infections',
          'Diabetes, high BP and high cholesterol',
          'Thyroid problems',
          'Breathlessness, cough and chest infections',
          'Tiredness, weight loss, dizziness and general weakness',
          'Stomach, liver and kidney problems in adults',
          'Seriously ill patients who need intensive care',
        ],
      },
      {
        heading: 'Heart attack: act immediately',
        list: [
          'Chest pain that feels tight, crushing or squeezing, which may spread to the arm, neck or jaw',
          'Shortness of breath, sweating, nausea, or a feeling like indigestion',
          'Pale or grey skin',
        ],
        after: [
          'Call an ambulance (108) immediately and do not drive yourself. Sit and rest while waiting. If you have aspirin and are not allergic to it, take one 300 mg tablet. If the person stops breathing, start CPR.',
        ],
      },
      {
        heading: 'Stroke: remember FAST',
        list: [
          'Face: one side of the face droops',
          'Arms: weakness or numbness in one arm',
          'Speech: slurred or confused speech',
          'Time: call an ambulance (108) immediately',
        ],
        after: [
          'Other signs include sudden loss of vision, severe headache, dizziness or falling. Even if the symptoms pass quickly, get help straight away. Go to a hospital that can do an urgent CT or MRI scan, because some stroke treatments only work within hours. Do not give food, water or aspirin to someone with stroke signs.',
        ],
      },
      {
        heading: 'When a health check-up makes sense',
        body: [
          'Adults with a family history of diabetes, heart disease or high BP, smokers, people who are overweight, and everyone over 40 benefit from regular checks of BP, blood sugar, cholesterol, kidney function and weight. Your physician can advise which tests you need and how often.',
        ],
      },
      {
        heading: 'What to bring',
        list: [
          'A list of your medicines, or the medicines themselves',
          'Previous reports, prescriptions and discharge summaries',
          'A note of your symptoms: when they started and what makes them better or worse',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          `Dr. B Surya (MBBS, MD General Medicine, JIPMER) is our consultant physician, diabetologist and critical care specialist. Consultations are in Telugu, English or Tamil. The hospital has a 24/7 emergency team, an ICU with ventilator support, an in-house laboratory, ECG and digital X-ray. Call ${phone} to book. OPD hours are ${opd}. In an emergency, call ${emergency}.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a general physician the same as a family doctor?',
        answer:
          'Both see adults with a wide range of problems. A general physician (MD General Medicine) has postgraduate training in diagnosing and treating adult medical illnesses, including complex and critical cases.',
      },
      {
        question: 'How long should I wait with a fever before seeing a doctor?',
        answer:
          'See a doctor if a fever lasts more than 2 to 3 days, is very high, or comes with severe headache, rash, breathlessness, vomiting, bleeding or confusion. Older adults and people with diabetes should be seen sooner.',
      },
    ],
    links: [
      { href: '/blog/diabetes-sugar-test-normal-levels', label: 'Sugar test results explained' },
      { href: '/blog/blood-tests-preparation-health-check', label: 'Blood tests: how to prepare' },
      { href: '/blog/dengue-fever-warning-signs', label: 'Dengue fever: warning signs' },
      { href: '/doctors/dr-b-surya', label: 'Dr. B Surya, physician and diabetologist' },
    ],
    sources: [nhs('Heart attack', '/conditions/heart-attack/'), nhs('Symptoms of a stroke', '/conditions/stroke/symptoms/'), who('Hypertension', 'hypertension')],
  },
  {
    ...base,
    slug: 'blood-tests-preparation-health-check',
    service: 'diagnostics',
    title: 'Blood tests: common tests, fasting rules and how to prepare',
    seoTitle: 'Blood Tests: Fasting and How to Prepare',
    description:
      'What common blood tests check (CBC, sugar, HbA1c, lipids, kidney, liver, thyroid), which need fasting, how to prepare, and our diagnostic lab in Kadapa.',
    answer:
      'Most blood tests need no special preparation. Fasting sugar and some cholesterol (lipid) tests need you to eat nothing but water for 8 to 12 hours beforehand, so they are usually done in the morning. Take your usual medicines unless your doctor says otherwise. The blood draw takes a few minutes.',
    sections: [
      {
        heading: 'Common blood tests',
        table: {
          columns: ['Test', 'What it checks'],
          rows: [
            ['Complete blood count (CBC)', 'Haemoglobin, white cells and platelets: anaemia, infection and some blood conditions'],
            ['Blood sugar and HbA1c', 'Diabetes and how well it is controlled'],
            ['Lipid profile', 'Cholesterol and triglycerides: heart and stroke risk'],
            ['Kidney function (urea, creatinine, electrolytes)', 'How well the kidneys are working'],
            ['Liver function tests', 'Liver health'],
            ['Thyroid tests (TSH)', 'An underactive or overactive thyroid'],
          ],
        },
      },
      {
        heading: 'Which tests need fasting?',
        list: [
          'Fasting blood sugar: at least 8 hours with nothing but water',
          'Lipid profile: some labs and doctors ask for fasting, usually 8 to 12 hours; ask when you book',
          'HbA1c, CBC, thyroid and most other tests: no fasting needed',
        ],
      },
      {
        heading: 'How to prepare',
        list: [
          'Drink water as usual, as it makes the blood draw easier.',
          'Take your regular medicines unless the doctor tells you to stop one, such as a blood thinner before some tests.',
          'Bring your prescription and earlier reports, so the results can be compared.',
          'Tell the staff if you feel faint or anxious about needles, so they can help you feel comfortable.',
        ],
      },
      {
        heading: 'On the day',
        body: [
          'A small amount of blood is taken from a vein, usually inside the elbow. You feel a brief scratch. Afterwards, press on the cotton for a few minutes to reduce bruising. Your doctor will explain the results; ask if anything is unclear.',
        ],
      },
      {
        heading: 'Diagnostics at Dhruva Hospitals',
        body: [
          `Our in-house laboratory does routine and specialised blood tests on fully automated analysers, hormone tests and semen analysis. The hospital also has ECG, digital X-ray, and ultrasound with Doppler. Call ${phone} for test timings.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I drink tea or coffee before a fasting test?',
        answer: 'No. Only plain water is allowed during the fasting time. Tea, coffee and milk can change the results.',
      },
      {
        question: 'Can I get tests done without a doctor’s prescription?',
        answer:
          'Call us to ask. A doctor’s advice helps you choose the right tests and understand the results, especially if any value is abnormal.',
      },
    ],
    links: [
      { href: '/blog/diabetes-sugar-test-normal-levels', label: 'Sugar test results explained' },
      { href: '/blog/semen-analysis-test', label: 'Semen analysis: how to prepare' },
      { href: '/blog/general-physician-kadapa-when-to-see', label: 'When to see a general physician' },
      { href: '/services/diagnostics', label: 'Diagnostics and lab at Dhruva Hospitals' },
    ],
    sources: [nhs('Blood tests', '/tests-and-treatments/blood-tests/'), ada],
  },
  {
    ...base,
    slug: 'gallstones-laparoscopic-surgery',
    service: 'surgery',
    doctor: 'dr-m-vinay-kumar',
    title: 'Gallbladder stones: symptoms, tests and laparoscopic surgery',
    seoTitle: 'Gallbladder Stones: Symptoms and Surgery',
    description:
      'Gallstone pain (biliary colic), warning signs such as fever and yellow eyes, when surgery is needed, and what laparoscopic gallbladder removal involves.',
    answer:
      'Many people have gallstones without symptoms and need no treatment. Stones that cause pain, usually severe pain in the upper middle or upper right tummy lasting more than 30 minutes, are treated by removing the gallbladder, most often by keyhole (laparoscopic) surgery. Fever, yellow skin or eyes, or severe constant pain need urgent care.',
    sections: [
      {
        heading: 'Symptoms',
        list: [
          'Sudden, severe pain in the middle of the upper tummy or under the ribs on the right, lasting from 30 minutes to several hours',
          'Pain that may spread to the back or right shoulder',
          'Nausea or vomiting',
        ],
        after: ['This pain is called biliary colic. It often comes after a heavy or fatty meal.'],
      },
      {
        heading: 'Go to hospital immediately if',
        list: [
          'You have sudden, severe tummy pain, or pain spreading to the back with vomiting',
          'You have a high temperature or shivering',
          'Your skin or the whites of your eyes turn yellow',
        ],
        after: [`These can mean an infected gallbladder, a blocked bile duct or pancreatitis. Call ${emergency}.`],
      },
      {
        heading: 'Who gets gallstones',
        body: [
          'Gallstones are more common in people over 40, women, people living with obesity, those who lose weight very quickly, people with diabetes, and those whose diet is high in fat and low in fibre.',
        ],
      },
      {
        heading: 'Tests',
        body: ['An ultrasound scan of the abdomen is the main test. Blood tests check the liver and look for infection.'],
      },
      {
        heading: 'Treatment',
        body: [
          'Stones that cause no symptoms usually need no treatment. If they cause pain or complications, the usual treatment is removal of the gallbladder (cholecystectomy). You can live normally without a gallbladder.',
          'Laparoscopic (keyhole) cholecystectomy uses a few small cuts and a camera, so there is less pain and a quicker return home than with open surgery. Stones in the bile duct may need an endoscopic procedure (ERCP).',
          'While you wait for surgery, a low-fat diet and painkillers can help.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          `Dr. M Vinay Kumar (MBBS, MS General Surgery, FMAS) performs laparoscopic surgery in modular operation theatres with laminar air flow, with ICU support after surgery if needed. Ultrasound is available in the hospital. Call ${phone} to book. OPD hours are ${opd}.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Can gallstones be dissolved with medicine or home remedies?',
        answer:
          'Home remedies do not remove gallstones. If stones are causing pain, surgery to remove the gallbladder is the main treatment.',
      },
      {
        question: 'How soon can I eat normally after gallbladder surgery?',
        answer: 'Most people return to their usual diet gradually over a few weeks. Your surgeon will give you advice for your recovery.',
      },
    ],
    links: [
      { href: '/blog/general-physician-kadapa-when-to-see', label: 'When to see a doctor' },
      { href: '/doctors/dr-m-vinay-kumar', label: 'Dr. M Vinay Kumar, laparoscopic surgeon' },
      { href: '/services/surgery', label: 'Laparoscopic surgery at Dhruva Hospitals' },
    ],
    sources: [nhs('Gallstones', '/conditions/gallstones/')],
  },
  {
    ...base,
    slug: 'knee-pain-arthritis',
    service: 'orthopaedics',
    doctor: null,
    title: 'Knee pain and arthritis: causes, home care and treatment',
    seoTitle: 'Knee Pain and Arthritis: Causes, Treatment',
    description:
      'Common causes of knee pain, from sprains to osteoarthritis, home care, exercise and weight loss, urgent warning signs, and orthopaedic care in Kadapa.',
    answer:
      'Most knee pain from strains improves with rest, ice and simple painkillers within a few weeks. Osteoarthritis, common after 45, causes pain and stiffness that gets worse with use; regular exercise, weight loss and physiotherapy help most people, and surgery is needed only in a small number. See a doctor urgently if the knee is very swollen, hot and red with fever, locks or gives way, or you cannot bear weight.',
    sections: [
      {
        heading: 'Common causes',
        table: {
          columns: ['Symptoms', 'Possible cause'],
          rows: [
            ['Pain after twisting, overstretching or overuse', 'Sprain or strain'],
            ['Knee gives way, cannot straighten, popping at the time of injury', 'Ligament, meniscus or cartilage injury'],
            ['Pain and stiffness in both knees, mild swelling, in older adults', 'Osteoarthritis'],
            ['Warm, red swelling, worse when kneeling', 'Bursitis'],
            ['Hot, red and very painful attacks', 'Gout or joint infection'],
          ],
        },
      },
      {
        heading: 'Home care for a recent strain',
        list: [
          'Rest the knee and avoid standing for long periods.',
          'Use an ice pack wrapped in a cloth for up to 20 minutes every 2 to 3 hours.',
          'Use simple painkillers such as paracetamol, or an anti-inflammatory gel, if suitable for you.',
          'See a doctor if the pain does not improve within a few weeks.',
        ],
      },
      {
        heading: 'Osteoarthritis of the knee',
        body: [
          'In osteoarthritis the protective cartilage in the joint wears down. It is more common with age, in women, after injuries and in people who are overweight. Pain usually gets worse with use, and morning stiffness lasts less than 30 minutes.',
          'It cannot be cured, but it does not always get worse, and symptoms can improve. Treatment includes regular exercise, strengthening exercises with a physiotherapist, weight loss, suitable footwear and painkillers. Surgery, including knee replacement, is considered only when these have not helped and the damage is severe.',
        ],
      },
      {
        heading: 'See a doctor urgently if',
        list: [
          'The knee is very painful, badly swollen or has changed shape',
          'You cannot move the knee or put weight on it',
          'It locks or gives way',
          'It is hot and red and you have a fever, which can mean infection',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          `Senior orthopaedic surgeon Dr. B Someshwar Reddy (MBBS, MS Ortho) treats knee and joint pain, arthritis and injuries, with digital X-ray in the hospital and a 24/7 emergency team for injuries. Bring any X-rays or scan reports you already have. Call ${phone} to book.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I avoid walking if I have knee arthritis?',
        answer:
          'No. Regular activity such as walking, within your comfort, and strengthening exercises usually help arthritis. Ask a physiotherapist for a plan that suits you.',
      },
      {
        question: 'Do I need an MRI for knee pain?',
        answer:
          'Not always. Osteoarthritis is usually diagnosed from your symptoms and an examination, sometimes with an X-ray. An MRI is used for some injuries, such as suspected ligament or meniscus tears.',
      },
    ],
    links: [
      { href: '/services/orthopaedics', label: 'Orthopaedics at Dhruva Hospitals' },
      { href: '/blog/general-physician-kadapa-when-to-see', label: 'When to see a doctor' },
      { href: '/blog/blood-tests-preparation-health-check', label: 'Blood tests and X-ray at Dhruva Hospitals' },
    ],
    sources: [nhs('Knee pain', '/symptoms/knee-pain/'), nhs('Osteoarthritis', '/conditions/osteoarthritis/')],
  },
  {
    ...base,
    slug: 'cataract-diabetic-eye-check',
    service: 'ophthalmology',
    doctor: null,
    title: 'Cataract, glaucoma and diabetic eye checks: when to see an eye doctor',
    seoTitle: 'Cataract and Diabetic Eye Check-ups',
    description:
      'Symptoms of cataract, why glaucoma and diabetic eye disease often have no early symptoms, how often to get your eyes checked, and eye emergencies.',
    answer:
      'Cataract makes vision slowly blurred or dim, with glare and faded colours, and is treated with surgery when it affects daily life. Glaucoma and diabetic eye disease often cause no symptoms until sight is damaged, so regular eye checks matter: people with diabetes need an eye examination every 1 to 2 years. Sudden eye pain, a red eye with blurred vision, or sudden vision loss is an emergency.',
    sections: [
      {
        heading: 'Cataract',
        body: [
          'A cataract is clouding of the lens of the eye. It usually develops slowly in older adults, often in both eyes. WHO lists cataract among the leading causes of vision impairment worldwide.',
        ],
        list: [
          'Blurred or dim vision, and difficulty seeing at night',
          'Glare and halos around lights',
          'Colours looking faded',
          'Needing new glasses often',
        ],
        after: [
          'Cataracts are treated with surgery when they affect your daily life. The cloudy lens is replaced with an artificial one, usually under local anaesthetic. Diabetes, smoking, long-term steroid use and too much sunlight raise the risk.',
        ],
      },
      {
        heading: 'Glaucoma',
        body: [
          'Glaucoma damages the nerve that connects the eye to the brain, usually because of raised pressure in the eye. It is most common over 50, develops slowly and usually has no symptoms until vision is lost, which is why regular eye tests are important, at least every 2 years, and more often if a parent, brother or sister has glaucoma. Treatment with drops, laser or surgery slows the damage.',
        ],
      },
      {
        heading: 'Diabetic eye disease',
        body: [
          'Diabetes can damage the blood vessels at the back of the eye (diabetic retinopathy). It usually has no symptoms at first, so people with diabetes need an eye examination every 1 to 2 years, or as advised. Good control of sugar and BP lowers the risk, and early treatment helps prevent sight loss.',
        ],
      },
      {
        heading: 'Eye emergencies',
        list: [
          'Sudden, intense eye pain, a red eye, headache and nausea, or rainbow circles around lights',
          'Sudden loss or worsening of vision, or a curtain or shadow over your vision',
          'A sudden shower of floaters or flashes of light',
          'An eye injury or a chemical in the eye; rinse with clean water straight away',
        ],
        after: ['Get emergency care immediately.'],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          `Ophthalmologist Dr. Vasanta Kumari (MBBS, MS) offers eye check-ups, care for common eye problems, and eye checks for people with diabetes or high BP. If you need surgery or a specialised test, the doctor explains your options and plans your follow-up. Bring your current glasses and earlier eye reports, and call ${phone} to confirm the eye OPD timings.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Does a cataract need to be “ripe” before surgery?',
        answer:
          'No. Surgery is advised when the cataract affects your daily life, such as reading, driving or work, not when it reaches a particular stage.',
      },
      {
        question: 'I have diabetes but my vision is fine. Do I still need an eye check?',
        answer:
          'Yes. Diabetic eye damage usually has no symptoms in the early stages, when treatment works best.',
      },
    ],
    links: [
      { href: '/services/ophthalmology', label: 'Eye care at Dhruva Hospitals' },
      { href: '/blog/diabetes-sugar-test-normal-levels', label: 'Sugar test results explained' },
      { href: '/blog/general-physician-kadapa-when-to-see', label: 'When to see a general physician' },
    ],
    sources: [
      nhs('Cataracts in adults', '/conditions/cataracts/'),
      nhs('Glaucoma', '/conditions/glaucoma/'),
      nhs('Diabetic retinopathy', '/conditions/diabetic-retinopathy/'),
      who('Blindness and vision impairment', 'blindness-and-visual-impairment'),
    ],
  },
];
