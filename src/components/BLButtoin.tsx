import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  className = '',
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
