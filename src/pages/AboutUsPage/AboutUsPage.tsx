import { Title } from '@/components/typography/Title/Title';
import styles from './AboutUsPage.module.scss';

// interface IProps {}

export function AboutUsPage(/* props: IProps */): React.ReactNode {
  return <Title className={styles['about-us']}>About Us Page</Title>;
}
