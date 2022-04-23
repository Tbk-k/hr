import React from 'react';
import { StyledBtn } from './button.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const Button = () => (
  <StyledBtn>
    <DeleteIcon />
  </StyledBtn>
);

export default Button;
