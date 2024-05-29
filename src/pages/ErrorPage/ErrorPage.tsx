import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { TextWithElem } from '@/components/TextWithElem/TextWithElem';
import imageNotFound from '@/assets/not-found.png';

import styles from './ErrorPage.module.scss';

export function ErrorPage(): React.ReactNode {
  const navigate = useNavigate();

  const navigateBack = (): void => navigate(-1);

  return (
    <Box className={styles.container}>
      <Box component="img" src={imageNotFound} alt="404" className={styles.image} />
      <ButtonGroup variant="contained">
        <Button className={styles.button} onClick={navigateBack}>
          <TextWithElem icon={<ArrowBackIosIcon fontSize="small" />}>Go back</TextWithElem>
        </Button>
        <Button className={styles.button} onClick={() => navigate(ROUTES.MAIN)}>
          <TextWithElem isAfter icon={<ArrowForwardIosIcon fontSize="small" />}>
            Go main
          </TextWithElem>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
