import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import Departments from '@/components/home/Departments';
import Services from '@/components/home/Services';
import FacilitiesTeaser from '@/components/home/FacilitiesTeaser';
import AboutTeaser from '@/components/home/AboutTeaser';
import DoctorsTeaser from '@/components/home/DoctorsTeaser';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import { faqs } from '@/lib/data';
import { faqSchema, hospitalSchema } from '@/lib/schema';

export default function Home() {
  return (
    <Layout
      title="Fertility, Maternity & Newborn Care in Kadapa"
      description="Dhruva Hospitals in Kadapa offers fertility & IVF, pregnancy and gynaecology care, a Level III NICU, paediatrics, surgery and 24/7 emergency care. Book an appointment today."
      jsonLd={[hospitalSchema(), faqSchema(faqs)]}
    >
      <Hero />
      <Departments />
      <Services />
      <FacilitiesTeaser />
      <AboutTeaser />
      <DoctorsTeaser />
      <Testimonials />
      <Faq />
    </Layout>
  );
}
