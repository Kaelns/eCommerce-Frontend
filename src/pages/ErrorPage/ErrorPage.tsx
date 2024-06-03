import { ErrorComponent } from '@/components/ErrorComponent/ErrorComponent';
import imageNotFound from '@/assets/not-found.png';

export function ErrorPage(): React.ReactNode {
  return <ErrorComponent src={imageNotFound} alt="404" />;
}
