import LoaderSVG from '@/assets/spin.svg?react';
import LogoSVG from '@/assets/react.svg?react';
import UserSVG from '@/assets/user.svg?react';
import BasketSVG from '@/assets/basket.svg?react';
import styles from './Icons.module.scss';
import { ICONS } from '@/components/Icons/Icons.enum';

const SIZE = 4;

interface IProps {
  icon?: ICONS;
  rem?: number;
}

export function Icons({ icon = ICONS.LOGO, rem = SIZE }: IProps): JSX.Element {
  const size = `${rem}rem`;
  const props = { width: size, height: size };

  switch (icon) {
    case ICONS.LOADER:
      return <LoaderSVG className={styles.loader} {...props} />;
    case ICONS.USER:
      return <UserSVG className={styles.svg} {...props} />;
    case ICONS.BASKET:
      return <BasketSVG className={styles.svg} {...props} />;
    default:
      return <LogoSVG className={styles.svg} {...props} />;
  }
}
