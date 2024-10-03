import { MyCustomerChangePassword } from '@commercetools/platform-sdk';
import { apiClient } from '@/services/api/ApiClient';
import { logoutUser } from '@/services/api/model/user/logoutUser';
import { loginUser } from '@/services/api/model/user/loginUser';

export async function updateUserPassword(
  body: MyCustomerChangePassword,
  email: string,
  newPassword: string
): Promise<void> {
  await apiClient.getApiRootToken().me().password().post({ body }).execute();
  // TODO Check this part
  await logoutUser();
  await loginUser(email, newPassword);
}
