import { useState, useEffect } from 'react';

const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const listener = (): void => {
      const windowWidth = window.innerWidth;
      setWindowWidth(windowWidth);
    };

    window.addEventListener('load', listener);
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('load', listener);
      window.removeEventListener('resize', listener);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
