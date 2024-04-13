import { useState, useRef, useEffect } from 'react';

export const useObserveElementWidth = <T extends HTMLElement>() => {
  const [elementWidth, setWidth] = useState(0);
  const refElement = useRef<T>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].target.getBoundingClientRect().width);
    });

    if (refElement.current) {
      observer.observe(refElement.current);
    }

    return () => {
      refElement.current && observer.unobserve(refElement.current);
    };
  }, []);

  return {
    elementWidth,
    refElement,
  };
};
