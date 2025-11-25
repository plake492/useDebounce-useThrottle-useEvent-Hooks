import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

function App() {
  const [text, setText] = useState('');
  const [clicked, setClicked] = useState(false);
  const [fetchAttempts, setFetchAttempts] = useState(0);

  const cleanFetch = useFetch('/api/special', { method: 'get' }, (v) => {
    setText(v as string);
    setClicked(false);
  });

  useEffect(() => {
    cleanFetch();
  }, [cleanFetch, clicked]);

  const handleClick = async () => {
    setFetchAttempts((prev) => prev + 1);
    setClicked((prev) => !prev);
  };

  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleClick}>Get it</button>
      <h2> ATTEMPTS: {fetchAttempts}</h2>
    </>
  );
}

export default App;
