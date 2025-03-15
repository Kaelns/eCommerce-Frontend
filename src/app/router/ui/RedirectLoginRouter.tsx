import { selectIsLoggedAuth, useStartSessionQuery } from '@/entities/auth';

import { PageSkeleton } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/redux';

interface RedirectLoginRouterProps {
  IfLogged: React.ReactNode;
  IfUnLogged: React.ReactNode;
}

export function RedirectLoginRouter({ IfLogged, IfUnLogged }: RedirectLoginRouterProps) {
  const { isLoading } = useStartSessionQuery(undefined, { selectFromResult: ({ isLoading }) => ({ isLoading }) });

  const isLogged = useAppSelector(selectIsLoggedAuth);
  const ComponentToShow = isLogged ? IfLogged : IfUnLogged;
  return isLoading ? <PageSkeleton /> : ComponentToShow;
}
