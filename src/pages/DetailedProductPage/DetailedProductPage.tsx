import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography, useMediaQuery } from '@mui/material';
import { useCallback, useState } from 'react';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { ImageLoad } from '@/components/ImageLoad/ImageLoad';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { useDetailedProduct } from '@/pages/DetailedProductPage/useDetailedProduct.ts/useDetailedProduct';
import { ImgCarousel } from '@/components/ImgCarousel/ImgCarousel';
import { Title } from '@/components/typography/Title/Title';
import { CardPrice } from '@/components/CardPrice/CardPrice';
import { Discount } from '@/components/Discount/Discount';
import { MEDIA_TABLET } from '@/data/constants';

import styles from './DetailedProductPage.module.scss';

export function DetailedProductPage(): React.ReactNode {
  //  TODO categories
  // const { categories } = useContext(ECommerceContext);
  const isMatchesMedia = useMediaQuery(`(max-width:${MEDIA_TABLET}px)`);
  const { productData, isLoading, error } = useDetailedProduct();
  const [open, setOpen] = useState(false);
  const [imgNum, setImgNum] = useState(0);

  const handleOpen = useCallback(
    (num: number) => (): void => {
      console.log(imgNum);
      setImgNum(num);
      setOpen(true);
    },
    []
  );
  const handleClose = (): void => setOpen(false);

  const createImages = (classObj: string, onClick?: (num: number) => () => void): React.ReactNode[] =>
    productData.images.map((imageData, index) => (
      <ImageLoad
        key={imageData.url}
        src={imageData.url}
        alt={productData.name}
        className={`${classObj} ${styles.imgContainer}`}
        imgStyles={styles.img}
        onClick={onClick ? onClick(index) : (): void => {}}
      />
    ));

  return (
    <LoadingFetch error={error} isLoading={isLoading} skeleton={<PageSkeleton />}>
      <Box className={styles.pageContainer}>
        <Box className={styles.headerContainer}>
          <ImgCarousel className={styles.carouselMedium} customDots={createImages(styles.imgContainerSmall)}>
            {createImages(styles.imgContainerMedium, handleOpen)}
          </ImgCarousel>
          {!isMatchesMedia && (
            <Box className={styles.productData}>
              <Discount discount={productData.discount} className={styles.discount} />
              <Title>{productData.name}</Title>
              <CardPrice
                price={productData.price}
                discount={productData.discount}
                discounted={productData.discounted}
              />
            </Box>
          )}
        </Box>
        <Box>
          {isMatchesMedia && (
            <Box className={styles.productData}>
              <Discount discount={productData.discount} className={styles.discount} />
              <Title>{productData.name}</Title>
              <CardPrice
                price={productData.price}
                discount={productData.discount}
                discounted={productData.discounted}
              />
            </Box>
          )}
          <Typography>
            <b> &emsp;Description: </b>
            {productData.description}
          </Typography>
        </Box>
        <Modal open={open} onClose={handleClose} className={styles.modalContainer}>
          <Box className={styles.modalBody}>
            <IconButton className={styles.modalClose} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <ImgCarousel arrows className={styles.carouselLarge} openModalImg={imgNum}>
              {createImages(styles.imgContainerLarge)}
            </ImgCarousel>
          </Box>
        </Modal>
      </Box>
    </LoadingFetch>
  );
}
