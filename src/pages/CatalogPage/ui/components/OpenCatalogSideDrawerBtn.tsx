import type { SxStyles } from '@/shared/model/types';

import { Button, Tooltip } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/system';
import FilterListIcon from '@mui/icons-material/FilterList';

import { selectIsSearchInFocus, setIsOpenFilterDrawerAction } from '@/pages/CatalogPage/model/catalogPage.slice';

import { NodeWithText } from '@/shared/ui/elements';
import { sxMixins } from '@/shared/lib/mui';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

const sxStyles: SxStyles = {
  filters: {
    flex: { zero: 0.2, tablet: 1 },
    color: 'text.primary',
    boxShadow: 1,
    textTransform: 'none'
  },

  textContainer: {
    gap: '0 !important'
  }
};
export function OpenCatalogSideDrawerBtn() {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const isSearchInFocus = useAppSelector(selectIsSearchInFocus);

  const isMatchesTablet = useMediaQuery(theme.breakpoints.down('tablet'));
  const isMatchesLaptopBig = useMediaQuery(theme.breakpoints.up('laptopBig'));

  const handleOpenSideDrawer = () => {
    dispatch(setIsOpenFilterDrawerAction(true));
  };

  return (
    !isMatchesLaptopBig && (
      <Button onClick={handleOpenSideDrawer} sx={sxStyles.filters}>
        {isMatchesTablet ? (
          <Tooltip title="Filters" placement="top">
            <FilterListIcon fontSize="small" />
          </Tooltip>
        ) : (
          <NodeWithText
            Node={<FilterListIcon fontSize="small" />}
            sx={[isSearchInFocus && sxMixins.hidden]}
            sxContainer={[isSearchInFocus && sxStyles.textContainer]}
          >
            Filters
          </NodeWithText>
        )}
      </Button>
    )
  );
}
