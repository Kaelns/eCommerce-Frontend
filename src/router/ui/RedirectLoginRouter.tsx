import { selectIsLoggedAuth, selectIsPendingAuth } from '@/entities/auth';

import { PageSkeleton } from '@/shared/ui/components/skeletons/PageSkeleton';

import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

interface RedirectLoginRouterProps {
  IfLogged: React.ReactNode;
  IfUnLogged: React.ReactNode;
}

export function RedirectLoginRouter({ IfLogged, IfUnLogged }: RedirectLoginRouterProps) {
  const isPending = useAppSelector(selectIsPendingAuth);
  const isLogged = useAppSelector(selectIsLoggedAuth);
  const ComponentToShow = isLogged ? IfLogged : IfUnLogged;
  return isPending ? <PageSkeleton /> : ComponentToShow;
}
