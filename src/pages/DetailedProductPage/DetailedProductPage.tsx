import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography, useMediaQuery } from '@mui/material';
import { useCallback, useContext, useMemo, useState } from 'react';
import { LoadingFetch } from '@/components/LoadingFetch/LoadingFetch';
import { useDetailedProduct } from '@/pages/DetailedProductPage/useDetailedProduct.ts/useDetailedProduct';
import { ImgCarousel } from '@/components/ImgCarousel/ImgCarousel';
import { MEDIA_TABLET } from '@/data/constants';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { findInCategories } from '@/services/helpers/findInCategories';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { ProductHead } from '@/pages/DetailedProductPage/components/ProductHead/ProductHead';
import { LANGUAGE } from '@/services/ECommerceInitApi.constants';
import { createImagesCallback } from '@/pages/DetailedProductPage/helpers/createImages';

import styles from './DetailedProductPage.module.scss';

export function DetailedProductPage(): React.ReactNode {
  const { categories } = useContext(ECommerceContext);
  const isMatchesMedia = useMediaQuery(`(max-width:${MEDIA_TABLET}px)`);
  const { productData, isLoading, error } = useDetailedProduct();
  const [open, setOpen] = useState(false);
  const [imgNum, setImgNum] = useState(0);

  const categoriesNames = useMemo(
    () => findInCategories(categories, productData.categoriesIdArr, true).map((obj) => obj.name[LANGUAGE]),
    [categories, productData.categoriesIdArr]
  );

  const handleOpen = useCallback(
    (num: number) => (): void => {
      setImgNum(num);
      setOpen(true);
    },
    []
  );
  const handleClose = (): void => setOpen(false);

  const createImages = useCallback(
    (classObj: string, onClick?: (num: number) => () => void) =>
      createImagesCallback(productData, styles.imgContainer, styles.img)(classObj, onClick),
    [productData]
  );

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton}>
      <Box className={styles.pageContainer}>
        <Box className={styles.headerContainer}>
          <ImgCarousel className={styles.carouselMedium} customDots={createImages(styles.imgContainerSmall)}>
            {createImages(styles.imgContainerMedium, handleOpen)}
          </ImgCarousel>
          {!isMatchesMedia && <ProductHead productData={productData} categoriesNames={categoriesNames} />}
        </Box>
        <Box>
          {isMatchesMedia && <ProductHead productData={productData} categoriesNames={categoriesNames} />}
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
