import { useState, useEffect } from 'react';

const useMounted = (): boolean => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted((prevState) => !prevState);

    return () => setMounted((prevState) => !prevState);
  }, []);

  return isMounted;
};

export default useMounted;
