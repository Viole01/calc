const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`text-4xl h-14 text-gray border bg-[#503cd1] m-2 border-black w-20 rounded cursor-pointer hover:border-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
