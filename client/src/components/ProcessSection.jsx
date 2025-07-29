import { AnimatedSection } from './AnimatedSection';

export default function ProcessSection() {
  return (
    <>
      {/* --- How It Works / Our Process Section --- */}
      <AnimatedSection
        id="process"
        className="py-16 text-center bg-slate-950 relative overflow-hidden"
      >
        {/* Cosmic background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-orange-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-orange-400 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-12 text-4xl font-bold text-gray-100">
            Our Simple 3-Step Process
          </h2>
          <div className="flex flex-col items-center justify-center space-y-12 md:flex-row md:space-x-12 md:space-y-0">
            {/* Step 1 */}
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-indigo-900 text-blue-200 md:h-40 md:w-40 border-2 border-orange-400/30">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-bold text-orange-400">
                1
              </span>
              <p className="text-center text-xl font-semibold">
                Discovery & Strategy
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-900 to-purple-900 text-indigo-200 md:h-40 md:w-40 border-2 border-orange-400/30">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-bold text-orange-400">
                2
              </span>
              <p className="text-center text-xl font-semibold">
                Solution Build & Integrate
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-blue-900 text-purple-200 md:h-40 md:w-40 border-2 border-orange-400/30">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-bold text-orange-400">
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
