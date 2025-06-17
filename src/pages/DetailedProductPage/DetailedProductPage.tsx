import type { SxStylesMap } from '@/shared/model/types';

import { useCallback } from 'react';
import { IconButton } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, useTheme, useMediaQuery } from '@mui/system';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { createImagesArr } from '@/pages/DetailedProductPage/lib/createImages';
import { ScaledImageModal } from '@/pages/DetailedProductPage/ui/layout/ScaledImageModal';
import { DetailedProductInfo } from '@/pages/DetailedProductPage/ui/layout/DetailedProductInfo';
import { setIsOpenScaledImageModalAction } from '@/pages/DetailedProductPage/model/detailedProductPage.slice';

import { selectLanguage } from '@/entities/user';
import { useGetProductByKeyQuery } from '@/entities/product';
import { convertToLightProduct } from '@/entities/product/lib/helpers/objects/convertToLightProduct';

import { Slider, setInitSlideAction } from '@/features/Slider';

import { TitleText } from '@/shared/ui/elements';
import { ExpandableText, SuspenseWithError } from '@/shared/ui/components';
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

  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 1.5,
    width: 1
  },

  headerSliderContainer: {
    width: { zero: 1, tablet: '65%' }
  },

  productInfoContainer: (theme) => ({
    position: 'relative',

    [theme.breakpoints.down('tablet')]: {
      width: '45%',
      float: 'left',
      pr: 2
    },

    [theme.breakpoints.down(500)]: {
      width: 1,
      float: 'none',
      pr: 0,
      pb: 2
    }
  }),

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
        <Box sx={sxStyles.headerContainer}>
          <Slider
            customDots={createImagesArr({
              height: 100,
              srcArr: productSrcArr,
              alt: productName,
              srcSetArr: SRCSET,
              sxContainer: [{ width: 130 }, sxStyles.sliderImgContainer]
            })}
            sx={sxStyles.headerSliderContainer}
          >
            {createImagesArr({
              height: 300,
              srcArr: productSrcArr,
              alt: productName,
              srcSetArr: SRCSET,
              onClick: handleOpenWithStartSlideModal,
              sxContainer: sxStyles.sliderImgContainer
            })}
          </Slider>
          {!isMatchesDownTablet && <DetailedProductInfo productData={productData} sx={sxStyles.productInfoContainer} />}
        </Box>

        <Box>
          {isMatchesDownTablet && <DetailedProductInfo productData={productData} sx={sxStyles.productInfoContainer} />}
          {/* Big whitespace */}
          <TitleText variant="h4">Description:</TitleText>
          <ExpandableText description={productData?.description?.[language] ?? ''} maxLength={300} />
        </Box>

        <ScaledImageModal>
          <Stack direction="row" alignItems="center" justifyContent="center" sx={sxStyles.modalBody}>
            <Slider sliderId={SCALED_IMAGE_MODAL_SLIDER_ID} isShowArrows>
              {createImagesArr({
                height: { zero: '40vh', tablet: '65vh', laptop: '85vh' },
                srcArr: productSrcArr,
                alt: productName,
                srcSetArr: SRCSET,
                sxContainer: sxStyles.modalScaledImageContainer
              })}
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
