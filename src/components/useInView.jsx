'use client';

import { useEffect, useRef, useState } from 'react';

export const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup: Disconnect observer when component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]); // Dependency array: Re-run effect if options change

  return [ref, inView]; // Return the ref to attach to the element and the inView status
};
