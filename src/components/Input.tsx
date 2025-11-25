import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useFetch } from '../hooks/useFetch';

export default function Input() {
  const [text, setText] = useState('');
  const [serverSays, setServerSays] = useState('');

  const cleanFetch = useFetch('/api/type', { method: 'post', body: JSON.stringify({ text }) });

  const debounce = useDebounce(async () => {
    const res = await cleanFetch();
    setServerSays(res);
  }, 1000);

  const inputProps = {
    onBlur: () => cleanFetch(),
    onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
      debounce();
    },
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h1>{serverSays}</h1>
      <div>
        <label>Send it</label>
      </div>
      <input value={text} {...inputProps} />
    </div>
  );
}
