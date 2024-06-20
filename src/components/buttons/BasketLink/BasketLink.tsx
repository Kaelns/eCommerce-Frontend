import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { useFetch } from '@/hooks/useFetch/useFetch';
import { useToken } from '@/services/hooks/useToken';
import { fetchBasket } from '@/services/helpers/fetchBasket/fetchBasket';
import { INIT_BASKET } from '@/services/helpers/fetchBasket/fetchBasket.constants';
import { BasketContext } from '@/context/BasketContext/BasketContext';
import { calculateQuantity } from '@/pages/BasketPage/helpers/calculateAmount';

export function BasketLink(): React.ReactNode {
  const token = useToken();
  const navigate = useNavigate();
  const { basketState } = useContext(BasketContext);
  const { data = INIT_BASKET } = useFetch(fetchBasket, token, basketState);

  const navigateToBasket = (): void => {
    navigate(ROUTES.BASKET);
  };

  return (
    <IconButton onClick={navigateToBasket}>
      <Badge badgeContent={calculateQuantity(data.basket) ?? 0} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
