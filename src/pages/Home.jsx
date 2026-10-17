import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import HowItWorks from '../components/home/HowItWorks';
import TestimonialsEnhanced from '../components/home/TestimonialsEnhanced';
import FAQ from '../components/home/FAQ';
import Newsletter from '../components/home/Newsletter';
import propertiesData from '../data/data.json';
import VideoStorySection from '../components/home/VideoStorySection';
import SectionSlider from '../components/home/SectionSlider';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* render each configured section using generic slider */}
      {propertiesData.sections.map((sec) => (
        <SectionSlider key={sec.id} section={sec} />
      ))}
      <Services services={propertiesData.services} />
      <HowItWorks />
      <TestimonialsEnhanced testimonials={propertiesData.testimonials} />
      <VideoStorySection />
      <FAQ />
      <Newsletter />
      <Stats />
    </div>
  );
};

export default Home;
