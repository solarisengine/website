'use client';

import { useEffect, useRef, useState } from 'react';

export const useInView = (options = {}) => {
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        if (isIntersecting && !hasBeenInView) {
          setInView(true);
          setHasBeenInView(true);

          // If triggerOnce is true, disconnect the observer after first trigger
          if (options.triggerOnce) {
            observer.disconnect();
          }
        } else if (!options.triggerOnce) {
          // Only update inView state if triggerOnce is false
          setInView(isIntersecting);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup: Disconnect observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, [
    options.threshold,
    options.rootMargin,
    options.triggerOnce,
    hasBeenInView,
  ]);

  return [ref, inView];
};
