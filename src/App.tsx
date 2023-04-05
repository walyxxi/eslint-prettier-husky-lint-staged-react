import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <div style={{ width: 500, height: 300 }}>
        <div>Count: {count}</div>
        <button onClick={() => setCount(curr => curr + 1)}>Count</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default App;
