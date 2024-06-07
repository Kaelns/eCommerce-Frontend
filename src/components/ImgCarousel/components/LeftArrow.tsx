import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IArrows } from '@/components/ImgCarousel/data/ImgCarousel.interface';

export function LeftArrow({ onClick, classes = '' }: IArrows): React.ReactNode {
  return (
    <IconButton onClick={onClick} className={classes}>
      <ArrowBackIosNewIcon fontSize="large" />
    </IconButton>
  );
}
