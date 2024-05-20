import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/data/enum/routes.enum';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';

export function BasketLink(): JSX.Element {
  const navigate = useNavigate();
  const amountOfGoods = 0;
  const { authUserToken } = useAuthContext();

  return (
    <IconButton onClick={() => navigate(authUserToken ? ROUTES.BASKET : ROUTES.LOGIN)}>
      <Badge badgeContent={amountOfGoods} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
