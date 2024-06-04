import { Breadcrumbs, BreadcrumbsProps, Button } from '@mui/material';
import { useCallback, useContext } from 'react';
import { LinkBtn } from '@/components/buttons/LinkBtn/LinkBtn';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { convertToBreadcrumb } from '@/pages/CatalogPage/components/Breadcrumb/helpers/convertToBreadcrumb';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';

import styles from './Breadcrumb.module.scss';

export function Breadcrumb({ className }: BreadcrumbsProps): React.ReactNode {
  const { categoriesTree } = useContext(ECommerceContext);
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  let categoriesToRender = NO_CATEGORY;
  if (filterState.categoryKey !== NO_CATEGORY) {
    categoriesToRender = convertToBreadcrumb(filterState.categoryKey, categoriesTree);
  } else {
    categoriesToRender = NO_CATEGORY;
  }
  const arrToRender = categoriesToRender.trim().split(' ');

  const setCategory = useCallback(
    (key: string) => (): void => {
      dispatchFilterState({ type: FilterState.CATEGORY, payload: key });
    },
    [dispatchFilterState]
  );

  return (
    <Breadcrumbs>
      {arrToRender.map((key, index) => {
        if (index !== arrToRender.length - 1) {
          return (
            <LinkBtn key={key} navigateTo={setCategory(key)} className={className}>
              {fromKeyToName(key)}
            </LinkBtn>
          );
        }
        return (
          <Button disabled key={key} className={`${className} ${styles.btn}`}>
            {fromKeyToName(key)}
          </Button>
        );
      })}
    </Breadcrumbs>
  );
}
