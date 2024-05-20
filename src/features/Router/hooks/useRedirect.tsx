import { Navigate } from 'react-router-dom';
import { PageSkeleton } from '@/components/ui/PageSkeleton';
import { ROUTES } from '@/data/enum/routes.enum';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { BasketPage } from '@/pages/BasketPage/BasketPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage';
import { UserPage } from '@/pages/UserPage/UserPage';

interface IReturnUseRedirect {
  [ROUTES.USER]: JSX.Element;
  [ROUTES.LOGIN]: JSX.Element;
  [ROUTES.BASKET]: JSX.Element;
  [ROUTES.REGISTRATION]: JSX.Element;
}

export function useRedirect(): IReturnUseRedirect {
  const { authUserToken, isLoading } = useLocalStorage();

  const pageOnAuthorized = (onRegistered: JSX.Element, onNonRegistered: JSX.Element): JSX.Element =>
    authUserToken ? onRegistered : onNonRegistered;

  const pageOnLoaded = (component: JSX.Element): JSX.Element => (isLoading ? <PageSkeleton /> : component);

  return {
    [ROUTES.USER]: pageOnLoaded(pageOnAuthorized(<UserPage />, <Navigate to={ROUTES.MAIN} />)),
    [ROUTES.LOGIN]: pageOnLoaded(pageOnAuthorized(<Navigate to={ROUTES.MAIN} />, <LoginPage />)),
    [ROUTES.BASKET]: pageOnLoaded(pageOnAuthorized(<BasketPage />, <Navigate to={ROUTES.MAIN} />)),
    [ROUTES.REGISTRATION]: pageOnLoaded(pageOnAuthorized(<Navigate to={ROUTES.MAIN} />, <RegistrationPage />))
  };
}
