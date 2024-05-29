import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { ButtonType, ButtonVariant } from '@/features/AuthorizationForms/components/ButtonCustom/ButtonCustom.enum';

interface IProps extends ButtonProps {}

export default function ButtonCustom({
  children,
  variant = ButtonVariant.CONTAINED,
  type = ButtonType.SUBMIT,
  ...props
}: PropsWithChildren<IProps>): React.ReactNode {
  return (
    <Button variant={variant} type={type} {...props}>
      {children}
    </Button>
  );
}
