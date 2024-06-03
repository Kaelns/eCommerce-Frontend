import { Breadcrumbs, Button } from '@mui/material';
import { useCallback, useContext } from 'react';
import { IBreadcrumbProps } from '@/components/Breadcrumb/Breadcrumb.interface';
import { convertToBreadcrumb } from '@/components/Breadcrumb/helpers/convertToBreadcrumb';
import { LinkBtn } from '@/components/buttons/LinkBtn/LinkBtn';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';

import styles from './Breadcrumb.module.scss';

export function Breadcrumb({ categoryTree, className }: IBreadcrumbProps): React.ReactNode {
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);
  const categoriesToRender =
    filterState.categoryKey !== NO_CATEGORY ? convertToBreadcrumb(filterState.categoryKey, categoryTree) : NO_CATEGORY;
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
