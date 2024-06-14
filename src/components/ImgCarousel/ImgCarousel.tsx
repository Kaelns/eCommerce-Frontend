import Slider from 'react-slick';
import { useMemo, useRef } from 'react';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { IAdditionalSettings, IImgCarousel } from '@/components/ImgCarousel/data/ImgCarousel.interface';
import { LeftArrow } from '@/components/ImgCarousel/components/LeftArrow';
import { RightArrow } from '@/components/ImgCarousel/components/RightArrow';
import { appendDots, customDot } from '@/components/ImgCarousel/data/ImgCarousel.helpers';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './ImgCarousel.module.scss';

const settings = {
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <RightArrow classes={styles.rightArrow} />,
  prevArrow: <LeftArrow classes={styles.leftArrow} />
};

export function ImgCarousel({
  children,
  customDots = [],
  className = '',
  arrows = false,
  openModalImg = 0
}: PropsWithChildren<IImgCarousel>): React.ReactNode {
  const sliderRef = useRef<Slider>(null);

  const additionalSettings: IAdditionalSettings = useMemo(() => {
    const settingsObj: IAdditionalSettings = {};
    if (customDots.length) {
      settingsObj.customPaging = customDot(customDots, sliderRef);
      settingsObj.appendDots = appendDots;
    }
    return settingsObj;
  }, [customDots]);

  return (
    <Slider
      ref={sliderRef}
      arrows={arrows}
      dots={!arrows}
      draggable={!arrows}
      {...settings}
      {...additionalSettings}
      initialSlide={openModalImg}
      className={`${className} ${styles.carousel}`}
    >
      {children}
    </Slider>
  );
}
