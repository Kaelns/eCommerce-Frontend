import { AppError } from '@/widgets/AppError';

import imageNotFound from '@/shared/assets/not-found.png';

export function ErrorPage() {
  return <AppError src={imageNotFound} alt="404" />;
}
