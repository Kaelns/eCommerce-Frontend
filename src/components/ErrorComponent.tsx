import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { Paths } from '@/features/Router/Router.constants';
import { Title } from '@/components/typography/Title';
import { SxStyles } from '@/shared/types';

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

interface IErrorProps {
  src: string;
  alt: string;
  message?: string;
  goTo?: Paths;
  goToText?: string;
}

export function ErrorComponent({
  src,
  alt,
  message,
  goTo = Paths.MAIN,
  goToText = 'Go main'
}: IErrorProps): React.ReactNode {
  const navigate = useNavigate();
  const navigateBack = (): void => navigate(-1);
  const navigateTo = (): void => navigate(goTo);

  return (
    <Stack minHeight="80vh" justifyContent="center" alignItems="center" gap={3}>
      <Box component="img" src={src} alt={alt} sx={sxStyles.img} />
      {message && <Title>{message}</Title>}
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
