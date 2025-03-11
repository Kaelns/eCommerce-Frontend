import { Badge, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { selectCartProductQuantity } from '@/entities/cart';

import { LinkRouterWrapper } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';
import { Paths } from '@/shared/model/data';

export function CartLinkIconBtn() {
  const productQuantity = useAppSelector(selectCartProductQuantity);

  return (
    <LinkRouterWrapper to={Paths.CART}>
      <IconButton>
        <Badge badgeContent={productQuantity} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </LinkRouterWrapper>
  );
}
