// Fertility & IVF articles for the health blog. Format: see lib/blog/index.js.
import { site } from '../site';

const date = '2026-10-27';
const phone = site.phones.main.display;
const opd = site.hours.opd;
const pcpndt =
  'Sex determination of the foetus is not done at Dhruva Hospitals. It is prohibited under the PC & PNDT Act, 1994.';

const nhs = (label, path) => ({ label: `NHS (UK): ${label}`, url: `https://www.nhs.uk${path}` });
const artPortal = { label: 'National ART & Surrogacy Portal, Government of India', url: 'https://artsurrogacy.gov.in/' };
const hfeaIcsi = {
  label: 'HFEA (UK fertility regulator): Intracytoplasmic sperm injection (ICSI)',
  url: 'https://www.hfea.gov.uk/treatments/explore-all-treatments/intracytoplasmic-sperm-injection-icsi/',
};
const whoInfertility = { label: 'WHO: Infertility fact sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/infertility' };
const whoSemenManual = {
  label: 'WHO laboratory manual for the examination and processing of human semen, 6th edition',
  url: 'https://www.who.int/publications/i/item/9789240030787',
};
const book = `Call ${phone} or WhatsApp us to book a fertility consultation. OPD hours are ${opd}.`;

const base = {
  category: 'fertility',
  service: 'fertility',
  doctor: 'dr-mounika-reddy',
  publishedOn: date,
  updatedOn: date,
  reviewedOn: null,
};

export const fertilityPosts = [
  {
    ...base,
    slug: 'test-tube-baby-ivf-kadapa',
    title: 'Test tube baby (IVF) in Kadapa: how it works, step by step',
    seoTitle: 'Test Tube Baby (IVF) in Kadapa: The Steps',
    description:
      'What a test tube baby (IVF) is, who needs it, each step from injections to embryo transfer, what affects success, and IVF at Dhruva Hospitals, Kadapa.',
    answer:
      '“Test tube baby” is the common name for IVF (in vitro fertilisation). Eggs are collected from the woman’s ovaries, fertilised with sperm in a laboratory, and an embryo is placed in the womb a few days later. A full cycle takes about 3 to 6 weeks. The chance of success depends mainly on the woman’s age and the cause of infertility.',
    sections: [
      {
        heading: 'Who may need IVF',
        list: [
          'Blocked or damaged fallopian tubes',
          'A low sperm count or poor sperm movement, usually treated with IVF plus ICSI',
          'PCOS or ovulation problems when simpler treatments have not worked',
          'Endometriosis',
          'Unexplained infertility after other treatments',
          'Men who need sperm collected surgically, for example after a vasectomy',
        ],
      },
      {
        heading: 'The steps of an IVF cycle',
        ordered: [
          'Tests for both partners: hormone blood tests, an ultrasound of the ovaries and womb, a semen analysis, and screening for infections such as HIV and hepatitis B and C.',
          'Stimulation: daily hormone injections for about two weeks help several eggs grow. Ultrasound scans and blood tests track the follicles.',
          'A trigger injection prepares the eggs for collection.',
          'Egg collection: a fine needle guided by ultrasound collects the eggs through the vagina. It takes about 20 minutes, with medicine to make you sleepy.',
          'The male partner gives a sperm sample the same day, which is prepared in the laboratory.',
          'Fertilisation: eggs and sperm are combined in the lab (IVF), or a single sperm is injected into each egg (ICSI). The embryos grow in the lab for a few days.',
          'Embryo transfer: an embryo is placed in the womb through a thin tube passed through the vagina. Good extra embryos can be frozen for later.',
          'A pregnancy test is done about 16 days after the transfer, and a scan at around 7 weeks confirms the pregnancy.',
        ],
      },
      {
        heading: 'What affects success',
        list: [
          'The woman’s age, the most important factor',
          'The cause of infertility',
          'Body weight (BMI)',
          'Smoking and alcohol',
        ],
        after: [
          'No clinic can guarantee a baby. Ask for honest information about the chances in your situation before you start.',
        ],
      },
      {
        heading: 'Possible risks',
        list: [
          'Ovarian hyperstimulation syndrome (OHSS): ovaries become swollen and painful after stimulation',
          'Twins or more, which carry extra risks for mother and babies; transferring one embryo lowers this risk',
          'A slightly higher chance of ectopic pregnancy',
        ],
        after: [
          'Contact your fertility team at once if you have tummy pain and bloating, vomiting, feel faint, become breathless, pass little urine, or have bleeding during or after treatment.',
        ],
      },
      {
        heading: 'IVF and the law in India',
        body: [
          'Fertility treatment in India is regulated under the Assisted Reproductive Technology (Regulation) Act, 2021. Clinics must be registered with the National ART & Surrogacy Registry, and written consent is taken before treatment. Choosing the sex of a baby is illegal.',
          pcpndt,
        ],
      },
      {
        heading: 'IVF at Dhruva Hospitals',
        body: [
          `Our fertility service, led by Dr. S Mounika Reddy (MS Obstetrics & Gynaecology, with fellowships in reproductive medicine), offers IUI, IVF and ICSI in a modular embryology lab, surgical sperm retrieval, semen analysis and ovulation scans. ${book}`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a test tube baby a normal baby?',
        answer:
          'Yes. Only fertilisation happens in the laboratory. The embryo then grows in the mother’s womb like any other pregnancy.',
      },
      {
        question: 'Is IVF painful?',
        answer:
          'The daily injections cause mild discomfort. Egg collection is done with medicine to make you sleepy, and embryo transfer usually feels like a speculum examination.',
      },
      {
        question: 'Can we choose a boy or a girl with IVF?',
        answer: 'No. Sex selection is illegal in India and is never done.',
      },
    ],
    links: [
      { href: '/blog/ivf-vs-icsi', label: 'IVF or ICSI: what is the difference?' },
      { href: '/blog/choosing-ivf-centre-andhra-pradesh', label: 'Choosing an IVF centre in Andhra Pradesh' },
      { href: '/blog/when-to-see-fertility-specialist', label: 'When to see a fertility specialist' },
      { href: '/services/fertility', label: 'Fertility and IVF at Dhruva Hospitals' },
    ],
    sources: [nhs('IVF', '/tests-and-treatments/ivf/'), artPortal, hfeaIcsi],
  },
  {
    ...base,
    slug: 'when-to-see-fertility-specialist',
    title: 'Not getting pregnant? When to see a fertility specialist',
    seoTitle: 'Not Getting Pregnant? When to See a Doctor',
    description:
      'How long it normally takes to conceive, when to see a fertility specialist, the first tests for both partners, and simple steps that improve your chances.',
    answer:
      'More than 8 in 10 couples where the woman is under 40 conceive within a year of regular unprotected sex. See a fertility specialist if you have not conceived after 12 months of trying, or sooner if the woman is 36 or older, periods are irregular or absent, or either partner has a known problem. Both partners should be tested, because male factors are common.',
    sections: [
      {
        heading: 'How long is normal?',
        body: [
          'Infertility is defined as no pregnancy after 12 months of regular unprotected sex. WHO estimates that about 1 in 6 people experience infertility in their lifetime, so you are not alone. It can be primary (never having conceived) or secondary (difficulty conceiving again after a previous pregnancy).',
        ],
      },
      {
        heading: 'See a specialist sooner if',
        list: [
          'The woman is 36 or older',
          'Periods are irregular, very infrequent or absent',
          'There is a history of pelvic infection, ectopic pregnancy, endometriosis or pelvic surgery',
          'Fibroids, PCOS or thyroid problems are known',
          'The man has had testicular problems, surgery, injury or undescended testicles, or difficulty with erection or ejaculation',
          'Either partner has had cancer treatment',
          'You have had repeated miscarriages',
        ],
      },
      {
        heading: 'Common causes',
        list: [
          'The woman not releasing an egg regularly (ovulation problems), for example with PCOS',
          'Problems with the sperm: low count, poor movement or abnormal shape',
          'Blocked or damaged fallopian tubes',
          'Endometriosis, fibroids or other problems of the womb',
        ],
        after: ['In about a quarter of couples no cause is found, which is called unexplained infertility.'],
      },
      {
        heading: 'The first tests',
        list: [
          'For the woman: hormone blood tests, a pelvic ultrasound, a test to check that the tubes are open, and tracking of ovulation',
          'For the man: a semen analysis, which is simple, quick and painless',
        ],
      },
      {
        heading: 'Improving your chances meanwhile',
        list: [
          'Have sex every 2 to 3 days through the cycle.',
          'Aim for a healthy weight; being overweight or very underweight affects fertility.',
          'Stop smoking, including exposure to second-hand smoke, and avoid alcohol.',
          'The woman should take folic acid while trying to conceive.',
          'Men who work with pesticides, solvents or metals should use protective equipment.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`Fertility consultations are with Dr. S Mounika Reddy. Hormone tests, semen analysis and ovulation scans are done in the hospital, so most first tests need only a few visits. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Should my husband be tested too?',
        answer:
          'Yes. Sperm-related problems are found in around half of couples having difficulty conceiving, and a semen analysis is a simple first test.',
      },
      {
        question: 'We had one child easily. Why can’t we conceive again?',
        answer:
          'This is called secondary infertility and is common. Age, weight changes, infections, scarring after a caesarean or other surgery, and sperm changes can all play a part. The same tests help find the cause.',
      },
    ],
    links: [
      { href: '/blog/semen-analysis-test', label: 'Semen analysis: how to prepare and read the report' },
      { href: '/blog/pcod-pcos-symptoms-treatment', label: 'PCOD / PCOS and fertility' },
      { href: '/blog/male-infertility-causes-tests', label: 'Male infertility: causes and treatment' },
      { href: '/services/fertility', label: 'Fertility care at Dhruva Hospitals' },
    ],
    sources: [nhs('Infertility', '/conditions/infertility/'), whoInfertility, hfeaIcsi],
  },
  {
    ...base,
    slug: 'semen-analysis-test',
    title: 'Semen analysis test: how to prepare and how to read the report',
    seoTitle: 'Semen Analysis: How to Prepare, Read Report',
    description:
      'How to prepare for a semen analysis, how the sample is collected, WHO reference limits for count, motility and morphology, and what an abnormal report means.',
    answer:
      'A semen analysis checks sperm count, movement (motility) and shape (morphology). Avoid ejaculation for 2 to 7 days before the test, and collect the whole sample by masturbation into the sterile container the lab gives you. WHO’s lower reference limits include a concentration of 16 million per mL, total motility of 42% and 4% normal forms. An abnormal result is usually repeated before drawing conclusions.',
    sections: [
      {
        heading: 'How to prepare',
        list: [
          'Avoid ejaculation for 2 to 7 days before the test.',
          'Tell the doctor about your medicines and any fever or illness in the last 3 months, as these can affect the result.',
          'Collect the sample by masturbation. Do not use a condom or lubricant, as these can damage sperm.',
          'Collect the complete sample. Tell the staff if any part was spilled or lost.',
          'If the lab allows collection at home, deliver it within the time they give you, kept close to body temperature.',
        ],
      },
      {
        heading: 'WHO reference limits',
        body: ['The WHO laboratory manual (6th edition) gives these lower reference limits:'],
        table: {
          columns: ['Test', 'WHO lower reference limit'],
          rows: [
            ['Semen volume', '1.4 mL'],
            ['Sperm concentration', '16 million per mL'],
            ['Total sperm number', '39 million per ejaculate'],
            ['Total motility (moving sperm)', '42%'],
            ['Progressive motility (sperm swimming forward)', '30%'],
            ['Vitality (live sperm)', '54%'],
            ['Normal forms (morphology)', '4%'],
          ],
        },
        after: [
          'These limits come from men whose partners became pregnant within a year. A result below a limit does not mean a man cannot father a child, and a result above it does not guarantee fertility. Your doctor reads the whole report together with the female partner’s tests.',
        ],
      },
      {
        heading: 'Words you may see on the report',
        list: [
          'Oligozoospermia: a low sperm count',
          'Asthenozoospermia: low sperm movement',
          'Teratozoospermia: a low percentage of normally shaped sperm',
          'Azoospermia: no sperm in the sample',
        ],
      },
      {
        heading: 'If the result is abnormal',
        body: [
          'The test is usually repeated, because results vary from sample to sample. Sperm take about 2 to 3 months to develop, so lifestyle changes or treatment take a few months to show.',
          'Further tests may include hormone blood tests and a scrotal ultrasound. Depending on the cause, options include treating the cause, IUI, IVF with ICSI, or surgical sperm retrieval (TESA, PESA or TESE) when there are no sperm in the semen.',
        ],
      },
      {
        heading: 'Semen analysis at Dhruva Hospitals',
        body: [`Our laboratory offers computer-aided semen analysis, and our fertility team explains the report and the next steps. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Why must I avoid ejaculation for 2 to 7 days?',
        answer:
          'A shorter or longer gap changes the volume, count and movement of the sperm, which makes the result harder to interpret. Note the number of days on the form.',
      },
      {
        question: 'Can a low sperm count improve?',
        answer:
          'Sometimes. Stopping smoking and alcohol, reaching a healthy weight, and treating infections or other causes can help. Because sperm take about 3 months to develop, repeat the test after that time.',
      },
    ],
    links: [
      { href: '/blog/male-infertility-causes-tests', label: 'Male infertility: causes and treatment' },
      { href: '/blog/ivf-vs-icsi', label: 'IVF or ICSI: what is the difference?' },
      { href: '/services/diagnostics', label: 'Laboratory and semen analysis at Dhruva Hospitals' },
      { href: '/services/fertility', label: 'Fertility care at Dhruva Hospitals' },
    ],
    sources: [whoSemenManual, nhs('Causes of infertility', '/conditions/infertility/causes/')],
  },
  {
    ...base,
    slug: 'iui-treatment',
    title: 'IUI treatment: who it suits, the procedure and what to expect',
    seoTitle: 'IUI Treatment: Procedure and Who It Suits',
    description:
      'What IUI (intrauterine insemination) is, which couples it may help, the tests needed first, how ovulation is timed, what happens on the day, and the risks.',
    answer:
      'In IUI (intrauterine insemination), washed and concentrated sperm are placed directly into the womb through a thin tube around the time of ovulation. It takes about 10 minutes and is usually painless, and it is often combined with medicines to help ovulation. It needs at least one open fallopian tube and reasonable sperm quality, so both partners are tested first.',
    sections: [
      {
        heading: 'Who it may suit',
        list: [
          'Couples who cannot have vaginal intercourse, for physical or psychological reasons',
          'Couples using donor sperm',
          'Women with ovulation problems, combined with ovulation medicines',
          'Some couples with mild sperm problems',
        ],
        after: [
          'Guidance varies between countries. In the UK, the NHS does not recommend IUI for unexplained infertility, endometriosis or low sperm counts, and suggests IVF instead. Your specialist will advise based on your tests and age.',
        ],
      },
      {
        heading: 'Tests before IUI',
        list: [
          'A test to confirm that the fallopian tubes are open',
          'A semen analysis',
          'Hormone tests and a pelvic ultrasound',
        ],
      },
      {
        heading: 'Timing with ovulation',
        body: [
          'IUI is done when you ovulate. In a natural cycle, ovulation is found with urine or blood tests. If you need help to ovulate, you take ovulation medicine, have ultrasound scans to follow the growing egg (an ovulation study), and then a trigger injection to release the egg.',
        ],
      },
      {
        heading: 'On the day',
        ordered: [
          'The male partner gives a sperm sample, which the lab washes and concentrates.',
          'A speculum is placed in the vagina, and a thin, flexible tube is passed through the cervix into the womb.',
          'The prepared sperm are passed through the tube, which is then removed.',
          'You rest for a short while and go home. Mild cramping can happen.',
        ],
        after: ['The clinic tells you when to do a pregnancy test.'],
      },
      {
        heading: 'Risks',
        body: [
          'IUI itself is safe; infection is very rare. When ovulation medicines are used, there is a small risk of twins or more, ectopic pregnancy and ovarian hyperstimulation. Contact the clinic if you have tummy pain and bloating, vomiting or feel faint.',
        ],
      },
      {
        heading: 'IUI at Dhruva Hospitals',
        body: [`We offer IUI with ovulation scans and sperm preparation in our own lab. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Is IUI painful?',
        answer: 'It is not usually painful, though it can be a little uncomfortable, like a speculum examination, with mild cramps afterwards.',
      },
      {
        question: 'How many IUI cycles should we try?',
        answer:
          'Your specialist will advise. If IUI has not worked after a few cycles, or your tests show it is unlikely to help, IVF is usually the next step.',
      },
    ],
    links: [
      { href: '/blog/test-tube-baby-ivf-kadapa', label: 'Test tube baby (IVF), step by step' },
      { href: '/blog/semen-analysis-test', label: 'Semen analysis explained' },
      { href: '/blog/when-to-see-fertility-specialist', label: 'When to see a fertility specialist' },
      { href: '/services/fertility', label: 'IUI at Dhruva Hospitals' },
    ],
    sources: [nhs('Intrauterine insemination (IUI)', '/tests-and-treatments/intrauterine-insemination-iui/'), artPortal],
  },
  {
    ...base,
    slug: 'ivf-vs-icsi',
    title: 'IVF or ICSI: what is the difference and which one do you need?',
    seoTitle: 'IVF vs ICSI: What Is the Difference?',
    description:
      'How IVF and ICSI differ, when ICSI is recommended for male infertility, when standard IVF is enough, surgical sperm retrieval, and what it means for cost.',
    answer:
      'In IVF, eggs and sperm are placed together in a dish so fertilisation happens on its own. In ICSI, an embryologist injects a single sperm into each egg. ICSI is used mainly for male infertility, such as a very low sperm count or poor movement, or after poor fertilisation in an earlier IVF cycle. For couples without a sperm problem, ICSI has not been shown to improve success over standard IVF.',
    sections: [
      {
        heading: 'How they differ',
        table: {
          columns: ['', 'IVF', 'ICSI'],
          rows: [
            ['Fertilisation', 'Sperm and eggs are mixed in a dish', 'One sperm is injected into each egg'],
            ['Main use', 'Tubal problems, ovulation problems, endometriosis, unexplained infertility', 'Male infertility, previous failed fertilisation, surgically collected sperm'],
            ['Rest of the cycle', 'Same: stimulation, egg collection, embryo transfer', 'Same: stimulation, egg collection, embryo transfer'],
          ],
        },
      },
      {
        heading: 'When ICSI is recommended',
        list: [
          'A very low sperm count, or poor sperm movement or shape',
          'No eggs, or very few, fertilised in a previous IVF cycle',
          'Sperm collected surgically from the testicle or epididymis, for example after a vasectomy or because of a blockage',
          'Frozen sperm of lower quality',
          'Embryo testing for a genetic condition',
        ],
      },
      {
        heading: 'When standard IVF is enough',
        body: [
          'The UK fertility regulator (HFEA) notes there is no scientific evidence that ICSI helps when the sperm are normal, and professional guidelines do not recommend it over standard IVF in that situation. Using ICSI when it is not needed can raise the cost without improving the chance of a baby.',
        ],
      },
      {
        heading: 'Success rates',
        body: [
          'Once the egg is fertilised, success with ICSI is similar to IVF. The most important factors remain the woman’s age and the cause of infertility.',
        ],
      },
      {
        heading: 'Sperm preparation methods',
        body: [
          'The lab prepares the sperm before IVF, ICSI or IUI. Dhruva Hospitals’ lab offers density gradient, microfluidic and MACS sperm preparation. Your specialist will explain whether any special method is useful in your case.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`Our modular embryology lab has ICSI facilities, and we offer surgical sperm retrieval (TESA, PESA and TESE) for men with no sperm in the semen. ${book}`, pcpndt],
      },
    ],
    faqs: [
      {
        question: 'Does ICSI cost more than IVF?',
        answer:
          'Usually yes, because of the extra lab work. That is why it should be used when there is a clear reason, such as a sperm problem.',
      },
      {
        question: 'Can ICSI help if my husband has no sperm in the semen?',
        answer:
          'Sometimes. If sperm can be found in the testicle or epididymis by a minor surgical procedure, ICSI can be used to fertilise the eggs. Tests help predict whether retrieval is likely to work.',
      },
    ],
    links: [
      { href: '/blog/test-tube-baby-ivf-kadapa', label: 'Test tube baby (IVF), step by step' },
      { href: '/blog/male-infertility-causes-tests', label: 'Male infertility: causes and treatment' },
      { href: '/blog/semen-analysis-test', label: 'Semen analysis explained' },
      { href: '/services/fertility', label: 'IVF and ICSI at Dhruva Hospitals' },
    ],
    sources: [hfeaIcsi, nhs('IVF', '/tests-and-treatments/ivf/'), artPortal],
  },
  {
    ...base,
    slug: 'choosing-ivf-centre-andhra-pradesh',
    title: 'Choosing an IVF or fertility centre in Andhra Pradesh: questions to ask',
    seoTitle: 'Choosing an IVF Centre in Andhra Pradesh',
    description:
      'How to choose an IVF centre in Andhra Pradesh and Kadapa: ART Act registration, the specialist and embryologist, the lab, honest success information and costs.',
    answer:
      'Choose a centre that is registered under India’s ART (Regulation) Act, 2021, has a qualified fertility specialist and embryologist, explains your diagnosis and options before recommending treatment, gives honest age-specific information about success, provides a clear written cost estimate, and never offers sex selection. A centre close to home also helps, as IVF needs several visits.',
    sections: [
      {
        heading: 'Check registration',
        body: [
          'Under the Assisted Reproductive Technology (Regulation) Act, 2021, IVF clinics and sperm and egg banks in India must be registered with the National ART & Surrogacy Registry. Andhra Pradesh has a State Board under the Act. Ask the centre for its registration details.',
        ],
      },
      {
        heading: 'The team',
        list: [
          'A gynaecologist with training in reproductive medicine who will lead your treatment',
          'A qualified embryologist working in the centre’s own laboratory',
          'Counselling before, during and after treatment, which is recommended for anyone having IVF',
        ],
      },
      {
        heading: 'The laboratory',
        list: [
          'An embryology lab on site, with facilities for ICSI and embryo freezing',
          'Semen analysis and hormone tests available locally, to reduce travel',
        ],
      },
      {
        heading: 'Honest information',
        list: [
          'Does the doctor explain your diagnosis and all the options, including simpler treatments, before suggesting IVF?',
          'Are you given realistic chances for your age and situation? Be wary of any promise of guaranteed success.',
          'Are the risks, such as OHSS and multiple pregnancy, explained?',
        ],
      },
      {
        heading: 'Costs',
        body: [
          'Ask for a written estimate that lists the consultation, scans, medicines, egg collection, ICSI if needed, embryo freezing and storage, and frozen embryo transfer. Medicines can be a large part of the cost.',
        ],
      },
      {
        heading: 'Legal and ethical safeguards',
        list: [
          'Written, informed consent before treatment',
          'No sex selection of any kind: it is a crime in India',
          'Clear records of how your eggs, sperm and embryos are used and stored',
        ],
      },
      {
        heading: 'Practical points',
        body: [
          'A stimulation cycle needs several scans over about two weeks. For couples in Kadapa, Proddatur, Pulivendula, Rajampet, Rayachoti and nearby towns, a centre close by means fewer long journeys. Families living abroad can start with an online consultation before travelling.',
        ],
      },
      {
        heading: 'Fertility care at Dhruva Hospitals, Kadapa',
        body: [
          `Dr. S Mounika Reddy, MBBS, MS (Obstetrics & Gynaecology), with fellowships in reproductive medicine (FRM) and infertility and reproductive medicine (FIRM), leads our fertility service. We offer IUI, IVF and ICSI in a modular embryology lab, sperm preparation, surgical sperm retrieval, semen analysis and ovulation scans, with pre-arrival video consultations for families abroad. ${book}`,
          pcpndt,
        ],
      },
    ],
    faqs: [
      {
        question: 'Is IVF in Kadapa as good as in a big city?',
        answer:
          'What matters most is the team’s training, the laboratory, legal registration and honest advice, not the size of the city. Being close to home also makes the many visits easier.',
      },
      {
        question: 'How many visits does IVF need?',
        answer:
          'Usually a first consultation and tests, several scans during about two weeks of injections, egg collection, embryo transfer a few days later, and a pregnancy test about 16 days after that.',
      },
    ],
    links: [
      { href: '/blog/test-tube-baby-ivf-kadapa', label: 'Test tube baby (IVF), step by step' },
      { href: '/blog/ivf-vs-icsi', label: 'IVF or ICSI: what is the difference?' },
      { href: '/doctors/dr-mounika-reddy', label: 'Dr. S Mounika Reddy, IVF specialist' },
      { href: '/nri', label: 'Arranging care from abroad' },
    ],
    sources: [artPortal, nhs('IVF', '/tests-and-treatments/ivf/'), hfeaIcsi],
  },
  {
    ...base,
    slug: 'male-infertility-causes-tests',
    title: 'Male infertility: causes, tests and treatment',
    seoTitle: 'Male Infertility: Causes, Tests, Treatment',
    description:
      'Sperm problems are found in around half of couples who struggle to conceive. The common causes, tests starting with semen analysis, and treatment options.',
    answer:
      'Sperm-related problems are found in around half of couples who have difficulty conceiving. The first test is a semen analysis. Causes include low or absent sperm, poor movement or shape, blockages, hormone problems, varicocele, infections and lifestyle factors such as smoking. Treatment ranges from lifestyle changes and medicines to IUI, IVF with ICSI and surgical sperm retrieval.',
    sections: [
      {
        heading: 'Common causes',
        list: [
          'Low sperm count, or no sperm in the semen',
          'Sperm that do not move well or have an abnormal shape',
          'Blockage of the tubes that carry sperm, often after infection or injury',
          'Hormone problems affecting the pituitary gland or testicles',
          'Varicocele (swollen veins in the scrotum), infection, injury or surgery of the testicles, or undescended testicles',
          'Problems with erection or ejaculation',
          'Previous chemotherapy or radiotherapy',
        ],
        after: ['Many cases of abnormal semen have no clear cause.'],
      },
      {
        heading: 'Lifestyle factors',
        list: [
          'Smoking, including second-hand smoke',
          'Heavy drinking',
          'Being overweight (BMI of 30 or more)',
          'Exposure to some pesticides, solvents and metals at work',
          'Sexually transmitted infections such as chlamydia',
          'Severe stress',
        ],
      },
      {
        heading: 'Tests',
        list: [
          'Semen analysis, repeated if abnormal',
          'Examination by the doctor',
          'Hormone blood tests',
          'Scrotal ultrasound in some men',
          'Genetic tests when the count is very low or there are no sperm',
        ],
      },
      {
        heading: 'Treatment',
        list: [
          'Lifestyle changes and treatment of infections or hormone problems',
          'IUI for some mild sperm problems',
          'IVF with ICSI, which needs only one sperm for each egg',
          'Surgical sperm retrieval (TESA, PESA or TESE) when there are no sperm in the semen',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [`We offer computer-aided semen analysis, sperm preparation (density gradient, microfluidics and MACS), surgical sperm retrieval and ICSI. ${book}`],
      },
    ],
    faqs: [
      {
        question: 'Does a low sperm count mean we cannot have a child?',
        answer:
          'No. Many couples with a low count conceive naturally or with treatment. ICSI needs only a small number of sperm.',
      },
      {
        question: 'Is infertility always the woman’s problem?',
        answer:
          'No. Infertility can come from the man, the woman, both, or no cause may be found. Both partners should be tested from the start.',
      },
    ],
    links: [
      { href: '/blog/semen-analysis-test', label: 'Semen analysis: how to prepare and read the report' },
      { href: '/blog/ivf-vs-icsi', label: 'IVF or ICSI: what is the difference?' },
      { href: '/blog/when-to-see-fertility-specialist', label: 'When to see a fertility specialist' },
      { href: '/services/fertility', label: 'Male infertility care at Dhruva Hospitals' },
    ],
    sources: [whoInfertility, nhs('Causes of infertility', '/conditions/infertility/causes/'), hfeaIcsi],
  },
];
