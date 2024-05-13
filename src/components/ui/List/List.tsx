import { PropsWithChildren } from '@/data/types/PropsWithChildren';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {}

export function List({ className = '', children }: PropsWithChildren<IProps>): JSX.Element {
  return <ul className={className}>{children}</ul>;
}
