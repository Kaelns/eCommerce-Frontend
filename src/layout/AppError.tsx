import type { SxStyles } from '@/shared/types/types';

import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Box, Button, ButtonGroup } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { TitleTypography } from '@/components/typography/TitleTypography';

import { Paths } from '@/shared/data/enums';

const sxStyles: SxStyles = {
  btn: {
    flex: 1,
    textWrap: 'nowrap',
    textTransform: 'none',
    bgcolor: 'Alert.infoColor'
  },
  btnGroup: {
    display: 'flex'
  },
  img: {
    display: 'block',
    width: 1,
    maxWidth: 500
  }
};

interface AppErrorProps {
  src: string;
  alt: string;
  goTo?: Paths;
  message?: string;
  goToText?: string;
}

export function AppError({ src, alt, message, goTo = Paths.MAIN, goToText = 'Go main' }: AppErrorProps): React.ReactNode {
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);
  const navigateTo = () => navigate(goTo);

  return (
    <Stack minHeight="80vh" justifyContent="center" alignItems="center" gap={3}>
      <Box component="img" src={src} alt={alt} sx={sxStyles.img} />
      {message && <TitleTypography>{message}</TitleTypography>}
      <ButtonGroup variant="contained" sx={sxStyles.btnGroup}>
        <Button onClick={navigateBack} startIcon={<ArrowBackIosIcon fontSize="small" />} sx={sxStyles.btn}>
          Go back
        </Button>
        <Button onClick={navigateTo} endIcon={<ArrowForwardIosIcon fontSize="small" />} sx={sxStyles.btn}>
          {goToText}
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
