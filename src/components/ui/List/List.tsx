import { ReactNode } from 'react';

interface IProps<T> {
  items: T[];
  className?: string;
  renderItem: (item: T) => ReactNode;
}
export function List<T>({ items, className = '', renderItem }: IProps<T>): JSX.Element {
  return <ul className={className}>{items.map(renderItem)}</ul>;
}
