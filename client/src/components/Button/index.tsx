type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

function Button({ label, onClick, className, disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
