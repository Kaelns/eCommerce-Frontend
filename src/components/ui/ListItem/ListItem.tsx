import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps extends React.LiHTMLAttributes<HTMLLIElement> {}

export function ListItem({ className = '', children, ...props }: PropsWithChildren<IProps>): JSX.Element {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
}
