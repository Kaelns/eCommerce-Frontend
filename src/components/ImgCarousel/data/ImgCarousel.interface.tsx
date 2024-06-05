import { ButtonProps } from '@mui/material';

export interface IImgCarousel {
  className?: string;
  customDots?: React.ReactNode[];
  arrows?: boolean;
}

export interface IArrows extends ButtonProps {
  classes?: string;
}

export interface IAdditionalSettings {
  customPaging?: (index: number) => JSX.Element;
  appendDots?: (dots: React.ReactNode) => JSX.Element;
}
