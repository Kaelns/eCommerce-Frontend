import { AlertSeverity } from '@/shared/data/enums';
import type { CartProducts } from '@/shared/types/types';

// FIXME delete
export function setPrevBasketOnError(
  showAlert: (message: string, severity: AlertSeverity) => void,
  dispatchBasketProducts: (value: IBasketAction) => void,
  errorMessage: string,
  prevBasketProd: CartProducts
): void {
  showAlert(errorMessage, AlertSeverity.ERROR);
  dispatchBasketProducts({
    type: BasketState.SET_BASKET,
    payload: { id: '', value: prevBasketProd }
  });
}
