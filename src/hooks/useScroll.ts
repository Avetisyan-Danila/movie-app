import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  const [triggerHeight, setTriggerHeight] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
    setTriggerHeight(window.innerHeight + window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scroll, triggerHeight };
};
