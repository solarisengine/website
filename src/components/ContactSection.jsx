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
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus('Thank you! Your message has been sent.');
        setStatusType('success');
        setForm({ name: '', email: '', company: '', details: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
        setStatusType('error');
      }
    } catch {
      setStatus('Something went wrong. Please try again.');
      setStatusType('error');
    }
    setIsSubmitting(false);
  };

  return (
    <AnimatedSection id="contact" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* ...heading... */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-8 max-w-xl rounded-lg bg-gray-800 p-8 shadow-lg"
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
              className="w-full rounded px-4 py-2 bg-gray-700 text-white focus:outline-none"
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
              className="w-full rounded px-4 py-2 bg-gray-700 text-white focus:outline-none"
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
              className="w-full rounded px-4 py-2 bg-gray-700 text-white focus:outline-none"
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
              className="w-full rounded px-4 py-2 bg-gray-700 text-white focus:outline-none"
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
                : 'bg-purple-600 hover:bg-purple-700'
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
