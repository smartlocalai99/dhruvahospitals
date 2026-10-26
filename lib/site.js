// Single source of truth for hospital contact details used across the site.

function phone(display) {
  const digits = display.replace(/\D/g, '');
  const tel = display.trim().startsWith('+') ? `+${digits}` : `+91${digits.replace(/^0/, '')}`;
  return { display, href: `tel:${tel}` };
}

export const site = {
  name: 'Dhruva Hospitals',
  url: process.env.SITE_URL,
  description:
    'Dhruva Hospitals in Kadapa offers pregnancy and gynaecology care, fertility & IVF, a Level III NICU, paediatrics, general medicine, surgery, eye care, orthopaedics and 24/7 emergency care.',
  // The hospital opened on 1 May 2026.
  foundingDate: '2026-05-01',

  // State registration (Form IV certificate from the District Registering Authority, YSR Kadapa).
  registration: {
    act: 'A.P. Allopathic Private Medical Care Establishments (Registration and Regulation) Act, 2002',
    fileNumber: '01-325',
    issuedOn: '2026-06-17',
    validUntil: '2031-06-16',
    beds: 20,
  },
  tagline:
    "Rayalaseema's destination for advanced fertility, maternity, and neonatal care. Excellence in healthcare, delivered with a human touch.",

  // Matches the Google Business Profile address, minus its stray "s reddy hospital" label (another
  // hospital's name). Keep the website, Google and directories identical. The registration
  // certificate words the same place as: D.No. 1/705-1, Dwaraka Nagar, Beside Raithu Bazar,
  // Sandhya Circle, Kadapa 516001.
  address: {
    street: 'Venu Gopal House, 1/705-1, Beside Raithu Bazar, Dwaraka Nagar, Old Kadapa',
    city: 'Kadapa',
    region: 'Andhra Pradesh',
    postalCode: '516001',
    country: 'IN',
    full: 'Venu Gopal House, 1/705-1, Beside Raithu Bazar, Dwaraka Nagar, Old Kadapa, Andhra Pradesh 516001',
  },
  // The hospital's Google Maps listing ("Dhruva Hospitals, Kadapa"): its pin and listing ID.
  geo: { latitude: 14.4643667, longitude: 78.8227563 },
  mapsCid: '11172955950772335244',
  mapQuery: 'Dhruva Hospitals, Kadapa, Dwaraka Nagar, Sandhya Circle, Kadapa, Andhra Pradesh 516001',

  phones: {
    main: phone('+91 99599 59694'),
    mobile: phone('+91 99599 59693'),
    landline: phone('+91 8562 318419'),
    alternate: phone('+91 80085 08384'),
    emergency: phone('+91 90368 52311'),
    ambulance: phone('+91 81421 88108'),
  },
  email: 'dhruvahospital2020@gmail.com',
  whatsappNumber: '919959959694',

  hours: {
    opd: '9:00 AM – 8:00 PM',
    emergency: '24/7',
  },

  socials: {
    instagram: 'https://www.instagram.com/dhruva_hospitals_kadapa/',
    facebook: 'https://www.facebook.com/p/Dhruva-Hospital-61588717175038/',
    youtube: 'https://www.youtube.com/@DhruvaHospitals-r1z',
  },
  instagramHandle: 'dhruva_hospitals_kadapa',
};

export const callNumbers = [
  site.phones.mobile,
  site.phones.main,
  site.phones.landline,
  site.phones.alternate,
];

export function whatsappLink(message = 'Hello, I would like to book an appointment at Dhruva Hospitals.') {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Opens the hospital's own Google Maps listing (by its listing ID), not a text search.
export const googleMapsUrl = `https://maps.google.com/?cid=${site.mapsCid}`;
export const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

// The home page is https://www.dhruvahospitals.com/ (with the trailing slash).
export function absoluteUrl(path = '/') {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}
