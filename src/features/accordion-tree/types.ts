import type { AppStoreAny } from '@/shared/redux/redux';

export interface ReduxElemIdData {
  isCurrentIdSelector: (state: AppStoreAny, passedId: string) => boolean;
  setClickedElemMemoized: (elemId: string) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}
