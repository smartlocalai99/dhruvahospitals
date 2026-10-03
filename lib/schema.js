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
    '@type': 'Hospital',
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

export function physicianSchema(doctor) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    url: absoluteUrl(`/doctors/${doctor.slug}`),
    image: absoluteUrl(doctor.image),
    description: doctor.bio,
    knowsLanguage: doctor.languages,
    telephone: site.phones.main.href.replace('tel:', ''),
    address: postalAddress,
    hospitalAffiliation: { '@type': 'Hospital', '@id': hospitalId, name: site.name, url: absoluteUrl('/') },
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
