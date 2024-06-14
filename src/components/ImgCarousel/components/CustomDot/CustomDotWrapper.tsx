import { Box } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { ICustomDotWrapperProps } from '@/components/ImgCarousel/components/CustomDot/CustomDotWrapper.interface';

export function CustomDotWrapper({
  children,
  index,
  sliderRef
}: PropsWithChildren<ICustomDotWrapperProps>): JSX.Element {
  return (
    <Box onClick={() => sliderRef.current?.slickGoTo(index)} className="slick__dot">
      {children}
    </Box>
  );
}
