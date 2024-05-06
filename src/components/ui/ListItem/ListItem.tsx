import { ComponentPropsWithChildren } from '@/data/types/ComponentPropsWithChildren';

interface IProps extends React.LiHTMLAttributes<HTMLLIElement> {
  key: number | string;
  className?: string;
}
export function ListItem({ key, className = '', children, ...props }: ComponentPropsWithChildren<IProps>): JSX.Element {
  return (
    <li key={key} className={className} {...props}>
      {children}
    </li>
  );
}
