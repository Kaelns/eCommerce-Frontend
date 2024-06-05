import Slider from 'react-slick';
import { useRef } from 'react';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { IAdditionalSettings, IImgCarousel } from '@/components/ImgCarousel/data/ImgCarousel.interface';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftArrow } from '@/components/ImgCarousel/components/LeftArrow';
import { RightArrow } from '@/components/ImgCarousel/components/RightArrow';
import { appendDots, customDot } from '@/components/ImgCarousel/data/ImgCarousel.helpers';

import styles from './ImgCarousel.module.scss';

const settings = {
  infinite: false,
  draggable: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <LeftArrow classes={styles.leftArrow} />,
  prevArrow: <RightArrow classes={styles.rightArrow} />
};

export function ImgCarousel({
  children,
  customDots = [],
  className = '',
  arrows = false,
  openModalImg = 0
}: PropsWithChildren<IImgCarousel>): React.ReactNode {
  const sliderRef = useRef<Slider>(null);
  const additionalSettings: IAdditionalSettings = {};

  if (customDots.length) {
    additionalSettings.customPaging = customDot(customDots, sliderRef);
    additionalSettings.appendDots = appendDots;
  }

  return (
    <Slider
      ref={sliderRef}
      arrows={arrows}
      dots={!arrows}
      {...settings}
      {...additionalSettings}
      initialSlide={openModalImg}
      className={`${className} ${styles.carousel}`}
    >
      {children}
    </Slider>
  );
}
