import { Navigate } from 'react-router-dom';
import { useCallback } from 'react';
import { BasketPage } from '@/pages/BasketPage/BasketPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { PageSkeleton } from '@/components/PageSkeleton/PageSkeleton';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage';
import { useAuthStorage } from '@/hooks/useAuthStorage/useAuthStorage';
import { UserPage } from '@/pages/UserPage/UserPage';
import { ROUTES } from '@/features/Router/data/Router.enum';

interface IReturnUseRedirect {
  [ROUTES.USER]: React.ReactNode;
  [ROUTES.LOGIN]: React.ReactNode;
  [ROUTES.BASKET]: React.ReactNode;
  [ROUTES.REGISTRATION]: React.ReactNode;
}

export function useRedirect(): IReturnUseRedirect {
  const { authUserToken, isLoading } = useAuthStorage();

  const pageOnAuthorized = useCallback(
    (onRegistered: React.ReactNode, onNonRegistered: React.ReactNode): React.ReactNode =>
      authUserToken ? onRegistered : onNonRegistered,
    [authUserToken]
  );

  const pageOnLoaded = useCallback(
    (component: React.ReactNode): React.ReactNode => (isLoading ? <PageSkeleton /> : component),
    [isLoading]
  );

  return {
    [ROUTES.USER]: pageOnLoaded(pageOnAuthorized(<UserPage />, <Navigate to={ROUTES.MAIN} />)),
    [ROUTES.LOGIN]: pageOnLoaded(pageOnAuthorized(<Navigate to={ROUTES.MAIN} />, <LoginPage />)),
    [ROUTES.BASKET]: pageOnLoaded(pageOnAuthorized(<BasketPage />, <Navigate to={ROUTES.MAIN} />)),
    [ROUTES.REGISTRATION]: pageOnLoaded(pageOnAuthorized(<Navigate to={ROUTES.MAIN} />, <RegistrationPage />))
  };
}
