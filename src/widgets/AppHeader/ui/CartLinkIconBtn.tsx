import { Badge, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { selectCartProductQuantity } from '@/entities/cart';

import { LinkRouterWrapper } from '@/shared/ui/components/wrappers/LinkRouterWrapper';

import { Paths } from '@/shared/model/data/enums';
import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

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
