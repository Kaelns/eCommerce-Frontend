import type { Theme } from '@mui/system';
import type { SxProps, InputBaseProps } from '@mui/material';
import type { SxStyles, InputReactEvent } from '@/shared/types/types';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Stack, InputBase, IconButton, InputAdornment } from '@mui/material';

import { convertSxToArr } from '@/utils/arrays/convertSxToArr';

import { sxMixins } from '@/shared/data/mui-mixins';

const sxStyles: SxStyles = {
  search: {
    position: 'relative',
    ml: 0,
    boxShadow: 1,
    borderRadius: 1,
    ...sxMixins.animation(),
    ...sxMixins.mediaHover({
      bgcolor: 'var(--color-primary-transparent)'
    })
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

interface ISearchProps extends InputBaseProps {
  sxContainer?: SxProps<Theme>;
  setIsSearchInFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CatalogSearch({ setIsSearchInFocus, sx = {}, sxContainer = {}, ...props }: ISearchProps): React.ReactNode {
  const handleOnFocus = (): void => {
    setIsSearchInFocus(true);
  };

  const handleBlur = (): void => {
    setIsSearchInFocus(false);
  };

  const handleSearch = (/* e: InputReactEvent */): void => {
    // dispatchFilterState({ type: FilterStateEnum.SEARCH, payload: e.target.value });
  };

  const handleClearSearch = (): void => {
    // dispatchFilterState({ type: FilterStateEnum.SEARCH, payload: '' });
  };

  return (
    <Box sx={[sxStyles.search, ...convertSxToArr(sxContainer)]}>
      <Stack alignItems="center" justifyContent="center" sx={sxStyles.iconWrapper}>
        <SearchIcon fontSize="small" />
      </Stack>

      <InputBase
        value={/* filterState.search */ ''}
        placeholder="Search…"
        onBlur={handleBlur}
        onFocus={handleOnFocus}
        onChange={handleSearch}
        endAdornment={
          <InputAdornment position="end" component={IconButton} disabled={/* !filterState.search */ true} onClick={handleClearSearch}>
            <CloseIcon fontSize="small" />
          </InputAdornment>
        }
        sx={[sxStyles.input, ...convertSxToArr(sx)]}
        {...props}
      />
    </Box>
  );
}
