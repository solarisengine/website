import { AnimatedSection } from './AnimatedSection';

export default function ServicesSection() {
  return (
    <>
      {/* --- Solution / What We Do Section --- */}
      <AnimatedSection id="services" className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-4xl font-bold text-gray-100">
            Our AI-Driven Automation Solutions
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="rounded-lg bg-gray-900 p-8 shadow-md">
              <div className="mb-4 text-5xl text-purple-400">🚀</div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-100">
                AI-Powered Lead Generation
              </h3>
              <p className="text-gray-300">
                Identify, qualify, and attract high-quality leads with
                intelligent algorithms.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-8 shadow-md">
              <div className="mb-4 text-5xl text-purple-400">💬</div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-100">
                Automated Follow-Up Systems
              </h3>
              <p className="text-gray-300">
                Ensure consistent and personalized communication with prospects
                and clients.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-8 shadow-md">
              <div className="mb-4 text-5xl text-purple-400">⚙️</div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-100">
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
