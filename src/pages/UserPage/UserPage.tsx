import { Title } from '@/components/ui/Title';
import styles from './UserPage.module.scss';

// interface IProps {}

export function UserPage(/* props: IProps */): JSX.Element {
  return <Title className={styles.user}>User Page</Title>;
}
