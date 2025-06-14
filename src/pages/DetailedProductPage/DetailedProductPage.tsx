import type { SxStylesMap } from '@/shared/model/types';

import { useCallback } from 'react';
import { IconButton } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, useTheme, useMediaQuery } from '@mui/system';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { createImagesArr } from '@/pages/DetailedProductPage/lib/createImages';
import { ScaledImageModal } from '@/pages/DetailedProductPage/ui/layout/ScaledImageModal';
import { DetailedProductHead } from '@/pages/DetailedProductPage/ui/layout/DetailedProductHead';
import { setIsOpenScaledImageModalAction } from '@/pages/DetailedProductPage/model/detailedProductPage.slice';

import { selectLanguage } from '@/entities/user';
import { useGetProductByKeyQuery } from '@/entities/product';
import { convertToLightProduct } from '@/entities/product/lib/helpers/objects/convertToLightProduct';

import { Slider, setInitSlideAction } from '@/features/Slider';

import { BoldText } from '@/shared/ui/elements';
import { ImgList, ExpandableText, SuspenseWithError } from '@/shared/ui/components';
import { sxMixins } from '@/shared/lib/mui';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { SRCSET, ZIndex } from '@/shared/model/data';

const SCALED_IMAGE_MODAL_SLIDER_ID = 'scaledImageModal';

const sxStyles = {
  modalBody: {
    position: 'relative',
    width: '93%',
    height: { zero: '54%', tablet: '80%', laptop: '93%' },
    padding: 1,
    borderRadius: 1,
    bgcolor: 'common.background'
  },

  sliderImgContainer: {
    position: 'relative',
    borderRadius: 1,
    cursor: 'pointer',
    overflow: 'hidden',
    ...sxMixins.mediaHover({ transform: 'scale(1.05)' }, '> img')
  },

  modalCloseIconBtn: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 0,
    right: 0,
    zIndex: ZIndex.BUTTON,
    transform: { zero: 'translate(25%, -25%)', tablet: 'translate(50%, -50%)' },
    bgcolor: 'primary.main',
    ...sxMixins.mediaHover({ bgcolor: 'primary.light' })
  },

  modalScaledImageContainer: {
    height: { zero: '40vh', tablet: '65vh', laptop: '85vh' }
  }
} satisfies SxStylesMap;

export function DetailedProductPage() {
  const { productKey } = useLoaderData<{ productKey: string }>();

  const theme = useTheme();
  const dispatch = useAppDispatch();

  const language = useAppSelector(selectLanguage);
  const isMatchesDownTablet = useMediaQuery(theme.breakpoints.down('tablet'));

  const { data, isLoading, isError, error } = useGetProductByKeyQuery(productKey);

  const productData = convertToLightProduct(data);
  const productName = productData.name[language];
  const productSrcArr = productData.images.map((img) => img.url);

  const handleCloseModal = () => {
    dispatch(setIsOpenScaledImageModalAction(false));
  };

  const handleOpenWithStartSlideModal = useCallback(
    (slide: number) => () => {
      dispatch(setInitSlideAction({ sliderId: SCALED_IMAGE_MODAL_SLIDER_ID, slide }));
      dispatch(setIsOpenScaledImageModalAction(true));
    },
    [dispatch]
  );

  return (
    <SuspenseWithError isLoading={isLoading} isError={isError} error={getErrorMessage(error)}>
      <Stack flexDirection={{ zero: 'column-reverse', tablet: 'column' }} gap={1.5}>
        <Stack direction="row" justifyContent="space-between" gap={1.5}>
          <Slider
            width={{ zero: 1, tablet: '65%' }}
            customDots={createImagesArr({
              srcArr: productSrcArr,
              height: 100,
              alt: productName,
              srcSetArr: SRCSET,
              sxContainer: [{ width: 130 }, sxStyles.sliderImgContainer]
            })}
          >
            <ImgList
              imgHeight={300}
              srcArr={productSrcArr}
              alt={productName}
              srcSetArr={SRCSET}
              onClick={handleOpenWithStartSlideModal}
              sxImgContainer={sxStyles.sliderImgContainer}
            />
          </Slider>
          {!isMatchesDownTablet && <DetailedProductHead productData={productData} />}
        </Stack>

        <Box>
          {isMatchesDownTablet && <DetailedProductHead productData={productData} />}
          {/* Big whitespace */}
          <BoldText>&emsp;Description:</BoldText>
          <ExpandableText description={productData?.description?.[language] ?? ''} />
        </Box>

        <ScaledImageModal>
          <Stack direction="row" alignItems="center" justifyContent="center" sx={sxStyles.modalBody}>
            <Slider sliderId={SCALED_IMAGE_MODAL_SLIDER_ID} isShowArrows>
              <ImgList srcArr={productSrcArr} alt={productName} sxImgContainer={sxStyles.modalScaledImageContainer} />
            </Slider>

            {/* Position absolute */}
            <IconButton onClick={handleCloseModal} sx={sxStyles.modalCloseIconBtn}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </ScaledImageModal>
      </Stack>
    </SuspenseWithError>
  );
}

// <LoadingFetch error={error} isLoading={isLoading} Skeleton={PageSkeleton}>
//   <Stack gap={1.5} flexDirection={{ zero: 'column-reverse', tablet: 'column' }}>
//     <Stack direction="row" justifyContent="space-between" gap={1.5}>
//       <ImgCarousel
//         width={{ zero: 1, tablet: '65%' }}
//         customDots={createImages({ imgHeight: { height: 100 }, containerStyles: { width: 130 } })}
//       >
//         {createImages({ imgHeight: { height: 300 } }, handleOpen)}
//       </ImgCarousel>
//       {!isMatchesMedia && <ProductHead productData={productData} categoriesNames={categoriesNames} />}
//     </Stack>

//     <Box>
//       {isMatchesMedia && <ProductHead productData={productData} categoriesNames={categoriesNames} />}
//       <Typography>
//         <b> &emsp;Description: </b>
//         {productData.description}
//       </Typography>
//     </Box>

//     <Modal open={open} onClose={handleClose} sx={sxStyles.modal}>
//       <Stack direction="row" alignItems="center" justifyContent="center" sx={sxStyles.modalBody}>
//         <IconButton onClick={handleClose} sx={sxStyles.closeIcon}>
//           <CloseIcon />
//         </IconButton>
//         <ImgCarousel arrows openModalImg={imgNum}>
//           {createImages({
//             imgHeight: { height: { zero: '40vh', tablet: '65vh', laptop: '85vh' }, maxSize: 'unlimited' }
//           })}
//         </ImgCarousel>
//       </Stack>
//     </Modal>
//   </Stack>
// </LoadingFetch>

// const [open, setOpen] = useState(false);
// const [imgNum, setImgNum] = useState(0);
// const handleClose = (): void => setOpen(false);
// const handleOpen = useCallback(
//   (num: number) => (): void => {
//     setImgNum(num);
//     setOpen(true);
//   },
//   []
// );

// const createImages = useCallback(
//   <T extends StackProps['height']>(
//     { imgHeight, imgStyles = {}, containerStyles = {} }: ICreateImagesStyles<T>,
//     onClick?: (num: number) => () => void
//   ) => {
//     const maxSize = imgHeight && 'maxSize' in imgHeight ? imgHeight.maxSize : undefined;
//     return productData.images.map((imageData, index) => (
//       <ImgLoad
//         key={imageData.url}
//         src={imageData.url}
//         alt={productData.name}
//         height={imgHeight?.height}
//         sx={imgStyles}
//         containerStyles={concatSx(sxStyles.imgContainer, containerStyles)}
//         srcset={{ srcSetArr: SRCSET_API, maxSize }}
//         onClick={onClick ? onClick(index) : undefined}
//       />
//     ));
//   },
//   [productData]
// );
