import { PageSkeleton } from '@/components/skeleton/PageSkeleton';
import { useAppSelector } from '@/store/redux';
import { selectIsPendingAuth, selectIsLoggedAuth } from '@/store/slices/auth.slice';

interface IRedirectLoginRouter {
  IfLogged: React.ReactNode;
  IfUnLogged: React.ReactNode;
}

export function RedirectLoginRouter({ IfLogged, IfUnLogged }: IRedirectLoginRouter) {
  const isPending = useAppSelector(selectIsPendingAuth);
  const isLogged = useAppSelector(selectIsLoggedAuth);
  const ComponentToShow = isLogged ? IfLogged : IfUnLogged;
  return isPending ? <PageSkeleton /> : ComponentToShow;
}
