import { useState } from 'react';

/**
 * 'babel-plugin-react-compiler' Makes a workaround totally unnecessary
 */
export default function App() {
  const [color, setColor] = useState('red');
  return (
    <div>
      <input style={{ border: '1px solid black' }} value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
}

function ExpensiveTree() {
  const now = performance.now();
  while (performance.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
}
