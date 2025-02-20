import { Badge, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { selectProductQuantityCart } from '@/pages/CartPage';

import { LinkRouterWrapper } from '@/shared/ui/components/wrappers/LinkRouterWrapper';

import { Paths } from '@/shared/model/data/enums';
import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

export function CartLinkIconBtn() {
  const productQuantity = useAppSelector(selectProductQuantityCart);

  return (
    <LinkRouterWrapper to={Paths.BASKET}>
      <IconButton>
        <Badge badgeContent={productQuantity} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </LinkRouterWrapper>
  );
}
