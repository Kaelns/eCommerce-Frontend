import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { ProductSearch } from '@/pages/CatalogPage/components/ProductSearch';
import type { SxStyles } from '@/shared/types/types';
import { ElemWithTypography } from '@/components/typography/ElemWithTypography';
import { sxMixins } from '@/app/config/mui-theme/mixins';

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
      <ProductSearch setIsSearchInFocus={setIsSearchInFocus} sxContainer={[sxStyles.search, isSearchInFocus && sxStyles.searchActive]} />

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
