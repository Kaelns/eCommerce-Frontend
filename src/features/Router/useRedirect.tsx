import { Navigate } from 'react-router-dom';
import { useCallback } from 'react';
import { BasketPage } from '@/pages/BasketPage/BasketPage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { PageSkeleton } from '@/components/PageSkeleton';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage';
import { useAuthStorage } from '@/hooks/useAuthStorage/useAuthStorage';
import { UserPage } from '@/pages/UserPage/UserPage';
import { Paths } from '@/features/Router/Router.constants';

interface IReturnUseRedirect {
  [Paths.USER]: React.ReactNode;
  [Paths.LOGIN]: React.ReactNode;
  [Paths.BASKET]: React.ReactNode;
  [Paths.REGISTRATION]: React.ReactNode;
}

export function useRedirect(): IReturnUseRedirect {
  const { authTokens, isLoading } = useAuthStorage();

  const pageOnAuthorized = useCallback(
    (onRegistered: React.ReactNode, onNonRegistered: React.ReactNode): React.ReactNode =>
      authTokens.token ? onRegistered : onNonRegistered,
    [authTokens.token]
  );

  const pageOnLoaded = useCallback(
    (component: React.ReactNode): React.ReactNode => (isLoading ? <PageSkeleton /> : component),
    [isLoading]
  );

  return {
    [Paths.USER]: pageOnLoaded(pageOnAuthorized(<UserPage />, <Navigate to={Paths.LOGIN} />)),
    [Paths.LOGIN]: pageOnLoaded(pageOnAuthorized(<Navigate to={Paths.MAIN} />, <LoginPage />)),
    [Paths.BASKET]: pageOnLoaded(pageOnAuthorized(<BasketPage />, <Navigate to={Paths.MAIN} />)),
    [Paths.REGISTRATION]: pageOnLoaded(pageOnAuthorized(<Navigate to={Paths.MAIN} />, <RegistrationPage />))
  };
}
