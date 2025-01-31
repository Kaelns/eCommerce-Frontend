import { AppError } from '@/layout/AppError';

import imageNotFound from '@/shared/assets/not-found.png';

export function ErrorPage(): React.ReactNode {
  return <AppError src={imageNotFound} alt="404" />;
}
