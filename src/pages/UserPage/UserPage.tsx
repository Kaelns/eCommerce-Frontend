import { Title } from '@/components/typography/Title/Title';
import styles from './UserPage.module.scss';
import UserProfile from '@/features/UserProfile/UserProfile';

export function UserPage(): React.ReactNode {
  return (
    <>
      <Title className={styles.user}>User Profile Page</Title>
      <UserProfile />
    </>
  );
}
