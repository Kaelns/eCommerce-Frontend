import type { SxProps } from '@mui/material';

import { Badge, IconButton, badgeClasses } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { selectCartProductQuantity } from '@/entities/cart/model/cart.slice';

import { LinkAbsoluteWrapper } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';
import { Paths, BADGE_FONT_SIZE } from '@/shared/model/data';

const sxBadge: SxProps = {
  [`& .${badgeClasses.badge}`]: {
    fontSize: BADGE_FONT_SIZE
  }
};

export function CartLinkIconBtn() {
  const productQuantity = useAppSelector(selectCartProductQuantity);

  return (
    <IconButton sx={{ position: 'relative' }}>
      <LinkAbsoluteWrapper to={Paths.CART} />
      <Badge badgeContent={productQuantity} color="primary" sx={sxBadge}>
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
