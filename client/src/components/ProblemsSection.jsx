import { AnimatedSection } from './AnimatedSection';

export default function ProblemsSection() {
  return (
    <>
      {/* --- Problem / Pain Points Section --- */}
      <AnimatedSection
        id="problems"
        className="py-16 text-center bg-slate-950 relative overflow-hidden"
      >
        {/* Subtle cosmic background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-12 text-4xl font-bold text-gray-100">
            Are You Facing These Challenges?
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="rounded-lg bg-slate-800/80 backdrop-blur-sm p-8 shadow-md border border-blue-800/30">
              <h3 className="mb-4 text-2xl font-semibold text-orange-400">
                Manual Task Overload
              </h3>
              <p className="text-gray-300">
                Spending too much time on repetitive tasks instead of strategic
                growth?
              </p>
            </div>
            <div className="rounded-lg bg-slate-800/80 backdrop-blur-sm p-8 shadow-md border border-blue-800/30">
              <h3 className="mb-4 text-2xl font-semibold text-orange-400">
                Inconsistent Lead Conversion
              </h3>
              <p className="text-gray-300">
                Struggling to effectively nurture leads and convert them into
                paying customers?
              </p>
            </div>
            <div className="rounded-lg bg-slate-800/80 backdrop-blur-sm p-8 shadow-md border border-blue-800/30">
              <h3 className="mb-4 text-2xl font-semibold text-orange-400">
                Inefficient Workflows
              </h3>
              <p className="text-gray-300">
                Outdated processes hindering your team's productivity and
                overall efficiency?
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
