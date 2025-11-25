import { useState, useEffect, useRef } from 'react';
import Form from './components/Form';
import Input from './components/Input';
import LongPage from './components/LongPage';
import ComponentRenderCycle from './components/ComponentRenderCycle';
import Child from './components/renderChildren/Child';

import './App.css';
const viewOptions = [1, 2, 3, 4];

const setSs = (key: string, value: string) => window.sessionStorage.setItem(key, value);
const getSs = (key: string, fallback?: unknown) => window.sessionStorage.getItem(key) || fallback || null;

function App() {
  const [view, setView] = useState(parseInt(getSs('view', '1') as string));
  const [removeView, setRemoveView] = useState(false);

  const changeView = (v: number) => {
    setView(v);
    setSs('view', v.toString());
  };

  const unmountRemount = () => setRemoveView(true);

  const timoutRef = useRef<null | number>(null);
  useEffect(() => {
    if (removeView) {
      timoutRef.current = setTimeout(() => {
        setRemoveView(false);
      }, 3000);
    }
  }, [removeView]);

  return (
    <>
      <div className="g" style={{ minHeight: '2000px' }}></div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          padding: 8,
        }}
      >
        {viewOptions.map((v) => (
          <button
            key={v}
            style={{
              padding: '8px 48px',
              ...(v === view && { backgroundColor: '#2e2e2e' }),
            }}
            onClick={() => changeView(v)}
          >
            {v}
          </button>
        ))}
      </div>
      {!removeView && (
        <>
          {view === 1 && <Form />}
          {view === 2 && <Input />}
          {view === 3 && <LongPage />}
          {view === 4 && (
            <ComponentRenderCycle unmountRemount={unmountRemount}>
              <Child />
            </ComponentRenderCycle>
          )}
        </>
      )}
    </>
  );
}

export default App;
