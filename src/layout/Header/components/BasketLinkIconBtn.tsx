import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Paths } from '@/shared/data/constants';
import { useAppSelector } from '@/shared/redux';
import { IconButton, Badge } from '@mui/material';
import { selectProductQuantityCart } from '@/pages/CartPage/cart.slice';
import { LinkRouterWrapper } from '@/components/wrappers/LinkRouterWrapper';

export function BasketLinkIconBtn(): React.ReactNode {
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
