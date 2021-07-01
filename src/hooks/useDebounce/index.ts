import React, { 
  useState,
  useEffect
} from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const didMount = () => {
      const timeout = setTimeout(() => setDebouncedValue(value), delay);

      return () => {
        clearTimeout(timeout);
      }
  }

  useEffect(didMount, [value]);

  return debouncedValue;
}

export default useDebounce;