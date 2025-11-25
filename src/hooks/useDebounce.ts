import { useRef, useEffect, useCallback } from 'react';

export function useDebounce(cb: (...args: unknown[]) => void, ms?: number) {
  const timeoutIdRef = useRef<null | number>(null);
  const cbRef = useRef(cb);

  const debounce = useCallback(
    (...args: unknown[]) => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current as number);
      }

      timeoutIdRef.current = setTimeout(() => {
        cbRef.current(...args);
      }, ms || 300);
    },
    [ms],
  );

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutIdRef.current as number);
    };
  }, []);

  return debounce;
}
