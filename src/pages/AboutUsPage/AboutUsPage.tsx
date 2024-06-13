import { Title } from '@/components/typography/Title/Title';
import styles from './AboutUsPage.module.scss';
import AboutUs from '@/features/AboutUs/AboutUs';

export function AboutUsPage(): React.ReactNode {
  return (
    <>
      <Title className={styles['about-us']}>About Us Page</Title>
      <AboutUs />
    </>
  );
}
