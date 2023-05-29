const Calculator = ({ children }) => {
  return (
    <div className="flex justify-center border rounded bg-[#485461] border-black items-center flex-col w-2/6">
      {children}
    </div>
  );
};

export default Calculator;
