import { useReducer } from 'react';
import GrandChild from './GrandChild';

export default function Child() {
  const [, forceRender] = useReducer((c) => c + 1, 0);
  console.log('🔵 CHILD RENDER');

  return (
    <div>
      Child
      <button onClick={forceRender}>Force</button>
      <GrandChild />{' '}
    </div>
  );
}
