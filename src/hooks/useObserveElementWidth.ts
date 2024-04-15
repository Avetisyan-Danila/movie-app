import { useState, useRef, useEffect } from 'react';

export const useObserveElementWidth = <T extends HTMLElement>() => {
  const [elementWidth, setWidth] = useState(0);
  const refElement = useRef<T>(null);

  useEffect(() => {
    const currentElement = refElement.current;

    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].target.getBoundingClientRect().width);
    });

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return {
    elementWidth,
    refElement,
  };
};
