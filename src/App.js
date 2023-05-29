import { useState } from 'react';
import Calculator from './components/Calculator';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

function App() {
  const [value, setValue] = useState(0);

  const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  const renderedBtnValues = btnValues.map((row, i) => (
    <div className="flex justify-center" key={i}>
      {row.map((num, i) => (
        <div key={i}>
          <Button
            className={num === '=' ? 'w-[11rem] bg-[#f33d1d]' : ''}
            onClick={() => {
              console.log(`${num} clicked!`);
            }}
          >
            {num}
          </Button>
        </div>
      ))}
    </div>
  ));

  return (
    <Calculator>
      <Screen value={value} />
      <div className="w-full">
        <ButtonBox>{renderedBtnValues}</ButtonBox>
      </div>
    </Calculator>
  );
}

export default App;
