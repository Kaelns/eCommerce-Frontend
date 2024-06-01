import { Button } from '@mui/material';
import { ILinkProps } from '@/components/LinkBtn/LinkBtn.interface';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

import styles from './LinkBtn.module.scss';

export function LinkBtn({ navigateTo, children }: PropsWithChildren<ILinkProps>): React.ReactNode {
  return (
    <Button variant="text" onClick={navigateTo} className={styles.link}>
      {children}
    </Button>
  );
}
