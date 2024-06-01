import { Breadcrumbs, Button } from '@mui/material';
import { useCallback } from 'react';
import { IBreadcrumbProps } from '@/components/Breadcrumb/Breadcrumb.interface';
import { arrayCategories } from '@/pages/CatalogPage/mock';
import { convertToBreadcrumb } from '@/components/Breadcrumb/Breadcrumb.helpers';
import { LinkBtn } from '@/components/LinkBtn/LinkBtn';

import styles from './Breadcrumb.module.scss';

export function Breadcrumb({ category }: IBreadcrumbProps): React.ReactNode {
  const arrToRender = convertToBreadcrumb(category, arrayCategories);

  // TODO navigate to category
  const navigateTo = useCallback(
    (data: string) => (): void => {
      console.log(data);
    },
    []
  );

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {arrToRender.map((categoryData, index) => {
        if (index !== arrToRender.length - 1) {
          return (
            <LinkBtn key={categoryData.id} navigateTo={navigateTo(categoryData.id)}>
              {categoryData.name}
            </LinkBtn>
          );
        }
        return (
          <Button disabled key={categoryData.id} className={styles.btn}>
            {categoryData.name}
          </Button>
        );
      })}
    </Breadcrumbs>
  );
}
