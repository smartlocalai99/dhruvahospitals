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
    'Dhruva Hospitals in Kadapa offers fertility & IVF, pregnancy and gynaecology care, a Level III NICU, paediatrics, surgery and 24/7 emergency care.',
  tagline:
    "Rayalaseema's destination for advanced fertility, maternity, and neonatal care. Excellence in healthcare, delivered with a human touch.",

  address: {
    street: '1/705, Dwaraka Nagar, Near RTC Bus Stand',
    city: 'Kadapa',
    region: 'Andhra Pradesh',
    postalCode: '516001',
    country: 'IN',
    full: '1/705, Dwaraka Nagar, Near RTC Bus Stand, Kadapa, Andhra Pradesh 516001',
  },
  mapQuery:
    'Dhruva Hospitals, Venu Gopal House, S Reddy Hospital, 1/705-1, beside Raithu Bazar, Dwaraka Nagar, Old Kadapa, Andhra Pradesh 516001',

  phones: {
    main: phone('+91 99599 59694'),
    mobile: phone('+91 99599 59693'),
    landline: phone('+91 8562 318419'),
    alternate: phone('+91 80085 08384'),
    emergency: phone('+91 90368 52311'),
    ambulance: phone('+91 81421 88108'),
  },
  email: 'info@dhruvahospitals.com',
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

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
export const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

export function absoluteUrl(path = '/') {
  return `${site.url}${path === '/' ? '' : path}`;
}
