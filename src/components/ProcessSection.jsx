import { AnimatedSection } from './AnimatedSection';

export default function ProcessSection() {
  return (
    <>
      {/* --- How It Works / Our Process Section --- */}
      <AnimatedSection id="process" className="py-16 text-center bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-bold text-gray-100">
            Our Simple 3-Step Process
          </h2>
          <div className="flex flex-col items-center justify-center space-y-12 md:flex-row md:space-x-12 md:space-y-0">
            {/* Step 1 */}
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-purple-900 text-purple-200 md:h-40 md:w-40">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-bold text-purple-500">
                1
              </span>
              <p className="text-center text-xl font-semibold">
                Discovery & Strategy
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-fuchsia-900 text-fuchsia-200 md:h-40 md:w-40">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-bold text-fuchsia-500">
                2
              </span>
              <p className="text-center text-xl font-semibold">
                Solution Build & Integrate
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-indigo-900 text-indigo-200 md:h-40 md:w-40">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-bold text-indigo-500">
                3
              </span>
              <p className="text-center text-xl font-semibold">
                Launch & Optimize
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
