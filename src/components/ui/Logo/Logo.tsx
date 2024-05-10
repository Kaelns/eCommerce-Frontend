import styles from './Logo.module.scss';
import LogoSVG from '@/assets/react.svg?react';

const SIZE = 35;

interface IProps {
  px?: number;
}

export function Logo({ px = SIZE }: IProps): JSX.Element {
  return <LogoSVG className={styles.logo} width={`${px}px`} height={`${px}px`} />;
}
