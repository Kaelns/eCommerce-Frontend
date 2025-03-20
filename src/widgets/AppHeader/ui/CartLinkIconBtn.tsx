import type { SxProps } from '@mui/material';

import { Badge, IconButton, badgeClasses } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { selectCartProductQuantity } from '@/entities/cart';

import { LinkRouterWrapper } from '@/shared/ui/components';
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
    <LinkRouterWrapper to={Paths.CART}>
      <IconButton>
        <Badge badgeContent={productQuantity} color="primary" sx={sxBadge}>
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </LinkRouterWrapper>
  );
}
