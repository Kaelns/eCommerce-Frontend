import { catalogFilterSliceInjected } from '@/pages/CatalogPage/features/catalog-filters/redux/catalogFilter.slice';

export { CatalogSearch } from '@/pages/CatalogPage/features/catalog-filters/features/CatalogSearch';
export { CatalogSortBy } from '@/pages/CatalogPage/features/catalog-filters/features/CatalogSortBy';
export { CatalogPagination } from '@/pages/CatalogPage/features/catalog-filters/features/CatalogPagination';
export { CategoriesBreadcrumb } from '@/pages/CatalogPage/features/catalog-filters/features/CategoriesBreadcrumb';
export { CatalogFilterForm } from '@/pages/CatalogPage/features/catalog-filters/features/CatalogFilterForm/CatalogFilterForm';

export { Sort, FILTER_COLORS_STATE } from '@/pages/CatalogPage/features/catalog-filters/data/constants';

export const { selectCategoryId, selectCategoryName, selectSearch, selectPage, selectQueryArgs } = catalogFilterSliceInjected.selectors;
export const { setPageAction, setSearchAction } = catalogFilterSliceInjected.actions;
