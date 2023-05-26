const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`text-6xl text-gray border border-black rounded cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
