import { Severity } from '@/components/AlertText/AlertText.interface';
import { IBasketProducts } from '@/pages/BasketPage/data/BasketPage.interface';
import { BasketState, IBasketAction } from '@/pages/BasketPage/hooks/useBasketReducer/useBasketReducer.interface';

export function setPrevBasketOnError(
  handleOpenAlert: (message: string, severity: Severity) => void,
  dispatchBasketProducts: (value: IBasketAction) => void,
  errorMessage: string,
  prevBasketProd: IBasketProducts
): void {
  handleOpenAlert(errorMessage, Severity.ERROR);
  dispatchBasketProducts({
    type: BasketState.SET_BASKET,
    payload: { id: '', value: prevBasketProd }
  });
}
