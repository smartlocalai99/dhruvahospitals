// import Layout from '@/components/Layout';
// import PageHeader from '@/components/PageHeader';

// export default function DhruvaSpeaksPage() {
//   return (
//     <Layout
//       title="Dhruva Speaks"
//       description="Expert advice, practical health tips, and trusted guidance from the medical team at Dhruva Hospitals."
//     >
//       <PageHeader
//         eyebrow="Dhruva Speaks"
//         title="Trusted Health Guidance, From Our Doctors"
//         subtitle="Expert advice, practical health tips, and trusted guidance from the medical team at Dhruva Hospitals."
//       />

//       <section className="container-page py-24 sm:py-32">
//         <div className="mx-auto flex max-w-md flex-col items-center text-center">
//           <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy-700">
//             <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
//               <path
//                 d="M5 4.5h9l5 5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5Z"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinejoin="round"
//               />
//               <path d="M14 4.5V9h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
//               <path d="M7.5 13h9M7.5 16.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//           </span>
//           <h2 className="mt-6 text-xl font-semibold text-neutral-950">
//             New articles are on the way
//           </h2>
//           <p className="mt-3 text-sm leading-relaxed text-neutral-500">
//             Our doctors are preparing health guides and practical tips for your family. Check back soon, or follow us on social media for updates.
//           </p>
//         </div>
//       </section>
//     </Layout>
//   );
// }




import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function DhruvaSpeaksPage() {
  const instagramUrl =
    'https://www.instagram.com/dhruva_hospitals_kadapa/';

  return (
    <Layout
      title="Dhruva Speaks"
      description="Expert advice, practical health tips, and trusted guidance from the medical team at Dhruva Hospitals."
    >
      <PageHeader
        eyebrow="Dhruva Speaks"
        title="Trusted Health Guidance, From Our Doctors"
        subtitle="Expert advice, practical health tips, and trusted guidance from the medical team at Dhruva Hospitals."
      />

      <section className="container-page py-16 sm:py-20">

        {/* Instagram Section */}
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-950 sm:text-3xl">
              Follow Dhruva Hospitals
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500">
              Stay updated with health tips, hospital updates, doctor
              guidance, awareness campaigns, and more from Dhruva Hospitals.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Follow us on Instagram
            </a>
          </div>

          {/* Instagram Profile */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">

              <iframe
                src="https://www.instagram.com/dhruva_hospitals_kadapa/embed"
                title="Dhruva Hospitals Instagram"
                className="h-[700px] w-full border-0"
                scrolling="no"
                allowTransparency="true"
              />

            </div>
          </div>

        </div>

      </section>
    </Layout>
  );
}