import { useState, useRef, useEffect } from 'react';

export const useObserveElementWidth = <T extends HTMLElement>() => {
  const [elementWidth, setWidth] = useState(0);
  const refElement = useRef<T>(null);

  useEffect(() => {
    // Сохраняем текущее значение ref в переменной внутри эффекта
    const currentElement = refElement.current;

    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].target.getBoundingClientRect().width);
    });

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      // Используем сохраненное значение ref в функции очистки
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // Зависимости остаются пустыми, так как ref и функция setState не изменяются

  return {
    elementWidth,
    refElement,
  };
};
