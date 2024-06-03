import { Breadcrumbs, Button } from '@mui/material';
import { useCallback } from 'react';
import { IBreadcrumbProps } from '@/components/Breadcrumb/Breadcrumb.interface';
import { convertToBreadcrumb } from '@/components/Breadcrumb/helpers/convertToBreadcrumb';
import { LinkBtn } from '@/components/buttons/LinkBtn/LinkBtn';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';

import styles from './Breadcrumb.module.scss';

export function Breadcrumb({ filterReducerHook, categoryTree, className }: IBreadcrumbProps): React.ReactNode {
  const [state, dispatch] = filterReducerHook;
  const categoriesToRender = state.categoryKey ? convertToBreadcrumb(state.categoryKey, categoryTree) : 'no-category';
  const arrToRender = categoriesToRender.trim().split(' ');

  const setCategory = useCallback(
    (key: string) => (): void => {
      dispatch({ type: FilterState.CATEGORY, payload: key });
    },
    [dispatch]
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
