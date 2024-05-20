import Lottie from 'react-lottie';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import animation404 from '@/assets/animation/animation404.json';

import * as styles from './ErrorPage.mui';
import { TextWithIcon } from '@/components/TextWithIcon';
import { ROUTES } from '@/data/enum/routes.enum';

export function ErrorPage(): JSX.Element {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation404,
    renderer: 'svg'
  };

  return (
    <Box minHeight="80vh" sx={styles.container}>
      <Lottie options={defaultOptions} height={500} width={500} />
      <ButtonGroup variant="contained">
        <Button sx={styles.button} onClick={() => navigate(-1)}>
          <TextWithIcon icon={<ArrowBackIosIcon fontSize="small" />}>Go back</TextWithIcon>
        </Button>
        <Button sx={styles.button} onClick={() => navigate(ROUTES.MAIN)}>
          <TextWithIcon isAfter icon={<ArrowForwardIosIcon fontSize="small" />}>
            Go main
          </TextWithIcon>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
