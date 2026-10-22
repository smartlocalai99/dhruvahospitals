// Shared by the English and Telugu service pages (read in getStaticProps only).

// Patient guides linked from a service page's sidebar.
export const serviceGuideSlugs = {
  pregnancy: ['delivering-in-kadapa-from-dubai', 'baby-birth-certificate-aadhaar-passport-nri', 'nicu-levels-of-care'],
  gynaecology: ['gynaecology-appointment-kadapa'],
  paediatrics: ['paediatrician-appointment-kadapa', 'nicu-levels-of-care'],
  neonatal: ['nicu-levels-of-care', 'baby-birth-certificate-aadhaar-passport-nri'],
};

// Services that families abroad most often plan around; these pages link to /nri.
export const abroadServices = ['pregnancy', 'gynaecology', 'paediatrics', 'neonatal', 'fertility'];
