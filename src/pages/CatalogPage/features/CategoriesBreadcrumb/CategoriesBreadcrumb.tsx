import type { Theme } from '@mui/system';
import type { SxStyles } from '@/shared/types/types';
import type { SxProps, BreadcrumbsProps } from '@mui/material';

import { Button, Breadcrumbs } from '@mui/material';
import { memo, useMemo, useContext, useCallback } from 'react';

import { FilterStateEnum } from '@/pages/CatalogPage/hooks/filterReducer/enums';
import { NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/constants';
import { convertToBreadcrumb } from '@/pages/CatalogPage/components/Breadcrumb/Breadcrumb.helpers';

import { convertSxToArr } from '@/utils/arrays/convertSxToArr';
import { convertKeyToName } from '@/utils/strings/convertKeyToName';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';

import { BtnOnClickLink } from '@/components/buttons/BtnOnClickLink';

const sxStyles: SxStyles = {
  btn: (theme) => ({
    textTransform: 'none',
    color: `${theme.palette.text.secondary} !important`
  })
};

interface IBreadcrumbProps extends BreadcrumbsProps {
  btnSx?: SxProps<Theme>;
}

export const CategoriesBreadcrumb = memo(function Breadcrumb({ btnSx = {}, ...props }: IBreadcrumbProps): React.ReactNode {
  // TODO remove contexts and pass elem through props. Move to the features folder

  const { categoriesTree } = useContext(ECommerceContext);
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const categoriesToRender = useMemo(
    () => (filterState.categoryKey !== NO_CATEGORY ? convertToBreadcrumb(filterState.categoryKey, categoriesTree) : [NO_CATEGORY]),
    [categoriesTree, filterState.categoryKey]
  );

  const setCategory = useCallback(
    (key: string) => (): void => {
      dispatchFilterState({ type: FilterStateEnum.CATEGORY, payload: key });
    },
    [dispatchFilterState]
  );

  return (
    <Breadcrumbs {...props}>
      {categoriesToRender.map((key, index) => {
        if (index !== categoriesToRender.length - 1) {
          return (
            <Button key={key} onClick={setCategory(key)} sx={btnSx}>
              {convertKeyToName(key)}
            </Button>
          );
        }
        return (
          <Button disabled key={key} sx={[sxStyles.btn, ...convertSxToArr(btnSx)]}>
            {convertKeyToName(key)}
          </Button>
        );
      })}
    </Breadcrumbs>
  );
});
