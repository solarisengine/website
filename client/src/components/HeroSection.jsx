export default function HeroSection({ handleSmoothScroll }) {
  return (
    <>
      {/* --- Hero Section --- */}
      {/* Hero is usually visible immediately, so no scroll animation needed */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-950 py-20 text-white text-center relative overflow-hidden">
        {/* Cosmic background elements */}
        <div className="absolute inset-0 opacity-20 cosmic-stars">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-orange-300 rounded-full"></div>
          <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-20 right-16 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-orange-400 rounded-full"></div>
          <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight cosmic-glow">
            Supercharge Your Business Growth with AI-Driven Automation
          </h1>
          <p className="mb-8 text-xl opacity-90">
            Empowering companies worldwide with intelligent solutions for lead
            generation, follow-up, and operational efficiency.
          </p>
          <a
            onClick={handleSmoothScroll('contact')}
            className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-3 text-lg font-semibold text-slate-900 transition duration-300 hover:from-orange-400 hover:to-yellow-400 shadow-lg hover:shadow-xl transform hover:scale-105 cosmic-hover"
            style={{ cursor: 'pointer' }}
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
