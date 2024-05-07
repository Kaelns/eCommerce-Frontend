import { ComponentPropsWithChildren } from '@/data/types/ComponentPropsWithChildren';

interface IProps extends React.LiHTMLAttributes<HTMLLIElement> {}

export function ListItem({ className = '', children, ...props }: ComponentPropsWithChildren<IProps>): JSX.Element {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
}
