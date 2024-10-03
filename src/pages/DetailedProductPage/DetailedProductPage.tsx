import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useContext, useMemo, useState } from 'react';
import { Stack } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingFetch } from '@/components/LoadingFetch';
import { ImgCarousel } from '@/components/ImgCarousel';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { findInCategories } from '@/services/helpers/findInCategories';
import { ProductHead } from '@/pages/DetailedProductPage/components/ProductHead';
import { LANGUAGE } from '@/services/ECommerceInitApi.constants';
import { ICreateImagesStyles, createImagesMap } from '@/pages/DetailedProductPage/DetailedProductPage.helpers';
import { SxPropsNotArr, SxStyles } from '@/shared/types';
import { Paths } from '@/shared/constants';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { sxMixins } from '@/features/MuiTheme/mixins';
import { convertToLightProduct } from '@/services/helpers/convertToLightProduct';
import { getProductByKeyApi } from '@/services/model/products/getProductByKeyApi';
import { PageSkeleton } from '@/components/skeleton/PageSkeleton';

const sxStyles: SxStyles = {
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBody: {
    position: 'relative',
    width: '93%',
    height: { zero: '54%', tablet: '80%', laptop: '93%' },
    padding: 1,
    borderRadius: 1,
    bgcolor: 'common.background'
  },
  imgSmall: {
    height: 100,
    width: 130
  },
  imgMedium: {
    height: 300
  },
  imgLarge: {
    height: { zero: '40vh', tablet: '65vh', laptop: '85vh' }
  },
  imgContainer: {
    position: 'relative',
    height: 300,
    borderRadius: 1,
    cursor: 'pointer',
    overflow: 'hidden',
    ...sxMixins.mediaHover(
      {
        transform: 'scale(1.05)'
      },
      '> img'
    )
  },
  closeIcon: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 0,
    right: 0,
    zIndex: 100,
    transform: { zero: 'translate(25%, -25%)', tablet: 'translate(50%, -50%)' },
    bgcolor: 'primary.main',
    ...sxMixins.mediaHover({
      bgcolor: 'primary.light'
    })
  }
};

export function DetailedProductPage(): React.ReactNode {
  const { id: key } = useParams();
  const navigate = useNavigate();
  if (!key) {
    navigate(Paths.ERROR);
  }

  const { data, isLoading, error } = useFetch(getProductByKeyApi, key!);
  const { categories } = useContext(ECommerceContext);
  const productData = useMemo(() => convertToLightProduct(data), [data]);
  // TODO change on categoriesObj
  const categoriesNames = useMemo(
    () => findInCategories(categories, productData.categoriesIdArr, true).map((obj) => obj.name[LANGUAGE]),
    [categories, productData.categoriesIdArr]
  );

  const theme = useTheme();
  const isMatchesMedia = useMediaQuery(theme.breakpoints.down('tablet'));

  const [open, setOpen] = useState(false);
  const [imgNum, setImgNum] = useState(0);
  const handleClose = (): void => setOpen(false);
  const handleOpen = useCallback(
    (num: number) => (): void => {
      setImgNum(num);
      setOpen(true);
    },
    []
  );

  const createImages = useCallback(
    (containerSize: SxPropsNotArr, onClick?: (num: number) => () => void) => {
      const stylesObj: ICreateImagesStyles = {
        containerStyles: [sxStyles.imgContainer, containerSize as object]
      };
      return createImagesMap(productData, stylesObj, onClick);
    },
    [productData]
  );

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton}>
      <Stack gap={1.5} flexDirection={{ zero: 'column-reverse', tablet: 'column' }}>
        <Stack direction="row" justifyContent="space-between" gap={1.5}>
          <ImgCarousel width={{ zero: 1, tablet: '65%' }} customDots={createImages(sxStyles.imgSmall)}>
            {createImages(sxStyles.imgMedium, handleOpen)}
          </ImgCarousel>
          {!isMatchesMedia && <ProductHead productData={productData} categoriesNames={categoriesNames} />}
        </Stack>

        <Box>
          {isMatchesMedia && <ProductHead productData={productData} categoriesNames={categoriesNames} />}
          <Typography>
            <b> &emsp;Description: </b>
            {productData.description}
          </Typography>
        </Box>

        <Modal open={open} onClose={handleClose} sx={sxStyles.modal}>
          <Stack direction="row" alignItems="center" justifyContent="center" sx={sxStyles.modalBody}>
            <IconButton onClick={handleClose} sx={sxStyles.closeIcon}>
              <CloseIcon />
            </IconButton>
            <ImgCarousel arrows openModalImg={imgNum}>
              {createImages(sxStyles.imgLarge)}
            </ImgCarousel>
          </Stack>
        </Modal>
      </Stack>
    </LoadingFetch>
  );
}
