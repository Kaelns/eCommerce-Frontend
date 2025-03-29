import { memo } from 'react';
import { Chip } from '@mui/material';

import { deletePromocodeFromCart } from '@/pages/CartPage/ui/widgets/CartPromocode/lib/thunks/deletePromocodeFromCart';

import { selectCartDiscountCodesRefs } from '@/entities/cart';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

export const ChipPromocodeList = memo(function ChipPromocodeList() {
  const dispatch = useAppDispatch();

  const discountCodesRefs = useAppSelector(selectCartDiscountCodesRefs);

  const handleDelete = (id: string) => () => {
    dispatch(deletePromocodeFromCart(id));
  };

  return (
    <>
      {discountCodesRefs.map((discountCodesRef) => {
        const label = discountCodesRef.obj?.code ?? 'Unknown';

        return <Chip key={discountCodesRef.id} label={label} onDelete={handleDelete(discountCodesRef.id)} />;
      })}
    </>
  );
});
