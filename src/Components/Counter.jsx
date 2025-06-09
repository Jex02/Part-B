import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+ Increase</button>
      <button onClick={() => setCount(count - 1)}>- Decrease</button>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f1f8e9',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '10px auto',
    maxWidth: '300px',
  }
};

export default Counter;
