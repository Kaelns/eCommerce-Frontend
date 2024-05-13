import styles from './LoginPage.module.scss';
import Form from '@/components/ui/forms/loginForm';

// interface IProps {}

export function LoginPage(/* props: IProps */): JSX.Element {
  return (
    <div className={styles.login}>
      <h2>Login Page</h2>
      <Form />
    </div>
  );
}
