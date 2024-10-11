import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Paths } from '@/shared/constants';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/redux';
import { IconButton, Badge } from '@mui/material';
import { selectProductQuantityCart } from '@/pages/BasketPage/cartProducts.slice';

export function BasketLink(): React.ReactNode {
  const productQuantity = useAppSelector(selectProductQuantityCart);
  const navigate = useNavigate();

  // TODO redux basket data

  const navigateToBasket = (): void => {
    navigate(Paths.BASKET);
  };

  return (
    <IconButton onClick={navigateToBasket}>
      <Badge badgeContent={productQuantity} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
