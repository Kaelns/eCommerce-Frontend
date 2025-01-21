import { ErrorBody } from '@/layout/ErrorBody';
import imageNotFound from '@/assets/not-found.png';

export function ErrorPage(): React.ReactNode {
  return <ErrorBody src={imageNotFound} alt="404" />;
}
