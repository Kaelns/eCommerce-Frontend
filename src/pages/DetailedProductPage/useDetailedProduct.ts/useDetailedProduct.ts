import { useParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/features/Router/data/Router.enum';
import { useProduct } from '@/hooks/useProduct/useProduct';
import { IUseProductReturn } from '@/hooks/useProduct/useProduct.interface';
import { fetchProduct } from '@/services/helpers/fetchProduct';
import { useFetch } from '@/hooks/useFetch/useFetch';

export function useDetailedProduct(): { productData: IUseProductReturn; isLoading: boolean; error: string } {
  const { id: key } = useParams();
  const navigate = useNavigate();

  const redirectOnError = (): void => {
    navigate(ROUTES.ERROR);
  };

  if (!key) {
    redirectOnError();
  }

  const { data, isLoading, error } = useFetch(fetchProduct, key!);

  const productData = useProduct(data);

  return { productData, isLoading, error };
}
