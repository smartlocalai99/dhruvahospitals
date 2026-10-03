import Link from 'next/link';
import { useState } from 'react';
import { bookableDoctors, departments, primaryDepartment } from '@/lib/data';
import { site, whatsappLink } from '@/lib/site';

const variants = {
  page: {
    form: 'mx-auto mt-12 max-w-3xl space-y-6',
    grid: 'grid gap-6 sm:grid-cols-2',
    rows: 5,
    button: 'btn-primary px-10 disabled:cursor-not-allowed disabled:opacity-60',
    footer: 'flex flex-col items-center gap-4 pt-2',
    label: 'Submit request',
  },
  modal: {
    form: 'mt-6 space-y-5',
    grid: 'grid gap-5 sm:grid-cols-2',
    rows: 4,
    button: 'btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60',
    footer: 'flex flex-col gap-4',
    label: 'Send request',
  },
};

export default function AppointmentForm({
  idPrefix = 'appointment',
  variant = 'page',
  defaultDoctor = '',
  defaultDepartment = '',
}) {
  const styles = variants[variant];
  const emptyForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: defaultDepartment,
    doctor: defaultDoctor,
    symptoms: '',
    website: '',
  };

  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const id = (name) => `${idPrefix}-${name}`;

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => {
      const next = { ...current, [name]: value };
      if (name === 'doctor' && value && !current.department) {
        next.department = primaryDepartment(bookableDoctors.find((doctor) => doctor.name === value));
      }
      return next;
    });
    if (status !== 'sending') {
      setStatus('idle');
      setMessage('');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your request.');
      }

      setStatus('success');
      setMessage('Your appointment request was sent successfully. The hospital team will contact you shortly.');
      setForm({ ...emptyForm, department: '', doctor: '' });
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Unable to send your request.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        <div>
          <label htmlFor={id('firstName')} className="field-label">First Name*</label>
          <input
            id={id('firstName')}
            name="firstName"
            type="text"
            required
            maxLength={60}
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor={id('lastName')} className="field-label">Last Name*</label>
          <input
            id={id('lastName')}
            name="lastName"
            type="text"
            required
            maxLength={60}
            autoComplete="family-name"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor={id('email')} className="field-label">Email</label>
          <input
            id={id('email')}
            name="email"
            type="email"
            maxLength={120}
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor={id('phone')} className="field-label">Contact Number*</label>
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\(\)\-\s]{7,20}"
            title="Please enter a valid phone number"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 12345 67890"
            className="field-input"
          />
        </div>

        <div>
          <label htmlFor={id('department')} className="field-label">Department</label>
          <select
            id={id('department')}
            name="department"
            value={form.department}
            onChange={handleChange}
            className="field-input"
          >
            <option value="">Not sure / general enquiry</option>
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={id('doctor')} className="field-label">Preferred Doctor</label>
          <select
            id={id('doctor')}
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            className="field-input"
          >
            <option value="">Any available doctor</option>
            {bookableDoctors.map((doctor) => (
              <option key={doctor.slug} value={doctor.name}>
                {doctor.name} — {doctor.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={id('symptoms')} className="field-label">Explain the symptoms*</label>
        <textarea
          id={id('symptoms')}
          name="symptoms"
          required
          rows={styles.rows}
          maxLength={2000}
          value={form.symptoms}
          onChange={handleChange}
          placeholder="Write something..."
          className="field-input resize-none"
        />
      </div>

      {/* Hidden from people; catches automated spam submissions. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={id('website')}>Website</label>
        <input
          id={id('website')}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div className={styles.footer}>
        <button type="submit" disabled={status === 'sending'} className={styles.button}>
          {status === 'sending' ? 'Sending...' : styles.label}
        </button>

        {status === 'success' && (
          <p className="text-center text-sm font-medium text-green-700" role="status">
            {message}
          </p>
        )}

        {status === 'error' && (
          <p className="text-center text-sm font-medium text-red-600" role="alert">
            {message}{' '}
            <span className="font-normal text-neutral-600">
              You can also call{' '}
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
                message us on WhatsApp
              </a>
              .
            </span>
          </p>
        )}

        <p className="text-center text-xs text-neutral-500">
          By submitting, you agree to be contacted about your request. See our{' '}
          <Link href="/privacy" className="underline-offset-2 hover:text-navy-700 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
