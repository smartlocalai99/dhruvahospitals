import {
  LuActivity,
  LuBaby,
  LuHeartPulse,
  LuHospital,
  LuMicroscope,
  LuScissors,
  LuShapes,
  LuShieldCheck,
  LuSparkles,
  LuStethoscope,
} from 'react-icons/lu';

// One icon per service slug (lib/data.js), used in the Services menu.
export const serviceIcons = {
  fertility: LuSparkles,
  pregnancy: LuHeartPulse,
  gynaecology: LuShieldCheck,
  cancer: LuActivity,
  paediatrics: LuShapes,
  neonatal: LuBaby,
  diagnostics: LuMicroscope,
  surgery: LuScissors,
  'general-medicine': LuStethoscope,
};

// A service added to lib/data.js without an icon here still gets one.
export function getServiceIcon(slug) {
  return serviceIcons[slug] || LuHospital;
}
