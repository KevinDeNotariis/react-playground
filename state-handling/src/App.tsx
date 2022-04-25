import './App.css';
import { useState, useEffect } from 'react';

import { Text, Sign, Counter } from './components';

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((curr) => curr + 1);
  };

  const decrementCounter = () => {
    setCounter((curr) => curr - 1);
  };

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div className="App">
      <Sign sign="+" handler={incrementCounter} />
      <Text>
        <Counter value={counter} />
      </Text>
      <Sign sign="-" handler={decrementCounter} />
    </div>
  );
};

export default App;
