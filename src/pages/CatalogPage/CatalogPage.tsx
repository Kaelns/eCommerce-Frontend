import { Title } from '@/components/Title/Title';
import styles from './CatalogPage.module.scss';

// interface IProps {}

export function CatalogPage(/* props: IProps */): React.ReactNode {
  return <Title className={styles.catalog}>Catalog Page</Title>;
}
