import { Navigate } from 'react-router-dom';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { ROUTES } from '@/data/enum/routes.enum';
import { useAuthStorage } from '@/hooks/useAuthStorage/useAuthStorage';
import { BasketPage } from '@/pages/BasketPage/BasketPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage';
import { UserPage } from '@/pages/UserPage/UserPage';

interface IReturnUseRedirect {
  [ROUTES.USER]: React.ReactNode;
  [ROUTES.LOGIN]: React.ReactNode;
  [ROUTES.BASKET]: React.ReactNode;
  [ROUTES.REGISTRATION]: React.ReactNode;
}

export function useRedirect(): IReturnUseRedirect {
  const { authUserToken, isLoading } = useAuthStorage();

  const pageOnAuthorized = (onRegistered: React.ReactNode, onNonRegistered: React.ReactNode): React.ReactNode =>
    authUserToken ? onRegistered : onNonRegistered;

  const pageOnLoaded = (component: React.ReactNode): React.ReactNode => (isLoading ? <PageSkeleton /> : component);

  return {
    [ROUTES.USER]: pageOnLoaded(pageOnAuthorized(<UserPage />, <Navigate to={ROUTES.MAIN} />)),
    [ROUTES.LOGIN]: pageOnLoaded(pageOnAuthorized(<Navigate to={ROUTES.MAIN} />, <LoginPage />)),
    [ROUTES.BASKET]: pageOnLoaded(pageOnAuthorized(<BasketPage />, <Navigate to={ROUTES.MAIN} />)),
    [ROUTES.REGISTRATION]: pageOnLoaded(pageOnAuthorized(<Navigate to={ROUTES.MAIN} />, <RegistrationPage />))
  };
}
