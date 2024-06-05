import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IArrows } from '@/components/ImgCarousel/data/ImgCarousel.interface';

export function RightArrow({ onClick, classes = '' }: IArrows): React.ReactNode {
  return (
    <IconButton onClick={onClick} className={classes}>
      <ArrowBackIosIcon fontSize="small" />
    </IconButton>
  );
}
