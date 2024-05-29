import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';

export function BasketLink(): React.ReactNode {
  const navigate = useNavigate();
  const { authUserToken } = useAuthContext();
  // TODO fetch amount of add by user goods
  const amountOfGoods = 0;

  const navigateOrRedirect = (): void => {
    navigate(authUserToken ? ROUTES.BASKET : ROUTES.LOGIN);
  };

  return (
    <IconButton onClick={navigateOrRedirect}>
      <Badge badgeContent={amountOfGoods} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
