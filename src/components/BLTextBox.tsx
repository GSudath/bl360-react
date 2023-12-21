import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type CustomTextBoxProps = TextFieldProps & {
  label: string;
};

const TextBox: React.FC<CustomTextBoxProps> = ({ label, ...rest }) => {
  return (
    <TextField
      label={label}
      {...rest}
      // Add more customization as needed, for instance:
      variant="outlined" // Or use any other variant
      fullWidth // Take up full width
    />
  );
};

export default TextBox;
