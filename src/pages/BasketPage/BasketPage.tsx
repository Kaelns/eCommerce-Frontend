import { Title } from '@/components/typography/Title/Title';
import styles from './BasketPage.module.scss';
import { getCart } from '@/services/helpers/cartHelpers/getCart';

// interface IProps {}

export function BasketPage(/* props: IProps */): React.ReactNode {
  getCart();
  return <Title className={styles.basket}>Basket Page</Title>;
}
