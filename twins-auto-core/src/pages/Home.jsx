import StickyHeader from '../components/landing/StickyHeader';
import HeroSection from '../components/landing/HeroSection';
import ServiceMatrix from '../components/landing/ServiceMatrix';
import TireBrands from '../components/landing/TireBrands';
import TireInstall from '../components/landing/TireInstall';
import TrustVault from '../components/landing/TrustVault';
import PhotoGallery from '../components/landing/PhotoGallery';
import AboutSection from '../components/landing/AboutSection';
import FooterSection from '../components/landing/FooterSection';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/7e3d1d532_image.png',
  oil: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/28efa8f64_image.png',
  brakes: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/414f2cf21_image.png',
  engine: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/0b7060bee_image.png',
  diagnostics: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/bbe47ba19_image.png',
  tires: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/5447dfeca_image.png',
  transmission: 'https://media.base44.com/images/public/69de997cf2dfa97e177af51f/0b7060bee_image.png',
};

export default function Home() {
  return (
    <div className="font-body">
      <StickyHeader />
      <HeroSection />
      <ServiceMatrix images={IMAGES} />
      <TireInstall />
      <TireBrands />
      <PhotoGallery />
      <TrustVault />
      <AboutSection />
      <FooterSection />
    </div>
  );
}