// Statutory statement for pages that mention pregnancy scans or fertility treatment.
const text = {
  en: 'Sex determination of the foetus is not done at Dhruva Hospitals. It is prohibited under the PC & PNDT Act, 1994.',
  te: 'ధ్రువ హాస్పిటల్స్‌లో గర్భస్థ శిశువు లింగ నిర్ధారణ చేయబడదు. ఇది PC & PNDT చట్టం, 1994 ప్రకారం నిషేధం.',
};

export default function PcpndtNotice({ lang = 'en', className = '' }) {
  return (
    <p className={`rounded-2xl border border-navy-100 bg-white px-5 py-4 text-sm font-medium text-neutral-800 ${className}`}>
      {text[lang]}
    </p>
  );
}
