import { Severity } from '@/shared/constants';
import { IBasketProducts } from '@/shared/types';
import { BasketState, IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';

export function setPrevBasketOnError(
  showAlert: (message: string, severity: Severity) => void,
  dispatchBasketProducts: (value: IBasketAction) => void,
  errorMessage: string,
  prevBasketProd: IBasketProducts
): void {
  showAlert(errorMessage, Severity.ERROR);
  dispatchBasketProducts({
    type: BasketState.SET_BASKET,
    payload: { id: '', value: prevBasketProd }
  });
}
