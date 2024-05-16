import styles from './RegistrationPage.module.scss';
import Form from '@/components/ui/forms/registrationForm';
// interface IProps {}

export function RegistrationPage(/* props: IProps */): JSX.Element {
  return (
    <div className={styles.registration}>
      <h2>Registration Page</h2>
      <Form />
    </div>
  );
}
