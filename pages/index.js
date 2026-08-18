import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import Departments from '@/components/home/Departments';
import Services from '@/components/home/Services';
import FacilitiesTeaser from '@/components/home/FacilitiesTeaser';
import AboutTeaser from '@/components/home/AboutTeaser';
import DoctorsTeaser from '@/components/home/DoctorsTeaser';
import Faq from '@/components/home/Faq';

export default function Home() {
  return (
    <Layout
      title="One Trusted Place for Exceptional Family Healthcare"
      description="Dhruva Hospitals brings world-class medical standards, advanced surgical care, and compassionate healing to Kadapa."
    >
      <Hero />
      <Departments />
      <Services />
      <FacilitiesTeaser />
      <AboutTeaser />
      <DoctorsTeaser />
      <Faq />
    </Layout>
  );
}
