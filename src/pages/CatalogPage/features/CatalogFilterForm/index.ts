import { catalogFilterSliceInjected } from '@/pages/CatalogPage/features/CatalogFilterForm/catalogFilter.slice';

export { CatalogFilterForm } from '@/pages/CatalogPage/features/CatalogFilterForm/CatalogFilterForm';
export { Sort, FILTER_COLORS_STATE } from '@/pages/CatalogPage/features/CatalogFilterForm/data/constants';

export const { selectCategoryId, selectCategoryName, selectSearch, selectPage } = catalogFilterSliceInjected.selectors;

export const { setPageAction, setSearchAction } = catalogFilterSliceInjected.actions;
