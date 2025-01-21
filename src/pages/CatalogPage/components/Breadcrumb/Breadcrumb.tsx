import type { BreadcrumbsProps, SxProps } from '@mui/material';
import { Breadcrumbs, Button } from '@mui/material';
import { memo, useCallback, useContext, useMemo } from 'react';
import type { Theme } from '@mui/system';
import { BtnOnClickLink } from '@/components/buttons/BtnOnClickLink';
import type { SxStyles } from '@/shared/types/types';
import { FilterState } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.enum';
import { NO_CATEGORY } from '@/pages/CatalogPage/hooks/filterReducer/filterReducer.constants';
import { convertSxToArr } from '@/utils/convert/convertSxToArr';
import { ECommerceContext } from '@/context/ECommerceContext/ECommerceContext';
import { convertToBreadcrumb } from '@/pages/CatalogPage/components/Breadcrumb/Breadcrumb.helpers';
import { FilterReducerContext } from '@/context/FilterReducerContext/FilterReducerContext';
import { convertKeyToName } from '@/utils/convert/convertKeyToName';

const sxStyles: SxStyles = {
  btn: (theme) => ({
    textTransform: 'none',
    color: `${theme.palette.text.secondary} !important`
  })
};

interface IBreadcrumbProps extends BreadcrumbsProps {
  btnSx?: SxProps<Theme>;
}

export const Breadcrumb = memo(function Breadcrumb({ btnSx = {}, ...props }: IBreadcrumbProps): React.ReactNode {
  // TODO remove contexts and pass elem through props. Move to the features folder

  const { categoriesTree } = useContext(ECommerceContext);
  const { filterState, dispatchFilterState } = useContext(FilterReducerContext);

  const categoriesToRender = useMemo(
    () => (filterState.categoryKey !== NO_CATEGORY ? convertToBreadcrumb(filterState.categoryKey, categoriesTree) : [NO_CATEGORY]),
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
