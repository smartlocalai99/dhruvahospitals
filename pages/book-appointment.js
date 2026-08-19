import { useState } from "react";
import Layout from "@/components/Layout";

export default function BookAppointmentPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    symptoms: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = `New Appointment Request - ${form.firstName} ${form.lastName}`;

    const body = `
New Appointment Request

Patient Details
-------------------------

First Name: ${form.firstName}

Last Name: ${form.lastName}

Email: ${form.email || "Not provided"}

Contact Number: ${form.phone}

Symptoms / Reason for Appointment:
${form.symptoms}

-------------------------
Submitted from Dhruva Hospitals website.
`;

    const mailto = `mailto:dhruvahospitalkadapa@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setSubmitted(true);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      symptoms: "",
    });
  }

  return (
    <Layout
      title="Book an Appointment"
      description="Fill your details below and the Dhruva Hospitals team will reach out to confirm your appointment."
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
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-3xl space-y-6"
        >

          {/* First Name / Last Name */}
          <div className="grid gap-6 sm:grid-cols-2">

            <div>
              <label
                htmlFor="firstName"
                className="field-label"
              >
                First Name*
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="field-input"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="field-label"
              >
                Last Name*
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="field-input"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="field-label"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johnsmith@gmail.com"
                className="field-input"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="field-label"
              >
                Contact Number*
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 12345 67890"
                className="field-input"
              />
            </div>

          </div>

          {/* Symptoms */}
          <div>
            <label
              htmlFor="symptoms"
              className="field-label"
            >
              Explain the symptoms*
            </label>

            <textarea
              id="symptoms"
              name="symptoms"
              required
              rows={5}
              value={form.symptoms}
              onChange={handleChange}
              placeholder="Write something..."
              className="field-input resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-4 pt-2">

            <button
              type="submit"
              className="btn-primary px-10"
            >
              Submit request
            </button>

            {submitted && (
              <p
                className="text-center text-sm font-medium text-green-700"
                role="status"
              >
                Your appointment details have been prepared.
                Please send the email from your email application.
              </p>
            )}

          </div>

        </form>
      </section>
    </Layout>
  );
}