import { Severity } from '@/shared/data/constants';
import type { ICartProducts } from '@/shared/types/types';

export function setPrevBasketOnError(
  showAlert: (message: string, severity: Severity) => void,
  dispatchBasketProducts: (value: IBasketAction) => void,
  errorMessage: string,
  prevBasketProd: ICartProducts
): void {
  showAlert(errorMessage, Severity.ERROR);
  dispatchBasketProducts({
    type: BasketState.SET_BASKET,
    payload: { id: '', value: prevBasketProd }
  });
}
