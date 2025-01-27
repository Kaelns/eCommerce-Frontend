import { PageSkeleton } from '@/components/skeletons/PageSkeleton';
import { useAppSelector } from '@/shared/redux';
import { selectIsPendingAuth, selectIsLoggedAuth } from '@/shared/redux/slices/auth.slice';

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
