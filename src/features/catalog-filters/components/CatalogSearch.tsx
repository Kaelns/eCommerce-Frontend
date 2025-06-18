import type { Theme } from '@mui/system';
import type { SxProps, InputBaseProps } from '@mui/material';
import type { SxStylesMap, InputReactEvent } from '@/shared/model/types';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Stack, InputBase, IconButton, InputAdornment } from '@mui/material';

import { selectIsSearchInFocus, setIsSearchInFocusAction } from '@/pages/CatalogPage/model/catalogPage.slice';

import { selectSearch } from '@/features/catalog-filters/model/catalogFilter.slice';
import { debounceSearchToQueryArgs } from '@/features/catalog-filters/lib/redux/thunks/debounceSearchToQueryArgs.thunk';

import { sxMixins } from '@/shared/lib/mui';
import { concatSx } from '@/shared/lib/helpers';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

const sxStyles: SxStylesMap = {
  search: {
    position: 'relative',
    ml: 0,
    flex: 1,
    boxShadow: 1,
    borderRadius: 1,
    ...sxMixins.animation(),
    ...sxMixins.mediaHover({
      bgcolor: 'var(--color-primary-transparent)'
    })
  },
  searchActive: {
    flex: 10
  },
  iconWrapper: {
    p: 0.5,
    height: 1,
    position: 'absolute',
    pointerEvents: 'none'
  },
  input: {
    width: 1,
    p: 1,
    pl: 5
  }
};

interface SearchProps extends InputBaseProps {
  sxContainer?: SxProps<Theme>;
}

export function CatalogSearch({ sx, sxContainer, ...props }: SearchProps) {
  const dispatch = useAppDispatch();

  const search = useAppSelector(selectSearch);
  const isSearchInFocus = useAppSelector(selectIsSearchInFocus);

  const handleOnFocus = (): void => {
    dispatch(setIsSearchInFocusAction(true));
  };

  const handleOnBlur = (): void => {
    dispatch(setIsSearchInFocusAction(false));
  };

  const handleSearch = (e: InputReactEvent): void => {
    dispatch(debounceSearchToQueryArgs(e.target.value));
  };

  const handleClearSearch = (): void => {
    dispatch(debounceSearchToQueryArgs(''));
  };

  return (
    <Box sx={concatSx(sxStyles.search, isSearchInFocus && sxStyles.searchActive, sxContainer)}>
      <Stack alignItems="center" justifyContent="center" sx={sxStyles.iconWrapper}>
        <SearchIcon fontSize="small" />
      </Stack>

      <InputBase
        value={search}
        placeholder="Search…"
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onChange={handleSearch}
        endAdornment={
          <InputAdornment position="end" component={IconButton} disabled={!search} onClick={handleClearSearch}>
            <CloseIcon fontSize="small" />
          </InputAdornment>
        }
        sx={concatSx(sxStyles.input, sx)}
        {...props}
      />
    </Box>
  );
}
