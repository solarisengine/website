export default function HeroSection({ handleSmoothScroll }) {
  return (
    <>
      {/* --- Hero Section --- */}
      {/* Hero is usually visible immediately, so no scroll animation needed */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight">
            Supercharge Your Business Growth with AI-Driven Automation
          </h1>
          <p className="mb-8 text-xl opacity-90">
            Empowering companies worldwide with intelligent solutions for lead
            generation, follow-up, and operational efficiency.
          </p>
          <a
            onClick={handleSmoothScroll('contact')}
            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-800 transition duration-300 hover:bg-gray-100"
            style={{ cursor: 'pointer' }}
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
