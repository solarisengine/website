import { AnimatedSection } from './AnimatedSection';

export default function TestimonialsSection() {
  return (
    <>
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
    </>
  );
}
