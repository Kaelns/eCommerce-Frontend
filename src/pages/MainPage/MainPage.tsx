import { Stack } from '@mui/system';

import { getErrorMessage } from '@/services/ecommerce-api/rtk-query';
import { LANGUAGE, useGetCategoriesQuery } from '@/services/ecommerce-api';

import { MainSection } from '@/pages/MainPage/layout/MainSection';
import { ShowcaseSection } from '@/pages/MainPage/layout/ShowcaseSection';
import { PromocodeSection } from '@/pages/MainPage/layout/PromocodeSection';

import { SuspenseWithError } from '@/components/SuspenseWithError';

export function MainPage() {
  const { data: categoriesCollection, error, isError, isLoading } = useGetCategoriesQuery();

  const firstCategory = categoriesCollection?.categories[0];
  const secondCategory = categoriesCollection?.categories[1];

  return (
    <SuspenseWithError settings={{ error: getErrorMessage(error), isError, isLoading }}>
      <Stack gap={5}>
        <MainSection />
        <ShowcaseSection categoryId={firstCategory?.id ?? ''} categoryName={firstCategory?.name[LANGUAGE] ?? ''} />
        <ShowcaseSection categoryId={secondCategory?.id ?? ''} categoryName={secondCategory?.name[LANGUAGE] ?? ''} />
        <PromocodeSection />
      </Stack>
    </SuspenseWithError>
  );
}
