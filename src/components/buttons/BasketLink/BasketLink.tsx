import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/features/Router/data/Router.enum';

export function BasketLink(): React.ReactNode {
  const navigate = useNavigate();
  // TODO fetch amount of add by user goods
  const amountOfGoods = 0;

  const navigateToBasket = (): void => {
    navigate(ROUTES.BASKET);
  };

  return (
    <IconButton onClick={navigateToBasket}>
      <Badge badgeContent={amountOfGoods} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
