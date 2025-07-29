import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';
import BlogAdmin from './pages/blog/BlogAdmin';

function App() {
  const handleSmoothScroll = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950 font-sans text-gray-100 antialiased">
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
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog-admin" element={<BlogAdmin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
