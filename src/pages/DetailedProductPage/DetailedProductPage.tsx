import type { SxStyles } from '@/shared/model/types';

import { useCallback } from 'react';
import { IconButton } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, useTheme, useMediaQuery } from '@mui/system';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { createImagesArr } from '@/pages/DetailedProductPage/lib/createImages';
import { ScaledImageModal } from '@/pages/DetailedProductPage/ui/ScaledImageModal';
import { DetailedProductHead } from '@/pages/DetailedProductPage/ui/DetailedProductHead';
import { setIsOpenScaledImageModalAction } from '@/pages/DetailedProductPage/model/detailedProductPage.slice';

import { selectLanguage } from '@/entities/user';
import { useGetProductByKeyQuery } from '@/entities/product';
import { useGetCategoriesQuery } from '@/entities/categories';
import { convertToLightProduct } from '@/entities/product/lib/helpers/objects/convertToLightProduct';

import { ImgCarousel } from '@/features/ImgCarousel/index.ts';

import { BoldText } from '@/shared/ui/elements';
import { ImgList, ExpandableText, SuspenseWithError } from '@/shared/ui/components';
import { sxMixins } from '@/shared/lib/mui';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

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

export function DetailedProductPage() {
  const { productKey } = useLoaderData<{ productKey: string }>();

  const theme = useTheme();
  const dispatch = useAppDispatch();

  const language = useAppSelector(selectLanguage);
  const isMatchesDownTablet = useMediaQuery(theme.breakpoints.down('tablet'));

  const { data, isLoading, isError, error } = useGetProductByKeyQuery(productKey);
  const {
    data: categoriesData,
    error: categoriesError,
    isError: isCategoriesError,
    isLoading: isCategoriesLoading
  } = useGetCategoriesQuery();

  const productData = convertToLightProduct(data);
  const productName = productData.name[language];
  const productSrcArr = productData.images.map((img) => img.url);

  const categoriesObj = categoriesData?.categoriesObj;
  const categoriesNames = categoriesObj ? productData.categoriesIdArr.map((id) => categoriesObj[id].name[language]) : [];

  const handleCloseModal = () => dispatch(setIsOpenScaledImageModalAction(false));
  const handleOpenWithImgNumModal = useCallback(() => {
    dispatch(setIsOpenScaledImageModalAction(true));
  }, [dispatch]);

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
  //         containerStyles={[sxStyles.imgContainer, ...convertSxToArr(containerStyles)]}
  //         srcset={{ srcSetArr: SRCSET_API, maxSize }}
  //         onClick={onClick ? onClick(index) : undefined}
  //       />
  //     ));
  //   },
  //   [productData]
  // );

  return (
    <SuspenseWithError
      isLoading={isLoading || isCategoriesLoading}
      isError={isError || isCategoriesError}
      error={getErrorMessage(error ?? categoriesError)}
    >
      <Stack flexDirection={{ zero: 'column-reverse', tablet: 'column' }} gap={1.5}>
        <Stack direction="row" justifyContent="space-between" gap={1.5}>
          <ImgCarousel
            width={{ zero: 1, tablet: '65%' }}
            customDots={createImagesArr({
              srcArr: productSrcArr,
              height: 100,
              alt: productName,
              sxContainer: { width: 130, ...sxStyles.imgContainer }
            })}
          >
            <ImgList height={300} srcArr={productSrcArr} alt={productName} sx={sxStyles.imgContainer} />
          </ImgCarousel>
          {!isMatchesDownTablet && <DetailedProductHead productData={productData} categoriesNames={categoriesNames} />}
        </Stack>

        <Box>
          {isMatchesDownTablet && <DetailedProductHead productData={productData} categoriesNames={categoriesNames} />}
          {/* Big whitespace */}
          <BoldText>&emsp;Description:</BoldText>
          <ExpandableText description={productData?.description?.[language] ?? ''} />
        </Box>

        <ScaledImageModal>
          <Stack direction="row" alignItems="center" justifyContent="center" sx={sxStyles.modalBody}>
            <IconButton onClick={handleCloseModal} sx={sxStyles.closeIcon}>
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
