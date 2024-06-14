import { CustomBox } from '@/components/ImgCarousel/components/CustomBox';
import { sxCustomBox } from '@/components/ImgCarousel/data/ImgCarousel.constants';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';

import styles from './AppendDots.module.scss';

export function AppendDots({ children }: PropsWithChildren): JSX.Element {
  return (
    <CustomBox classes={styles.dotsContainer} sx={sxCustomBox}>
      {children}
    </CustomBox>
  );
}
