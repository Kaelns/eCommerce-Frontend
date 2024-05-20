import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

import styles from './TextWithElBeforeOrAfter.module.scss';

interface IProps {
  icon: JSX.Element;
  isAfter?: boolean;
}

export function TextWithElBeforeOrAfter({ icon, children, isAfter = false }: PropsWithChildren<IProps>): JSX.Element {
  return (
    <Box className={styles.container}>
      {!isAfter && icon}
      <Typography>{children}</Typography>
      {isAfter && icon}
    </Box>
  );
}
