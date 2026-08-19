import { useState } from 'react';
import PlaceholderImage from '../PlaceholderImage';

const departments = [
  {
    label: "Women's Care",
    icon: 'people',
    image: 'images/dept-womens-care.jpg',
    description:
      "Complete care for every stage of a woman's health journey. From menstrual health and antenatal care to pregnancy, childbirth, fibroids, and advanced gynaecological procedures.",
    tags: ['Maternity', 'Pregnancy', 'Laparoscopy', 'Gynaecology', 'Fibroids', 'Obstetrics'],
  },
  {
    label: 'Child & Neonatal Care',
    icon: 'people',
    image: 'images/dept-child-care.jpg',
    description:
      'Dedicated support for infants and growing children—from routine immunizations and growth monitoring to emergency pediatric and neonatal intensive care.',
    tags: ['Immunization', 'Neonatal ICU', 'Growth Monitoring', 'Pediatric Emergency', 'Vaccination'],
  },
  {
    label: 'peadatric',
    icon: 'people',
    image: 'images/dept-peadatric.jpg',
    description:
  'Compassionate and specialized care for infants, children, and adolescents—covering routine check-ups, vaccinations, growth and development, diagnosis, and treatment under one roof.',

tags: ['Child Care', 'Newborn Care', 'Vaccination', 'Growth & Development'],
  },
];

export default function Departments() {
  const [active, setActive] = useState(0);
  const current = departments[active];

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Departments
        </span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Centers of Medical Excellence
        </h2>
        <p className="mt-4 text-neutral-500">
          Specialized departments powered by experienced clinicians and modern healthcare infrastructure.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {departments.map((dept, i) => {
          const selected = i === active;
          return (
            <button
              key={dept.label}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-3xl p-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 ${
                selected ? 'bg-navy-700' : 'bg-navy-50 hover:bg-navy-100'
              }`}
              aria-pressed={selected}
            >
              <PlaceholderImage
                icon={dept.icon}
                file={dept.image}
                tone={selected ? 'dark' : 'light'}
                className="aspect-[4/3] w-full rounded-2xl"
              />
              <span
                className={`mt-4 block text-center text-base font-semibold ${
                  selected ? 'text-white' : 'text-navy-800'
                }`}
              >
                {dept.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-8 border-t border-neutral-100 pt-10 lg:grid-cols-[1fr_auto_1.4fr]">
        <div className="max-w-sm">
          <h3 className="text-xl font-semibold text-neutral-950">{current.label}</h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">{current.description}</p>
        </div>
        <div className="hidden w-px bg-neutral-200 lg:block" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {current.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center justify-center rounded-full border border-navy-200 px-4 py-2.5 text-sm font-medium text-navy-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
