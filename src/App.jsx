import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';

function App() {
  const handleSmoothScroll = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 font-sans text-gray-100 antialiased">
        <Navbar handleSmoothScroll={handleSmoothScroll} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection handleSmoothScroll={handleSmoothScroll} />
                <ProblemsSection />
                <ServicesSection />
                <ProcessSection />
                <BenefitsSection />
                <TestimonialsSection />
                <ContactSection />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
