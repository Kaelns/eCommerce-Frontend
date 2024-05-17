import styles from './RegistrationPage.module.scss';
import RegistrationForm from '@/features/forms/registrationForm/registrationForm';
// interface IProps {}

export function RegistrationPage(/* props: IProps */): JSX.Element {
  return (
    <div className={styles.registration}>
      <h2>Registration Page</h2>
      <RegistrationForm />
    </div>
  );
}
