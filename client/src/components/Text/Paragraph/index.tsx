type ParagraphProps = {
  label: string;
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
};

const variantClasses: Record<ParagraphProps["variant"], string> = {
  primary: "primary-text text-lg",
  secondary: "secondary-text text-base",
  tertiary: "tertiary-text text-sm",
};

function Paragraph({ label, variant, className }: ParagraphProps) {
  return <p className={`${variantClasses[variant]} ${className}`}>{label}</p>;
}

export default Paragraph;
