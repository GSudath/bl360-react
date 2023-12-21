import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectProps } from '@mui/material';

type Option = {
  id: number;
  name: string;
};

type ComboProps = {
  options: Option[];
  label: string;
} & SelectProps;

const Combo: React.FC<ComboProps> = ({ options, label, ...selectProps }) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select {...selectProps}>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Combo;
