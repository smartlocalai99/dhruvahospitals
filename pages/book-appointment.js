import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import AppointmentForm from '@/components/AppointmentForm';
import { getDoctor, getService, primaryDepartment } from '@/lib/data';
import { site, whatsappLink } from '@/lib/site';

export default function BookAppointmentPage() {
  const router = useRouter();
  const doctor = getDoctor(router.query.doctor);
  const service = getService(router.query.service);
  const defaultDoctor = doctor?.bookable ? doctor.name : '';
  const defaultDepartment = service?.title || primaryDepartment(doctor);

  return (
    <Layout
      title="Book an Appointment"
      description="Fill in your details and the Dhruva Hospitals team will reach out to confirm your appointment."
    >
      <section className="container-page py-16 sm:py-20">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Book an appointment here
          </h1>

          <p className="mt-3 text-neutral-500">
            Kindly, fill your details below. We will reach out to you.
          </p>
        </div>

        {/* Form */}
        <AppointmentForm
          key={`${defaultDoctor}|${defaultDepartment}`}
          idPrefix="page"
          variant="page"
          defaultDoctor={defaultDoctor}
          defaultDepartment={defaultDepartment}
        />

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-neutral-500">
          Prefer to talk? Call{' '}
          <a href={site.phones.main.href} className="font-semibold text-navy-700 hover:underline">
            {site.phones.main.display}
          </a>{' '}
          or{' '}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy-700 hover:underline"
          >
            WhatsApp us
          </a>
          . For emergencies, call{' '}
          <a href={site.phones.emergency.href} className="font-semibold text-brandred-600 hover:underline">
            {site.phones.emergency.display}
          </a>{' '}
          (24/7).
        </p>
      </section>
    </Layout>
  );
}
