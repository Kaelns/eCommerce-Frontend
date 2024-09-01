import { Breadcrumbs, BreadcrumbsProps, Button, SxProps } from '@mui/material';
import { useCallback, useContext, useMemo } from 'react';
import { Theme } from '@mui/system';
import { LinkBtn } from '@/components/buttons/LinkBtn';
import { SxStyles } from '@/shared/types';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { fromKeyToName } from '@/utils/fromKeyToName';
import { convertSxToArr } from '@/utils/convertSxToArr';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { convertToBreadcrumb } from '@/pages/CatalogPage/components/Breadcrumb/Breadcrumb.helpers';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';

const sxStyles: SxStyles = {
  btn: (theme) => ({
    textTransform: 'none',
    color: `${theme.palette.text.secondary} !important`
  })
};

interface IBreadcrumbProps extends BreadcrumbsProps {
  btnSx?: SxProps<Theme>;
}

export function Breadcrumb({ btnSx = {}, ...props }: IBreadcrumbProps): React.ReactNode {
  // TODO remove contexts and pass elem through props. Move to the features folder

  const { categoriesTree } = useContext(ECommerceContext);
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const categoriesToRender = useMemo(
    () =>
      filterState.categoryKey !== NO_CATEGORY
        ? convertToBreadcrumb(filterState.categoryKey, categoriesTree)
        : [NO_CATEGORY],
    [categoriesTree, filterState.categoryKey]
  );

  const setCategory = useCallback(
    (key: string) => (): void => {
      dispatchFilterState({ type: FilterState.CATEGORY, payload: key });
    },
    [dispatchFilterState]
  );

  return (
    <Breadcrumbs {...props}>
      {categoriesToRender.map((key, index) => {
        if (index !== categoriesToRender.length - 1) {
          return (
            <LinkBtn key={key} navigateTo={setCategory(key)} sx={btnSx}>
              {fromKeyToName(key)}
            </LinkBtn>
          );
        }
        return (
          <Button disabled key={key} sx={[sxStyles.btn, ...convertSxToArr(btnSx)]}>
            {fromKeyToName(key)}
          </Button>
        );
      })}
    </Breadcrumbs>
  );
}
