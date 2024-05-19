import styles from './RegistrationPage.module.scss';
import RegistrationForm from '@/features/AuthorizationForms/RegistrationForm/RegistrationForm';
// interface IProps {}

export function RegistrationPage(/* props: IProps */): JSX.Element {
  return (
    <div className={styles.registration}>
      <h2>Registration Page</h2>
      <RegistrationForm />
    </div>
  );
}
