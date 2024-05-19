import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/data/enum/routes.enum';
import { useAuthContext } from '@/context/AuthContext/useAuthContext';

export function BasketLink(): JSX.Element {
  const { authUserToken } = useAuthContext();
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(authUserToken ? ROUTES.BASKET : ROUTES.LOGIN)}>
      <Badge badgeContent={0} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
