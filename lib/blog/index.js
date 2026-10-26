// Health blog (/blog): plain-language answers to questions families in and around Kadapa search for.
// One file per category. Each article:
// - slug, category, title (the H1), seoTitle (title tag, under ~55 characters), description (meta)
// - service: the lib/data.js service it relates to; doctor: a profiled doctor's slug, or null
// - publishedOn / updatedOn: real dates (YYYY-MM-DD); reviewedOn: set only after the doctor has read it
// - answer (short answer shown first), sections [{ heading, body?, list?, ordered?, table? }],
//   faqs, links [{ href, label }] to related pages, sources [{ label, url }]
// Only facts the hospital has published, or that the cited sources support, belong here.
import { pregnancyPosts } from './pregnancy';
import { newbornPosts } from './newborn';
import { childrenPosts } from './children';
import { gynaecologyPosts } from './gynaecology';
import { fertilityPosts } from './fertility';
import { generalPosts } from './general';

export const blogCategories = [
  {
    key: 'pregnancy',
    label: 'Pregnancy & delivery',
    description: 'Check-ups, scans, diet, warning signs, delivery and recovery after birth.',
    image: '/images/pregnancy-consultation.jpg',
    imageAlt: 'Obstetrician talking with a pregnant woman during an antenatal check-up',
  },
  {
    key: 'newborn',
    label: 'Newborn care',
    description: 'Breastfeeding, jaundice, premature babies, screening tests and vaccinations.',
    image: '/images/paediatrician-checking-baby.jpg',
    imageAlt: 'Paediatrician listening to a baby’s heartbeat with a stethoscope',
  },
  {
    key: 'children',
    label: 'Children’s health',
    description: 'Fever, loose motions, coughs, fits, milestones and anaemia in children.',
    image: '/images/paediatrician-examining-baby.jpg',
    imageAlt: 'Paediatrician examining a baby on a parent’s lap',
  },
  {
    key: 'gynaecology',
    label: 'Women’s health',
    description: 'Periods, PCOD, discharge, fibroids, cysts, menopause, screening and contraception.',
    image: '/images/gynaecologist-consultation-desk.jpg',
    imageAlt: 'Gynaecologist Dr. S Mounika Reddy at the consultation desk',
  },
  {
    key: 'fertility',
    label: 'Fertility & IVF',
    description: 'When to see a specialist, fertility tests, IUI, IVF (test tube baby) and semen analysis.',
    image: '/images/dr-mounika-reddy-holding-baby.jpg',
    imageAlt: 'Fertility specialist Dr. S Mounika Reddy holding a smiling baby',
  },
  {
    key: 'general',
    label: 'General health, surgery, eyes & bones',
    description: 'Diabetes, dengue, emergencies, gallstones, knee pain and eye check-ups.',
    image: '/images/doctor-explaining-x-ray.jpg',
    imageAlt: 'Doctor explaining an X-ray to a patient',
  },
];

export const posts = [
  ...pregnancyPosts,
  ...newbornPosts,
  ...childrenPosts,
  ...gynaecologyPosts,
  ...fertilityPosts,
  ...generalPosts,
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}

export function getCategory(key) {
  return blogCategories.find((category) => category.key === key);
}

export function postPath(slug) {
  return `/blog/${slug}`;
}

// Articles linked from a service page's sidebar.
export function postsForService(service, limit = 6) {
  return posts.filter((post) => post.service === service).slice(0, limit);
}
