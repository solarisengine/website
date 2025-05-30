import './App.css';
import { AnimatedSection } from './components/AnimatedSection'; // Adjust path if using src/

function App() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100 antialiased">
      {/* --- Navbar (Basic) --- */}
      {/* Navbar typically doesn't need to be animated on scroll */}
      <nav className="bg-gray-900 p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-purple-400">
            Solaris Engine LLC
          </a>
          <div className="space-x-4">
            <a href="#services" className="text-gray-300 hover:text-purple-400">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-purple-400">
              About Us
            </a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      {/* Hero is usually visible immediately, so no scroll animation needed */}
      <section className="bg-gradient-to-r from-purple-800 to-fuchsia-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight">
            Supercharge Your Business Growth with AI-Driven Automation
          </h1>
          <p className="mb-8 text-xl opacity-90">
            Empowering small to medium companies worldwide with intelligent
            solutions for lead generation, follow-up, and operational
            efficiency.
          </p>
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-800 transition duration-300 hover:bg-gray-100"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

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

      {/* --- Benefits / Why Choose Us Section --- */}
      <AnimatedSection
        id="benefits"
        className="bg-gradient-to-r from-purple-800 to-fuchsia-900 py-16 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-4xl font-bold">Why Solaris Engine?</h2>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center justify-center space-x-3 text-xl">
              <svg
                className="h-7 w-7 text-white"
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
                className="h-7 w-7 text-white"
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
                className="h-7 w-7 text-white"
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
                className="h-7 w-7 text-white"
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
                className="h-7 w-7 text-white"
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
                className="h-7 w-7 text-white"
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

      {/* --- Testimonials Section (Placeholder) --- */}
      <AnimatedSection
        id="testimonials"
        className="py-16 text-center bg-gray-950"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-bold text-gray-100">
            What Our Clients Say
          </h2>
          <div className="max-w-3xl mx-auto italic text-gray-300">
            <p className="mb-4">
              "Solaris Engine transformed our lead generation process. We're
              seeing a significant increase in qualified leads and our team is
              more efficient than ever!"
            </p>
            <p className="font-semibold">- John Doe, CEO of InnovateTech</p>
          </div>
          {/* Add more testimonials as you gather them */}
        </div>
      </AnimatedSection>

      {/* --- Contact / CTA Section --- */}
      <AnimatedSection id="contact" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-4xl font-bold text-gray-100">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-10 text-xl text-gray-300">
            Get a free consultation to see how AI-driven automation can work for
            you.
          </p>
          <a
            href="mailto:contact@solarisengine.com" // Replace with your actual contact email
            className="rounded-full bg-purple-600 px-10 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-purple-700"
          >
            Schedule a Free Consultation
          </a>
          {/* You might want a full contact form here later */}
        </div>
      </AnimatedSection>

      {/* --- Footer --- */}
      {/* Footer typically doesn't need animation */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} Solaris Engine LLC. All rights
            reserved.
          </p>
          <div className="mt-4 space-x-4 text-sm">
            <a href="#" className="hover:text-purple-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
