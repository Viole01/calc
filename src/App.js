import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  return (
    <div>
      <input value={value} onChange={handleChange} />
    </div>
  );
}

export default App;
