import { ButtonProps } from '@mui/material';

export interface ILinkProps extends ButtonProps {
  navigateTo: () => void;
}
