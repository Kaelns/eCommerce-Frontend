import Slider from 'react-slick';
import { CustomDotWrapper } from '@/components/ImgCarousel/components/CustomDot/CustomDotWrapper';
import { AppendDots } from '@/components/ImgCarousel/components/AppendDots/AppendDots';

export function customDot(customDots: React.ReactNode[], sliderRef: React.RefObject<Slider>) {
  return function CustomDot(index: number): JSX.Element {
    return (
      <CustomDotWrapper index={index} sliderRef={sliderRef}>
        {customDots[index]}
      </CustomDotWrapper>
    );
  };
}

export const appendDots = (dots: React.ReactNode): JSX.Element => <AppendDots>{dots}</AppendDots>;
