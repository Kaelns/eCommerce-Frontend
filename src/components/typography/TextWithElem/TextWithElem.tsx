import { Box, Typography } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

import styles from './TextWithElem.module.scss';
import { ITextWithElemProps } from '@/components/typography/TextWithElem/TextWithElem.interface';

export function TextWithElem({
  icon,
  children,
  className = '',
  isAfter = false
}: PropsWithChildren<ITextWithElemProps>): React.ReactNode {
  return (
    <Box className={styles.container}>
      {!isAfter && icon}
      <Typography className={`${styles.text} ${className}`}>{children}</Typography>
      {isAfter && icon}
    </Box>
  );
}
