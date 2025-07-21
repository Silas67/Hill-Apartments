import { useEffect, useRef, useState } from "react";

const useScrollTriggeredCountUp = (end, duration = 1000) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16); // Assuming 60fps
          const step = () => {
            start += increment;
            if (start < end) {
              setValue(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setValue(end);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.7 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return { ref, value };
};

export default useScrollTriggeredCountUp;
