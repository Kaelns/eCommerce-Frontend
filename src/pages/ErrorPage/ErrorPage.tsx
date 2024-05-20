import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/data/enum/routes.enum';
import { TextWithElBeforeOrAfter } from '@/components/ui/TextWithElBeforeOrAfter/TextWithElBeforeOrAfter';

import styles from './ErrorPage.module.scss';

export function ErrorPage(): JSX.Element {
  const navigate = useNavigate();
  const navigateBack = -1;

  return (
    <Box className={styles.container}>
      <Box component="img" src="notFound.png" alt="404" className={styles.image} />
      <ButtonGroup variant="contained">
        <Button className={styles.button} onClick={() => navigate(navigateBack)}>
          <TextWithElBeforeOrAfter icon={<ArrowBackIosIcon fontSize="small" />}>Go back</TextWithElBeforeOrAfter>
        </Button>
        <Button className={styles.button} onClick={() => navigate(ROUTES.MAIN)}>
          <TextWithElBeforeOrAfter isAfter icon={<ArrowForwardIosIcon fontSize="small" />}>
            Go main
          </TextWithElBeforeOrAfter>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
