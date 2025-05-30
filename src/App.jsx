import './App.css';
import BenefitsSection from './components/BenefitsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProblemsSection from './components/ProblemsSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  const handleSmoothScroll = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100 antialiased">
      <Navbar handleSmoothScroll={handleSmoothScroll} />
      <HeroSection handleSmoothScroll={handleSmoothScroll} />
      <ProblemsSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
