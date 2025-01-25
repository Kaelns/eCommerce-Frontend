import { useState, useContext, useEffect } from 'react';
import { useToken } from '@/services/hooks/useToken';
import { manageCartCatch } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch';
import { ManageCart } from '@/services/%%%BADhelpers/cartHelpers/manageCartCatch/manageCartCatch.interface';
import { Severity } from '@/shared/data/constants';
import { useAlert } from '@/features/alert';

interface IUseAddToBasket {
  isInCart: boolean;
  isDisabled: boolean;
  addToBasket: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export function useAddToBasketBtn(productId: string, initLineItemId: string): IUseAddToBasket {
  const token = useToken();
  const [isInCart, setIsInCart] = useState(false);
  const [lineItemId, setLineItemId] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const { showAlert } = useAlert();

  useEffect(() => {
    if (initLineItemId) {
      setIsInCart(true);
      setLineItemId(initLineItemId);
    }
  }, [initLineItemId]);

  const addToBasket = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();

    if (!isDisabled) {
      setIsDisabled(true);
      const { error, lineItemId: newLineItemId } = isInCart
        ? await manageCartCatch(ManageCart.DECREMENT, lineItemId, token)
        : await manageCartCatch(ManageCart.INCREMENT, productId, token);
      if (error) {
        showAlert(error, Severity.ERROR);
      } else {
        setIsInCart((prev) => !prev);
        setLineItemId(newLineItemId);
      }
      setIsDisabled(false);
    }
  };

  return { isInCart, isDisabled, addToBasket };
}
