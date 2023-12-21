import { Button } from '@mui/material';
import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

const BLButton: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  className = '',
  children,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
    </Button>
  );
};

export default BLButton;
