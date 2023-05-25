import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  return (
    <div>
      <input
        className="border border-black bg-black text-white text-right"
        type="number"
        value={value}
        onChange={handleChange}
      />
      <div className="flex flex-row">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
      </div>
      <div className="flex flex-row">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
      </div>
      <div className="flex flex-row">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>
    </div>
  );
}

export default App;
