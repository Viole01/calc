import { useState } from 'react';
import Calculator from './components/Calculator';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

function App() {
  const [num, setNum] = useState(0);
  const [res, setRes] = useState(0);

  const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  const calculate = btn => {
    btn === '='
      ? equalClickHandler(btn)
      : btn === '+-'
      ? invertClickHandler(btn)
      : btn === 'C'
      ? resetClickHandler(btn)
      : btn === '%'
      ? percentClickHandler(btn)
      : btn === '+' || btn === '-' || btn === 'X' || btn === '/'
      ? signClickHandler(btn)
      : btn === '.'
      ? dotClickHandler(btn)
      : numClickHander(btn);
  };

  const numClickHander = e => {
    const value = e.target.innerHTML;

    if (num === 0) {
      setNum(value);
      toString(num);
    } else {
      setNum(num + value);
    }
  };

  const equalClickHandler = e => {};

  const invertClickHandler = e => {};

  const resetClickHandler = e => {};

  const signClickHandler = e => {};

  const percentClickHandler = e => {};

  const dotClickHandler = e => {};

  const renderedBtnValues = btnValues.map((row, i) => (
    <div className="flex justify-center" key={i}>
      {row.map((btn, i) => (
        <Button
          className={btn === '=' ? 'w-[11rem] bg-[#f33d1d]' : ''}
          onClick={btn => calculate(btn)}
          key={i}
        >
          {btn}
        </Button>
      ))}
    </div>
  ));

  return (
    <Calculator>
      <Screen value={num} />
      <div className="w-full flex justify-center">
        <ButtonBox>{renderedBtnValues}</ButtonBox>
      </div>
    </Calculator>
  );
}

export default App;
