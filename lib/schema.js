// schema.org structured data (JSON-LD) for search engines.
import { site, absoluteUrl, googleMapsUrl } from './site';
import { getDoctor } from './data';

const hospitalId = `${site.url}/#hospital`;
const founder = getDoctor('dr-sudarshan-reddy');

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

export function hospitalSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Hospital', 'MedicalOrganization'],
    '@id': hospitalId,
    name: site.name,
    alternateName: ['Dhruva Hospital', 'Dhruva Hospitals Kadapa'],
    url: absoluteUrl('/'),
    logo: absoluteUrl('/images/logo.png'),
    image: [absoluteUrl('/images/dhruva-hospitals-kadapa-building.jpg'), absoluteUrl('/images/dhruva-hospitals-kadapa-team.jpg')],
    description: site.description,
    telephone: site.phones.main.href.replace('tel:', ''),
    email: site.email,
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.latitude, longitude: site.geo.longitude },
    hasMap: googleMapsUrl,
    openingHours: 'Mo-Su 00:00-23:59',
    foundingDate: site.foundingDate,
    founder: {
      '@type': 'Person',
      name: founder.name,
      jobTitle: 'Founder and Chairman',
      url: absoluteUrl(`/doctors/${founder.slug}`),
    },
    identifier: {
      '@type': 'PropertyValue',
      name: `Registration under the ${site.registration.act}`,
      value: site.registration.fileNumber,
    },
    medicalSpecialty: [
      'Obstetric',
      'Gynecologic',
      'Pediatric',
      'PrimaryCare',
      'Surgical',
      'Ophthalmology',
      'Musculoskeletal',
      'Emergency',
      'LaboratoryScience',
    ],
    areaServed: { '@type': 'City', name: 'Kadapa', containedInPlace: { '@type': 'State', name: 'Andhra Pradesh' } },
    isAcceptingNewPatients: true,
    // Appointments are by phone; the line can be called from India and from the Gulf.
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'appointments',
        telephone: site.phones.main.href.replace('tel:', ''),
        areaServed: ['IN', 'AE', 'KW'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'emergency',
        telephone: site.phones.emergency.href.replace('tel:', ''),
        hoursAvailable: 'Mo-Su 00:00-23:59',
      },
    ],
    sameAs: [...Object.values(site.socials), googleMapsUrl],
  };
}

// The site itself, linked to the hospital that publishes it. Used on the home page.
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: absoluteUrl('/'),
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': hospitalId },
  };
}

// schema.org medical specialties for each service page (lib/data.js slugs).
const serviceSpecialties = {
  pregnancy: ['Obstetric'],
  gynaecology: ['Gynecologic'],
  paediatrics: ['Pediatric'],
  neonatal: ['Pediatric'],
  fertility: ['Gynecologic'],
  cancer: ['Gynecologic', 'Oncologic'],
  diagnostics: ['LaboratoryScience', 'Radiography'],
  surgery: ['Surgical'],
  'general-medicine': ['PrimaryCare', 'Emergency'],
  ophthalmology: ['Ophthalmology'],
  orthopaedics: ['Musculoskeletal'],
};

// A specialty page: what it covers, who provides it and that the hospital publishes it.
// `service` carries the text in the page's language; Telugu pages pass their own path and language.
export function serviceWebPageSchema(service, doctors = [], { path = `/services/${service.slug}`, inLanguage = 'en-IN' } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: service.heading || service.title,
    description: service.seoDescription || service.summary,
    url: absoluteUrl(path),
    inLanguage,
    specialty: (serviceSpecialties[service.slug] || []).map((name) => `https://schema.org/${name}`),
    about: { '@id': hospitalId },
    publisher: { '@id': hospitalId },
    isPartOf: { '@id': `${site.url}/#website` },
    mentions: doctors.map((doctor) => ({ '@id': physicianId(doctor), name: doctor.name })),
  };
}

export function physicianId(doctor) {
  return `${absoluteUrl(`/doctors/${doctor.slug}`)}#physician`;
}

export function physicianSchema(doctor) {
  const credentials = [...(doctor.qualifications || []), ...(doctor.fellowships || [])];
  return {
    '@context': 'https://schema.org',
    // IndividualPhysician: schema.org's type for an individual doctor (Physician alone means a practice).
    '@type': 'IndividualPhysician',
    '@id': physicianId(doctor),
    name: doctor.name,
    url: absoluteUrl(`/doctors/${doctor.slug}`),
    image: [doctor.image, doctor.photoAtHospital].filter(Boolean).map((src) => absoluteUrl(src)),
    // jobTitle is a Person property, so the designation goes in the description.
    description: `${doctor.designation}. ${doctor.bio}`,
    medicalSpecialty: doctor.specialties,
    knowsLanguage: doctor.languages,
    hasCredential: credentials.map((name) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree or fellowship',
      name,
    })),
    identifier: doctor.registration
      ? { '@type': 'PropertyValue', name: 'Medical registration number', value: doctor.registration }
      : undefined,
    telephone: site.phones.main.href.replace('tel:', ''),
    address: postalAddress,
    hospitalAffiliation: { '@type': 'Hospital', '@id': hospitalId, name: site.name, url: absoluteUrl('/') },
    practicesAt: { '@id': hospitalId },
  };
}

// A guide page: names the reviewing doctor only once the review date is recorded.
export function medicalWebPageSchema({ guide, content, lang, path, reviewer }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: content.title,
    headline: content.title,
    description: content.description,
    abstract: content.answer,
    url: absoluteUrl(path),
    inLanguage: lang === 'te' ? 'te-IN' : 'en-IN',
    dateModified: guide.updatedOn,
    author: { '@id': hospitalId },
    lastReviewed: guide.reviewedOn || undefined,
    reviewedBy: guide.reviewedOn && reviewer ? { '@id': physicianId(reviewer), '@type': 'IndividualPhysician', name: reviewer.name } : undefined,
    publisher: { '@id': hospitalId },
    about: { '@id': hospitalId },
  };
}

// A YouTube video shown on the site. Only videos with a known upload date qualify (Google requires it).
export function videoObjectSchema(video) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description || video.title,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    uploadDate: video.published,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    publisher: { '@id': hospitalId },
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
