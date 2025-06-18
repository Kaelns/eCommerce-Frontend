import type { SxStylesMap } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import furnitureImg from '@/pages/MainPage/assets/furniture.webp';

import { Text, TitleText, ContainedBtn } from '@/shared/ui/elements';
import { sxMixins, hideAnimation, revealAnimation } from '@/shared/lib/mui';
import { Paths } from '@/shared/model/data';

const sxStyles: SxStylesMap = {
  btn: {
    alignSelf: 'flex-start',
    bgcolor: 'Alert.infoColor'
  },
  img: {
    animation: `${revealAnimation} 2s ease-out`,
    animationFillMode: 'forwards',
    borderRadius: 1,
    objectFit: 'cover',
    zIndex: 1
  },
  imgBackdrop: {
    animation: `${hideAnimation} 2s ease-out`,
    animationFillMode: 'forwards',
    backdropFilter: 'blur(10px)',
    bgcolor: 'Alert.infoColor',
    zIndex: 2
  },
  imgShared: {
    height: 1,
    inset: 0,
    position: 'absolute',
    width: 1
  },
  root: {
    backdropFilter: 'blur(10px)',
    bgcolor: 'Alert.infoColor',
    borderRadius: 1,

    height: { tablet: 700, zero: 500 },
    position: 'relative'
  },
  textContainer: {
    maxWidth: { tablet: 0.6, zero: 0.8 },
    p: 2,
    position: 'relative',
    zIndex: 3
  }
};

export function MainSection() {
  const navigate = useNavigate();
  const navigateCatalog = () => navigate(Paths.CATALOG);

  return (
    <Stack component="section" direction="row" sx={sxStyles.root}>
      <Box sx={[sxStyles.imgBackdrop, sxMixins.opacity1, sxStyles.imgShared]} />
      <Box alt="furniture" component="img" src={furnitureImg} sx={[sxStyles.img, sxMixins.opacity0, sxStyles.imgShared]} />
      <Stack alignSelf="center" gap={1.5} justifySelf="flex-start" sx={sxStyles.textContainer}>
        <TitleText color="white" variant="h1">
          Radiocommerce
        </TitleText>
        <TitleText color="white" variant="h2">
          All sort of high-quality furniture available here
        </TitleText>
        <Text color="white" variant="body2">
          Take a look around and choose what you like.Trust me, you won&apos;t regret it. Besides, we have a lot of discounts!
        </Text>
        <ContainedBtn color="primary" onClick={navigateCatalog} sx={sxStyles.btn}>
          Go to catalog
        </ContainedBtn>
      </Stack>
    </Stack>
  );
}
