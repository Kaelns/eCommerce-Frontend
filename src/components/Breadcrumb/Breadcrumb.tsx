import { Breadcrumbs, Button } from '@mui/material';
import { useCallback } from 'react';
import { IBreadcrumbProps } from '@/components/Breadcrumb/Breadcrumb.interface';
import { convertToBreadcrumb } from '@/components/Breadcrumb/helpers/convertToBreadcrumb';
import { LinkBtn } from '@/components/LinkBtn/LinkBtn';

import styles from './Breadcrumb.module.scss';
import { fromKeyToName } from '@/utils/fromKeyToName';

export function Breadcrumb({
  categoryKey,
  categoryTree,
  setCategoryKey,
  className
}: IBreadcrumbProps): React.ReactNode {
  const categoriesToRender = categoryKey ? convertToBreadcrumb(categoryKey, categoryTree) : 'no-category';
  const arrToRender = categoriesToRender.trim().split(' ');

  const setCategory = useCallback(
    (key: string) => (): void => {
      setCategoryKey(key);
    },
    [setCategoryKey]
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
