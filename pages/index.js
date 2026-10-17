import Layout from '@/components/Layout';
import HeroVideo from '@/components/home/HeroVideo';
import Hero from '@/components/home/Hero';
import HealthTips from '@/components/HealthTips';
import Departments from '@/components/home/Departments';
import Services from '@/components/home/Services';
import FacilitiesTeaser from '@/components/home/FacilitiesTeaser';
import AboutTeaser from '@/components/home/AboutTeaser';
import DoctorsTeaser from '@/components/home/DoctorsTeaser';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import TourGallery from '@/components/home/TourGallery';
import NriTeaser from '@/components/home/NriTeaser';
import WhyChoose from '@/components/home/WhyChoose';
import InstagramLatest from '@/components/home/InstagramLatest';
import { faqs } from '@/lib/data';
import { guideLinks } from '@/lib/guides';
import { VIDEO_REVALIDATE_SECONDS, getLatestVideos } from '@/lib/youtube';
import { INSTAGRAM_REVALIDATE_SECONDS, getInstagramReels } from '@/lib/instagram';
import { faqSchema, hospitalSchema, websiteSchema } from '@/lib/schema';

export default function Home({ guides, videos, reels }) {
  return (
    <Layout
      fullTitle="Dhruva Hospitals, Kadapa – Gynaecology, Pregnancy & Child Care"
      description="Hospital in Kadapa for gynaecology, pregnancy and delivery, IVF, paediatrics and a Level III NICU, with 24/7 emergency care. Call +91 99599 59694 to book."
      jsonLd={[hospitalSchema(), websiteSchema(), faqSchema(faqs)]}
    >
      <HeroVideo />
      <Hero />
      <WhyChoose />
      <HealthTips className="pt-20 sm:pt-28" videos={videos} />
      <Departments />
      <Services />
      <NriTeaser guides={guides} />
      <FacilitiesTeaser />
      <AboutTeaser />
      <TourGallery />
      <DoctorsTeaser />
      <Testimonials />
      <InstagramLatest reels={reels} />
      <Faq />
    </Layout>
  );
}

export async function getStaticProps() {
  const [videos, reels] = await Promise.all([getLatestVideos(), getInstagramReels(5)]);
  return {
    props: {
      // The travel guides only; the banner is for families coming from abroad.
      guides: guideLinks('en', ['delivering-in-kadapa-from-dubai', 'nicu-levels-of-care', 'baby-birth-certificate-aadhaar-passport-nri']),
      videos,
      reels,
    },
    revalidate: Math.min(VIDEO_REVALIDATE_SECONDS, INSTAGRAM_REVALIDATE_SECONDS),
  };
}
