import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import Child from './renderChildren/Child';

const getTime = () => {
  return Date.now().toString().slice(-5);
};

export default function ComponentRenderCycle({
  unmountRemount,
  children,
}: {
  unmountRemount: () => void;
  children: React.ReactNode;
}) {
  const [text, setText] = useState('');
  const elRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    const timeInit = getTime();
    console.log('PARENT useEffect fired: ', timeInit);

    // const id = setInterval(() => {
    //   const time = getTime();
    //   console.log('Interval log: ', time);
    // }, 500);
    // elRef.current.style.borderWidth = '30px';

    return () => {
      // clearInterval(id);
      const time = getTime();
      console.log('useEffect cleanup: ', time);
      console.log('useEffect cleaning up: ', timeInit);
    };
  }, [text]);

  useLayoutEffect(() => {
    const time = getTime();
    console.log('useLayoutEffect fired: ', time);
    console.log('elRef() ==>', elRef.current);
    elRef.current!.style.borderWidth = '30px';

    // elRef.current.style.borderWidth = '30px';

    return () => {
      const time = getTime();
      console.log('useLayoutEffect cleanup: ', time);
    };
  }, []);

  console.log('============================================');
  console.log('🔴 PARENT RENDER');

  return (
    <>
      <div>
        <label>Label</label>
      </div>
      <input
        ref={elRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const time = getTime();
          setText(() => {
            // console.log('============================================');
            console.log('setState fired: ', time);
            // console.log('currentStateValue ==>', text);
            // console.log('prevStateValue ==>', prev);
            // console.log('eventTergetValue ==>', e.target.value);
            // console.log('============================================');

            return e.target.value;
          });
        }}
        value={text}
      />
      <hr />
      <button onClick={unmountRemount}>Tear down that component</button>
      <p>{text}</p>
      {children}
      <Child />
    </>
  );
}
