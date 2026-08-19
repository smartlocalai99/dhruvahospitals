import { useState } from 'react';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  symptoms: '',
};

export default function AppointmentModal({ onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setStatus('idle');
    setMessage('');
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
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your request.');
      }

      setStatus('success');
      setMessage('Thank you. The hospital team will contact you shortly.');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-neutral-950/45 px-4 py-8"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="relative my-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
          aria-label="Close appointment form"
        >
          &times;
        </button>

        <h2 id="appointment-modal-title" className="pr-10 text-2xl font-bold text-neutral-950">
          Book an appointment
        </h2>
        <p className="mt-2 pr-8 text-sm text-neutral-500">
          Share your details and our hospital team will get back to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="modal-firstName" className="field-label">First Name*</label>
              <input id="modal-firstName" name="firstName" required value={form.firstName} onChange={handleChange} className="field-input" placeholder="First name" />
            </div>
            <div>
              <label htmlFor="modal-lastName" className="field-label">Last Name*</label>
              <input id="modal-lastName" name="lastName" required value={form.lastName} onChange={handleChange} className="field-input" placeholder="Last name" />
            </div>
            <div>
              <label htmlFor="modal-email" className="field-label">Email</label>
              <input id="modal-email" name="email" type="email" value={form.email} onChange={handleChange} className="field-input" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="modal-phone" className="field-label">Contact Number*</label>
              <input id="modal-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className="field-input" placeholder="+91 12345 67890" />
            </div>
          </div>

          <div>
            <label htmlFor="modal-symptoms" className="field-label">Explain the symptoms*</label>
            <textarea id="modal-symptoms" name="symptoms" required rows={4} value={form.symptoms} onChange={handleChange} className="field-input resize-none" placeholder="Write something..." />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send request'}
          </button>

          {message && (
            <p className={`text-center text-sm ${status === 'error' ? 'text-red-600' : 'text-green-700'}`} role="status">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
