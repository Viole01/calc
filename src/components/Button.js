function Button({ children }) {
  return (
    <div>
      <button className="p-3 bg-gray-300 border border-gray">{children}</button>
    </div>
  );
}

export default Button;
