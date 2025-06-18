import type { SxStylesMap } from '@/shared/model/types';

import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Box, Button, ButtonGroup } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { TitleText } from '@/shared/ui/elements';

import { Paths } from '@/shared/model/data';

const sxStyles: SxStylesMap = {
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
  message?: string;
  goTo?: { path: Paths; text: string };
}

export function AppError({ src, alt, message, goTo = { path: Paths.MAIN, text: 'Go main' } }: AppErrorProps) {
  const navigate = useNavigate();
  const navigateTo = () => navigate(goTo.path);
  const navigateBack = () => navigate(-1);

  return (
    <Stack minHeight="80vh" justifyContent="center" alignItems="center" gap={3}>
      <Box component="img" src={src} alt={alt} sx={sxStyles.img} />
      {message && <TitleText variant="h2">{message}</TitleText>}
      <ButtonGroup variant="contained" sx={sxStyles.btnGroup}>
        <Button onClick={navigateBack} startIcon={<ArrowBackIosIcon fontSize="small" />} sx={sxStyles.btn}>
          Go back
        </Button>
        <Button onClick={navigateTo} endIcon={<ArrowForwardIosIcon fontSize="small" />} sx={sxStyles.btn}>
          {goTo.text}
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
