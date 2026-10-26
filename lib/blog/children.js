// Children's health articles for the health blog. Format: see lib/blog/index.js.
import { site } from '../site';

const date = '2026-10-27';
const emergency = site.phones.emergency.display;
const phone = site.phones.main.display;
const opd = site.hours.opd;

const nhs = (label, path) => ({ label: `NHS (UK): ${label}`, url: `https://www.nhs.uk${path}` });
const who = (label, slug) => ({ label: `WHO: ${label}`, url: `https://www.who.int/news-room/fact-sheets/detail/${slug}` });
const imci = {
  label: 'WHO: Integrated Management of Childhood Illness (IMCI) chart booklet',
  url: 'https://www.who.int/publications/m/item/integrated-management-of-childhood-illness---chart-booklet-(march-2014)',
};
const urgentHelp = nhs(
  'When to get urgent medical help for babies and children under 5',
  '/baby/health/when-to-get-urgent-medical-help-for-babies-and-children-under-5/'
);

const base = {
  category: 'children',
  service: 'paediatrics',
  doctor: 'dr-sudarshan-reddy',
  publishedOn: date,
  updatedOn: date,
  reviewedOn: null,
};

export const childrenPosts = [
  {
    ...base,
    slug: 'fever-in-children',
    title: 'Fever in children: home care and when to see a doctor',
    seoTitle: 'Fever in Children: When to See a Doctor',
    description:
      'How to take your child’s temperature, safe home care for fever, medicines to avoid (especially in dengue season), and the warning signs that need urgent care.',
    answer:
      'A temperature of 38°C or more is a fever. Most fevers in children come from common infections and settle within 1 to 4 days. Give plenty of fluids, and paracetamol if your child is uncomfortable, at the dose on the pack for their age or weight. See a doctor urgently if a baby under 3 months has 38°C or more, a baby of 3 to 6 months has 39°C or more, or the fever lasts 5 days or more.',
    sections: [
      {
        heading: 'Taking the temperature',
        list: [
          'Use a digital thermometer. Place it high in the armpit and hold the arm gently against the body.',
          'Leave it in for as long as the instructions say, usually until it beeps.',
          'If your child has just had a bath or was wrapped in a blanket, wait a few minutes and measure again.',
          'A temperature of 38°C or more is a fever.',
        ],
      },
      {
        heading: 'Caring for your child at home',
        list: [
          'Give plenty of fluids. Keep breastfeeding a baby as usual.',
          'Offer food if your child wants it.',
          'Dress your child in light clothes and do not cover them with thick blankets.',
          'Do not sponge your child with cold water to bring the temperature down. Fever is the body’s natural response to infection.',
          'Check on your child regularly, including during the night.',
          'Watch for signs of dehydration: fewer wet nappies, sunken eyes, and no tears when crying.',
        ],
      },
      {
        heading: 'Medicines: what to give and what to avoid',
        list: [
          'Paracetamol can ease discomfort. Check the pack for the right dose for your child’s age or weight, or ask your doctor.',
          'Do not give paracetamol to a baby under 2 months unless a doctor advises it.',
          'Do not give aspirin to anyone under 16.',
          'Do not give ibuprofen to babies under 3 months or under 5 kg, to children with chickenpox or dehydration, or to children with asthma unless a doctor advises it.',
          'In dengue season, avoid ibuprofen and aspirin until a doctor has ruled out dengue, because they can increase the risk of bleeding.',
          'Do not alternate paracetamol and ibuprofen unless a doctor tells you to.',
        ],
      },
      {
        heading: 'See a doctor the same day if your child',
        list: [
          'Is under 3 months old with a temperature of 38°C or more',
          'Is 3 to 6 months old with a temperature of 39°C or more',
          'Has had a fever for 5 days or more',
          'Has a rash or other signs of illness as well as fever',
          'Does not want to eat, is not their usual self, or shows signs of dehydration',
        ],
      },
      {
        heading: 'Go to hospital immediately if your child',
        list: [
          'Has a fit for the first time',
          'Has a stiff neck, is bothered by light, or has a rash that does not fade when you press a glass on it',
          'Is drowsy and hard to wake, confused, or will not stop crying',
          'Has difficulty breathing, is grunting, or the tummy sucks in under the ribs',
          'Has blue, grey, pale or blotchy skin, lips or tongue, or unusually cold hands and feet',
        ],
        after: [`Call ${emergency}. Our paediatric emergency team is on duty 24 hours a day.`],
      },
    ],
    faqs: [
      {
        question: 'Can I give paracetamol and ibuprofen together?',
        answer:
          'Do not alternate or combine them unless a doctor advises it. Give one medicine at the right dose, and see a doctor if it does not help.',
      },
      {
        question: 'How long is too long for a fever?',
        answer: 'Most fevers settle in 1 to 4 days. A fever lasting 5 days or more needs a doctor’s check, even if your child seems well otherwise.',
      },
      {
        question: 'Why does the doctor ask about vaccines?',
        answer:
          'Some vaccines cause a short, mild fever. Knowing the date of the last vaccine helps the doctor decide whether the fever needs more tests.',
      },
    ],
    links: [
      { href: '/blog/febrile-seizures-fits-with-fever', label: 'Fits with fever (febrile seizures)' },
      { href: '/blog/when-to-take-child-to-hospital', label: 'When to take your child to hospital' },
      { href: '/blog/dengue-fever-warning-signs', label: 'Dengue fever: warning signs' },
      { href: '/services/paediatrics', label: 'Paediatrics at Dhruva Hospitals' },
    ],
    sources: [
      nhs('High temperature (fever) in children', '/symptoms/fever-in-children/'),
      urgentHelp,
      who('Dengue and severe dengue', 'dengue-and-severe-dengue'),
    ],
  },
  {
    ...base,
    slug: 'febrile-seizures-fits-with-fever',
    title: 'Fits with fever (febrile seizures) in children: what to do',
    seoTitle: 'Febrile Seizures (Fits With Fever) in Kids',
    description:
      'What a febrile seizure looks like, what to do during the fit, when to call for emergency help, the tests done in hospital, and whether it means epilepsy.',
    answer:
      'A febrile seizure is a fit caused by a high temperature, usually in children aged 6 months to 6 years. It is frightening but rarely harmful, and usually lasts 2 to 3 minutes. Keep your child safe, do not put anything in their mouth, note the time, and turn them on their side when it stops. A first fit, or one lasting more than 5 minutes, needs emergency care.',
    sections: [
      {
        heading: 'What it looks like',
        list: [
          'The child becomes stiff, twitches, shakes or jerks',
          'They may lose consciousness and not respond when you speak',
          'They may vomit or pass urine',
          'Afterwards they may be sleepy, irritable or confused for up to an hour',
        ],
      },
      {
        heading: 'What to do during a fit',
        list: [
          'Stay calm and note the time the fit starts and ends.',
          'Protect the head with your hands or something soft, and move dangerous objects away.',
          'Do not hold your child down or try to move them.',
          'Do not put anything in the mouth: no spoon, fingers, water or medicine.',
          'When the fit stops, turn your child on their side (the recovery position) and check that nothing is blocking the mouth.',
          'Do not try to cool your child by undressing them or sponging with cold water.',
        ],
        after: ['Old remedies, such as putting keys or an iron object in the hand, do not stop a fit.'],
      },
      {
        heading: 'Get emergency help if',
        list: [
          'It is your child’s first fit',
          'The fit lasts more than 5 minutes',
          'Your child has difficulty breathing',
          'The stiffness or twitching affects only one side of the body',
          'Your child stays more sleepy than usual for more than an hour afterwards',
          'There is more than one fit in 24 hours',
        ],
        after: [
          `Call ${emergency}. If your child is still fitting or unconscious, call for help rather than carrying them; let someone else drive if you travel.`,
        ],
      },
      {
        heading: 'In hospital',
        body: [
          'After a first febrile seizure, a child should be checked in hospital and may need to stay for a short time. The doctor looks for the cause of the fever and may order blood and urine tests, and sometimes a lumbar puncture (a sample of fluid from the spine) to rule out meningitis. If an infection is found, it is treated.',
        ],
      },
      {
        heading: 'Will it happen again? Is it epilepsy?',
        body: [
          'Febrile seizures cannot be prevented, and some children have more than one. They are not the same as epilepsy. Children who have had one have a slightly higher chance of epilepsy later, but this is rare.',
          'Very rarely, a child keeps having febrile seizures. The doctor may then prescribe a medicine to give during a fit and show you how to use it.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can fever medicine prevent a febrile seizure?',
        answer:
          'No. Paracetamol can make your child more comfortable, but febrile seizures cannot be prevented by bringing the temperature down.',
      },
      {
        question: 'Does a febrile seizure cause brain damage?',
        answer:
          'A typical febrile seizure is unlikely to harm your child or cause long-term effects. Still, every first fit must be checked by a doctor to find its cause.',
      },
    ],
    links: [
      { href: '/blog/fever-in-children', label: 'Fever in children: home care and warning signs' },
      { href: '/blog/when-to-take-child-to-hospital', label: 'When to take your child to hospital' },
      { href: '/services/paediatrics', label: '24-hour paediatric emergency at Dhruva Hospitals' },
    ],
    sources: [nhs('Febrile seizures', '/conditions/febrile-seizures/')],
  },
  {
    ...base,
    slug: 'diarrhoea-vomiting-children-ors',
    title: 'Loose motions and vomiting in children: ORS, zinc and danger signs',
    seoTitle: 'Loose Motions in Children: ORS and Zinc',
    description:
      'Treating diarrhoea and vomiting in children with ORS and zinc: what to feed, the signs of dehydration, and when a child needs a doctor or hospital care.',
    answer:
      'Most loose motions and vomiting in children are caused by a stomach infection and get better in a few days. The key is to prevent dehydration: give ORS in small, frequent sips, continue breastfeeding and normal food, and give zinc for 10 to 14 days if your doctor advises. See a doctor urgently for blood in the stools, repeated vomiting, fewer wet nappies, sunken eyes or a very sleepy child.',
    sections: [
      {
        heading: 'How long it lasts',
        body: ['Diarrhoea usually stops within 5 to 7 days, and vomiting within 1 or 2 days. The danger is the loss of water and salts, which can make a small child dehydrated quickly.'],
      },
      {
        heading: 'ORS: the most important treatment',
        list: [
          'Oral rehydration solution (ORS) replaces the water and salts lost in loose stools. Make it with clean water exactly as the packet says.',
          'Give small, frequent sips from a cup or spoon, especially if your child feels sick.',
          'If your child vomits, wait 10 minutes and then continue more slowly.',
          'Keep giving ORS after each loose stool until the diarrhoea stops.',
        ],
      },
      {
        heading: 'Zinc',
        body: [
          'WHO recommends a 10 to 14 day course of zinc tablets for children with diarrhoea. Zinc shortens the illness and reduces the amount of stool. Your doctor will tell you the dose for your child’s age.',
        ],
      },
      {
        heading: 'Food and drinks',
        list: [
          'Continue breastfeeding. If your baby is vomiting, offer smaller feeds more often.',
          'Give normal food when your child wants it. Avoid fatty or spicy food for a few days.',
          'Avoid fruit juices and fizzy or packaged sugary drinks; they can make diarrhoea worse.',
          'Do not make formula weaker than usual.',
          'Do not give medicines to stop diarrhoea to children under 12.',
        ],
      },
      {
        heading: 'Signs of dehydration',
        list: [
          'Restlessness or irritability, or the child drinks eagerly as if very thirsty',
          'Sunken eyes, and no tears when crying',
          'Fewer wet nappies, or dark, strong-smelling urine',
          'Skin that goes back slowly when gently pinched',
          'Severe dehydration: a very sleepy or unconscious child who cannot drink, or skin that goes back very slowly when pinched',
        ],
      },
      {
        heading: 'See a doctor urgently if',
        list: [
          'Your baby is under 12 months and you are worried',
          'Your child stops breastfeeding or drinking, or keeps vomiting and cannot keep fluids down',
          'Your child shows any sign of dehydration',
          'There is blood in the stools or vomit, or green vomit',
          'Diarrhoea lasts more than 7 days, or vomiting more than 2 days',
          'Your child has severe tummy pain, a stiff neck, or is confused or very sleepy',
        ],
        after: [`For severe dehydration, come to the hospital straight away: your child may need fluids through a drip. Call ${emergency}.`],
      },
      {
        heading: 'Preventing it',
        list: [
          'Wash hands with soap after using the toilet, changing nappies and before preparing food.',
          'Give safe drinking water, boiled or filtered.',
          'Breastfeed only for the first 6 months.',
          'Make sure your baby gets the rotavirus vaccine at 6, 10 and 14 weeks.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I stop milk during loose motions?',
        answer: 'No. Keep breastfeeding, and keep giving your child’s usual food and milk. Feeding during the illness helps recovery.',
      },
      {
        question: 'Can I make ORS at home?',
        answer:
          'Use ORS packets from a pharmacy or health centre where possible. Getting the amounts of salt and sugar wrong can be harmful, so if packets are not available, ask a doctor.',
      },
    ],
    links: [
      { href: '/blog/when-to-take-child-to-hospital', label: 'When to take your child to hospital' },
      { href: '/blog/baby-vaccination-schedule-india', label: 'Baby vaccination schedule in India' },
      { href: '/blog/fever-in-children', label: 'Fever in children' },
      { href: '/services/paediatrics', label: 'Paediatrics at Dhruva Hospitals' },
    ],
    sources: [nhs('Diarrhoea and vomiting', '/symptoms/diarrhoea-and-vomiting/'), who('Diarrhoeal disease', 'diarrhoeal-disease'), imci],
  },
  {
    ...base,
    slug: 'pneumonia-in-children-fast-breathing',
    title: 'Cough with fast breathing: signs of pneumonia in children',
    seoTitle: 'Pneumonia in Children: Fast Breathing Signs',
    description:
      'How to count your child’s breathing, the WHO fast-breathing cut-offs by age, the danger signs of pneumonia, how it is treated, and how vaccines help prevent it.',
    answer:
      'Most coughs and colds in children are mild, but a cough with fast breathing, or the lower chest sucking in with each breath, can mean pneumonia. WHO counts fast breathing as 50 or more breaths a minute from 2 to 12 months, and 40 or more from 1 to 5 years. A child who cannot drink, vomits everything, is very sleepy or has a fit needs hospital care immediately.',
    sections: [
      {
        heading: 'How to count breathing',
        body: [
          'Count your child’s breaths for one full minute while they are calm or asleep, watching the chest or tummy rise. Compare with the WHO cut-offs:',
        ],
        table: {
          columns: ['Age', 'Fast breathing is'],
          rows: [
            ['Under 2 months', '60 breaths a minute or more'],
            ['2 to 12 months', '50 breaths a minute or more'],
            ['1 to 5 years', '40 breaths a minute or more'],
          ],
        },
      },
      {
        heading: 'Other signs of pneumonia',
        list: [
          'The lower chest sucks in when the child breathes in (chest indrawing)',
          'Fever, cough and tiredness',
          'Wheezing, or grunting in babies',
          'Poor feeding or loss of appetite',
        ],
      },
      {
        heading: 'Danger signs: go to hospital immediately',
        list: [
          'The child cannot drink or breastfeed',
          'The child vomits everything',
          'A fit (convulsion)',
          'Unusual sleepiness, or the child is hard to wake',
          'Blue or grey lips, or severe difficulty breathing',
        ],
        after: [`Call ${emergency}. Children with severe pneumonia may need oxygen and treatment in hospital.`],
      },
      {
        heading: 'Treatment',
        body: [
          'Pneumonia caused by bacteria is treated with antibiotics; WHO recommends amoxicillin as the first choice for most children. Give the full course exactly as prescribed, even when your child seems better. Severe pneumonia is treated in hospital, sometimes with oxygen.',
          'Do not give leftover antibiotics or medicines prescribed for someone else.',
        ],
      },
      {
        heading: 'Prevention',
        list: [
          'Vaccines: PCV, pentavalent (which includes Hib) and measles-rubella all help protect against pneumonia.',
          'Breast milk only for the first 6 months.',
          'Hand washing with soap.',
          'Keeping children away from smoke from cooking fires, mosquito coils and cigarettes.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          'Our paediatric ward cares for children who need admission, with paediatric ICU and ventilator support for critically ill children and a 24-hour paediatric emergency team.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does every cough need antibiotics?',
        answer:
          'No. Most coughs and colds are caused by viruses and get better on their own. Antibiotics are for bacterial infections such as bacterial pneumonia, and the doctor decides after examining your child.',
      },
      {
        question: 'How long does recovery take?',
        answer:
          'Recovery can take 2 to 4 weeks, and cough and tiredness are often the last to settle. Return to the doctor if breathing gets faster, your child stops drinking, or there is no improvement on treatment.',
      },
    ],
    links: [
      { href: '/blog/when-to-take-child-to-hospital', label: 'When to take your child to hospital' },
      { href: '/blog/baby-vaccination-schedule-india', label: 'Baby vaccination schedule in India' },
      { href: '/blog/newborn-danger-signs', label: 'Danger signs in a newborn baby' },
      { href: '/services/paediatrics', label: 'Paediatric ward and ICU support at Dhruva Hospitals' },
    ],
    sources: [who('Pneumonia in children', 'pneumonia'), imci, nhs('Pneumonia', '/conditions/pneumonia/')],
  },
  {
    ...base,
    slug: 'child-development-milestones',
    title: 'Child development milestones and when to get a developmental assessment',
    seoTitle: 'Child Development Milestones and Assessment',
    description:
      'When babies usually sit, crawl, stand and walk (WHO age windows), how speech develops, and the signs that need a developmental assessment in Kadapa.',
    answer:
      'Children develop at different speeds. In WHO’s study, healthy children sat without support between about 4 and 9 months and walked alone between about 8 and 18 months. See a paediatrician if your child is outside these windows, does not respond to their name or to sounds, is not using words and simple phrases by around age 2, or loses skills they already had.',
    sections: [
      {
        heading: 'Movement milestones: the WHO age windows',
        table: {
          columns: ['Milestone', 'Usual age range'],
          rows: [
            ['Sitting without support', 'About 4 to 9 months'],
            ['Standing with help', 'About 5 to 11 months'],
            ['Crawling on hands and knees', 'About 5 to 13 months'],
            ['Walking with help', 'About 6 to 14 months'],
            ['Standing alone', 'About 7 to 17 months'],
            ['Walking alone', 'About 8 to 18 months'],
          ],
        },
        after: [
          'These windows cover the ages at which nearly all healthy children in WHO’s study reached each skill. Some healthy children never crawl and go straight to standing.',
          'If your baby was born early, doctors judge milestones by corrected age, counted from the due date, in the early years.',
        ],
      },
      {
        heading: 'Speech and social development',
        body: [
          'Babies watch faces, respond to voices and copy sounds from the first months. Between 12 and 18 months most children start trying to say words, and around age 2 they begin to put simple sentences together.',
          'Talking, singing, looking at books together and simple games such as peek-a-boo all help. Speaking Telugu, English or both at home is fine: children growing up with two languages adapt well. Limit TV and phone screen time.',
        ],
      },
      {
        heading: 'When to ask for a developmental check',
        list: [
          'Your child is not sitting without support by 9 months, or not walking alone by 18 months',
          'Your child does not respond to their name or to sounds',
          'Your child rarely makes eye contact, smiles back or uses gestures such as pointing',
          'Your child is not using words and simple phrases by around age 2',
          'Your child loses skills they already had, at any age',
          'You or your family feel something is not right',
        ],
      },
      {
        heading: 'What a developmental assessment involves',
        body: [
          'The paediatrician asks about pregnancy, birth and the milestones so far, examines your child, measures growth and head size, and watches how your child moves, plays, listens and communicates. Hearing and vision checks may be advised.',
          'If more help is needed, the doctor will explain the next steps, such as a referral for physiotherapy, speech therapy or a specialist assessment. Early support makes a real difference.',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          `Our paediatrician tracks height, weight and developmental milestones at check-ups and vaccination visits. Call ${phone} to book a development check. OPD hours are ${opd}.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'My child is 15 months old and not walking. Should I worry?',
        answer:
          'Not necessarily. Many healthy children walk alone between 15 and 18 months. If your child is not walking by 18 months, or you have other concerns, book a check-up.',
      },
      {
        question: 'Can learning two languages delay speech?',
        answer:
          'Speak to your child in the language you are most comfortable with. Children growing up with two languages adapt well, and it can help their learning. If your child’s speech seems delayed, get it checked rather than dropping a language.',
      },
    ],
    links: [
      { href: '/blog/choosing-a-paediatrician-kadapa', label: 'Choosing a paediatrician in Kadapa' },
      { href: '/blog/baby-vaccination-schedule-india', label: 'Baby vaccination schedule in India' },
      { href: '/blog/premature-baby-nicu-care', label: 'Premature babies and NICU care' },
      { href: '/services/paediatrics', label: 'Growth and development checks at Dhruva Hospitals' },
    ],
    sources: [
      { label: 'WHO: Motor development milestones (child growth standards)', url: 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones' },
      nhs('Help your baby learn to talk', '/baby/babys-development/play-and-learning/help-your-baby-learn-to-talk/'),
      nhs('Signs of autism in children', '/conditions/autism/signs-in-children/'),
    ],
  },
  {
    ...base,
    slug: 'when-to-take-child-to-hospital',
    title: 'Children’s emergency signs: when to take your child to hospital',
    seoTitle: 'When to Take Your Child to Hospital',
    description:
      'The signs that mean a child needs emergency care now, the ones that need a doctor the same day, and what to bring. 24-hour paediatric emergency care in Kadapa.',
    answer:
      'Take your child to hospital immediately if they have difficulty breathing, a fit, blue or grey lips, a rash that does not fade under a glass, are very sleepy or hard to wake, cannot drink or vomit everything, or have not passed urine for 12 hours. Trust your instinct: if you feel something is seriously wrong, come in.',
    sections: [
      {
        heading: 'Go to hospital immediately if your child',
        list: [
          'Is breathing very fast, struggling to breathe, grunting, or sucking in the chest or tummy',
          'Has a fit (seizure)',
          'Has blue, grey, pale or blotchy skin, lips or tongue',
          'Has a rash that does not fade when you press a glass against it',
          'Is very sleepy, floppy, hard to wake, or not responding as usual',
          'Cannot drink or breastfeed, or vomits everything',
          'Has not passed urine for 12 hours',
          'Has swelling of the lips, tongue or throat, or difficulty swallowing',
          'Has a stiff neck or is bothered by bright light',
          'Has a weak, high-pitched or continuous cry',
          'May have swallowed medicine, a chemical, pesticide or anything poisonous; bring the container',
          'Has had a serious injury, burn or fall',
        ],
        after: [`Call ${emergency}, or come straight to the hospital. Our paediatric emergency team is on duty 24 hours a day.`],
      },
      {
        heading: 'Fever that needs urgent care',
        list: [
          'A baby under 3 months with a temperature of 38°C or more',
          'A baby of 3 to 6 months with a temperature of 39°C or more',
          'A temperature below 36°C, or a child who feels cold and is shivering',
          'Fever lasting 5 days or more',
        ],
      },
      {
        heading: 'See a doctor the same day if your child',
        list: [
          'Has signs of dehydration, such as fewer wet nappies, sunken eyes or no tears',
          'Has vomited for more than 24 hours, or had diarrhoea for more than a week',
          'Is not eating or not their usual self, and you are worried',
          'Has very smelly urine or is passing urine often, with fever',
        ],
      },
      {
        heading: 'What to bring',
        list: [
          'The vaccination card and any earlier reports or discharge papers',
          'The medicines your child takes',
          'A note of when the symptoms started and what you have given',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          'Dhruva Hospitals has a 24-hour neonatal and paediatric emergency team, a paediatric ward with round-the-clock nursing, paediatric ICU and ventilator support, and a Level III NICU for newborns. Paediatric care is led by Dr. Sudarshan Reddy K (MBBS, DNB Paediatrics).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I call before coming?',
        answer: `In an emergency, come straight in. If you can, have someone call ${emergency} on the way so the team is ready.`,
      },
      {
        question: 'What if I am not sure it is an emergency?',
        answer:
          'Trust your instinct. Children can get worse quickly, and it is always better to have your child checked than to wait.',
      },
    ],
    links: [
      { href: '/blog/fever-in-children', label: 'Fever in children' },
      { href: '/blog/pneumonia-in-children-fast-breathing', label: 'Signs of pneumonia in children' },
      { href: '/blog/newborn-danger-signs', label: 'Danger signs in a newborn baby' },
      { href: '/services/paediatrics', label: 'Paediatrics at Dhruva Hospitals' },
    ],
    sources: [urgentHelp, nhs('High temperature (fever) in children', '/symptoms/fever-in-children/'), imci],
  },
  {
    ...base,
    slug: 'choosing-a-paediatrician-kadapa',
    title: 'Choosing a paediatrician in Kadapa: what parents should check',
    seoTitle: 'Choosing a Paediatrician in Kadapa',
    description:
      'What to look for in a child specialist in Kadapa: qualifications, newborn and emergency cover, vaccination records, and questions to ask at the first visit.',
    answer:
      'Look for a paediatrician with a postgraduate qualification in paediatrics (MD or DNB), round-the-clock emergency cover and a NICU for newborns, good vaccination and growth records, and the time to explain things clearly. You can check any doctor’s registration on the National Medical Commission’s Indian Medical Register.',
    sections: [
      {
        heading: 'Qualifications and registration',
        body: [
          'A paediatrician has an MBBS degree and a postgraduate qualification in paediatrics, such as MD or DNB. For newborn and NICU care, look for training in neonatology.',
          'Every practising doctor must be registered with a state medical council or the National Medical Commission, and private hospitals in Andhra Pradesh must be registered with the state. Ask if you are unsure.',
        ],
      },
      {
        heading: 'Emergency and newborn cover',
        body: [
          'Children fall ill at night and on holidays. Check whether the hospital has a paediatric emergency team on duty 24 hours, a paediatric ward, and a NICU for newborns, so your child does not have to be moved elsewhere in an emergency.',
        ],
      },
      {
        heading: 'Vaccination and growth',
        body: [
          'A good paediatrician keeps your child’s vaccinations on schedule, records each dose on the card, and checks height, weight and development at regular visits.',
        ],
      },
      {
        heading: 'Questions to ask at the first visit',
        list: [
          'Who should I call at night or in an emergency?',
          'Which vaccines does my child need now, and which additional vaccines do you recommend?',
          'When should I bring my child for the next growth and development check?',
          'Which symptoms mean I should come in straight away?',
        ],
      },
      {
        heading: 'Practical points',
        list: [
          'Distance and travel time from your home, especially at night',
          'OPD timings and how to book: phone, WhatsApp or walk-in',
          'A laboratory in the same building, to avoid extra trips for tests',
        ],
      },
      {
        heading: 'At Dhruva Hospitals',
        body: [
          `Paediatric and newborn care is led by Dr. Sudarshan Reddy K, MBBS, DNB Paediatrics (Apollo Hospitals, Mysore), with an IAP fellowship in neonatology from Ankura Hospital, Hyderabad. Consultations are in Telugu, English or Kannada. The hospital has a 24-hour neonatal and paediatric emergency team, a paediatric ward, a Level III NICU and an in-house laboratory, and vaccination follows the IAP schedule. Call ${phone} to book. OPD hours are ${opd}.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'When should my baby first see a paediatrician?',
        answer:
          'Ideally a paediatrician checks your baby soon after birth. After that, the vaccination visits from 6 weeks are a good time for regular growth and development checks.',
      },
      {
        question: 'Is a paediatrician different from a general physician?',
        answer:
          'Yes. A paediatrician is trained specifically in the illnesses, growth, development and vaccination of children, from newborns to teenagers.',
      },
    ],
    links: [
      { href: '/doctors/dr-sudarshan-reddy', label: 'Dr. Sudarshan Reddy K, paediatrician and neonatologist' },
      { href: '/guides/paediatrician-appointment-kadapa', label: 'Booking a paediatrician appointment in Kadapa' },
      { href: '/blog/child-development-milestones', label: 'Child development milestones' },
      { href: '/services/paediatrics', label: 'Paediatrics at Dhruva Hospitals' },
    ],
    sources: [{ label: 'National Medical Commission: Indian Medical Register', url: 'https://nmc.org.in/information-desk/indian-medical-register' }],
  },
];
