import { useEffect } from 'react';

type Ref = {
  current: HTMLElement | null;
};

type Event = MouseEvent | TouchEvent;

const useOutsideClick = (ref: Ref, cb: () => unknown): void => {
  useEffect(() => {
    const handleOutsideClick = (e: Event): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        cb();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [ref, cb]);
};

export default useOutsideClick;
