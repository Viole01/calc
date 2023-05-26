import { useState } from 'react';
import Calculator from './components/Calculator';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

function App() {
  const [value, setValue] = useState(0);

  const btnValues = [
    ['C', '%', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  // const renderedBtnValues = btnValues.map(row => {
  //   const renderedBtns = row.map((num, i) => {
  //     return (
  //       <Button
  //         className={num === '=' ? 'w-24' : ''}
  //         onClick={num => handleClick(num)}
  //         key={i}
  //       >
  //         {num}
  //       </Button>
  //     );
  //   });

  //   return <div>{renderedBtns}</div>;
  // });

  const renderedBtnValues = btnValues.map((row, i) => (
    <div className="flex justify-center" key={i}>
      {row.map((num, j) => (
        <div className="flex flex-row" key={j}>
          <div className={num === 'C' ? 'w-24' : ''}>
            <Button onClick={num => setValue(num)}>{num}</Button>
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <Calculator>
      <Screen value={value} />
      <div>
        <ButtonBox>{renderedBtnValues}</ButtonBox>
      </div>
    </Calculator>
  );
}

export default App;
