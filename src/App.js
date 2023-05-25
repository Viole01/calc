import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const renderedNumbers = numbers.map(number => <Button>{number}</Button>);

  return (
    <div>
      <input
        className="border border-black bg-black text-white text-right"
        type="number"
        value={value}
        onChange={handleChange}
      />
      <div>{renderedNumbers}</div>
    </div>
  );
}

export default App;
