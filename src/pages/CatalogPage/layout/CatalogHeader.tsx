import type { SxStyles } from '@/shared/types/types';

import { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Stack, Button, useTheme, useMediaQuery } from '@mui/material';

import { CatalogSearch } from '@/pages/CatalogPage/layout/CatalogSearch';

import { ElemWithTypography } from '@/components/typography/ElemWithTypography';

import { sxMixins } from '@/shared/data/mui-mixins';

const sxStyles: SxStyles = {
  search: {
    flex: 1
  },

  searchActive: {
    flex: 10
  },

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

interface ICatalogHeaderProps {
  openDrawer: () => void;
}

export function CatalogHeader({ openDrawer }: ICatalogHeaderProps): React.ReactNode {
  const [isSearchInFocus, setIsSearchInFocus] = useState(false);
  const theme = useTheme();
  const isMatchesLaptopBig = useMediaQuery(theme.breakpoints.up('laptopBig'));
  const isMatchesTablet = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
    <Stack direction="row" gap={1}>
      <CatalogSearch setIsSearchInFocus={setIsSearchInFocus} sxContainer={[sxStyles.search, isSearchInFocus && sxStyles.searchActive]} />

      {!isMatchesLaptopBig && (
        <Button onClick={openDrawer} sx={sxStyles.filters}>
          {isMatchesTablet ? (
            <FilterListIcon fontSize="small" />
          ) : (
            <ElemWithTypography
              elem={<FilterListIcon fontSize="small" />}
              sx={[isSearchInFocus && sxMixins.hidden]}
              sxContainer={[isSearchInFocus && sxStyles.textContainer]}
            >
              Filters
            </ElemWithTypography>
          )}
        </Button>
      )}
    </Stack>
  );
}
