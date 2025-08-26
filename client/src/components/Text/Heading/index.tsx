import React from "react";

type HeadingProps = {
  label: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  onClick?: () => void;
};

const Heading = ({ label, level, className, onClick }: HeadingProps) => {
  const Tag = `h${level}` as React.ElementType;
  return (
    <Tag className={`heading level-${level} ${className}`} onClick={onClick}>
      {label}
    </Tag>
  );
};

export default Heading;
