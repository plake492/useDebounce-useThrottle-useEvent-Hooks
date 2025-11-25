import { useCallback, useEffect, useRef } from 'react';

interface ThrottleOptions {
  fireOn: 'start' | 'both' | 'end';
}

export function useThrottle(
  cb: (...args: unknown[]) => void,
  ms?: number | null,
  options: ThrottleOptions = {
    fireOn: 'both',
  },
) {
  const shouldFireRef = useRef(true);
  const timeoutIdRef = useRef<null | number>(null);
  const cbRef = useRef(cb);

  const throttleFunc = useCallback(
    (...args: unknown[]) => {
      if (!shouldFireRef.current) return;
      if (options?.fireOn === 'start' || options?.fireOn === 'both') {
        cbRef.current(...args);
      }

      shouldFireRef.current = false;

      timeoutIdRef.current = window.setTimeout(() => {
        shouldFireRef.current = true;

        if (options?.fireOn === 'end' || options?.fireOn === 'both') {
          cbRef.current(...args);
        }
      }, ms || 1000);

      return () => {
        window.clearTimeout(timeoutIdRef.current as number);
      };
    },
    [ms, options],
  );

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutIdRef.current as number);
    };
  }, []);

  return throttleFunc;
}
