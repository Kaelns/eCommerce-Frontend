import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { ImageLoad } from '@/components/ImageLoad/ImageLoad';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { useDetailedProduct } from '@/pages/DetailedProductPage/useDetailedProduct.ts/useDetailedProduct';
import { ImgCarousel } from '@/components/ImgCarousel/ImgCarousel';
import { Title } from '@/components/typography/Title/Title';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';

import styles from './DetailedProductPage.module.scss';
import { Discount } from '@/components/Discount/Discount';

export function DetailedProductPage(): React.ReactNode {
  const { categories } = useContext(ECommerceContext);
  const { productData, isLoading, error } = useDetailedProduct();

  const createImages = (classObj: string): React.ReactNode[] =>
    productData.images.map((imageData) => (
      <ImageLoad
        key={imageData.url}
        src={imageData.url}
        alt={productData.name}
        className={`${classObj} ${styles.imgContainer}`}
        imgStyles={styles.img}
      />
    ));

  return (
    <LoadingFetch error={error} isLoading={isLoading} skeleton={<PageSkeleton />}>
      <Box className={styles.pageContainer}>
        <Box className={styles.headerContainer}>
          <ImgCarousel className={styles.carouselMedium} customDots={createImages(styles.imgContainerSmall)}>
            {createImages(styles.imgContainerMedium)}
          </ImgCarousel>
          <Box className={styles.productData}>
            <Discount discount={productData.discount} className={styles.discount} />
            <Title>{productData.name}</Title>
            <CardPrice price={productData.price} discount={productData.discount} discounted={productData.discounted} />
          </Box>
        </Box>
        <Typography>
          <b> &emsp;Description: </b>
          {productData.description}
        </Typography>
      </Box>
    </LoadingFetch>
  );
}
