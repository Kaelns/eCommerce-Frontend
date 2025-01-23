import type { SxStyles } from '@/shared/types/types';
import { Stack } from '@mui/system';
import { Paths } from '@/shared/data/constants';
import { router } from '@/app';
import { ContainedBtn } from '@/components/buttons/ContainedBtn';
import { Box, Typography } from '@mui/material';
import { TitleTypography } from '@/components/typography/TitleTypography';
import { revealAnimation, hideAnimation } from '@/shared/data/mui-animations';
import furnitureImg from '@/shared/assets/furniture.webp';

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
  const navigateCatalog = () => router.navigate(Paths.CATALOG);
  return (
    <Stack component="section" direction="row" sx={sxStyles.root}>
      <Box sx={[sxStyles.imgBackdrop, sxStyles.imgShared]} />
      <Box component="img" src={furnitureImg} alt="furniture" sx={[sxStyles.img, sxStyles.imgShared]} />
      <Stack gap={1.5} alignSelf="center" justifySelf="flex-start" sx={sxStyles.textContainer}>
        <TitleTypography variant="h1" color="white">
          Radiocommerce
        </TitleTypography>
        <TitleTypography variant="h2" color="white">
          All sort of high-quality furniture available here
        </TitleTypography>
        <Typography variant="body2" color="white">
          Take a look around and choose what you like.Trust me, you won&apos;t regret it. Besides, we have a lot of discounts!
        </Typography>
        <ContainedBtn color="primary" onClick={navigateCatalog} sx={sxStyles.btn}>
          Go to catalog
        </ContainedBtn>
      </Stack>
    </Stack>
  );
}
