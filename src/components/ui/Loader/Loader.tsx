import styles from './Loader.module.scss';
import SpinSVG from '@/assets/spin.svg?react';

const SIZE = 50;

interface IProps {
  px?: number;
}

export function Loader({ px = SIZE }: IProps): JSX.Element {
  return <SpinSVG className={styles.svg} width={`${px}px`} height={`${px}px`} />;
}
