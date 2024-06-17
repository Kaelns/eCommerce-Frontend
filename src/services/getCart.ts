import { eCommerceAPI } from '@/services/ECommerceAPI';

export async function getCart(): Promise<void> {
  try {
    const userToken = localStorage.getItem('Token');
    if (userToken) {
      await eCommerceAPI.getCart(userToken);
    } else {
      const anonToken = localStorage.getItem('AnonToken')!;
      await eCommerceAPI.getCart(anonToken);
    }
  } catch (err) {
    console.log(err);
  }
}
