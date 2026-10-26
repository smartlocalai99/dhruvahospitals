// Newborn care articles for the health blog. Format: see lib/blog/index.js.
import { site } from '../site';

const date = '2026-10-27';
const emergency = site.phones.emergency.display;

const nhs = (label, path) => ({ label: `NHS (UK): ${label}`, url: `https://www.nhs.uk${path}` });
const who = (label, slug) => ({ label: `WHO: ${label}`, url: `https://www.who.int/news-room/fact-sheets/detail/${slug}` });
const nis = {
  label: 'National Health Mission, India: National Immunization Schedule (PDF)',
  url: 'https://nhm.gov.in/New_Updates_2018/NHM_Components/Immunization/report/National_%20Immunization_Schedule.pdf',
};

const base = {
  category: 'newborn',
  service: 'neonatal',
  doctor: 'dr-sudarshan-reddy',
  publishedOn: date,
  updatedOn: date,
  reviewedOn: null,
};

export const newbornPosts = [
  {
    ...base,
    slug: 'newborn-jaundice',
    title: 'Jaundice in newborn babies: when it is normal and when to worry',
    seoTitle: 'Newborn Jaundice: When to Worry',
    description:
      'Why newborns turn yellow, how to check for jaundice at home, the warning signs that need hospital care straight away, and how phototherapy works.',
    answer:
      'Yellow skin and eyes are common in newborns. Jaundice is usually most noticeable around day 3 and fades within about 2 weeks. See a doctor the same day if your baby looks yellow. Go to hospital immediately if jaundice appears in the first 24 hours, or if the baby is very sleepy, not feeding, floppy, has a fever or no wet nappies. Treatment, when needed, is usually phototherapy.',
    sections: [
      {
        heading: 'Why newborns get jaundice',
        body: [
          'Jaundice is caused by a build-up of bilirubin, a yellow substance the liver normally clears. A newborn’s liver takes a few weeks to work fully, so mild jaundice is common and usually harmless.',
          'Less often it has another cause, such as a difference between the mother’s and baby’s blood groups, an infection or a liver problem. That is why a doctor should check every yellow baby.',
        ],
      },
      {
        heading: 'How to check your baby',
        list: [
          'Look at the whites of the eyes, the gums and under the tongue.',
          'Look at the skin in good daylight. Yellowness usually starts on the face and head and spreads down the body.',
          'Press gently on the tip of the nose or the forehead for a moment; yellow is easier to see as the skin pales.',
          'Jaundice can be harder to see on brown skin, so check the eyes and gums too.',
        ],
      },
      {
        heading: 'Go to hospital immediately if your baby has jaundice and',
        list: [
          'Is less than 24 hours old',
          'Is sleepier than usual or hard to wake',
          'Is not feeding',
          'Is floppy or stiff, or has jerking or twitching movements',
          'Has a temperature of 38°C or more, or 36°C or less',
          'Has had no wet nappies',
          'Is breathing fast, grunting, or the tummy sucks in under the ribs',
        ],
        after: [`Call ${emergency}. Ask someone else to drive while you look after the baby.`],
      },
      {
        heading: 'See a doctor the same day if',
        list: [
          'Your baby is over 24 hours old and looks yellow',
          'Jaundice that was diagnosed is not getting better, or is getting worse',
          'The urine is dark yellow, or the stools are pale and chalky. Keep a nappy to show the doctor.',
        ],
      },
      {
        heading: 'Tests and treatment',
        body: [
          'The bilirubin level is measured with a skin meter or a blood test. Most babies need no treatment apart from frequent feeding, around 8 to 12 times a day, which helps the body clear bilirubin. Wake a sleepy baby for feeds.',
          'If the level is high, the baby is treated with phototherapy: a special light shone on the skin, usually for around 48 hours. Rarely, a blood exchange transfusion or medicine through a vein is needed.',
          'Do not rely on putting your baby in the sun. It is not a reliable treatment, and a newborn can overheat or burn. Get the bilirubin checked instead.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          'Phototherapy for newborn jaundice is given in our Level III NICU, led by paediatrician and neonatologist Dr. Sudarshan Reddy K. The neonatal emergency team is available 24 hours a day.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I keep breastfeeding if my baby has jaundice?',
        answer:
          'Yes. Feed often, 8 to 12 times a day. Do not give water, glucose water or other liquids unless your doctor advises it.',
      },
      {
        question: 'How long does phototherapy take?',
        answer: 'Most babies need around 48 hours. The bilirubin level is rechecked during treatment to decide when to stop.',
      },
    ],
    links: [
      { href: '/blog/newborn-danger-signs', label: 'Danger signs in a newborn baby' },
      { href: '/blog/breastfeeding-first-days', label: 'Breastfeeding in the first few days' },
      { href: '/guides/nicu-levels-of-care', label: 'NICU levels of care explained' },
      { href: '/services/neonatal', label: 'Neonatal care and NICU at Dhruva Hospitals' },
    ],
    sources: [nhs('Jaundice in babies', '/conditions/jaundice-in-babies/')],
  },
  {
    ...base,
    slug: 'breastfeeding-first-days',
    title: 'Breastfeeding in the first few days: colostrum, how often to feed and getting help',
    seoTitle: 'Breastfeeding in the First Few Days',
    description:
      'Starting breastfeeding in the first hour, why colostrum matters, how often a newborn should feed, when your milk comes in, and when to ask for help.',
    answer:
      'Start breastfeeding within the first hour after birth if you can, with your baby skin-to-skin on your chest. The first milk, colostrum, is thick and yellow, and about a teaspoon per feed is enough. Feed whenever your baby shows hunger cues, at least 8 to 12 times in 24 hours. Your milk usually “comes in” 2 to 4 days after birth.',
    sections: [
      {
        heading: 'Skin-to-skin and the first feed',
        body: [
          'WHO and UNICEF recommend that every baby starts breastfeeding within 1 hour of birth. Holding your baby naked against your skin keeps the baby warm and calm and helps the first feed. This is possible after a caesarean too.',
          'If your baby needs special care first, you can still breastfeed and bond later. The nurses can help you express milk in the meantime.',
        ],
      },
      {
        heading: 'Colostrum: your first milk',
        body: [
          'The milk in the first few days is called colostrum. It is thick, golden-yellow and very concentrated, so a newborn needs only a small amount at each feed. Do not throw it away; it is the right first food for your baby.',
          'Your baby needs nothing else: no water, honey, ghutti, sugar water or formula unless your doctor advises it.',
        ],
      },
      {
        heading: 'How often to feed',
        body: [
          'In the first days, babies may feed every 1 to 3 hours, and at least 8 to 12 times in 24 hours. Feed whenever your baby wants and for as long as they want. You cannot overfeed a breastfed baby.',
          'Early hunger cues are easier to respond to than crying:',
        ],
        list: [
          'Restlessness',
          'Sucking on fists or fingers',
          'Murmuring sounds',
          'Turning the head and opening the mouth (rooting)',
        ],
      },
      {
        heading: 'Building your milk supply',
        body: [
          'Around 2 to 4 days after birth your breasts feel fuller as your milk comes in. The more often your baby feeds, the more milk you make. Night feeds are important, because the hormone that builds supply is higher at night.',
          'In the early weeks, formula top-ups or a pacifier can reduce your supply. Nearly all mothers make enough milk for their baby.',
        ],
      },
      {
        heading: 'When to ask for help',
        list: [
          'Feeding hurts all the way through, or your nipples are cracked',
          'Your baby falls asleep before the deep, rhythmic swallowing starts, which can mean a poor latch',
          'Your baby is too sleepy to wake for feeds, or looks yellow',
          'Your baby has fewer wet nappies or dark urine',
          'You are worried your baby is not getting enough milk',
        ],
      },
      {
        heading: 'The first six months',
        body: [
          'WHO recommends breast milk only for the first 6 months, then continuing breastfeeding up to 2 years or beyond, with safe solid foods added from 6 months.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I breastfeed after a caesarean?',
        answer:
          'Yes. You can usually have skin-to-skin contact and start feeding soon after the operation. Ask the nurses to help you find a comfortable position that keeps pressure off the wound.',
      },
      {
        question: 'My milk has not come in yet. Is my baby starving?',
        answer:
          'No. Colostrum is enough for the first few days, because a newborn’s stomach is small. Frequent feeding brings your milk in faster.',
      },
    ],
    links: [
      { href: '/blog/newborn-jaundice', label: 'Jaundice in newborn babies' },
      { href: '/blog/newborn-care-at-home', label: 'Caring for your newborn at home' },
      { href: '/blog/recovery-after-delivery-postnatal-care', label: 'Recovery after delivery' },
      { href: '/services/neonatal', label: 'Neonatal care at Dhruva Hospitals' },
    ],
    sources: [
      nhs('Breastfeeding: the first few days', '/baby/breastfeeding-and-bottle-feeding/breastfeeding/the-first-few-days/'),
      who('Infant and young child feeding', 'infant-and-young-child-feeding'),
    ],
  },
  {
    ...base,
    slug: 'baby-vaccination-schedule-india',
    service: 'paediatrics',
    title: 'Baby vaccination schedule in India: the national immunisation chart',
    seoTitle: 'Baby Vaccination Chart India (NIS)',
    description:
      'India’s National Immunization Schedule from birth to 16 years in one table: BCG, polio, pentavalent, rotavirus, PCV, MR, DPT boosters and Td.',
    answer:
      'Under India’s National Immunization Schedule, babies get BCG, oral polio and hepatitis B at birth; polio, pentavalent, rotavirus, IPV and PCV doses at 6, 10 and 14 weeks; measles-rubella at 9 to 12 months; and boosters at 16 to 24 months and 5 to 6 years, then Td at 10 and 16 years. Keep the vaccination card safe and bring it to every visit.',
    sections: [
      {
        heading: 'National Immunization Schedule at a glance',
        table: {
          columns: ['Age', 'Vaccines'],
          rows: [
            ['Birth', 'BCG, oral polio (OPV-0) and hepatitis B birth dose'],
            ['6 weeks', 'OPV-1, pentavalent-1, rotavirus-1, fractional IPV-1 and PCV-1'],
            ['10 weeks', 'OPV-2, pentavalent-2 and rotavirus-2'],
            ['14 weeks', 'OPV-3, pentavalent-3, fractional IPV-2, rotavirus-3 and PCV-2'],
            ['9 to 12 months', 'Measles-rubella (MR-1), PCV booster and vitamin A (first dose); JE-1 in districts where Japanese encephalitis is common'],
            ['16 to 24 months', 'MR-2, DPT booster-1 and OPV booster; JE-2 where applicable; vitamin A from 16 to 18 months, then every 6 months up to 5 years'],
            ['5 to 6 years', 'DPT booster-2'],
            ['10 years', 'Td (tetanus and adult diphtheria)'],
            ['16 years', 'Td'],
          ],
        },
        after: [
          'Pentavalent vaccine protects against five diseases: diphtheria, whooping cough (pertussis), tetanus, hepatitis B and Hib.',
          'This table follows the National Health Mission’s published chart. The government updates the schedule from time to time, and some vaccines, such as PCV, were first introduced in selected states. Your paediatrician follows the current schedule.',
        ],
      },
      {
        heading: 'Vaccines for pregnant mothers',
        body: [
          'Pregnant women get Td-1 early in pregnancy and Td-2 four weeks later. If you had two doses in a pregnancy within the last 3 years, one booster dose is enough.',
        ],
      },
      {
        heading: 'Additional vaccines',
        body: [
          'The Indian Academy of Pediatrics (IAP) recommends some vaccines beyond the national schedule. At Dhruva Hospitals our paediatrician vaccinates as per the IAP schedule and will explain which additional vaccines may benefit your child, and when.',
        ],
      },
      {
        heading: 'If a dose was missed',
        body: [
          'Do not restart the schedule; most vaccines can be caught up. For example, the national chart allows BCG, pentavalent and rotavirus doses up to one year of age, and oral polio up to 5 years. Bring the vaccination card so the doctor can plan the remaining doses.',
        ],
      },
      {
        heading: 'On vaccination day',
        list: [
          'Bring the vaccination card every time.',
          'Feed your baby as usual. Breastfeeding during or after the injection can comfort your baby.',
          'Mild fever, crankiness and soreness where the injection was given are common and usually settle within a day or two. Ask the doctor before giving any medicine.',
          'Get help immediately if your baby has a fit, difficulty breathing, swelling of the lips, tongue or face, a weak or high-pitched continuous cry, or is very hard to wake.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are national schedule vaccines free?',
        answer:
          'Yes, vaccines in the national schedule are free at government health centres. Ask us about the vaccines given at Dhruva Hospitals and their cost.',
      },
      {
        question: 'Can my baby be vaccinated with a cold?',
        answer:
          'A mild cold without high fever is usually not a reason to delay. Let the paediatrician check your baby on the day and decide.',
      },
    ],
    links: [
      { href: '/blog/newborn-care-at-home', label: 'Caring for your newborn at home' },
      { href: '/blog/child-development-milestones', label: 'Child development milestones' },
      { href: '/guides/paediatrician-appointment-kadapa', label: 'Booking a paediatrician appointment in Kadapa' },
      { href: '/services/paediatrics', label: 'Paediatrics and vaccination at Dhruva Hospitals' },
    ],
    sources: [nis],
  },
  {
    ...base,
    slug: 'premature-baby-nicu-care',
    title: 'Premature babies and NICU care: what parents should know',
    seoTitle: 'Premature Baby and NICU Care Explained',
    description:
      'What counts as a premature birth, why babies are born early, what happens in a NICU, kangaroo mother care, and caring for a preterm baby after going home.',
    answer:
      'A baby born before 37 weeks is premature (preterm). Many need help with breathing, warmth, feeding and infection, which a neonatal intensive care unit (NICU) provides. WHO notes that simple care such as kangaroo mother care, early breastfeeding and CPAP for breathing problems greatly reduces deaths in preterm babies. Parents are an important part of the care team.',
    sections: [
      {
        heading: 'How early is premature?',
        table: {
          columns: ['Category', 'Born at'],
          rows: [
            ['Extremely preterm', 'Less than 28 weeks'],
            ['Very preterm', '28 to less than 32 weeks'],
            ['Moderate to late preterm', '32 to less than 37 weeks'],
          ],
        },
        after: ['WHO estimates that more than 1 in 10 babies worldwide is born preterm.'],
      },
      {
        heading: 'Why babies are born early',
        body: [
          'Most preterm births start on their own. Others are planned early because of a medical problem, such as high blood pressure or infection, when an early birth is safer for mother or baby. Twins, infections, diabetes and high blood pressure raise the chance, but often no cause is found.',
          'If early birth is likely, doctors may give the mother steroid injections to help the baby’s lungs, and medicines to delay labour or prevent infection. It is safer to deliver in a hospital with a NICU, so the baby does not have to be moved after birth.',
        ],
      },
      {
        heading: 'What happens in the NICU',
        list: [
          'Keeping the baby warm',
          'Continuous monitoring of heart rate, breathing and oxygen levels',
          'Breathing support when needed: high-flow oxygen (HFNC), CPAP or a ventilator',
          'Feeding with breast milk, by tube at first if the baby cannot suck yet',
          'Phototherapy for jaundice, which is common in preterm babies',
          'Prompt treatment of infection',
        ],
      },
      {
        heading: 'Kangaroo mother care and your role',
        body: [
          'In kangaroo mother care, the baby is held skin-to-skin on the mother’s or father’s chest for long periods. WHO recommends it for small and preterm babies, along with early breastfeeding, because it keeps babies warm, supports feeding and saves lives.',
          'Express breast milk from the first day if your baby cannot feed directly. Ask the NICU team when you can hold your baby skin-to-skin.',
        ],
      },
      {
        heading: 'After going home',
        list: [
          'Keep follow-up appointments for growth, development, eye and hearing checks.',
          'Always put your baby to sleep on their back, in their own cot in your room. Do not share a bed with a baby born before 37 weeks or weighing less than 2.5 kg.',
          'For premature babies, follow safe-sleep advice for a year from the due date, not the birth date.',
          'Keep vaccinations on time, according to the baby’s actual birth date unless your doctor advises otherwise.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          'Our Level III NICU, led by paediatrician and neonatologist Dr. Sudarshan Reddy K, cares for preterm babies with continuous monitoring, HFNC and CPAP, ventilator support and phototherapy. The neonatal emergency team is available 24 hours a day.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long will my baby stay in the NICU?',
        answer:
          'It depends on how early the baby was born and how unwell they are. Babies usually go home once they breathe on their own, keep warm, feed well and gain weight steadily.',
      },
      {
        question: 'Will my premature baby catch up?',
        answer:
          'Many preterm babies grow and develop well. Some need extra support, which is why regular follow-up checks of growth, development, eyes and hearing are important.',
      },
    ],
    links: [
      { href: '/guides/nicu-levels-of-care', label: 'NICU levels of care explained' },
      { href: '/blog/newborn-danger-signs', label: 'Danger signs in a newborn baby' },
      { href: '/blog/breastfeeding-first-days', label: 'Breastfeeding in the first few days' },
      { href: '/services/neonatal', label: 'Level III NICU at Dhruva Hospitals' },
    ],
    sources: [who('Preterm birth', 'preterm-birth'), nhs('Sudden infant death syndrome (SIDS)', '/baby/caring-for-a-newborn/sudden-infant-death-syndrome-sids/')],
  },
  {
    ...base,
    slug: 'newborn-danger-signs',
    title: 'Danger signs in a newborn baby: when to go to hospital straight away',
    seoTitle: 'Newborn Danger Signs: When to Rush',
    description:
      'Warning signs in a newborn that need emergency care: not feeding, fever or low temperature, fast or noisy breathing, fits, unusual sleepiness and dry nappies.',
    answer:
      'Take your baby to hospital immediately if they are not feeding, are very sleepy or hard to wake, are floppy, have a fit, breathe fast or with grunting, have a temperature of 38°C or more or less than 36°C, look blue, grey or very pale, or have had no wet nappy for 12 hours. In a baby under 3 months, a temperature of 38°C or more always needs urgent checking.',
    sections: [
      {
        heading: 'Go to hospital immediately if your baby',
        list: [
          'Is not feeding, or keeps vomiting',
          'Is sleepier than usual, hard to wake, or floppy',
          'Has a fit (seizure), or jerking or twitching movements',
          'Is breathing very fast, grunting, or sucking in the tummy or chest with each breath',
          'Has a temperature of 38°C or more, or less than 36°C, or feels cold to touch',
          'Has blue, grey, pale or blotchy skin, lips or tongue',
          'Has a weak, high-pitched or continuous cry',
          'Has had no wet nappy in 12 hours',
          'Has a rash that does not fade when you press a glass against it',
          'Has a swollen or bulging soft spot on the head',
          'Has yellow skin in the first 24 hours of life',
        ],
        after: [`Call ${emergency}. Our neonatal and paediatric emergency team is on duty 24 hours a day.`],
      },
      {
        heading: 'Checking the temperature',
        body: [
          'Use a digital thermometer under the armpit. A temperature of 38°C or more in a baby under 3 months, or 39°C or more at 3 to 6 months, needs urgent medical help. A reading below 36°C is also a warning sign; recheck twice within 10 minutes, and if it stays low, come to hospital.',
        ],
      },
      {
        heading: 'Trust your instinct',
        body: [
          'Babies do not need to have every sign to be seriously ill, and illness can get worse quickly. If you feel something is wrong, get your baby checked. Keep checking for new signs during the night.',
        ],
      },
      {
        heading: 'On the way to hospital',
        list: [
          'Keep your baby warm but not overwrapped.',
          'Bring the discharge card, vaccination card and any medicines your baby takes.',
          'Do not give home remedies or medicines that a doctor has not advised.',
          'If you can, let someone else drive so you can watch the baby.',
        ],
      },
    ],
    faqs: [
      {
        question: 'My baby has a mild fever after a vaccine. Is that a danger sign?',
        answer:
          'Mild fever is common after some vaccines. But a baby under 3 months with a temperature of 38°C or more should still be checked urgently, and any baby with the danger signs above needs hospital care.',
      },
      {
        question: 'How can I tell if my baby is breathing too hard?',
        answer:
          'Count the breaths for one full minute while your baby is calm. WHO treats 60 or more breaths a minute in a baby under 2 months as a danger sign. Sucking in under the ribs, flaring nostrils, grunting, nodding the head with each breath, or pauses in breathing also need urgent help.',
      },
    ],
    links: [
      { href: '/blog/newborn-jaundice', label: 'Jaundice in newborn babies' },
      { href: '/blog/fever-in-children', label: 'Fever in children: when to see a doctor' },
      { href: '/blog/premature-baby-nicu-care', label: 'Premature babies and NICU care' },
      { href: '/services/neonatal', label: '24-hour neonatal emergency at Dhruva Hospitals' },
    ],
    sources: [
      nhs('When to get urgent medical help for babies and children under 5', '/baby/health/when-to-get-urgent-medical-help-for-babies-and-children-under-5/'),
      nhs('Sepsis', '/conditions/sepsis/'),
      who('Newborn mortality', 'newborn-mortality'),
      {
        label: 'WHO: Integrated Management of Childhood Illness (IMCI) chart booklet',
        url: 'https://www.who.int/publications/m/item/integrated-management-of-childhood-illness---chart-booklet-(march-2014)',
      },
    ],
  },
  {
    ...base,
    slug: 'newborn-care-at-home',
    service: 'paediatrics',
    title: 'Caring for your newborn at home: bathing, cord care, sleep and warmth',
    seoTitle: 'Newborn Care at Home: A Simple Guide',
    description:
      'Practical newborn care for the first weeks at home: warmth, umbilical cord care, safe bathing, safe sleep, vaccines and the signs that need a doctor.',
    answer:
      'Keep your newborn warm but not too hot, breastfeed on demand, keep the cord stump clean and dry, and always put your baby to sleep on their back on a firm, flat surface. You do not need to bathe a newborn every day; wiping the face, neck, hands and bottom is enough. Never leave a baby alone in water.',
    sections: [
      {
        heading: 'Warm, but not too hot',
        body: [
          'Skin-to-skin contact is a good way to keep a newborn warm. Overheating is also risky, especially in Kadapa’s hot months. Feel your baby’s chest or the back of the neck: if it is hot or sweaty, remove a layer. Cool hands and feet are normal.',
        ],
      },
      {
        heading: 'Umbilical cord care',
        list: [
          'Keep the stump clean and dry, and fold the nappy below it.',
          'Clean around it only if it gets dirty with urine or stool, using cotton and clean warm water, then pat dry.',
          'Do not put oil, powder, ash or anything else on the cord, and do not pull it. It falls off on its own.',
          'See a doctor if the skin around it becomes red and swollen, it oozes pus, smells bad or bleeds.',
        ],
      },
      {
        heading: 'Bathing safely',
        list: [
          'A daily bath is not needed. You can wipe the face, neck, hands and bottom instead.',
          'Wipe each eye from the nose outwards with a fresh piece of damp cotton. Do not put anything inside the ears.',
          'For a bath, make the water warm, not hot. Check it with your wrist or elbow, and keep the baby’s head out of the water.',
          'Never leave your baby alone in water, even for a second, and do not let older children supervise.',
          'If you massage your baby, use only oils or lotions suitable for babies.',
        ],
      },
      {
        heading: 'Safe sleep',
        list: [
          'Always put your baby to sleep on their back, on a firm, flat mattress.',
          'Keep pillows, soft toys and loose blankets out of the cot.',
          'For the first 6 months, let your baby sleep in their own cot in the same room as you.',
          'Do not let anyone smoke near the baby.',
          'Do not share a bed if your baby was premature or weighed under 2.5 kg, or if you smoke, have drunk alcohol, or take medicine that makes you drowsy.',
        ],
      },
      {
        heading: 'Feeding, vaccines and registration',
        body: [
          'Breastfeed whenever your baby is hungry. Vaccines start at birth with BCG, oral polio and hepatitis B, and continue at 6 weeks. Register the birth early, as you will need the birth certificate for the baby’s Aadhaar and passport.',
        ],
      },
      {
        heading: 'Signs that need a doctor',
        body: [
          `Not feeding, unusual sleepiness, fast or noisy breathing, fever or a cold body, yellow skin, fits, or no wet nappy for 12 hours all need urgent care. Call ${emergency}, day or night.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should I bathe my newborn?',
        answer:
          'A daily bath is not necessary. Cleaning the face, neck, hands and nappy area every day, with a bath a few times a week, is enough. You can bathe more often if your baby enjoys it.',
      },
      {
        question: 'Is it safe to swaddle my baby?',
        answer:
          'If you swaddle, keep it loose at the hips, use a thin cloth so the baby does not overheat, and always place the baby on their back. Do not swaddle if you share a bed with your baby.',
      },
    ],
    links: [
      { href: '/blog/breastfeeding-first-days', label: 'Breastfeeding in the first few days' },
      { href: '/blog/baby-vaccination-schedule-india', label: 'Baby vaccination schedule in India' },
      { href: '/blog/newborn-danger-signs', label: 'Danger signs in a newborn baby' },
      { href: '/guides/baby-birth-certificate-aadhaar-passport-nri', label: 'Birth certificate, Aadhaar and passport for your baby' },
    ],
    sources: [
      nhs('Washing and bathing your baby', '/baby/caring-for-a-newborn/washing-and-bathing-your-baby/'),
      nhs('Sudden infant death syndrome (SIDS)', '/baby/caring-for-a-newborn/sudden-infant-death-syndrome-sids/'),
      who('Newborn mortality (essential newborn care)', 'newborn-mortality'),
      nis,
    ],
  },
];
