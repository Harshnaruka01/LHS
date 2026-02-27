import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // guard: skip if already animated to prevent double-trigger
    if (element.dataset.scrollAnimated === 'true') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.target.dataset.scrollAnimated !== 'true') {
          entry.target.dataset.scrollAnimated = 'true';
          entry.target.classList.add('scroll-in');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
      try {
        observer.unobserve(element);
        observer.disconnect();
      } catch (e) {}
    };
  }, []);

  return ref;
}
