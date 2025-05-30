import { AnimatedSection } from './AnimatedSection';

export default function ProblemsSection() {
  return (
    <>
      {/* --- Problem / Pain Points Section --- */}
      <AnimatedSection id="problems" className="py-16 text-center bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-bold text-gray-100">
            Are You Facing These Challenges?
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="rounded-lg bg-gray-900 p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-purple-400">
                Manual Task Overload
              </h3>
              <p className="text-gray-300">
                Spending too much time on repetitive tasks instead of strategic
                growth?
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-purple-400">
                Inconsistent Lead Conversion
              </h3>
              <p className="text-gray-300">
                Struggling to effectively nurture leads and convert them into
                paying customers?
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-purple-400">
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
