import type {} from '@mui/material/themeCssVarsAugmentation';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { Paths } from '@/shared/constants';
import { Title } from '@/components/typography/Title';
import { hideAnimation, revealAnimation } from '@/shared/constants';
import furnitureImg from '@/assets/furniture.webp';
import { SxStyles } from '@/shared/types';
import { BtnContained } from '@/components/buttons/BtnContained';

const sxStyles: SxStyles = {
  root: {
    position: 'relative',
    height: { zero: 500, tablet: 700 },
    bgcolor: 'Alert.infoColor',
    backdropFilter: 'blur(10px)',
    borderRadius: 1
  },
  img: {
    objectFit: 'cover',
    zIndex: 1,
    animation: `${revealAnimation} 2s ease-out`,
    animationFillMode: 'forwards',
    borderRadius: 1
  },
  imgBackdrop: {
    zIndex: 2,
    animation: `${hideAnimation} 2s ease-out`,
    animationFillMode: 'forwards',
    bgcolor: 'Alert.infoColor',
    backdropFilter: 'blur(10px)'
  },
  imgShared: {
    width: 1,
    height: 1,
    position: 'absolute',
    inset: 0
  },
  textContainer: {
    maxWidth: { zero: 0.8, tablet: 0.6 },
    position: 'relative',
    zIndex: 3,
    p: 2
  },
  btn: {
    alignSelf: 'flex-start',
    bgcolor: 'Alert.infoColor'
  }
};

export function MainSection(): React.ReactNode {
  const navigate = useNavigate();
  const navigateCatalog = (): void => navigate(Paths.CATALOG);
  return (
    <Stack component="section" direction="row" sx={sxStyles.root}>
      <Box sx={[sxStyles.imgBackdrop, sxStyles.imgShared]} />
      <Box component="img" src={furnitureImg} alt="furniture" sx={[sxStyles.img, sxStyles.imgShared]} />
      <Stack gap={1.5} alignSelf="center" justifySelf="flex-start" sx={sxStyles.textContainer}>
        <Title variant="h1" color="white">
          Radiocommerce
        </Title>
        <Title variant="h2" color="white">
          All sort of high-quality furniture available here
        </Title>
        <Typography variant="body2" color="white">
          Take a look around and choose what you like.Trust me, you won&apos;t regret it. Besides, we have a lot of
          discounts!
        </Typography>
        <BtnContained color="primary" onClick={navigateCatalog} sx={sxStyles.btn}>
          Go to catalog
        </BtnContained>
      </Stack>
    </Stack>
  );
}
