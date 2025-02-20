import type { AppStoreAny } from '@/shared/lib/redux/redux.types';

export interface ReduxElemIdData {
  isCurrentIdSelector: (state: AppStoreAny, passedId: string) => boolean;
  setClickedElemMemoized: (elemId: string) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}
