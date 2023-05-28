const Calculator = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col py-16 w-3/6">
      {children}
    </div>
  );
};

export default Calculator;
