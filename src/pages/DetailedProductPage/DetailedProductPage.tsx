import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useContext, useMemo, useState } from 'react';
import { Stack, StackProps, SxProps, Theme } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingFetch } from '@/components/LoadingFetch';
import { ImgCarousel } from '@/components/ImgCarousel';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { findInCategories } from '@/services/helpers/findInCategories';
import { ProductHead } from '@/pages/DetailedProductPage/components/ProductHead';
import { LANGUAGE, SRCSET_API } from '@/services/ECommerceInitApi.constants';
import { SxStyles } from '@/shared/types';
import { Paths } from '@/shared/constants';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { sxMixins } from '@/features/MuiTheme/mixins';
import { convertToLightProduct } from '@/services/helpers/convertToLightProduct';
import { getProductByKeyApi } from '@/services/model/products/getProductByKeyApi';
import { PageSkeleton } from '@/components/skeleton/PageSkeleton';
import { ImgLoad } from '@/components/ImgLoad';
import { convertSxToArr } from '@/utils/convertSxToArr';

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
  imgContainer: {
    position: 'relative',
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

// FIXME Move that interface or leave here
interface ICreateImagesStyles<T extends StackProps['height'] = StackProps['height']> {
  imgHeight?: T extends number
    ? {
        height: T;
      }
    : {
        height: T;
        maxSize: number | 'unlimited';
      };
  imgStyles?: SxProps<Theme>;
  containerStyles?: SxProps<Theme>;
}

export function DetailedProductPage(): React.ReactNode {
  const { id: key } = useParams();
  const navigate = useNavigate();
  if (!key) {
    navigate(Paths.ERROR);
  }

  const { data, isLoading, error } = useFetch(getProductByKeyApi, key!);
  const { categories } = useContext(ECommerceContext);
  const productData = useMemo(() => convertToLightProduct(data), [data]);
  // TODO swap categories on categoriesObj
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
    <T extends StackProps['height']>(
      { imgHeight, imgStyles = {}, containerStyles = {} }: ICreateImagesStyles<T>,
      onClick?: (num: number) => () => void
    ) => {
      const maxSize = imgHeight && 'maxSize' in imgHeight ? imgHeight.maxSize : undefined;
      return productData.images.map((imageData, index) => (
        <ImgLoad
          key={imageData.url}
          src={imageData.url}
          alt={productData.name}
          height={imgHeight?.height}
          sx={imgStyles}
          containerStyles={[sxStyles.imgContainer, ...convertSxToArr(containerStyles)]}
          srcset={{ srcSetArr: SRCSET_API, maxSize }}
          onClick={onClick ? onClick(index) : undefined}
        />
      ));
    },
    [productData]
  );

  return (
    <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton}>
      <Stack gap={1.5} flexDirection={{ zero: 'column-reverse', tablet: 'column' }}>
        <Stack direction="row" justifyContent="space-between" gap={1.5}>
          <ImgCarousel
            width={{ zero: 1, tablet: '65%' }}
            customDots={createImages({ imgHeight: { height: 100 }, containerStyles: { width: 130 } })}
          >
            {createImages({ imgHeight: { height: 300 } }, handleOpen)}
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
              {createImages({
                imgHeight: { height: { zero: '40vh', tablet: '65vh', laptop: '85vh' }, maxSize: 'unlimited' }
              })}
            </ImgCarousel>
          </Stack>
        </Modal>
      </Stack>
    </LoadingFetch>
  );
}
