import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Lottie from 'react-lottie';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import animation404 from '@/assets/animation/animation404.json';
import { ROUTES } from '@/data/enum/routes.enum';
import { TextWithBeforeOrAfter } from '@/components/TextWithBeforeOrAfter';

import styles from './ErrorPage.module.scss';

export function ErrorPage(): JSX.Element {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation404,
    renderer: 'svg'
  };

  return (
    <Box minHeight="80vh" className={styles.container}>
      <Lottie options={defaultOptions} height={500} width={500} />
      <ButtonGroup variant="contained">
        <Button className={styles.button} onClick={() => navigate(-1)}>
          <TextWithBeforeOrAfter icon={<ArrowBackIosIcon fontSize="small" />}>Go back</TextWithBeforeOrAfter>
        </Button>
        <Button className={styles.button} onClick={() => navigate(ROUTES.MAIN)}>
          <TextWithBeforeOrAfter isAfter icon={<ArrowForwardIosIcon fontSize="small" />}>
            Go main
          </TextWithBeforeOrAfter>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
