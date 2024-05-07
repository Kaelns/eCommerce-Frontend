import { ComponentPropsWithChildren } from '@/data/types/ComponentPropsWithChildren';
import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmit?: boolean;
}

export function Button({
  className = '',
  children,
  isSubmit = false,
  ...props
}: ComponentPropsWithChildren<IProps>): JSX.Element {
  return (
    <button className={`${styles.button} ${className}`} type={isSubmit ? 'submit' : 'button'} {...props}>
      {children}
    </button>
  );
}
