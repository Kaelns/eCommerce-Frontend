import { useState, useEffect } from 'react';

import { useAlert } from '@/features/alert';

import { AlertSeverity } from '@/shared/data/enums';

interface IUseAddToBasket {
  isInCart: boolean;
  isDisabled: boolean;
  addToBasket: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export function useAddToBasketBtn(productId: string, initLineItemId: string | undefined): IUseAddToBasket {
  const [isInCart, setIsInCart] = useState(false);
  // const [lineItemId, setLineItemId] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const { showAlert } = useAlert();

  useEffect(() => {
    if (initLineItemId) {
      setIsInCart(true);
      // setLineItemId(initLineItemId);
    }
  }, [initLineItemId]);

  const addToBasket = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();

    if (!isDisabled) {
      setIsDisabled(true);
      // const { error, lineItemId: newLineItemId } = isInCart
      //   ? await manageCartCatch(ManageCart.DECREMENT, lineItemId, token)
      //   : await manageCartCatch(ManageCart.INCREMENT, productId, token);
      // if (error) {
      showAlert('No', AlertSeverity.ERROR);
      // } else {
      //   setIsInCart((prev) => !prev);
      //   setLineItemId(newLineItemId);
      // }
      setIsDisabled(false);
    }
  };

  return { isInCart, isDisabled, addToBasket };
}
