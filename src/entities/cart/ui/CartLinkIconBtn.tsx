import type { SxStylesMap } from '@/shared/model/types';

import { Badge, IconButton, badgeClasses } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { selectCartProductQuantity } from '@/entities/cart/model/cart.slice';

import { LinkAbsoluteWrapper } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';
import { Paths, BADGE_FONT_SIZE } from '@/shared/model/data';

const sxStyles = {
  btn: {
    position: 'relative'
  },
  sxBadge: {
    [`& .${badgeClasses.badge}`]: {
      fontSize: BADGE_FONT_SIZE
    }
  }
} satisfies SxStylesMap;

export function CartLinkIconBtn() {
  const productQuantity = useAppSelector(selectCartProductQuantity);

  return (
    <IconButton sx={sxStyles.btn}>
      <LinkAbsoluteWrapper to={Paths.CART} />
      <Badge badgeContent={productQuantity} color="primary" sx={sxStyles.sxBadge}>
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
