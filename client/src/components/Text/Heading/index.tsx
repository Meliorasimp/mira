import React from "react";

type HeadingProps = {
  label: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const Heading = ({ label, level, className }: HeadingProps) => {
  const Tag = `h${level}` as React.ElementType;
  return <Tag className={`heading level-${level} ${className}`}>{label}</Tag>;
};

export default Heading;
