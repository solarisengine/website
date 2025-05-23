'use client';

import { useInView } from './useInView';

export function AnimatedSection({ children, className = '', ...props }) {
  // Use the useInView hook to detect when the element is in view
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
    triggerOnce: true, // Only animate once when it enters the viewport
  });

  return (
    <section
      ref={ref} // Attach the ref to the section element
      className={`
        ${className}
        transition-all duration-1000 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      {...props}
    >
      {children}
    </section>
  );
}