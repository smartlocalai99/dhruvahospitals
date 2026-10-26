// Women's health (gynaecology) articles for the health blog. Format: see lib/blog/index.js.
import { site } from '../site';

const date = '2026-10-27';
const phone = site.phones.main.display;
const emergency = site.phones.emergency.display;
const opd = site.hours.opd;

const nhs = (label, path) => ({ label: `NHS (UK): ${label}`, url: `https://www.nhs.uk${path}` });
const who = (label, slug) => ({ label: `WHO: ${label}`, url: `https://www.who.int/news-room/fact-sheets/detail/${slug}` });
const book = `Call ${phone} or WhatsApp us to book with our gynaecology team. OPD hours are ${opd}.`;

const base = {
  category: 'gynaecology',
  service: 'gynaecology',
  doctor: 'dr-mounika-reddy',
  publishedOn: date,
  updatedOn: date,
  reviewedOn: null,
};

export const gynaecologyPosts = [
  {
    ...base,
    slug: 'pcod-pcos-symptoms-treatment',
    title: 'PCOD / PCOS: symptoms, tests and treatment',
    seoTitle: 'PCOD / PCOS: Symptoms, Tests and Treatment',
    description:
      'What PCOD (PCOS) is, common symptoms such as irregular periods, acne and weight gain, how it is diagnosed, treatment options and how it affects pregnancy.',
    answer:
      'PCOS (often called PCOD in India) is a common hormone condition that can cause irregular or missed periods, extra facial or body hair, acne, weight gain and difficulty getting pregnant. WHO estimates it affects 10 to 13% of women of reproductive age, and up to 70% do not know they have it. There is no cure, but lifestyle changes and treatment control symptoms and help fertility.',
    sections: [
      {
        heading: 'Common symptoms',
        list: [
          'Irregular periods, long gaps between periods, or no periods',
          'Extra hair on the face or body, or thinning of scalp hair',
          'Acne or oily skin',
          'Weight gain, especially around the belly, or difficulty losing weight',
          'Thick, dark patches of skin on the neck or armpits',
          'Difficulty getting pregnant',
          'Low mood or anxiety',
        ],
        after: [
          'Symptoms vary a lot: some women have only one or two, and some have none. The UK’s NHS now uses a new name for the condition, polyendocrine metabolic ovarian syndrome (PMOS), to reflect that it affects the whole body, not just the ovaries.',
        ],
      },
      {
        heading: 'How it is diagnosed',
        list: [
          'Questions about your periods, hair growth, skin, weight and family history',
          'Blood tests for hormones, thyroid, sugar and insulin resistance',
          'An ultrasound scan of the ovaries in adult women',
        ],
        after: ['Other conditions, such as thyroid problems, can cause similar symptoms, so it is worth getting a proper diagnosis.'],
      },
      {
        heading: 'Treatment',
        list: [
          'A healthy diet, regular exercise and weight loss if you are overweight. Even modest weight loss can improve periods and ovulation.',
          'Hormone tablets to regulate periods and protect the lining of the womb',
          'Metformin, a diabetes medicine that helps with insulin resistance in some women',
          'Treatments for acne and unwanted hair',
          'Ovulation medicines, such as letrozole or clomifene, if you are trying to conceive, and IUI or IVF if needed',
          'Rarely, a keyhole operation on the ovaries (laparoscopic ovarian drilling) when medicines have not worked',
        ],
      },
      {
        heading: 'Why long-term follow-up matters',
        body: [
          'PCOS raises the risk of type 2 diabetes, high blood pressure, high cholesterol and diabetes in pregnancy. Very infrequent periods can also cause thickening of the womb lining. Regular check-ups, including sugar tests, help prevent these problems.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          `Our gynaecology team diagnoses and manages PCOD/PCOS in teenagers and adult women, and our fertility team helps women with PCOS who want to conceive. ${book}`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Is PCOD the same as PCOS?',
        answer:
          'In everyday use in India, yes. Both names describe the same group of symptoms: irregular ovulation and periods, signs of higher male hormones, and often many small follicles on the ovaries.',
      },
      {
        question: 'Can I get pregnant with PCOS?',
        answer:
          'Yes. Many women with PCOS conceive naturally or with simple treatment to help ovulation. If you have been trying for a year, see a fertility specialist; go sooner if you are 36 or older or your periods are very irregular.',
      },
      {
        question: 'Does PCOS go away after marriage or pregnancy?',
        answer: 'No. It is a long-term condition, but symptoms can be well controlled with lifestyle changes and treatment.',
      },
    ],
    links: [
      { href: '/blog/irregular-periods-causes', label: 'Irregular periods: causes and when to see a doctor' },
      { href: '/blog/when-to-see-fertility-specialist', label: 'Not getting pregnant? When to see a specialist' },
      { href: '/blog/diabetes-sugar-test-normal-levels', label: 'Sugar test results explained' },
      { href: '/services/gynaecology', label: 'Gynaecology at Dhruva Hospitals' },
    ],
    sources: [
      who('Polycystic ovary syndrome', 'polycystic-ovary-syndrome'),
      nhs('Polyendocrine metabolic ovarian syndrome (PMOS)', '/conditions/polyendocrine-metabolic-ovarian-syndrome-pmos/'),
    ],
  },
  {
    ...base,
    slug: 'irregular-periods-causes',
    title: 'Irregular periods: common causes and when to see a gynaecologist',
    seoTitle: 'Irregular Periods: Causes and When to Worry',
    description:
      'What counts as an irregular period, common causes such as stress, weight change, PCOS and thyroid problems, and when to see a gynaecologist.',
    answer:
      'Periods are irregular if the gap between them is shorter than 21 days or longer than 35 days, or keeps changing. It is common in the first years after periods start and near menopause. Other causes include pregnancy, stress, weight change, PCOS and thyroid problems. See a gynaecologist if your pattern changes, periods last more than 7 days, or you bleed between periods.',
    sections: [
      {
        heading: 'What is a normal cycle?',
        body: [
          'The cycle is counted from the first day of one period to the day before the next. The average is about 28 days, but anything from 21 to 35 days can be normal. A period app or a simple calendar helps you see your pattern.',
        ],
      },
      {
        heading: 'Common causes',
        list: [
          'The first few years after periods start (puberty)',
          'The years before menopause, usually between 45 and 55',
          'Pregnancy, so take a pregnancy test if your period is late',
          'Hormonal contraception, such as some pills, injections and the hormonal IUD',
          'Losing or gaining a lot of weight',
          'Stress, or very intense exercise',
          'PCOS (PCOD) or thyroid problems',
        ],
      },
      {
        heading: 'See a gynaecologist if',
        list: [
          'Your periods are irregular or your usual pattern has changed',
          'Periods last longer than 7 days',
          'You bleed between periods or after sex',
          'You also have weight gain, tiredness, facial hair, or very dry or oily skin',
          'You are trying to get pregnant and your periods are irregular',
          'You have not had a period for 3 months and are not pregnant',
        ],
      },
      {
        heading: 'Tests and treatment',
        body: [
          'Your doctor may advise a pregnancy test, blood tests for hormones and thyroid, and a pelvic ultrasound. Treatment depends on the cause: for example, the combined pill can regulate periods in PCOS, and thyroid medicine treats thyroid problems. Sometimes no treatment is needed.',
        ],
      },
      {
        heading: 'Trying for a baby',
        body: [
          'With irregular periods you may not release an egg every month, which can make it harder to conceive. Having sex every 2 to 3 days through the cycle helps. If you have been trying for a while without success, fertility tests can find the cause.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a period every 40 days normal?',
        answer:
          'A cycle longer than 35 days is considered irregular. It is not always a problem, but it is worth a check, especially if it is new for you or you want to get pregnant.',
      },
      {
        question: 'My teenage daughter’s periods are irregular. Should I worry?',
        answer:
          'Irregular periods are common in the first years after periods start. See a gynaecologist if she bleeds for more than 7 days, bleeds very heavily, has severe pain, or has no period for several months.',
      },
    ],
    links: [
      { href: '/blog/pcod-pcos-symptoms-treatment', label: 'PCOD / PCOS explained' },
      { href: '/blog/heavy-periods-causes-treatment', label: 'Heavy periods' },
      { href: '/blog/early-signs-of-pregnancy', label: 'Early signs of pregnancy' },
      { href: '/services/gynaecology', label: 'Gynaecology at Dhruva Hospitals' },
    ],
    sources: [nhs('Irregular periods', '/symptoms/irregular-periods/')],
  },
  {
    ...base,
    slug: 'heavy-periods-causes-treatment',
    title: 'Heavy periods: causes, tests and treatment options',
    seoTitle: 'Heavy Periods: Causes and Treatment',
    description:
      'How to tell if your periods are too heavy, common causes such as fibroids and PCOS, the tests a gynaecologist may do, and treatments from tablets to surgery.',
    answer:
      'Your periods may be heavy if you need to change a pad every 1 to 2 hours, pass clots larger than about 2.5 cm, bleed for more than 7 days, or bleed through to clothes or bedding. Heavy periods can cause anaemia. Common causes include fibroids, PCOS and adenomyosis. Treatment ranges from tablets and hormonal options to minor procedures or surgery.',
    sections: [
      {
        heading: 'Signs your periods are heavy',
        list: [
          'Changing a pad every 1 to 2 hours, or needing two pads at once',
          'Periods lasting more than 7 days',
          'Passing clots larger than about 2.5 cm (one inch) across',
          'Bleeding through to clothes or bedding',
          'Missing work, school or daily activities because of periods',
          'Feeling tired or short of breath a lot, which can mean anaemia',
        ],
      },
      {
        heading: 'Common causes',
        list: [
          'Sometimes no cause is found, and heavy periods are normal for that woman',
          'Fibroids, adenomyosis or polyps in the womb',
          'PCOS (PCOD), or the years approaching menopause',
          'Pelvic infection or endometriosis',
          'Bleeding disorders, or medicines such as blood thinners',
          'Rarely, cancer of the womb lining, especially in older women',
        ],
      },
      {
        heading: 'Tests',
        list: [
          'A blood test for haemoglobin, to check for anaemia, and sometimes thyroid tests',
          'A pelvic ultrasound to look for fibroids, polyps or other changes',
          'Sometimes a hysteroscopy: a thin camera passed into the womb to look at the lining and take a sample',
        ],
      },
      {
        heading: 'Treatment options',
        list: [
          'Tranexamic acid tablets during the period to reduce bleeding',
          'Anti-inflammatory painkillers such as mefenamic acid, which also reduce flow',
          'Hormonal options, such as the hormonal IUD (IUS) or the combined pill',
          'Iron tablets if you are anaemic',
          'Removal of fibroids or polyps, often by hysteroscopy or laparoscopy',
          'Endometrial ablation or, if other treatments fail and you do not want more children, hysterectomy',
        ],
      },
      {
        heading: 'See a doctor sooner if',
        list: [
          'You bleed between periods or after sex',
          'You have severe pain with your periods',
          'You have any bleeding after menopause',
          'You feel faint or very breathless',
        ],
        after: [`If bleeding is very heavy and you feel faint or dizzy, call ${emergency}.`],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`Our gynaecologists treat period problems with medicines, hysteroscopy and laparoscopic surgery. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Can heavy periods cause anaemia?',
        answer: 'Yes. Heavy periods are one of the most common causes of iron deficiency anaemia. A simple blood test can check your haemoglobin.',
      },
      {
        question: 'Do I need a hysterectomy for heavy periods?',
        answer:
          'Usually not. Most women improve with tablets, a hormonal IUD or a minor procedure. Hysterectomy is considered only when other treatments have not helped and you do not want more children.',
      },
    ],
    links: [
      { href: '/blog/fibroids-uterus-symptoms-treatment', label: 'Fibroids in the uterus' },
      { href: '/blog/anaemia-in-pregnancy', label: 'Anaemia and iron tablets' },
      { href: '/blog/hysterectomy-recovery-laparoscopic', label: 'Hysterectomy: reasons and recovery' },
      { href: '/services/gynaecology', label: 'Gynaecology at Dhruva Hospitals' },
    ],
    sources: [nhs('Heavy periods', '/conditions/heavy-periods/'), nhs('Iron deficiency anaemia', '/conditions/iron-deficiency-anaemia/')],
  },
  {
    ...base,
    slug: 'white-discharge-vaginal-discharge',
    title: 'White discharge: what is normal and when to see a doctor',
    seoTitle: 'White Discharge: What Is Normal?',
    description:
      'Normal vaginal discharge versus signs of infection: changes in smell, colour or texture, itching, when to see a gynaecologist, and gentle hygiene tips.',
    answer:
      'Some vaginal discharge is normal: it keeps the vagina clean. Normal discharge is clear or white, without a strong smell, and changes through the cycle. See a doctor if it changes colour, smell or texture, becomes thick like curd with itching, has a fishy smell, is green or yellow, or comes with pain, bleeding or burning when passing urine.',
    sections: [
      {
        heading: 'Normal discharge',
        list: [
          'Clear or white, and without a strong or unpleasant smell',
          'Thick and sticky at some times of the month, and slippery and wet around ovulation',
          'Often more during pregnancy, with hormonal contraception, or if you are sexually active',
        ],
      },
      {
        heading: 'Changes that can mean an infection',
        table: {
          columns: ['Discharge', 'Possible cause'],
          rows: [
            ['Thick, white and curd-like, with itching', 'Thrush (yeast infection)'],
            ['Thin, with a fishy smell', 'Bacterial vaginosis'],
            ['Green, yellow or frothy', 'Trichomoniasis'],
            ['With pelvic pain or bleeding', 'Chlamydia or gonorrhoea'],
            ['With blisters or sores', 'Genital herpes'],
          ],
        },
        after: ['Do not diagnose yourself. Several infections look alike, and the right treatment depends on the cause.'],
      },
      {
        heading: 'See a doctor if',
        list: [
          'Your discharge changes colour, smell or texture, or there is much more than usual',
          'You feel itchy or sore',
          'You bleed between periods or after sex',
          'You have pain when passing urine, or pain in the lower tummy',
          'You are pregnant and notice any change in discharge or leaking fluid',
        ],
      },
      {
        heading: 'Gentle hygiene that helps',
        list: [
          'Wash the outside area gently with warm water and mild, unperfumed soap.',
          'Do not wash inside the vagina (douching).',
          'Avoid perfumed soaps, gels, deodorants and scented wipes.',
          'Wear cotton underwear and change out of damp clothes.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`Our gynaecologists examine you privately and can test a sample to find the cause. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Is white discharge a sign of weakness?',
        answer:
          'No. Normal white discharge is a healthy sign that the vagina is cleaning itself. It does not cause weakness. If you feel tired, get checked for other causes such as anaemia or thyroid problems.',
      },
      {
        question: 'Does my husband need treatment too?',
        answer: 'For some infections, such as trichomoniasis, chlamydia and gonorrhoea, partners need treatment too. Your doctor will tell you.',
      },
    ],
    links: [
      { href: '/blog/pap-smear-cervical-cancer-screening', label: 'Pap smear and cervical cancer screening' },
      { href: '/blog/irregular-periods-causes', label: 'Irregular periods' },
      { href: '/services/gynaecology', label: 'Gynaecology at Dhruva Hospitals' },
    ],
    sources: [nhs('Vaginal discharge', '/symptoms/vaginal-discharge/')],
  },
  {
    ...base,
    slug: 'fibroids-uterus-symptoms-treatment',
    title: 'Fibroids in the uterus: symptoms and treatment options',
    seoTitle: 'Uterine Fibroids: Symptoms and Treatment',
    description:
      'What uterine fibroids are, symptoms such as heavy periods and pressure, how they are found on ultrasound, and treatment from medicines to surgery.',
    answer:
      'Fibroids are common, non-cancerous growths in or around the womb. Many cause no symptoms and need no treatment. When they do cause heavy or painful periods, pressure on the bladder or bowel, or fertility problems, options include medicines, removal of the fibroids (myomectomy) and, for some women, hysterectomy.',
    sections: [
      {
        heading: 'Symptoms',
        list: [
          'Heavy or painful periods',
          'Tummy pain or lower back pain',
          'Passing urine often or urgently, or constipation and bloating',
          'Pain or discomfort during sex',
          'Difficulty getting pregnant',
        ],
        after: ['Many fibroids are found by chance on an ultrasound done for another reason, including pregnancy scans.'],
      },
      {
        heading: 'Who gets them',
        body: [
          'Fibroids mainly affect women before menopause. They are more likely if you have never had a full-term pregnancy, are overweight, have high blood pressure or diabetes, are of Black or Asian background, or have a close relative with fibroids.',
        ],
      },
      {
        heading: 'Diagnosis',
        body: [
          'An ultrasound scan shows how many fibroids there are, where they are and how big they are. A blood test checks for anaemia if your periods are heavy.',
        ],
      },
      {
        heading: 'Treatment options',
        list: [
          'No treatment, with regular check-ups, if they cause no problems',
          'Painkillers, tranexamic acid or hormonal medicines to control pain and bleeding',
          'Myomectomy: removing the fibroids and keeping the womb, by laparoscopy, hysteroscopy or open surgery depending on their size and position',
          'Hysterectomy: removing the womb, for women who do not want more children and whose symptoms are severe',
          'Other options, such as endometrial ablation or uterine artery embolisation, for selected women',
        ],
        after: [
          'If you plan to have children, discuss this with your doctor first: some treatments end fertility or can affect a future pregnancy.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`Our gynaecology team offers medical and surgical fibroid treatment, including laparoscopic and hysteroscopic surgery, planned around your symptoms and family plans. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Can fibroids turn into cancer?',
        answer:
          'Fibroids are non-cancerous. Cancer in the muscle of the womb is rare. Tell your doctor if a fibroid grows quickly or you have bleeding after menopause, so it can be checked.',
      },
      {
        question: 'Can I get pregnant with fibroids?',
        answer:
          'Many women with fibroids have normal pregnancies. Fibroids rarely cause infertility or miscarriage, depending on their position. Your doctor can advise whether removing them would help.',
      },
    ],
    links: [
      { href: '/blog/heavy-periods-causes-treatment', label: 'Heavy periods: causes and treatment' },
      { href: '/blog/hysterectomy-recovery-laparoscopic', label: 'Hysterectomy: reasons and recovery' },
      { href: '/services/gynaecology', label: 'Fibroid treatment at Dhruva Hospitals' },
    ],
    sources: [nhs('Fibroids', '/conditions/fibroids/')],
  },
  {
    ...base,
    slug: 'ovarian-cyst-symptoms-treatment',
    title: 'Ovarian cysts: symptoms, scans and when surgery is needed',
    seoTitle: 'Ovarian Cyst: Symptoms and When to Operate',
    description:
      'Most ovarian cysts are harmless and go away on their own. The symptoms, warning signs of a twisted or burst cyst, follow-up scans and when surgery is advised.',
    answer:
      'An ovarian cyst is a fluid-filled sac on an ovary. Most are harmless, cause no symptoms and disappear within a few months. A repeat ultrasound usually confirms this. Surgery is advised if a cyst is large, causing symptoms or looks suspicious. Sudden severe pain in the lower tummy, especially with vomiting, needs emergency care.',
    sections: [
      {
        heading: 'Types of cyst',
        list: [
          'Functional cysts form as part of the normal menstrual cycle. They are the most common type and usually go away on their own.',
          'Other cysts, such as dermoid cysts or endometriomas (linked to endometriosis), are less common and may need treatment.',
          'Most cysts are non-cancerous. Cancerous cysts are more likely after menopause.',
        ],
      },
      {
        heading: 'Symptoms',
        list: [
          'Pelvic pain, from a dull ache to sudden, sharp pain',
          'Pain during sex',
          'Bloating, a swollen tummy, or feeling full after eating a little',
          'Passing urine often, or difficulty opening the bowels',
          'Changes in periods',
        ],
      },
      {
        heading: 'Emergency signs',
        body: [
          `Sudden, severe pain low in the tummy, especially with nausea or vomiting, can mean a cyst has burst or twisted the ovary (torsion). This needs urgent treatment to save the ovary. Call ${emergency} or come straight to the hospital.`,
        ],
      },
      {
        heading: 'Tests',
        body: [
          'A pelvic ultrasound, often an internal (transvaginal) scan, shows the size and type of cyst. If there is any concern, blood tests such as CA-125 may be done. A raised CA-125 does not always mean cancer: periods, endometriosis, fibroids and infection can also raise it.',
        ],
      },
      {
        heading: 'Treatment',
        body: [
          'Many cysts only need a repeat scan after a few weeks or months. Surgery is advised if a cyst is large, causing symptoms or looks suspicious. In younger women the surgeon usually removes only the cyst and keeps the ovary (cystectomy), often by keyhole (laparoscopic) surgery, to protect fertility.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`Our gynaecologists perform laparoscopic cystectomy while preserving healthy ovarian tissue, and ultrasound is available in the hospital. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Will an ovarian cyst stop me from getting pregnant?',
        answer:
          'Usually not. Most cysts do not affect fertility, although some, such as endometriomas, can make it harder to conceive. If surgery is needed, the surgeon aims to protect your fertility.',
      },
      {
        question: 'Is a cyst the same as PCOS?',
        answer:
          'No. PCOS is a hormone condition, and the small follicles seen on the ovaries are not true cysts. A single ovarian cyst is a different thing.',
      },
    ],
    links: [
      { href: '/blog/pcod-pcos-symptoms-treatment', label: 'PCOD / PCOS explained' },
      { href: '/blog/hysterectomy-recovery-laparoscopic', label: 'Laparoscopic gynaecological surgery and recovery' },
      { href: '/services/gynaecology', label: 'Gynaecology at Dhruva Hospitals' },
    ],
    sources: [nhs('Ovarian cyst', '/conditions/ovarian-cyst/')],
  },
  {
    ...base,
    slug: 'hysterectomy-recovery-laparoscopic',
    title: 'Hysterectomy (removal of the uterus): reasons, laparoscopic surgery and recovery',
    seoTitle: 'Hysterectomy: Reasons and Recovery Time',
    description:
      'Why a hysterectomy may be advised, open versus laparoscopic surgery, the hospital stay, recovery time, warning signs after surgery, and returning to work.',
    answer:
      'A hysterectomy removes the uterus. It may be advised for heavy periods, fibroids, prolapse or cancer when other treatments have not helped. Laparoscopic (keyhole) or vaginal hysterectomy usually means a shorter stay and faster recovery than open surgery. Full recovery after open surgery takes about 6 to 8 weeks, and many women return to light work in 6 to 8 weeks.',
    sections: [
      {
        heading: 'Common reasons',
        list: [
          'Heavy periods that have not improved with other treatment',
          'Large or troublesome fibroids',
          'Adenomyosis or severe endometriosis',
          'Prolapse of the uterus',
          'Cancer of the uterus, cervix or ovaries',
        ],
        after: ['A hysterectomy ends periods and pregnancy. Discuss all other options with your gynaecologist first.'],
      },
      {
        heading: 'Types of operation',
        list: [
          'Laparoscopic (keyhole): small cuts and a camera; less pain and a quicker recovery',
          'Vaginal: the uterus is removed through the vagina, with no cut on the tummy',
          'Abdominal (open): a larger cut on the tummy, used for very large fibroids or some cancers',
        ],
        after: [
          'Whether the ovaries are also removed depends on your age and the reason for surgery. If the ovaries are removed before menopause, menopause symptoms start straight away and hormone treatment may be discussed.',
        ],
      },
      {
        heading: 'In hospital',
        body: [
          'You will be encouraged to walk the day after surgery, which lowers the risk of blood clots. After a laparoscopic or vaginal hysterectomy, many women go home within 1 to 4 days; after open surgery, the stay is usually up to 5 days.',
        ],
      },
      {
        heading: 'Recovery at home',
        list: [
          'Some vaginal bleeding or discharge is normal for up to 6 weeks.',
          'Rest, and avoid lifting anything heavy, such as full water pots or shopping bags, until your doctor says it is safe.',
          'Drink plenty of fluids and eat fruit and fibre to avoid constipation.',
          'Most women with desk or light work return after 6 to 8 weeks. Recovery is often quicker after keyhole surgery.',
          'Do not drive until you can wear a seat belt comfortably and brake suddenly, often 2 to 6 weeks.',
        ],
      },
      {
        heading: 'Call your doctor if',
        list: [
          'Bleeding becomes heavy or you pass clots',
          'Discharge smells bad, or you develop a fever',
          'The wound becomes red, swollen or leaks fluid',
          'You have pain or burning when passing urine',
          'One leg becomes painful or swollen, or you feel breathless',
          'You feel low or depressed for a long time',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`Our gynaecologists perform open and laparoscopic hysterectomy in modular operation theatres, with ICU support if needed. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Will I go into menopause after a hysterectomy?',
        answer:
          'Only if your ovaries are removed. If they are kept, they continue to make hormones. Your periods will stop either way.',
      },
      {
        question: 'Is laparoscopic hysterectomy possible for everyone?',
        answer:
          'Not always. Very large fibroids, previous surgery or some cancers may need open surgery. Your surgeon will advise the safest approach for you.',
      },
    ],
    links: [
      { href: '/blog/fibroids-uterus-symptoms-treatment', label: 'Fibroids in the uterus' },
      { href: '/blog/heavy-periods-causes-treatment', label: 'Heavy periods' },
      { href: '/blog/menopause-symptoms-bleeding-after-menopause', label: 'Menopause symptoms' },
      { href: '/services/gynaecology', label: 'Hysterectomy at Dhruva Hospitals' },
    ],
    sources: [nhs('Recovering from a hysterectomy', '/tests-and-treatments/hysterectomy/recovery/'), nhs('Heavy periods', '/conditions/heavy-periods/')],
  },
  {
    ...base,
    slug: 'menopause-symptoms-bleeding-after-menopause',
    title: 'Menopause: symptoms, treatment and why bleeding after menopause needs a check',
    seoTitle: 'Menopause Symptoms and Bleeding After',
    description:
      'Menopause symptoms such as hot flushes, poor sleep and mood changes, treatment options, bone and heart health, and why bleeding after menopause needs a check.',
    answer:
      'Most women reach menopause between 45 and 55. Menopause means no period for 12 months. In the years before, periods change and symptoms such as hot flushes, night sweats, poor sleep, mood changes and vaginal dryness are common. Treatment can help. Any bleeding after 12 months without a period must be checked by a gynaecologist.',
    sections: [
      {
        heading: 'Common symptoms',
        list: [
          'Changes in periods: more or less often, heavier or lighter',
          'Hot flushes and night sweats',
          'Difficulty sleeping',
          'Mood swings, low mood, anxiety and poor concentration',
          'Vaginal dryness, itching or pain during sex',
          'More urine infections, or leaking urine',
          'Joint aches, headaches, and dry skin or hair thinning',
        ],
        after: ['Symptoms often last several years and can change over time. Some women have very few.'],
      },
      {
        heading: 'Bleeding after menopause needs a check',
        body: [
          'If you have not had a period for 12 months and then have any bleeding or spotting, see a gynaecologist soon. It is often caused by something minor, such as thinning of the vaginal lining, but it can be an early sign of cancer of the womb lining, which is very treatable when found early.',
          'The doctor will usually examine you and arrange an ultrasound to measure the womb lining, and sometimes a hysteroscopy or a sample of the lining.',
        ],
      },
      {
        heading: 'Treatment options',
        list: [
          'Lifestyle: regular exercise, a balanced diet, limiting tea, coffee and spicy food if they trigger flushes, and good sleep habits',
          'Hormone replacement therapy (HRT), which suits many women; your doctor will discuss the benefits and risks for you',
          'Non-hormonal medicines for hot flushes',
          'Vaginal moisturisers or low-dose vaginal hormone cream for dryness',
        ],
      },
      {
        heading: 'Protecting bones and heart',
        body: [
          'Falling oestrogen after menopause weakens bones and raises the risk of heart disease. Weight-bearing exercise such as walking, enough calcium and vitamin D, and checks of BP, sugar and cholesterol all help. Your doctor may advise a bone density test.',
        ],
      },
      {
        heading: 'Contraception near menopause',
        body: [
          'You can still get pregnant in the years before menopause. Continue contraception for 2 years after your last period if you are under 50, and for 1 year if you are 50 or over.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`Our gynaecologists help with menopause symptoms and evaluate bleeding after menopause with ultrasound and, if needed, hysteroscopy. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'What is early menopause?',
        answer: 'Menopause before age 40 is called premature menopause. See a gynaecologist if your periods stop before 40, as treatment may protect your bones and heart.',
      },
      {
        question: 'Is HRT safe?',
        answer:
          'HRT helps many women with menopause symptoms, but it is not right for everyone. Your doctor will weigh the benefits and risks for you, based on your age, health and family history.',
      },
    ],
    links: [
      { href: '/blog/pap-smear-cervical-cancer-screening', label: 'Pap smear and cervical cancer screening' },
      { href: '/blog/hysterectomy-recovery-laparoscopic', label: 'Hysterectomy: reasons and recovery' },
      { href: '/services/cancer', label: 'Women’s cancer screening at Dhruva Hospitals' },
      { href: '/services/gynaecology', label: 'Gynaecology at Dhruva Hospitals' },
    ],
    sources: [
      who('Menopause', 'menopause'),
      nhs('Symptoms of menopause and perimenopause', '/conditions/menopause-and-perimenopause/symptoms/'),
    ],
  },
  {
    ...base,
    slug: 'pap-smear-cervical-cancer-screening',
    service: 'cancer',
    title: 'Pap smear and cervical cancer screening: who needs it and how often',
    seoTitle: 'Pap Smear Test: Who Needs It and When',
    description:
      'Why cervical cancer screening matters, WHO advice on starting at 30, what happens during a Pap smear, symptoms not to ignore, and HPV vaccination.',
    answer:
      'Cervical cancer is largely preventable. WHO advises screening from age 30 with a high-performance test every 5 to 10 years (from 25, every 3 to 5 years, for women living with HIV). A Pap smear or HPV test takes a few minutes in the clinic. HPV vaccination for girls aged 9 to 14 prevents most cases. Bleeding after sex, between periods or after menopause needs a check at any age.',
    sections: [
      {
        heading: 'Why screening matters',
        body: [
          'Almost all cervical cancers are caused by long-lasting infection with high-risk types of HPV, a common virus. It usually takes 15 to 20 years for abnormal cells to turn into cancer, so regular screening can find and treat changes long before cancer develops. Early changes rarely cause symptoms, which is why screening is needed even when you feel well.',
        ],
      },
      {
        heading: 'Who should be screened and how often',
        list: [
          'Women aged 30 and over: a high-performance test, such as an HPV test, every 5 to 10 years, as advised by WHO',
          'Women living with HIV: from age 25, every 3 to 5 years',
          'At least two screens in a lifetime, by 35 and again by 45, is WHO’s minimum goal',
        ],
        after: ['Your gynaecologist will advise which test suits you, such as a Pap smear, an HPV test or both, and how often to repeat it.'],
      },
      {
        heading: 'What happens during the test',
        ordered: [
          'You lie on the examination couch, and a female staff member can be present.',
          'A speculum is gently placed in the vagina to see the cervix.',
          'A soft brush takes a sample of cells from the cervix. It takes a few minutes and may feel uncomfortable, but should not be painful.',
          'The sample is sent to the laboratory, and the doctor explains the result and any next steps.',
        ],
        after: ['It is best not to have the test during your period. If you are pregnant, ask your doctor about the timing.'],
      },
      {
        heading: 'Symptoms not to ignore at any age',
        list: [
          'Bleeding between periods, after sex or after menopause',
          'Increased or foul-smelling vaginal discharge',
          'Persistent pain in the back, legs or pelvis',
          'Weight loss, tiredness and loss of appetite',
        ],
      },
      {
        heading: 'HPV vaccination',
        body: [
          'HPV vaccination for girls aged 9 to 14, before they become sexually active, is highly effective at preventing cervical cancer. Vaccinated women still need screening.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`We offer Pap smear screening, clinical breast examination and evaluation of abnormal bleeding. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Does an abnormal Pap smear mean I have cancer?',
        answer:
          'Usually not. Most abnormal results show early cell changes or HPV infection, which can be monitored or treated simply to prevent cancer.',
      },
      {
        question: 'I have no symptoms. Do I still need screening?',
        answer: 'Yes. Precancerous changes rarely cause symptoms, so screening is the only way to find them early.',
      },
    ],
    links: [
      { href: '/blog/white-discharge-vaginal-discharge', label: 'White discharge: what is normal' },
      { href: '/blog/menopause-symptoms-bleeding-after-menopause', label: 'Bleeding after menopause' },
      { href: '/services/cancer', label: 'Women’s cancer screening at Dhruva Hospitals' },
    ],
    sources: [who('Cervical cancer', 'cervical-cancer')],
  },
  {
    ...base,
    slug: 'contraception-options-family-planning',
    title: 'Family planning: contraception options after marriage and after delivery',
    seoTitle: 'Contraception Options and Family Planning',
    description:
      'Compare contraception options: Copper-T, pills, injections, condoms and sterilisation, plus emergency contraception and starting after delivery.',
    answer:
      'Many safe contraception options are available. Long-acting methods such as an IUD (Copper-T or hormonal) and sterilisation are the most effective. Pills, injections and condoms work well when used correctly, and condoms are the only method that also protects against sexually transmitted infections. Modern contraception does not cause infertility. After delivery, start contraception within 3 weeks.',
    sections: [
      {
        heading: 'Main options',
        table: {
          columns: ['Method', 'Key points'],
          rows: [
            ['IUD (Copper-T or hormonal IUD)', 'Placed in the womb by a doctor; very effective and lasts for years; removable when you want a baby'],
            ['Contraceptive pills', 'Taken regularly; effective when not missed. Your doctor checks whether they suit you'],
            ['Contraceptive injection', 'Given every few months by a health worker'],
            ['Condoms', 'Effective when used correctly every time; the only method that also protects against sexually transmitted infections, including HIV'],
            ['Sterilisation (tubectomy or vasectomy)', 'Permanent; for couples who are sure their family is complete. Vasectomy is a simpler operation than tubectomy'],
          ],
        },
        after: ['Fertility-awareness methods and withdrawal are much less reliable.'],
      },
      {
        heading: 'Emergency contraception',
        body: [
          'If you had unprotected sex or a contraceptive failed, emergency contraception can prevent pregnancy if used within 5 days, and it works better the sooner it is taken. Emergency pills are available from pharmacies. A Copper-T fitted within 5 days is the most effective option and can then be kept as regular contraception. Emergency pills are not meant for regular use.',
        ],
      },
      {
        heading: 'After delivery',
        body: [
          'You can get pregnant as early as 3 weeks after giving birth, even if you are breastfeeding and your periods have not returned. Start contraception within 21 days of delivery. Some methods, such as a Copper-T, can be fitted soon after delivery. Ask your doctor before discharge.',
          'WHO advises waiting at least 24 months after a birth before the next pregnancy, to protect the health of mother and baby.',
        ],
      },
      {
        heading: 'Choosing a method',
        list: [
          'How soon do you want a baby, if at all?',
          'Can you remember a daily pill, or would you prefer a long-acting method?',
          'Do you have health conditions such as high BP, migraine or blood clots, which rule out some methods?',
          'Are you breastfeeding?',
          'Do you also need protection from infections?',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`We offer family planning counselling and help you choose and start a method that suits you. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Will a Copper-T or pills make it hard to get pregnant later?',
        answer:
          'No. Modern contraceptive methods do not cause infertility. Fertility returns after an IUD is removed or pills are stopped; after injections it can take a few months.',
      },
      {
        question: 'Can newly married couples use an IUD?',
        answer:
          'Yes. An IUD can be used by women who have not had a baby. Your gynaecologist will check whether it suits you.',
      },
    ],
    links: [
      { href: '/blog/recovery-after-delivery-postnatal-care', label: 'Recovery after delivery' },
      { href: '/blog/menopause-symptoms-bleeding-after-menopause', label: 'Contraception near menopause' },
      { href: '/services/gynaecology', label: 'Family planning at Dhruva Hospitals' },
    ],
    sources: [
      who('Family planning/contraception methods', 'family-planning-contraception'),
      who('Emergency contraception', 'emergency-contraception'),
      nhs('Your body after the birth', '/pregnancy/labour-and-birth/your-body/'),
    ],
  },
  {
    ...base,
    slug: 'choosing-a-gynaecologist-kadapa',
    title: 'Choosing a gynaecologist in Kadapa: what to look for',
    seoTitle: 'Choosing a Gynaecologist in Kadapa',
    description:
      'What to check when choosing a gynaecologist in Kadapa: qualifications, delivery and emergency cover, NICU access, scans and lab, and questions to ask.',
    answer:
      'Look for a gynaecologist with a postgraduate qualification in obstetrics and gynaecology (MS, MD or DNB), a hospital with 24/7 delivery, caesarean and emergency cover, a NICU on site, ultrasound and a laboratory under the same roof, and a doctor who explains your options clearly and respects your privacy.',
    sections: [
      {
        heading: 'Qualifications and skills',
        body: [
          'A gynaecologist has an MBBS and a postgraduate degree in obstetrics and gynaecology. Extra training matters for specific needs: fertility medicine for IVF and IUI, minimal access surgery for laparoscopic operations, and fetal medicine for detailed pregnancy scans.',
          'Every doctor must be registered with a medical council, which you can check on the National Medical Commission’s Indian Medical Register.',
        ],
      },
      {
        heading: 'For pregnancy and delivery',
        list: [
          'Is the hospital staffed for deliveries and caesareans 24 hours a day?',
          'Is there a NICU on site, in case your baby needs special care?',
          'Is there an ICU and a blood bank arrangement for emergencies?',
          'Are painless delivery options available?',
          'Are ultrasound scans and lab tests available in the same hospital?',
        ],
      },
      {
        heading: 'Privacy and communication',
        body: [
          'You should feel comfortable discussing periods, sex, contraception and fertility. A good gynaecologist explains the reasons for each test and treatment, discusses alternatives, and lets you ask questions. A female staff member can be present during examinations.',
        ],
      },
      {
        heading: 'Questions to ask at your first visit',
        list: [
          'What are my options, and what are the benefits and risks of each?',
          'Which tests do I need, and why?',
          'Who will look after me if I go into labour at night?',
          'What should I do in an emergency?',
          'What will the treatment or delivery cost, approximately?',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          `Obstetrics, gynaecology and fertility care is led by Dr. S Mounika Reddy, MBBS, MS (Obstetrics & Gynaecology), with fellowships in reproductive medicine (FRM), minimal access surgery (FMAS), infertility and reproductive medicine (FIRM) and fetal scans. Consultations are in Telugu, English or Hindi. The hospital has deliveries and caesareans available 24/7, a Level III NICU, an ICU, ultrasound and an in-house laboratory. ${book}`,
        ],
      },
    ],
    faqs: [
      {
        question: 'When should a girl first see a gynaecologist?',
        answer:
          'There is no fixed age. See a gynaecologist for very painful, heavy or irregular periods, no periods by age 15, or any other concern. Visits are private and respectful.',
      },
      {
        question: 'Do I need a gynaecologist or a general physician?',
        answer:
          'For periods, pregnancy, fertility, contraception, discharge, pelvic pain and screening for women’s cancers, a gynaecologist is the right specialist.',
      },
    ],
    links: [
      { href: '/doctors/dr-mounika-reddy', label: 'Dr. S Mounika Reddy, gynaecologist and IVF specialist' },
      { href: '/guides/gynaecology-appointment-kadapa', label: 'Booking a gynaecology appointment in Kadapa' },
      { href: '/blog/antenatal-check-up-schedule', label: 'Pregnancy check-ups, visit by visit' },
      { href: '/services/gynaecology', label: 'Gynaecology at Dhruva Hospitals' },
    ],
    sources: [{ label: 'National Medical Commission: Indian Medical Register', url: 'https://nmc.org.in/information-desk/indian-medical-register' }],
  },
];
