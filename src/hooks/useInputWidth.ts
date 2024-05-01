import { useState, useEffect, useRef } from 'react';

export const useInputWidth = (value: string, isChanging: boolean) => {
  const [width, setWidth] = useState(0);
  const inputValueHideElem = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!isChanging) {
      setWidth(inputValueHideElem.current?.offsetWidth ?? 0);
    }
  }, [value, inputValueHideElem.current?.offsetWidth, isChanging]);

  return { width, inputValueHideElem };
};
