import { eCommerceAPI } from '@/services/ECommerceAPI';

export async function handleAuthentication(
  email: string,
  password: string,
  setAuthUserToken: (token: string) => void,
  setInputsError: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
): Promise<void> {
  try {
    const result = await eCommerceAPI.authenticateCustomer(email, password);
    console.log(result.body);
    setAuthUserToken('auth_is_ok');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    try {
      const { body } = await eCommerceAPI.returnCustomerByEmail(email);
      if (body!.results.length === 0) {
        console.log('This email address has not been registered.');
        setInputsError((prev) => ({ ...prev, email: 'This email address has not been registered.' }));
      } else {
        setInputsError((prev) => ({ ...prev, password: 'Wrong password' }));
        console.log('wrong password');
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }
}
