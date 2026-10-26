// Pregnancy & delivery articles for the health blog. Format: see lib/blog/index.js.
import { site } from '../site';

const date = '2026-10-27';
const emergency = site.phones.emergency.display;
const ambulance = site.phones.ambulance.display;
const phone = site.phones.main.display;
const opd = site.hours.opd;
const pcpndt =
  'Sex determination of the foetus is not done at Dhruva Hospitals. It is prohibited under the PC & PNDT Act, 1994.';

const nhs = (label, path) => ({ label: `NHS (UK): ${label}`, url: `https://www.nhs.uk${path}` });
const gdmGuideline = {
  label: 'National Health Mission, India: Diagnosis and management of gestational diabetes mellitus (PDF)',
  url: 'https://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/Gestational-Diabetes-Mellitus.pdf',
};

const base = {
  category: 'pregnancy',
  service: 'pregnancy',
  doctor: 'dr-mounika-reddy',
  publishedOn: date,
  updatedOn: date,
  reviewedOn: null,
};

export const pregnancyPosts = [
  {
    ...base,
    slug: 'early-signs-of-pregnancy',
    title: 'Early signs of pregnancy and when to take a pregnancy test',
    seoTitle: 'Early Signs of Pregnancy and When to Test',
    description:
      'The first signs of pregnancy, when a home urine test is most reliable, what a negative result means, and when to book your first check-up in Kadapa.',
    answer:
      'Early signs usually start around 4 to 6 weeks of pregnancy. A missed period is the most common; nausea, unusual tiredness, sore breasts and passing urine more often are others. A home urine test is most reliable from the first day of a missed period. If it is positive, book your first pregnancy check-up.',
    sections: [
      {
        heading: 'Common early signs',
        body: ['Not everyone has every sign, and some women notice very little at first. The signs most often noticed are:'],
        list: [
          'A missed period',
          'Light spotting around the time your period is due (implantation bleeding)',
          'Nausea or vomiting, which can happen at any time of day, not only in the morning',
          'Feeling very tired after your usual daily work',
          'Sore, tender or fuller breasts',
          'Passing urine more often, without pain or burning',
          'Constipation, a little more white discharge without itching, a metallic taste, or a dislike of certain smells and foods',
          'Mood changes',
        ],
      },
      {
        heading: 'When to do a home pregnancy test',
        body: [
          'Most urine pregnancy test kits from a medical shop work from the first day of a missed period. If your periods are irregular and you do not know when the next one is due, test at least 21 days after you last had unprotected sex.',
          'You can test at any time of day; it does not have to be the first urine of the morning. Follow the instructions in the kit carefully.',
        ],
      },
      {
        heading: 'Reading the result',
        body: [
          'A positive result is almost always correct. A negative result is less reliable, especially if you tested too early. If the test is negative but your period still has not come, repeat it after a few days. If the second test is also negative and there is still no period, see a gynaecologist to find the reason.',
          'Contraceptive pills do not stop a pregnancy test from working.',
        ],
      },
      {
        heading: 'What to do after a positive test',
        list: [
          'Book your first antenatal check-up. The doctor will confirm the pregnancy, work out your due date and plan your scans and blood tests.',
          'Start folic acid if you are not already taking it. It is advised for the first 12 weeks of pregnancy; ask your doctor for the right dose for you.',
          'Tell the doctor about any medicines you take regularly, and do not start or stop medicines on your own.',
          'Avoid alcohol and smoking, and limit tea and coffee.',
        ],
        after: [
          `At Dhruva Hospitals, pregnancy check-ups are with our obstetrics and gynaecology team. Call ${phone} to book. OPD hours are ${opd}.`,
        ],
      },
      {
        heading: 'Symptoms that need a doctor the same day',
        list: [
          'Bleeding from the vagina, especially if it is heavy or comes with pain',
          'Severe pain low in the tummy, particularly on one side',
          'Pain in the tip of the shoulder, dizziness or fainting',
          'Vomiting so often that you cannot keep food or water down',
        ],
        after: [
          `Severe tummy pain with dizziness or fainting can be a sign of an ectopic pregnancy and is an emergency. Call ${emergency} or come straight to the hospital.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'How soon after sex can I take a pregnancy test?',
        answer:
          'Most tests work from the first day of a missed period. If you are not sure when your period is due, wait at least 21 days after unprotected sex. Testing too early can give a false negative result.',
      },
      {
        question: 'Can I be pregnant if the test is negative?',
        answer:
          'Yes, especially if you tested early. Repeat the test after a few days. If it is still negative and your period has not come, see a gynaecologist.',
      },
      {
        question: 'When should I have my first scan?',
        answer:
          'Your doctor will advise you. A dating scan is usually done between 11 and 14 weeks. An earlier scan is done if you have pain or bleeding.',
      },
    ],
    links: [
      { href: '/blog/antenatal-check-up-schedule', label: 'Pregnancy check-ups: what happens at each visit' },
      { href: '/blog/pregnancy-scans-guide', label: 'Which pregnancy scans you need and when' },
      { href: '/blog/bleeding-in-early-pregnancy', label: 'Bleeding or pain in early pregnancy' },
      { href: '/services/pregnancy', label: 'Pregnancy care at Dhruva Hospitals' },
    ],
    sources: [
      nhs('Signs and symptoms that might mean you’re pregnant', '/pregnancy/trying-for-a-baby/signs-and-symptoms-that-might-mean-youre-pregnant/'),
      nhs('Doing a pregnancy test', '/pregnancy/trying-for-a-baby/doing-a-pregnancy-test/'),
      nhs('Folic acid', '/medicines/folic-acid/'),
      nhs('Ectopic pregnancy', '/conditions/ectopic-pregnancy/'),
    ],
  },
  {
    ...base,
    slug: 'antenatal-check-up-schedule',
    title: 'Pregnancy check-ups: how often and what happens at each visit',
    seoTitle: 'Pregnancy Check-up Schedule, Visit by Visit',
    description:
      'How often you need antenatal check-ups, what is checked at each visit, which scans and blood tests to expect, and what to bring to your appointments.',
    answer:
      'Check-ups start as soon as you know you are pregnant and become more frequent in the last three months. As a guide, the UK’s NHS offers at least 10 check-ups in a first pregnancy and 7 if you have had a baby before. Every visit checks your blood pressure, urine and your baby’s growth. If your pregnancy is high-risk, your doctor will see you more often.',
    sections: [
      {
        heading: 'Your first visit',
        body: ['Book it as soon as a pregnancy test is positive. The first visit usually takes longer than later ones. Expect:'],
        list: [
          'Questions about your last period, past pregnancies, illnesses, medicines and family history',
          'Blood pressure, weight and a urine test',
          'Blood tests, including your blood group and haemoglobin',
          'A blood sugar test, because India’s guidelines advise testing for diabetes in pregnancy at the first visit',
          'Advice on diet, folic acid and the scans you will need',
        ],
      },
      {
        heading: 'What is checked at every visit',
        list: [
          'Blood pressure, to look for high BP and pre-eclampsia',
          'Urine, for protein and infection',
          'Your weight and how you are feeling, including mood and sleep',
          'The size of your bump, to follow your baby’s growth from mid-pregnancy',
          'Your baby’s movements, once you can feel them',
        ],
      },
      {
        heading: 'Scans and tests by stage',
        table: {
          columns: ['Stage', 'What usually happens'],
          rows: [
            ['11 to 14 weeks', 'Dating scan to confirm the due date, check early development and see if there is more than one baby. Screening for some chromosomal conditions can be offered.'],
            ['18 to 21 weeks', 'Anomaly (mid-pregnancy) scan to check the baby’s body in detail.'],
            ['24 to 28 weeks', 'Repeat blood sugar test (75 g glucose test) if the first one was normal.'],
            ['Around 28 weeks', 'Blood tests for haemoglobin and blood group. If your blood group is Rh negative, the doctor discusses the anti-D injection.'],
            ['From 36 weeks', 'Checking the baby’s position and planning the delivery.'],
            ['40 to 41 weeks', 'Discussing your options if the baby has not yet arrived.'],
          ],
        },
        after: ['Your doctor may add growth scans, Doppler scans or extra blood tests, depending on your health and your baby’s growth.'],
      },
      {
        heading: 'When to call without waiting for your next visit',
        list: [
          'Bleeding from the vagina',
          'A severe headache, blurred vision, or sudden swelling of the face, hands or feet',
          'Your baby moving less than usual, or a change in the usual pattern of movements',
          'Fluid leaking from the vagina',
          'Fever, or burning when passing urine',
          'Severe tummy pain',
        ],
        after: [`Our 24/7 emergency line is ${emergency}. Call at any hour; do not wait until the next day.`],
      },
      {
        heading: 'What to bring to each visit',
        list: [
          'Your pregnancy file or card, with all earlier reports and scans',
          'A list of the medicines you take',
          'Aadhaar or another photo ID',
          'The questions you want to ask',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many scans are needed in a normal pregnancy?',
        answer:
          'Most healthy pregnancies need at least two: a dating scan at 11 to 14 weeks and an anomaly scan at 18 to 21 weeks. Your doctor may advise more if there is a medical reason.',
      },
      {
        question: 'Can I skip check-ups if I feel fine?',
        answer:
          'It is better not to. High blood pressure, diabetes in pregnancy and anaemia often cause no symptoms early on and are found only through routine checks.',
      },
      {
        question: 'I live abroad and plan to deliver in Kadapa. How do I manage check-ups?',
        answer:
          'Keep all reports from your doctor abroad and bring them to your first visit here. Our guide on delivering in Kadapa from the Gulf explains how to plan check-ups and travel.',
      },
    ],
    links: [
      { href: '/blog/pregnancy-scans-guide', label: 'Pregnancy scans explained' },
      { href: '/blog/gestational-diabetes-test-pregnancy', label: 'The sugar (GDM) test in pregnancy' },
      { href: '/blog/high-bp-in-pregnancy-pre-eclampsia', label: 'High BP in pregnancy and pre-eclampsia' },
      { href: '/guides/delivering-in-kadapa-from-dubai', label: 'Delivering in Kadapa from Dubai or the Gulf' },
    ],
    sources: [
      nhs('Antenatal care and appointments', '/pregnancy/your-pregnancy-care/your-antenatal-care-and-appointments/'),
      nhs('Ultrasound scans in pregnancy', '/pregnancy/your-pregnancy-care/ultrasound-scans/'),
      nhs('Your baby’s movements', '/pregnancy/keeping-well/your-babys-movements/'),
      gdmGuideline,
    ],
  },
  {
    ...base,
    slug: 'pregnancy-scans-guide',
    title: 'Pregnancy scans: which ultrasound scans you need and when',
    seoTitle: 'Pregnancy Scans: Which Ones and When',
    description:
      'The dating (NT) scan, the anomaly (TIFFA) scan and growth scans explained: when each is done, what it checks and how to prepare. Pregnancy ultrasound in Kadapa.',
    answer:
      'Most pregnancies need at least two ultrasound scans: a dating scan at 11 to 14 weeks, which can include the NT scan, and an anomaly scan at 18 to 21 weeks. Growth or Doppler scans are added when there is a medical reason. Ultrasound has no known risks to mother or baby.',
    sections: [
      {
        heading: 'The main scans in pregnancy',
        table: {
          columns: ['Scan', 'When', 'What it checks'],
          rows: [
            ['Early pregnancy scan', 'Before 11 weeks, if needed', 'Done if there is pain or bleeding, or to check where the pregnancy is. Not every woman needs one.'],
            ['Dating scan (NT scan)', '11 to 14 weeks', 'Confirms the due date, checks early development and shows twins. It can include the nuchal translucency (NT) measurement used in screening for Down’s syndrome.'],
            ['Anomaly scan (also called TIFFA or level II scan)', '18 to 21 weeks', 'A detailed check of the baby’s body for some physical conditions.'],
            ['Growth and Doppler scans', 'Later pregnancy, when advised', 'Check the baby’s growth, the fluid around the baby, the placenta and blood flow. Often advised with high BP, diabetes or twins.'],
          ],
        },
      },
      {
        heading: 'Is ultrasound safe?',
        body: [
          'Ultrasound uses sound waves, not X-rays. Scans are painless and have no known side effects for mothers or babies.',
          'A scan can sometimes find something that needs further tests. Your doctor will explain any finding and the choices you have. Scans cannot detect every condition, so tell your doctor if you are worried even after a normal scan.',
        ],
      },
      {
        heading: 'How to prepare',
        list: [
          'Wear loose, two-piece clothing so your tummy can be uncovered easily.',
          'Bring your earlier scan reports and your pregnancy file.',
          'Ask whether you need a full bladder. It depends on the type of scan and how many weeks pregnant you are.',
          'A scan usually takes 20 to 30 minutes, and longer if the baby is lying in an awkward position.',
        ],
      },
      {
        heading: 'Sex determination is not done',
        body: [
          pcpndt,
          'Under Indian law, no hospital or scan centre may tell parents the sex of the baby. Pregnancy scans are done to check the baby’s health and growth.',
        ],
      },
      {
        heading: 'Scans at Dhruva Hospitals',
        body: [
          'Ultrasound and Doppler scans are available in the hospital. Your obstetrician will tell you which scans you need and when, and go through the reports with you.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is the NT scan compulsory?',
        answer:
          'No. Screening is your choice. Your doctor will explain what the NT scan and the related blood test can and cannot tell you before you decide.',
      },
      {
        question: 'Can a scan show that my baby is completely normal?',
        answer:
          'Scans find many physical conditions, but not all of them. Most scans show a healthy baby, but if you are worried about anything, tell your doctor.',
      },
      {
        question: 'Can I find out if it is a boy or a girl?',
        answer: `No. ${pcpndt}`,
      },
    ],
    links: [
      { href: '/blog/antenatal-check-up-schedule', label: 'Pregnancy check-ups, visit by visit' },
      { href: '/blog/early-signs-of-pregnancy', label: 'Early signs of pregnancy' },
      { href: '/services/diagnostics', label: 'Ultrasound and lab tests at Dhruva Hospitals' },
      { href: '/services/pregnancy', label: 'Pregnancy care at Dhruva Hospitals' },
    ],
    sources: [
      nhs('Ultrasound scans in pregnancy', '/pregnancy/your-pregnancy-care/ultrasound-scans/'),
      nhs('Antenatal care and appointments', '/pregnancy/your-pregnancy-care/your-antenatal-care-and-appointments/'),
    ],
  },
  {
    ...base,
    slug: 'pregnancy-diet-indian-foods',
    title: 'What to eat in pregnancy: a simple Indian diet guide',
    seoTitle: 'Pregnancy Diet: What to Eat and Avoid',
    description:
      'Which Indian foods to eat in pregnancy, which to avoid, how much tea and coffee is safe, and why folic acid and iron matter. Practical, simple advice.',
    answer:
      'You do not need to eat for two. Eat a variety of foods every day: rice, ragi, jowar or other grains; dal and other pulses; vegetables and fruit; milk or curd; and eggs, fish or meat if you eat them, well cooked. Take folic acid for the first 12 weeks, avoid alcohol, and keep caffeine under 200 mg a day.',
    sections: [
      {
        heading: 'Build each day around these foods',
        list: [
          'Grains for energy: rice, chapati, ragi, jowar, other millets and oats. Whole grains give more fibre, which helps with constipation.',
          'Protein every day: dal, chana, rajma, groundnuts, eggs, fish, chicken or meat.',
          'Plenty of vegetables and fruit, at least five portions a day, washed well.',
          'Milk, curd, buttermilk and paneer for calcium. Milk should be boiled or pasteurised.',
          'Iron-rich foods: green leafy vegetables, pulses, dried fruit, and meat if you eat it.',
        ],
      },
      {
        heading: 'Foods and drinks to avoid or limit',
        list: [
          'Alcohol: avoid it completely.',
          'Raw or undercooked meat, and eggs that are not cooked until the white and yolk are firm.',
          'Liver and liver products, which contain high levels of vitamin A.',
          'Unboiled or unpasteurised milk and foods made from it.',
          'Raw fish and shellfish, and shark, swordfish and marlin.',
          'More than 200 mg of caffeine a day. A cup of instant coffee has about 100 mg and a cup of tea about 75 mg.',
          'Herbal drinks containing liquorice root, and herbal or home remedies your doctor has not advised.',
        ],
      },
      {
        heading: 'Folic acid and iron',
        body: [
          'Folic acid helps your baby’s brain and spine develop. Take it for the first 12 weeks of pregnancy, and ideally start three months before you try to conceive. Some women need a higher dose, so ask your doctor.',
          'Your body needs more iron in pregnancy, and anaemia is common: the WHO estimates it affects 37% of pregnant women worldwide. Your doctor will check your haemoglobin and prescribe iron if you need it. Tea, coffee and milk reduce how much iron you absorb, so do not take them with your iron tablet.',
        ],
      },
      {
        heading: 'Food safety at home',
        list: [
          'Wash fruit and vegetables well before eating.',
          'Cook meat, chicken and eggs until there is no pink and they are steaming hot.',
          'Keep raw meat away from ready-to-eat food, and use a separate knife and board for it.',
          'Reheat leftovers until they are steaming hot all the way through.',
        ],
      },
      {
        heading: 'When you need a special diet plan',
        body: [
          'If you have diabetes in pregnancy, high blood pressure, anaemia or severe vomiting, ask your obstetrician for a diet plan that suits your condition.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to eat for two?',
        answer:
          'No. You may feel hungrier, but you do not need to eat for two, even with twins. Focus on the variety and quality of food rather than the amount.',
      },
      {
        question: 'Can I drink tea or coffee?',
        answer:
          'Yes, in moderation. Keep caffeine under 200 mg a day, for example two cups of instant coffee or two cups of tea.',
      },
      {
        question: 'Should I take extra vitamins?',
        answer:
          'Take folic acid, and any iron, calcium or other supplements your doctor prescribes. Do not add extra multivitamins on your own; too many can be harmful.',
      },
    ],
    links: [
      { href: '/blog/anaemia-in-pregnancy', label: 'Anaemia (low Hb) in pregnancy' },
      { href: '/blog/gestational-diabetes-test-pregnancy', label: 'The sugar (GDM) test in pregnancy' },
      { href: '/blog/early-signs-of-pregnancy', label: 'Early signs of pregnancy' },
      { href: '/services/pregnancy', label: 'Pregnancy care at Dhruva Hospitals' },
    ],
    sources: [
      nhs('Have a healthy diet in pregnancy', '/pregnancy/keeping-well/have-a-healthy-diet/'),
      nhs('Foods to avoid in pregnancy', '/pregnancy/keeping-well/foods-to-avoid/'),
      nhs('Folic acid', '/medicines/folic-acid/'),
      { label: 'WHO: Anaemia fact sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/anaemia' },
    ],
  },
  {
    ...base,
    slug: 'gestational-diabetes-test-pregnancy',
    title: 'Sugar test in pregnancy (GDM test): when it is done and what the result means',
    seoTitle: 'GDM Sugar Test in Pregnancy Explained',
    description:
      'How the 75 g glucose test for gestational diabetes is done in India, when to take it, what a 2-hour value of 140 mg/dL or more means, and how GDM is managed.',
    answer:
      'India’s national guidelines advise every pregnant woman to have a 75 g glucose test at her first check-up, and again at 24 to 28 weeks if the first result was normal. You drink 75 g of glucose and your blood sugar is checked 2 hours later. A 2-hour value of 140 mg/dL or more means gestational diabetes (GDM).',
    sections: [
      {
        heading: 'What gestational diabetes is',
        body: [
          'Gestational diabetes is high blood sugar that develops in pregnancy and usually goes away after the baby is born. It rarely causes symptoms, which is why pregnant women are tested.',
          'Most women with gestational diabetes have healthy babies. Without good control it can make the baby grow larger than usual, add extra fluid around the baby, and raise the chance of pre-eclampsia, early birth, and low sugar or jaundice in the newborn.',
        ],
      },
      {
        heading: 'How the test is done in India',
        ordered: [
          'You do not need to come fasting. Under the National Health Mission guidelines, the test is done whatever time you last ate.',
          'You drink 75 g of glucose dissolved in water.',
          'A blood sample is taken 2 hours later.',
          'A 2-hour value of 140 mg/dL or more is diagnosed as gestational diabetes.',
        ],
        after: [
          'Some doctors and labs use a fasting glucose tolerance test instead, which has different cut-offs. Follow the instructions your doctor gives you.',
        ],
      },
      {
        heading: 'When it is done',
        list: [
          'At your first antenatal visit, as early in pregnancy as possible',
          'Again at 24 to 28 weeks, if the first test was normal',
          'About 6 weeks after delivery, if you had gestational diabetes, to check that your sugar has returned to normal',
        ],
      },
      {
        heading: 'If you have gestational diabetes',
        list: [
          'You will get a diet plan and advice on safe activity, such as walking.',
          'You will check your blood sugar regularly.',
          'If diet and activity are not enough, you will need tablets or insulin.',
          'You will have closer check-ups and scans to follow your baby’s growth.',
          'Your doctor will plan the timing of delivery with you.',
        ],
      },
      {
        heading: 'After your baby is born',
        body: [
          'Gestational diabetes usually goes away after birth, but it raises your chance of type 2 diabetes later in life. Have your sugar tested after delivery, and keep having regular check-ups even when you feel well.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to fast for the GDM test?',
        answer:
          'Not for the single-step 75 g test recommended in India’s guidelines; it is done whether or not you have eaten. If your doctor has ordered a fasting test, follow those instructions.',
      },
      {
        question: 'Will my baby be born with diabetes?',
        answer:
          'No. Gestational diabetes does not mean your baby has diabetes. Good sugar control lowers the risks for your baby, such as growing too large or having low sugar after birth.',
      },
      {
        question: 'Will I need insulin?',
        answer:
          'Many women manage with diet and activity alone. If your sugar stays high, your doctor will add tablets or insulin, which are safe in pregnancy when prescribed.',
      },
    ],
    links: [
      { href: '/blog/antenatal-check-up-schedule', label: 'Pregnancy check-ups, visit by visit' },
      { href: '/blog/pregnancy-diet-indian-foods', label: 'What to eat in pregnancy' },
      { href: '/blog/diabetes-sugar-test-normal-levels', label: 'Sugar test results: normal and diabetic levels' },
      { href: '/services/pregnancy', label: 'High-risk pregnancy care at Dhruva Hospitals' },
    ],
    sources: [gdmGuideline, nhs('Gestational diabetes', '/conditions/gestational-diabetes/')],
  },
  {
    ...base,
    slug: 'high-bp-in-pregnancy-pre-eclampsia',
    title: 'High BP in pregnancy and pre-eclampsia: warning signs to know',
    seoTitle: 'High BP in Pregnancy: Pre-eclampsia Signs',
    description:
      'Pre-eclampsia symptoms such as severe headache, blurred vision and sudden swelling, who is at higher risk, and why every check-up measures your BP.',
    answer:
      'Pre-eclampsia is a pregnancy condition that causes high blood pressure and protein in the urine, usually after 20 weeks. Early on it rarely causes symptoms, so BP and urine are checked at every visit. A severe headache, blurred vision, pain below the ribs, vomiting or sudden swelling of the face, hands or feet needs urgent medical help.',
    sections: [
      {
        heading: 'Symptoms that need urgent help',
        list: [
          'A severe headache that does not go away with simple painkillers',
          'Vision problems, such as blurring or flashing lights',
          'Pain below the ribs',
          'Sudden swelling of the face, hands or feet',
          'Heartburn that does not settle with medicines',
          'Vomiting, or feeling very unwell',
        ],
        after: [
          'Pre-eclampsia can also start in the days or weeks after delivery.',
          `If you have any of these symptoms, call ${emergency} or come to the hospital straight away, day or night.`,
        ],
      },
      {
        heading: 'Who is at higher risk',
        list: [
          'Women with diabetes, high BP or kidney disease before pregnancy',
          'Women with autoimmune conditions such as lupus or antiphospholipid syndrome',
          'Pre-eclampsia in a previous pregnancy, or in your mother or sister',
          'A first pregnancy, age 40 or over, or 10 years or more since the last pregnancy',
          'Twins or triplets',
          'A BMI of 35 or more before pregnancy',
          'South Asian background, which includes Indian women',
        ],
      },
      {
        heading: 'How it is treated',
        body: [
          'Pre-eclampsia goes away only after the baby is born, but treatment keeps you and your baby safer until then. You will usually be given medicine to lower your BP, with more frequent check-ups, blood tests and scans to follow your baby’s growth.',
          'Severe pre-eclampsia needs admission to hospital, and medicine to prevent fits may be given by injection or drip. Sometimes the safest option is to deliver the baby early, by inducing labour or by caesarean section.',
        ],
      },
      {
        heading: 'Can it be prevented?',
        body: [
          'If you are at higher risk, your doctor may prescribe low-dose aspirin from 12 weeks of pregnancy until birth, and calcium if your diet is low in calcium. Do not start aspirin or calcium on your own.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          'Our obstetric team cares for high-risk pregnancies, including pregnancy-induced hypertension (PIH). The hospital has 24/7 emergency care, an ICU, caesarean section available round the clock and a Level III NICU if a baby needs to be born early.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is PIH the same as pre-eclampsia?',
        answer:
          'Not exactly. PIH (pregnancy-induced or gestational hypertension) means high BP that starts in pregnancy. Pre-eclampsia is high BP with signs that other organs are affected, such as protein in the urine. Both need closer monitoring.',
      },
      {
        question: 'Will my BP go back to normal after delivery?',
        answer:
          'Usually, yes. Some women need BP medicine for a few weeks after birth, with regular BP checks.',
      },
    ],
    links: [
      { href: '/blog/antenatal-check-up-schedule', label: 'Pregnancy check-ups, visit by visit' },
      { href: '/blog/normal-delivery-vs-c-section', label: 'Normal delivery or C-section: how doctors decide' },
      { href: '/services/neonatal', label: 'Level III NICU at Dhruva Hospitals' },
    ],
    sources: [nhs('Pre-eclampsia', '/conditions/pre-eclampsia/')],
  },
  {
    ...base,
    slug: 'anaemia-in-pregnancy',
    title: 'Anaemia in pregnancy: low haemoglobin, symptoms and treatment',
    seoTitle: 'Anaemia in Pregnancy: Low Hb Explained',
    description:
      'Why haemoglobin falls in pregnancy, the symptoms of anaemia, iron-rich Indian foods, how to take iron tablets properly, and when low Hb needs more treatment.',
    answer:
      'Anaemia means your haemoglobin (Hb) is lower than it should be. It is common in pregnancy, usually because the body needs more iron. It can cause tiredness, breathlessness and pale skin, or no symptoms at all, so Hb is checked early in pregnancy and again around 28 weeks. Treatment is usually iron tablets with iron-rich food.',
    sections: [
      {
        heading: 'Why it matters',
        body: [
          'The WHO estimates that 37% of pregnant women worldwide have anaemia. In pregnancy it is linked to premature birth, low birth weight and greater risk for the mother, so it is worth treating early.',
        ],
      },
      {
        heading: 'Symptoms',
        list: [
          'Tiredness and lack of energy',
          'Shortness of breath',
          'Noticeable heartbeats (palpitations)',
          'Paler skin than usual',
          'Headaches',
          'Wanting to eat non-food items such as ice or paper',
        ],
      },
      {
        heading: 'Tests',
        body: [
          'A simple blood test (complete blood count) shows your Hb. If the cause is not clear, your doctor may order more tests, because anaemia can also come from low vitamin B12 or folate, or from inherited conditions such as thalassaemia.',
        ],
      },
      {
        heading: 'Taking iron tablets the right way',
        list: [
          'Take them exactly as prescribed, usually for several months.',
          'Taking them with or soon after food reduces stomach upset.',
          'A glass of orange juice may help your body absorb the iron.',
          'Do not take tea, coffee or milk at the same time as the tablet.',
          'Dark stools and constipation are common side effects. Keep taking the tablets and tell your doctor if they bother you.',
          'Keep iron tablets out of children’s reach. An overdose can be fatal for a small child.',
        ],
      },
      {
        heading: 'Iron-rich foods',
        list: [
          'Green leafy vegetables, such as spinach (palakura) and amaranth (thotakura)',
          'Pulses: dal, chana, rajma and other lentils and beans',
          'Dried fruit such as raisins and apricots',
          'Meat, chicken and fish, if you eat them',
          'Iron-fortified cereals',
        ],
      },
      {
        heading: 'When more treatment is needed',
        body: [
          'If your Hb does not rise with tablets, or is very low late in pregnancy, your doctor will discuss other treatment, such as iron given through a drip.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I stop iron tablets once I feel better?',
        answer:
          'No. Keep taking them for as long as your doctor advises. Your iron stores take months to fill up, even after your Hb improves.',
      },
      {
        question: 'Is anaemia harmful for my baby?',
        answer:
          'Anaemia in pregnancy is linked to premature birth and low birth weight. Treating it early lowers these risks.',
      },
    ],
    links: [
      { href: '/blog/pregnancy-diet-indian-foods', label: 'What to eat in pregnancy' },
      { href: '/blog/antenatal-check-up-schedule', label: 'Pregnancy check-ups, visit by visit' },
      { href: '/blog/heavy-periods-causes-treatment', label: 'Heavy periods: causes and treatment' },
      { href: '/services/pregnancy', label: 'Pregnancy care at Dhruva Hospitals' },
    ],
    sources: [
      nhs('Iron deficiency anaemia', '/conditions/iron-deficiency-anaemia/'),
      { label: 'WHO: Anaemia fact sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/anaemia' },
    ],
  },
  {
    ...base,
    slug: 'normal-delivery-vs-c-section',
    title: 'Normal delivery or C-section: how the decision is made',
    seoTitle: 'Normal Delivery or C-Section: How to Decide',
    description:
      'When a caesarean is medically needed, what happens during the operation, recovery time, and whether you can have a normal delivery after a C-section.',
    answer:
      'A normal (vaginal) delivery is usually the safest choice for healthy mothers and babies. A caesarean (C-section) is advised when it is safer, for example if the baby is breech, the placenta is low, labour stops progressing or the baby shows signs of distress. Many women who had one caesarean can try for a normal delivery next time.',
    sections: [
      {
        heading: 'Common reasons for a caesarean',
        list: [
          'The baby is in the breech (bottom or feet first) position',
          'The placenta is low and covers the cervix (placenta praevia)',
          'Pre-eclampsia or other serious illness in the mother',
          'The baby is not getting enough oxygen and nutrients',
          'Labour is not progressing, or there is heavy bleeding',
          'Certain infections in the mother',
        ],
      },
      {
        heading: 'Planned and emergency caesareans',
        body: [
          'A planned caesarean is usually done from 39 weeks of pregnancy. An emergency caesarean is done when a problem arises during pregnancy or labour.',
          'Most caesareans are done under spinal or epidural anaesthesia, so you are awake but feel no pain. The operation usually takes 40 to 50 minutes.',
        ],
      },
      {
        heading: 'Recovery after a caesarean',
        body: [
          'Recovery takes longer than after a normal delivery. Your doctor will tell you when you are ready to go home, and most women need to take things easy for about 6 weeks. Contact your doctor straight away if you have:',
        ],
        list: [
          'Severe pain, or heavy bleeding from the vagina',
          'A wound that becomes red, painful or swollen, or leaks pus or foul-smelling fluid',
          'A cough or shortness of breath',
          'Pain or swelling in the lower leg',
          'Pain when passing urine, or leaking urine',
        ],
      },
      {
        heading: 'Normal delivery after a caesarean (VBAC)',
        body: [
          'One caesarean does not mean every later baby must be delivered the same way. Many women can safely try for a vaginal birth after caesarean (VBAC), with closer monitoring during labour.',
          'Whether VBAC suits you depends on the type of cut made in the womb last time, the reason for that caesarean, how many caesareans you have had and your health in this pregnancy. A low, side-to-side cut on the womb carries the lowest risk. Discuss VBAC with your obstetrician early, and bring the operation notes from your previous delivery.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          'Our obstetric team offers normal delivery, including painless labour options, and planned and emergency caesareans in modular operation theatres, available 24/7. Our Level III NICU is on site if a newborn needs special care.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a caesarean safer for the baby?',
        answer:
          'Not routinely. A caesarean is major surgery, with risks such as infection, bleeding and blood clots for the mother and temporary breathing difficulty for the baby. It is recommended when it is safer than a vaginal birth.',
      },
      {
        question: 'Can I ask for a caesarean without a medical reason?',
        answer:
          'Discuss it with your doctor. They will explain the benefits and risks for you and your baby compared with a normal delivery, and offer support if you are anxious about giving birth.',
      },
    ],
    links: [
      { href: '/blog/painless-delivery-epidural', label: 'Painless delivery (epidural) explained' },
      { href: '/blog/signs-of-labour-hospital-bag', label: 'Signs of labour and what to pack' },
      { href: '/blog/recovery-after-delivery-postnatal-care', label: 'Recovery after delivery' },
      { href: '/services/pregnancy', label: 'Pregnancy and delivery at Dhruva Hospitals' },
    ],
    sources: [
      nhs('Caesarean section', '/tests-and-treatments/caesarean-section/'),
      nhs('Recovering from a caesarean section', '/tests-and-treatments/caesarean-section/recovery/'),
      { label: 'ACOG: Vaginal birth after cesarean delivery', url: 'https://www.acog.org/womens-health/faqs/vaginal-birth-after-cesarean-delivery' },
    ],
  },
  {
    ...base,
    slug: 'painless-delivery-epidural',
    title: 'Painless delivery (epidural): how it works, benefits and side effects',
    seoTitle: 'Painless Delivery (Epidural) Explained',
    description:
      'How an epidural for painless normal delivery works, how soon it takes effect, common side effects, the back pain myth, and other labour pain relief.',
    answer:
      'Painless delivery usually means an epidural: medicine given through a thin tube in your lower back by an anaesthetist, which numbs labour pain while you stay awake. It is set up in about 10 minutes and works within another 10 to 15, and it can be topped up through labour. You can still have a normal delivery, and it does not cause long-term back pain.',
    sections: [
      {
        heading: 'How an epidural is given',
        ordered: [
          'A drip is placed in your arm for fluids.',
          'You sit and lean forward, or lie on your side with your knees drawn up.',
          'The anaesthetist numbs the skin of your lower back with a local anaesthetic.',
          'A needle is used to place a thin plastic tube (catheter) near the nerves in your back. The needle is removed and only the tube stays.',
          'Pain-relief medicine is given through the tube and topped up as labour goes on.',
        ],
      },
      {
        heading: 'What to expect',
        body: [
          'In most women an epidural gives very good pain relief, though it sometimes needs adjusting. Your legs may feel heavy, depending on the medicine used. It should not make you drowsy or sick.',
          'Because you may not feel contractions, the doctor or nurse will tell you when to push. An epidural can make the pushing stage longer, so forceps or vacuum (ventouse) help is a little more likely.',
        ],
      },
      {
        heading: 'Possible side effects',
        list: [
          'A drop in blood pressure, which is uncommon because of the fluids given through the drip',
          'Difficulty passing urine, which may need a small tube (catheter) for a while',
          'Itchy skin',
          'A headache, in about 1 in 100 women, which can be treated',
          'A sore back for a day or two',
        ],
      },
      {
        heading: 'Other ways to ease labour pain',
        list: [
          'Moving around, changing position and a warm bath or shower',
          'Breathing and relaxation techniques, and back massage from your birth partner',
          'Pain-relief injections, which can make you drowsy and are not given too close to delivery',
        ],
        after: ['Ask your doctor which options suit you and plan your pain relief during your check-ups, before labour starts.'],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          'Painless labour options are available for normal delivery. Talk to your obstetrician about pain relief during your antenatal visits so your plan is ready in advance.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does an epidural cause back pain later?',
        answer: 'No. Your back may be a little sore for a day or two, but epidurals do not cause long-term backache.',
      },
      {
        question: 'Does an epidural increase the chance of a caesarean?',
        answer:
          'An epidural can lengthen the pushing stage and make forceps or vacuum help more likely. Doctors reduce this by waiting longer for the baby’s head to come down before you push, as long as the baby is well.',
      },
      {
        question: 'Is an epidural safe for the baby?',
        answer:
          'An epidural acts mainly on the nerves in your back, and your baby’s heart rate is monitored throughout labour. Ask your anaesthetist any questions you have before labour starts.',
      },
    ],
    links: [
      { href: '/blog/normal-delivery-vs-c-section', label: 'Normal delivery or C-section: how doctors decide' },
      { href: '/blog/signs-of-labour-hospital-bag', label: 'Signs of labour and what to pack' },
      { href: '/services/pregnancy', label: 'Pregnancy and delivery at Dhruva Hospitals' },
    ],
    sources: [
      nhs('Pain relief in labour', '/pregnancy/labour-and-birth/pain-relief-in-labour/'),
      nhs('Epidural', '/tests-and-treatments/epidural/'),
    ],
  },
  {
    ...base,
    slug: 'signs-of-labour-hospital-bag',
    title: 'Signs of labour, when to come to hospital, and what to pack',
    seoTitle: 'Signs of Labour and Hospital Bag Checklist',
    description:
      'How to tell real labour pains from practice contractions, when to come to hospital, warning signs that cannot wait, and a hospital bag checklist.',
    answer:
      'Signs of labour include regular contractions that become stronger and closer together, a “show” (pink, jelly-like mucus), backache and your waters breaking. Come to hospital when contractions are regular, about every 5 minutes, or straight away if your waters break, you bleed, your baby moves less, or you are less than 37 weeks pregnant.',
    sections: [
      {
        heading: 'Signs that labour is starting',
        list: [
          'Contractions or tightenings that come regularly and grow longer, stronger and closer together',
          'A “show”: the plug of pink, jelly-like mucus from the cervix comes away',
          'Backache or a heavy, aching feeling',
          'An urge to open your bowels, as the baby’s head presses down',
          'Your waters breaking, as a slow trickle or a sudden gush of fluid',
        ],
      },
      {
        heading: 'Real labour or practice contractions?',
        body: [
          'Practice contractions (Braxton Hicks) are tightenings in the last weeks that are usually painless, short and irregular, and do not build up. Real labour contractions keep coming, last longer, get stronger and come closer together.',
        ],
      },
      {
        heading: 'Come to hospital straight away if',
        list: [
          'Your waters break, especially if the fluid is green, brown, bloodstained or smelly',
          'You have bleeding from the vagina',
          'Your baby is moving less than usual',
          'You are less than 37 weeks pregnant and think labour has started',
          'A contraction lasts longer than 2 minutes, or you have 6 or more contractions in 10 minutes',
          'You feel a strong urge to push',
        ],
        after: [`Do not wait until morning. Call ${emergency} or come to the hospital at any hour. For an ambulance, call ${ambulance}.`],
      },
      {
        heading: 'Hospital bag checklist: for the mother',
        list: [
          'Pregnancy file, all scan and blood reports, and Aadhaar or another ID',
          'Loose, comfortable clothes, and nightwear that opens at the front for breastfeeding',
          'Two packs of maternity or sanitary pads and several pairs of underwear',
          'Nursing bras and breast pads',
          'Toothbrush, paste, soap, comb, towel and slippers',
          'Your regular medicines',
          'Phone and charger, a water bottle and light snacks',
        ],
      },
      {
        heading: 'Hospital bag checklist: for the baby',
        list: [
          'Soft cotton vests or bodysuits, and an outfit for going home',
          'A cap, mittens and socks',
          'Nappies, and cotton or baby wipes',
          'Soft cotton cloths and a blanket or shawl',
        ],
      },
      {
        heading: 'Plan ahead',
        body: [
          'Pack your bag at least 3 weeks before your due date. Only about 1 in 20 babies arrives on the due date.',
          `Save our emergency number in your phone and plan how you will reach the hospital at night. We are at ${site.address.full}.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'My waters broke but I have no pains. What should I do?',
        answer:
          'Call us or come to the hospital. Wear a pad, not a tampon, so the colour of the fluid can be checked. Most women go into labour within 24 hours; if not, induction is usually offered because of the small risk of infection.',
      },
      {
        question: 'Can I eat in early labour?',
        answer:
          'In early labour you can usually drink fluids and have a light snack if you feel like it, unless your doctor has advised otherwise.',
      },
    ],
    links: [
      { href: '/blog/painless-delivery-epidural', label: 'Painless delivery (epidural) explained' },
      { href: '/blog/normal-delivery-vs-c-section', label: 'Normal delivery or C-section' },
      { href: '/blog/newborn-care-at-home', label: 'Caring for your newborn at home' },
      { href: '/contact', label: 'Directions to Dhruva Hospitals' },
    ],
    sources: [
      nhs('Signs that labour has begun', '/pregnancy/labour-and-birth/signs-that-labour-has-begun/'),
      nhs('Hospital bag checklist', '/best-start-in-life/pregnancy/preparing-for-labour-and-birth/hospital-bag-checklist/'),
      nhs('Your baby’s movements', '/pregnancy/keeping-well/your-babys-movements/'),
    ],
  },
  {
    ...base,
    slug: 'bleeding-in-early-pregnancy',
    title: 'Bleeding or pain in early pregnancy: miscarriage and ectopic pregnancy signs',
    seoTitle: 'Bleeding in Early Pregnancy: When to Worry',
    description:
      'Spotting or bleeding in early pregnancy can be harmless or a sign of miscarriage or ectopic pregnancy. The emergency signs, tests and treatment.',
    answer:
      'Light spotting in early pregnancy is not always serious, but always get it checked the same day. Go to hospital immediately if the bleeding is heavy (soaking a pad soon after you put it on), or comes with severe tummy pain, shoulder-tip pain, dizziness or fainting. These can be signs of an ectopic pregnancy or a miscarriage.',
    sections: [
      {
        heading: 'Possible causes',
        list: [
          'Implantation bleeding in very early pregnancy',
          'Changes in the cervix, which can bleed after sex',
          'Infection, including urine infection',
          'Miscarriage',
          'Ectopic pregnancy',
          'Molar pregnancy, a rare problem with the developing placenta',
        ],
      },
      {
        heading: 'Emergency signs',
        list: [
          'Severe pain in the tummy that stops you doing daily tasks',
          'Pain in the tip of the shoulder',
          'Feeling sick, faint or dizzy, or passing out',
          'Heavy bleeding that soaks a pad soon after you put it on',
        ],
        after: [`Call ${emergency} or come to the hospital immediately.`],
      },
      {
        heading: 'Ectopic pregnancy',
        body: [
          'In an ectopic pregnancy, the pregnancy grows outside the womb, usually in a fallopian tube. It cannot continue and has to be treated with medicine or an operation. Symptoms usually appear between 4 and 12 weeks: pain low on one side of the tummy, bleeding or a brown watery discharge, shoulder-tip pain, and discomfort when passing urine or stools.',
          'If the tube bursts (ruptures), it is an emergency that needs surgery, often by laparoscopy (keyhole surgery). The risk is higher after a previous ectopic pregnancy, tube surgery, pelvic infection, fertility treatment, pregnancy with a copper-T or other IUD in place, smoking, and above age 35.',
        ],
      },
      {
        heading: 'Miscarriage',
        body: [
          'A miscarriage is the loss of a pregnancy in its early months. The main sign is bleeding, sometimes with cramping pain, passing tissue or a sudden rush of fluid. Sometimes there are no symptoms and it is found on a scan.',
          'A miscarriage cannot be stopped once it has started. Treatment depends on your symptoms and how many weeks pregnant you are, and your doctor will explain the options with you.',
        ],
      },
      {
        heading: 'What tests are done',
        list: [
          'An examination, and questions about your symptoms and past pregnancies',
          'An ultrasound scan, often an internal (transvaginal) scan in early pregnancy',
          'Blood tests, and sometimes a urine test',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          'Our obstetric team provides prompt diagnosis of ectopic pregnancy with ultrasound in the hospital, and keyhole (laparoscopic) surgery when needed. The emergency team is available 24/7.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is spotting normal in early pregnancy?',
        answer:
          'Light spotting can happen, for example around the time a period would have been due. You cannot tell the cause yourself, so get checked the same day.',
      },
      {
        question: 'Can I get pregnant again after an ectopic pregnancy?',
        answer:
          'Most women can, even if a tube was removed. Doctors usually advise waiting until you have had at least two periods, or at least 3 months after methotrexate treatment. Tell your doctor early in your next pregnancy so an early scan can be done.',
      },
    ],
    links: [
      { href: '/blog/early-signs-of-pregnancy', label: 'Early signs of pregnancy' },
      { href: '/blog/pregnancy-scans-guide', label: 'Pregnancy scans explained' },
      { href: '/services/pregnancy', label: 'Pregnancy care at Dhruva Hospitals' },
    ],
    sources: [
      nhs('Vaginal bleeding in pregnancy', '/pregnancy/common-symptoms/vaginal-bleeding/'),
      nhs('Miscarriage', '/conditions/miscarriage/'),
      nhs('Ectopic pregnancy', '/conditions/ectopic-pregnancy/'),
    ],
  },
  {
    ...base,
    slug: 'recovery-after-delivery-postnatal-care',
    title: 'Recovery after delivery: bleeding, stitches, mood and the 6-week check',
    seoTitle: 'Recovery After Delivery: What Is Normal',
    description:
      'What is normal after a normal delivery or C-section, warning signs that need a doctor, baby blues versus postnatal depression, and the 6-week check-up.',
    answer:
      'After delivery you will bleed from the vagina for a few weeks; it starts heavy and slowly turns brownish and lighter. Most women recover over about 6 weeks, when a postnatal check-up is due. Get help quickly for heavy bleeding, fever, a painful or leaking wound, severe headache, leg pain or swelling, breathlessness, or low mood lasting more than two weeks.',
    sections: [
      {
        heading: 'What is normal',
        list: [
          'Bleeding (lochia) that is heavy at first and slowly becomes lighter and brownish over a few weeks',
          'Period-like cramps and redder bleeding while breastfeeding, as the womb contracts',
          'Tiredness, and soreness around stitches or the caesarean wound',
          'Piles, which are common and usually settle within days or weeks',
          'Feeling emotional or tearful for a few days (the “baby blues”)',
        ],
      },
      {
        heading: 'Get medical help straight away if',
        list: [
          'Bleeding is heavy, soaks pads quickly, or contains large clots',
          'You have a fever or feel shivery and unwell',
          'Your stitches or wound become red, swollen or more painful, or leak pus or smelly fluid',
          'You have a severe headache, blurred vision or sudden swelling, as pre-eclampsia can start after birth',
          'One leg is painful or swollen, or you are coughing or breathless, which can mean a blood clot',
          'Passing urine is painful, or you cannot control it',
        ],
        after: [`Call ${emergency} at any hour.`],
      },
      {
        heading: 'Baby blues or postnatal depression?',
        body: [
          'Feeling low, tearful or irritable for a few days after delivery is common and usually passes within 2 weeks. If it lasts longer, gets worse, or you struggle to cope, it may be postnatal depression, which can start any time in the first year after birth. Fathers can be affected too.',
          'Signs include low mood, losing interest in things, feeling hopeless or guilty, constant worry, poor sleep even when the baby is asleep, and difficulty bonding with the baby. It usually gets better with treatment, so tell your doctor; asking for help is not a sign of being a bad mother.',
          'If you have thoughts of harming yourself or your baby, get help immediately. India’s free Tele MANAS mental health helpline is 14416 or 1-800-891-4416.',
        ],
      },
      {
        heading: 'The 6-week postnatal check-up',
        list: [
          'How you are feeling, including your mood',
          'Bleeding, discharge and whether your periods have returned',
          'Blood pressure, if it was high in pregnancy or after delivery',
          'A check of your stitches or caesarean wound, if needed',
          'Feeding and any problems with breastfeeding',
          'Contraception',
        ],
      },
      {
        heading: 'Contraception after delivery',
        body: [
          'You can get pregnant again as early as 3 weeks after birth, even if you are breastfeeding and your periods have not returned. Discuss contraception before you go home or at your 6-week check.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When will my periods come back?',
        answer:
          'It varies. If you bottle-feed or mix-feed, your first period may come 5 to 6 weeks after birth. If you breastfeed fully, including at night, it may not come until you start to breastfeed less. You can get pregnant before your first period.',
      },
      {
        question: 'When can I return to normal activities after a caesarean?',
        answer:
          'Start with gentle walks soon after delivery. Avoid heavy lifting and strenuous activity until you feel able, often around 6 weeks, and ask your doctor at your check-up.',
      },
    ],
    links: [
      { href: '/blog/breastfeeding-first-days', label: 'Breastfeeding in the first few days' },
      { href: '/blog/contraception-options-family-planning', label: 'Family planning and contraception options' },
      { href: '/blog/newborn-care-at-home', label: 'Caring for your newborn at home' },
      { href: '/services/pregnancy', label: 'Pregnancy and delivery at Dhruva Hospitals' },
    ],
    sources: [
      nhs('Your body after the birth', '/pregnancy/labour-and-birth/your-body/'),
      nhs('Your 6-week postnatal check', '/baby/support-and-services/your-6-week-postnatal-check/'),
      nhs('Postnatal depression', '/mental-health/conditions/postnatal-depression/'),
      nhs('Recovering from a caesarean section', '/tests-and-treatments/caesarean-section/recovery/'),
      { label: 'Tele MANAS, Ministry of Health and Family Welfare', url: 'https://telemanas.mohfw.gov.in/' },
    ],
  },
];
