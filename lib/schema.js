// schema.org structured data (JSON-LD) for search engines.
import { site, absoluteUrl, googleMapsUrl } from './site';

const hospitalId = `${site.url}/#hospital`;

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
    url: absoluteUrl('/'),
    logo: absoluteUrl('/images/logo.png'),
    image: absoluteUrl('/images/hospital-exterior.jpg'),
    description: site.description,
    telephone: site.phones.main.href.replace('tel:', ''),
    email: site.email,
    address: postalAddress,
    hasMap: googleMapsUrl,
    openingHours: 'Mo-Su 00:00-23:59',
    medicalSpecialty: ['Obstetric', 'Gynecologic', 'Pediatric', 'Surgical', 'Emergency', 'LaboratoryScience'],
    sameAs: Object.values(site.socials),
  };
}

export function physicianId(doctor) {
  return `${absoluteUrl(`/doctors/${doctor.slug}`)}#physician`;
}

export function physicianSchema(doctor) {
  const credentials = [...(doctor.qualifications || []), ...(doctor.fellowships || [])];
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': physicianId(doctor),
    name: doctor.name,
    jobTitle: doctor.designation,
    url: absoluteUrl(`/doctors/${doctor.slug}`),
    image: absoluteUrl(doctor.image),
    description: doctor.bio,
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
    worksFor: { '@id': hospitalId },
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
    lastReviewed: guide.reviewedOn || undefined,
    reviewedBy: guide.reviewedOn && reviewer ? { '@id': physicianId(reviewer), '@type': 'Physician', name: reviewer.name } : undefined,
    publisher: { '@id': hospitalId },
    about: { '@id': hospitalId },
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
