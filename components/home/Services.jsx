import PlaceholderImage from '../PlaceholderImage';

const services = [
  {
    title: 'Maternity & Gynaecology Care',
    description: 'Complete support for prenatal wellness, safe deliveries, and advanced reproductive health.',
    image: 'images/service-maternity.jpg',
  },

   {
  title: 'Emergency Care',
  description: 'Fast, reliable medical care for urgent conditions and unexpected health emergencies.',
  image: 'images/service-emergency.jpg',
},
  {
    title: 'Pediatric Emergency & Child Care',
    description: 'Specialized care for infants and children, from acute fevers to emergencies.',
    image: 'images/service-pediatric.jpg',
  },
  {
    title: 'General Medicine & Diagnostics',
    description: 'Expert consultation and diagnostics for chronic conditions and everyday health concerns.',
    image: "images/service-diagnostics.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-navy-50/40 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-white">
            <span className="eyebrow-dot" />
            Dedicated Services
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Comprehensive Care Tailored to Your Family
          </h2>
          <p className="mt-4 text-neutral-500">
            Explore our wide spectrum of specialized medical services delivered under strict safety and hygiene protocols.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex items-start gap-5">
              <PlaceholderImage
                icon="photo"
                file={service.image}
                className="h-24 w-24 flex-none rounded-2xl sm:h-28 sm:w-28"
              />
              <div>
                <h3 className="text-lg font-semibold text-neutral-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
