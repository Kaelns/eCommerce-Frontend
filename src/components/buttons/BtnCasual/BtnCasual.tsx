import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { ButtonVariant } from '@/components/buttons/ButtonCustom/ButtonCustom.enum';

import styles from './BtnCasual.module.scss';

export function BtnCasual({
  children,
  variant = ButtonVariant.TEXT,
  className = '',
  ...props
}: PropsWithChildren<ButtonProps>): React.ReactNode {
  return (
    <Button variant={variant} className={`${className} ${styles.btn}`} {...props}>
      {children}
    </Button>
  );
}
