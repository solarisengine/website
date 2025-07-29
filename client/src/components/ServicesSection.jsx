import { AnimatedSection } from './AnimatedSection';

export default function ServicesSection() {
  return (
    <>
      {/* --- Solution / What We Do Section --- */}
      <AnimatedSection
        id="services"
        className="bg-slate-800 py-16 relative overflow-hidden"
      >
        {/* Cosmic background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-16 w-28 h-28 bg-orange-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-16 left-16 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-orange-400 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-12 text-4xl font-bold text-gray-100">
            Our AI-Driven Automation Solutions
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="rounded-lg bg-slate-900/80 backdrop-blur-sm p-8 shadow-md border border-blue-800/30">
              <div className="mb-4 text-5xl">🚀</div>
              <h3 className="mb-3 text-2xl font-semibold text-orange-400">
                AI-Powered Lead Generation
              </h3>
              <p className="text-gray-300">
                Identify, qualify, and attract high-quality leads with
                intelligent algorithms.
              </p>
            </div>
            <div className="rounded-lg bg-slate-900/80 backdrop-blur-sm p-8 shadow-md border border-blue-800/30">
              <div className="mb-4 text-5xl">💬</div>
              <h3 className="mb-3 text-2xl font-semibold text-orange-400">
                Automated Follow-Up Systems
              </h3>
              <p className="text-gray-300">
                Ensure consistent and personalized communication with prospects
                and clients.
              </p>
            </div>
            <div className="rounded-lg bg-slate-900/80 backdrop-blur-sm p-8 shadow-md border border-blue-800/30">
              <div className="mb-4 text-5xl">⚙️</div>
              <h3 className="mb-3 text-2xl font-semibold text-orange-400">
                Business Process Optimization
              </h3>
              <p className="text-gray-300">
                Streamline repetitive tasks and workflows to boost productivity
                and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
