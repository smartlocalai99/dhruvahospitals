// NRI desk: details for families who travel from abroad to deliver at Dhruva Hospitals.
// Anything left as null is hidden on the site until the hospital confirms it.

export const nriDesk = {
  // Name of the coordinator who answers the WhatsApp desk, e.g. 'Ms. Lakshmi'.
  coordinator: null,
  // Hours in Gulf time, e.g. '9:00 AM – 9:00 PM Gulf Standard Time (UAE, Oman); 8:00 AM – 8:00 PM in Saudi Arabia, Qatar, Kuwait and Bahrain'.
  hours: null,
  whatsappMessage: 'Hello, I live abroad and would like to plan my delivery at Dhruva Hospitals.',
};

// Factual package price list. Leave empty until prices are confirmed in writing;
// the section is hidden while it is empty. Example:
// { name: 'Normal delivery package', price: '₹00,000 – ₹00,000', includes: '2 days, twin-sharing room, doctor’s fees' }
export const nriPackages = [];
export const nriPackagesCheckedOn = null; // 'YYYY-MM-DD'

// Steps for a family planning a delivery from abroad. A real sequence, so it is shown numbered.
export const nriSteps = [
  {
    title: 'Message the NRI desk',
    text: 'Tell us your due date, where you live and any health conditions. You get a reply on WhatsApp.',
  },
  {
    title: 'Send your records for review',
    text: 'Share the reports on the checklist below. Our obstetrician reviews them before your consult.',
  },
  {
    title: 'Pre-arrival video consult',
    text: 'Speak with obstetrician Dr. S Mounika Reddy. You agree an arrival date and anything to finish before you fly.',
  },
  {
    title: 'Plan travel and stay',
    text: 'The desk confirms airport pickup, the stay for your attendant and a written estimate for your care.',
  },
  {
    title: 'Arrive and continue antenatal care',
    text: 'Your first visit is booked for the days after you land. Delivery is in the same building as our Level III NICU.',
  },
  {
    title: 'Baby’s documents',
    text: 'The hospital reports the birth to the registrar. We give you a checklist for the birth certificate, Baal Aadhaar and passport.',
  },
];

// What to send before the video consult.
export const recordChecklist = [
  'Dating scan and NT scan reports',
  'Anomaly scan (18–22 weeks) and any growth scans',
  'Blood group and Rh type',
  'Haemoglobin or complete blood count',
  'Thyroid test (TSH)',
  'Blood sugar test (GTT or OGTT)',
  'Infection screening: HIV, hepatitis B, hepatitis C and syphilis (VDRL)',
  'Urine test',
  'Notes from any earlier caesarean, surgery or complicated delivery',
  'Medicines you take now, and any allergies',
  'Treatment details for high blood pressure, diabetes or thyroid problems, if any',
];

// Airport pickup. Distances and drive times are approximate, by road, to the hospital.
export const airports = [
  { city: 'Kadapa', code: 'CDP', distance: 'about 12 km', drive: 'about 25 minutes' },
  { city: 'Tirupati', code: 'TIR', distance: 'about 140 km', drive: 'about 3 hours' },
  { city: 'Bengaluru', code: 'BLR', distance: 'about 260 km', drive: 'about 5 hours' },
  { city: 'Chennai', code: 'MAA', distance: 'about 270 km', drive: 'about 5½ hours' },
  { city: 'Hyderabad', code: 'HYD', distance: 'about 400 km', drive: 'about 7 hours' },
];
