import { eCommerceAPI } from '@/services/ECommerceAPI';
import { consoleWarnError } from '@/utils/consoleWarnError';

export async function handleAuthentication(
  email: string,
  password: string,
  reportError: (reason: 'email' | 'password', message: string) => void
): Promise<string | null> {
  // TODO middleware error
  const token = await eCommerceAPI.authenticateCustomer(email, password).catch(consoleWarnError);
  if (token) {
    return token;
  }
  const responce = await eCommerceAPI.returnCustomerByEmail(email).catch(consoleWarnError);
  if (responce && responce.body.results.length === 0) {
    reportError('email', 'This email address has not been registered');
  } else {
    reportError('password', 'Wrong password');
  }

  return null;
}

// export async function handleAuthentication(
//   email: string,
//   password: string,
//   setInputsError: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
// ): Promise<string | null> {
//   const token = await eCommerceAPI.authenticateCustomer(email, password).catch(consoleWarnError);
//   if (token) {
//     return token;
//   }
//   const responce = await eCommerceAPI.returnCustomerByEmail(email).catch(consoleWarnError);
//   if (responce && responce.body.results.length === 0) {
//     setInputsError((prev) => ({ ...prev, email: 'This email address has not been registered.' }));
//   } else {
//     setInputsError((prev) => ({ ...prev, password: 'Wrong password' }));
//   }

//   return null;
// }
