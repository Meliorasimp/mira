type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={`py-2 px-4 rounded ${className}`}>
      {label}
    </button>
  );
}

export default Button;
