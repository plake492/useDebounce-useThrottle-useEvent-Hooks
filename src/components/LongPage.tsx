import { useEffect, useState } from 'react';
import { useThrottle } from '../hooks/useThrottle';
import { useFetch } from '../hooks/useFetch';

export default function LongPage() {
  const [depth, setDepth] = useState(0);
  const [depthDesc, setDepthDesc] = useState('');
  const [timeoutMs, setTimeoutMs] = useState(500);

  const trackScroll = (v: unknown) => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / pageHeight) * 100;
    setDepth(scrollPercentage);
    setDepthDesc(v as string);
  };

  const cleanFetch = useFetch('/api/track', { method: 'post', body: JSON.stringify({ depth }) }, trackScroll);
  const scrollTracking = useThrottle(cleanFetch, timeoutMs, { fireOn: 'both' });

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking);
    return () => {
      window.removeEventListener('scroll', scrollTracking);
    };
  }, [scrollTracking]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '100px',
          left: 0,
          display: 'grid',
          width: '100%',
          placeContent: 'center',
        }}
      >
        <p>{depthDesc}</p>
        <div>
          <input
            type="range"
            id="volume"
            name="volume"
            min="300"
            max="5000"
            step="100"
            value={timeoutMs}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTimeoutMs(parseInt(e.target.value))}
          />
          <label htmlFor="volume">Throttle Speed: {timeoutMs}</label>
        </div>
      </div>
      <br />
      <div style={{ minHeight: '8000px', display: 'grid', placeContent: 'center' }}>What's cracking</div>
    </>
  );
}
