import { eCommerceAPI } from '@/services/ECommerceAPI';

export async function addToCart(productId: string): Promise<void> {
  try {
    const userToken = localStorage.getItem('Token');
    if (userToken) {
      await eCommerceAPI.getCart(userToken).then(async (res) => {
        if (res.body.count === 0) {
          await eCommerceAPI.createCart(userToken).then(async (data) => {
            console.log(data);
            await eCommerceAPI.updateCart(userToken, data.body.id, productId, data.body.version);
          });
        } else {
          const cartId = await res.body.results[res.body.results.length - 1].id;
          const version = await res.body.results[res.body.results.length - 1].version;
          await eCommerceAPI.updateCart(userToken, cartId, productId, version);
        }
      });
    } else {
      const anonToken = localStorage.getItem('AnonToken')!;
      await eCommerceAPI.getCart(anonToken).then(async (res) => {
        if (res.body.count === 0) {
          await eCommerceAPI.createCart(anonToken).then(async (result) => {
            console.log(result);
            localStorage.setItem('anonymousCart', result.body.id);
            await eCommerceAPI.updateCart(anonToken, result.body.id, productId, result.body.version);
          });
        } else {
          const cartId = await res.body.results[0].id;
          const version = await res.body.results[0].version;
          await eCommerceAPI.updateCart(anonToken, cartId, productId, version);
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
}
