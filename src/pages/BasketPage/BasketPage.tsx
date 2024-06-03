import { Title } from '@/components/typography/Title/Title';
import styles from './BasketPage.module.scss';

// interface IProps {}

export function BasketPage(/* props: IProps */): React.ReactNode {
  return <Title className={styles.basket}>Basket Page</Title>;
}
