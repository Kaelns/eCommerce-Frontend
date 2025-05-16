import type { SxStyles, SxStylesObj } from '@/shared/model/types';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { selectIsColorActiveForm } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

import { useAppSelector } from '@/shared/lib/redux';

const sxStyles: SxStyles = {
  colorBtn: {
    borderRadius: '100%',
    p: 1.8,
    outline: '3px solid #e0e0e0',
    border: '1px solid white'
  },
  colorBtnActive: {
    outlineColor: 'primary.main'
  },
  text: {
    fontWeight: 500
  }
};

const colorBtnBgcolor = (colorHex: string): SxStylesObj => ({
  bgcolor: colorHex,
  color: colorHex,
  '&:hover': {
    bgcolor: colorHex
  }
});

interface ColorBtnProps {
  colorKey: string;
  colorHex: string;
}

export function ColorBtn({ colorKey, colorHex }: ColorBtnProps) {
  const isColorSelected = useAppSelector((state) => selectIsColorActiveForm(state, colorKey));

  return (
    <>
      <Box sx={[sxStyles.colorBtn, colorBtnBgcolor(colorHex), isColorSelected && sxStyles.colorBtnActive]} />
      <Typography variant="caption" sx={sxStyles.text}>
        {colorKey}
      </Typography>
    </>
  );
}
