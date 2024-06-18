import { useState, useContext, useEffect } from 'react';
import { Severity } from '@/components/AlertText/AlertText.interface';
import { AlertTextContext } from '@/context/AlertTextContext/AlertTextContext';
import { manageCartCatch } from '@/services/helpers/cartHelpers/manageCart/manageCartCatch';
import { ManageCart } from '@/services/helpers/cartHelpers/manageCart/manageCart.interface';
import { IUseAddToBasket } from '@/components/buttons/AddToBasketBtn/AddToBasketBtn.interface';

export function useAddToBasketBtn(productId: string, initLineItemId: string): IUseAddToBasket {
  const [isInCart, setIsInCart] = useState(false);
  const [lineItemId, setLineItemId] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const { handleOpenAlert } = useContext(AlertTextContext);

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
        ? await manageCartCatch(ManageCart.DELETE, lineItemId)
        : await manageCartCatch(ManageCart.ADD, productId);
      if (error) {
        handleOpenAlert(error, Severity.ERROR);
      } else {
        setIsInCart((prev) => !prev);
        setLineItemId(newLineItemId);
      }
      setIsDisabled(false);
    }
  };

  return { isInCart, isDisabled, addToBasket };
}
