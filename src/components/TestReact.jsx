import { useState, useEffect } from 'react';

export default function TestReact() {

  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem('count');
    return stored ? parseInt(stored, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <div style={{ padding: '1rem', border: '2px solid #ccc', borderRadius: '8px' }}>
      <h2>React mit Speicher!</h2>
      <p className='text-red-500'> Du hast <strong>{count}</strong> Mal geklickt.</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '0.5rem 1rem',
          background: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Klick mich
      </button>
    </div>
  );
}
