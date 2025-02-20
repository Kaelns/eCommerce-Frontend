import type { SxPropsObj } from '@/shared/model/types/types';

import { MainSection } from '@/pages/MainPage/ui/MainSection';

import { PromocodeSection } from '@/widgets/PromocodeSection';
import { ProductShowcaseSection } from '@/widgets/ProductShowcaseSection';

import { selectLanguage } from '@/entities/user';
import { useGetCategoriesQuery } from '@/entities/categories';

import { SuspenseWithError } from '@/shared/ui/components/conditional/SuspenseWithError';

import { getErrorMessage } from '@/shared/api/ecommerce-api';
import { useAppSelector } from '@/shared/lib/redux/redux.hooks';

const sxContainer: SxPropsObj = {
  display: 'flex',
  flexDirection: 'column',
  gap: 5
};

export function MainPage() {
  const language = useAppSelector(selectLanguage);

  const { data: categoriesCollection, error, isError, isLoading } = useGetCategoriesQuery();

  const firstCategory = categoriesCollection?.categories[0];
  const secondCategory = categoriesCollection?.categories[1];

  return (
    <SuspenseWithError settings={{ isError, isLoading, error: getErrorMessage(error) }} sx={sxContainer}>
      <>
        <MainSection />
        <ProductShowcaseSection categoryId={firstCategory?.id ?? ''} categoryName={firstCategory?.name[language] ?? ''} />
        <ProductShowcaseSection categoryId={secondCategory?.id ?? ''} categoryName={secondCategory?.name[language] ?? ''} />
        <PromocodeSection />
      </>
    </SuspenseWithError>
  );
}
