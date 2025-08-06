import { useEffect, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (statusType === 'success' && status) {
      const timer = setTimeout(() => {
        setStatus('');
        setStatusType('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status, statusType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    setStatusType('');

    try {
      console.log('Submitting form with data:', form);
      
      // Use your secure backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        console.log('Success response:', result);
        setStatus('Thank you! Your message has been sent.');
        setStatusType('success');
        setForm({ name: '', email: '', company: '', details: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response:', errorData);
        setStatus(errorData.message || 'Something went wrong. Please try again.');
        setStatusType('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('Network error. Please check your connection and try again.');
      setStatusType('error');
    }
    setIsSubmitting(false);
  };

  return (
    <AnimatedSection
      id="contact"
      className="bg-slate-900 py-16 relative overflow-hidden"
    >
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Have a challenge or idea? Let’s talk about how automation and AI can
          help your business.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-8 max-w-xl rounded-lg bg-slate-800/80 backdrop-blur-sm p-8 shadow-lg border border-blue-800/30"
        >
          {status && (
            <div
              className={`relative mb-6 rounded px-4 py-3 text-lg font-medium transition-all duration-300 ${
                statusType === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-red-600 text-white'
              }`}
              role="alert"
              tabIndex={-1}
              aria-live="polite"
            >
              {status}
              <button
                type="button"
                onClick={() => {
                  setStatus('');
                  setStatusType('');
                }}
                className="absolute top-2 right-3 text-white text-xl leading-none focus:outline-none"
                aria-label="Dismiss"
              >
                ×
              </button>
            </div>
          )}
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-200" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded px-4 py-2 bg-slate-700/80 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400 border border-slate-600/50"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Tony Stark"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-200" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded px-4 py-2 bg-slate-700/80 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400 border border-slate-600/50"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="tony.stark@starkindustries.com"
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-200" htmlFor="company">
              Company
            </label>
            <input
              className="w-full rounded px-4 py-2 bg-slate-700/80 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400 border border-slate-600/50"
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Stark Industries"
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block mb-2 text-gray-200" htmlFor="details">
              What problem are you facing or what would you like to automate?
            </label>
            <textarea
              className="w-full rounded px-4 py-2 bg-slate-700/80 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400 border border-slate-600/50"
              id="details"
              name="details"
              rows="4"
              value={form.details}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Describe your current process, pain points, or ideas for automation/AI..."
            />
          </div>
          <button
            type="submit"
            className={`w-full rounded-full px-10 py-4 text-lg font-semibold text-white transition duration-300 ${
              isSubmitting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}
