const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`text-6xl text-gray border bg-gray-400 hover:bg-gray-600 border-black w-16 rounded cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
