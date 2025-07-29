import { AnimatedSection } from './AnimatedSection';

export default function BenefitsSection() {
  return (
    <>
      {/* --- Benefits / Why Choose Us Section --- */}
      <AnimatedSection
        id="benefits"
        className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 py-16 text-white relative overflow-hidden"
      >
        {/* Cosmic background elements */}
        <div className="absolute inset-0 opacity-10 cosmic-bg">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-orange-400 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-12 text-4xl font-bold">Why Solaris Engine?</h2>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center justify-center space-x-3 text-xl">
              <svg
                className="h-7 w-7 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Increased Revenue & Conversions</span>
            </li>
            <li className="flex items-center justify-center space-x-3 text-xl">
              <svg
                className="h-7 w-7 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Significant Time & Cost Savings</span>
            </li>
            <li className="flex items-center justify-center space-x-3 text-xl">
              <svg
                className="h-7 w-7 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Enhanced Customer Engagement</span>
            </li>
            <li className="flex items-center justify-center space-x-3 text-xl">
              <svg
                className="h-7 w-7 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Unleash Your Team's Potential</span>
            </li>
            <li className="flex items-center justify-center space-x-3 text-xl">
              <svg
                className="h-7 w-7 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Data-Driven Decision Making</span>
            </li>
            <li className="flex items-center justify-center space-x-3 text-xl">
              <svg
                className="h-7 w-7 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Scalable Solutions for Growth</span>
            </li>
          </ul>
        </div>
      </AnimatedSection>
    </>
  );
}
