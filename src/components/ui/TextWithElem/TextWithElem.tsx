import { Box, Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

import styles from './TextWithElem.module.scss';

interface IProps extends TypographyProps {
  icon: JSX.Element;
  isAfter?: boolean;
}

export function TextWithElem({
  icon,
  children,
  className = '',
  isAfter = false
}: PropsWithChildren<IProps>): JSX.Element {
  return (
    <Box className={styles.container}>
      {!isAfter && icon}
      <Typography className={`${styles.text} ${className}`}>{children}</Typography>
      {isAfter && icon}
    </Box>
  );
}
