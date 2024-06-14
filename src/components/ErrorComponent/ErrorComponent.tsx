import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { TextWithElem } from '@/components/typography/TextWithElem/TextWithElem';
import { IErrorProps } from '@/components/ErrorComponent/ErrorComponent.interface';
import { Title } from '@/components/typography/Title/Title';

import styles from './ErrorComponent.module.scss';

export function ErrorComponent({ src, alt, message }: IErrorProps): React.ReactNode {
  const navigate = useNavigate();
  const navigateBack = (): void => navigate(-1);
  const navigateMain = (): void => navigate(ROUTES.MAIN);

  return (
    <Box className={styles.container}>
      <Box component="img" src={src} alt={alt} className={styles.image} />

      {message && <Title>{message}</Title>}
      <ButtonGroup variant="contained">
        <Button className={styles.button} onClick={navigateBack}>
          <TextWithElem icon={<ArrowBackIosIcon fontSize="small" />}>Go back</TextWithElem>
        </Button>
        <Button className={styles.button} onClick={navigateMain}>
          <TextWithElem isAfter icon={<ArrowForwardIosIcon fontSize="small" />}>
            Go main
          </TextWithElem>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
