import { useCallback, useEffect, useRef } from 'react';

export function useFetch(url: string, options?: RequestInit, cb?: (res: unknown, ...args: unknown[]) => void) {
  const cbRef = useRef(cb);
  const controllerRef = useRef<null | AbortController>(null);

  const cleanFetch = useCallback(
    async (...args: unknown[]) => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      controllerRef.current = new AbortController();

      try {
        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
          },
          ...options,
          signal: controllerRef.current.signal,
        }).then((res) => res.json());

        if (cbRef.current) {
          cbRef.current(res, ...args);
        }

        return res;
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error(err);
        }
      }
    },
    [options, url],
  );

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  return cleanFetch;
}
