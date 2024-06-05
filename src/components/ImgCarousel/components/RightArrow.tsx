import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IArrows } from '@/components/ImgCarousel/data/ImgCarousel.interface';

export function RightArrow({ onClick, classes = '' }: IArrows): React.ReactNode {
  return (
    <IconButton onClick={onClick} className={classes}>
      <ArrowForwardIosIcon fontSize="large" />
    </IconButton>
  );
}
