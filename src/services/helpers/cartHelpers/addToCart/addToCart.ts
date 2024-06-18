import { eCommerceAPI } from '@/services/ECommerceAPI';
import { getToken } from '@/services/helpers/cartHelpers/getToken';

export async function addToCart(productId: string): Promise<void> {
  try {
    const token = getToken();
    const currentCart = await eCommerceAPI.getCart(token);
    // await eCommerceAPI.deleteCart(token, currentCart.id, currentCart.version);
    console.log(currentCart);
    let id;
    let version;

    if (currentCart) {
      id = currentCart.id;
      version = currentCart.version;
    } else {
      const response = await eCommerceAPI.createCart(token);
      id = response.id;
      version = response.version;
    }

    await eCommerceAPI.updateCart(token, id, productId, version);
  } catch (err) {
    console.log(err);
  }
}
