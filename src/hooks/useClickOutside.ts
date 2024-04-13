import { MutableRefObject, useEffect } from 'react';

export const useOutsideAlerter = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref]);
};
