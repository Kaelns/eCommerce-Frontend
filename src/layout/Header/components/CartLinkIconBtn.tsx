import { Badge, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { selectProductQuantityCart } from '@/pages/CartPage';

import { LinkRouterWrapper } from '@/components/wrappers/LinkRouterWrapper';

import { Paths } from '@/shared/data/enums';
import { useAppSelector } from '@/shared/redux/redux';

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
