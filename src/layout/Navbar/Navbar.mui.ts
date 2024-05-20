import { palette } from '@/data/theme/colors.constants';

export const horizontalButton = {
  alignItems: 'flex-start !important'
};

export const resetTextTransform = {
  textTransform: 'none'
};

export const buttonClasses = {
  ...resetTextTransform,
  transition: 'all 0.5s ease-out',
  borderRadius: 1,

  '&:hover': {
    backgroundColor: palette.primary.hover
  }
};
