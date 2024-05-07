import { ComponentPropsWithChildren } from '@/data/types/ComponentPropsWithChildren';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {}

export function List({ className = '', children }: ComponentPropsWithChildren<IProps>): JSX.Element {
  return <ul className={className}>{children}</ul>;
}
