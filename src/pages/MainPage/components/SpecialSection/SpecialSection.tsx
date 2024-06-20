import { Box, Paper } from '@mui/material';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { ClickToClipboard } from '@/components/ClickToClipboard/ClickToClipboard';

import styles from './SpecialSection.module.scss';

export function SpecialSection(): React.ReactNode {
  return (
    <Box component="section" className={styles.specialSection}>
      <Paper className={`${styles.paper1} ${styles.paper}`} elevation={5}>
        <TextBold>Our special offer:</TextBold>
      </Paper>
      <ClickToClipboard className={styles.paper2} text="minus10" />
      <ClickToClipboard className={styles.paper2} text="minus15" />
    </Box>
  );
}
