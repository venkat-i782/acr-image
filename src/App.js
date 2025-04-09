import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the counter
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React App for Testing</h1>
        
        {/* Display current counter */}
        <h2>Current Counter: {counter}</h2>
        
        {/* Button to increment the counter */}
        <button onClick={incrementCounter}>Increment Counter</button>
      </header>
    </div>
  );
}

export default App;
