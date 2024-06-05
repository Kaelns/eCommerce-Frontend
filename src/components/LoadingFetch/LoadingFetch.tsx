import { ILoadingFetchProps } from '@/components/LoadingFetch/LoadingFetch.interface';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { ErrorComponent } from '@/components/ErrorComponent/ErrorComponent';

import imageError from '@/assets/error2.png';

export function LoadingFetch({
  children,
  error,
  isLoading,
  skeleton
}: PropsWithChildren<ILoadingFetchProps>): React.ReactNode {
  function elementToReturn(): React.ReactNode {
    if (error) {
      return <ErrorComponent message={error} src={imageError} alt="error" />;
    }
    return isLoading ? skeleton : children;
  }

  return elementToReturn();
}
