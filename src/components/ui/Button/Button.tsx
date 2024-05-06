import { ComponentPropsWithChildren } from '@/data/types/ComponentPropsWithChildren';
import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className = '', children, ...props }: ComponentPropsWithChildren<IProps>): JSX.Element {
  return (
    <button className={`${styles.button} ${className}`} type="button" {...props}>
      {children}
    </button>
  );
}
