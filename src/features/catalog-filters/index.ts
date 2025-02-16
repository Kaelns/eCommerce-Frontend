import { catalogFilterSliceInjected } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

export { CatalogSearch } from '@/features/catalog-filters/ui/CatalogSearch';
export { CatalogSortBy } from '@/features/catalog-filters/ui/CatalogSortBy';
export { CatalogPagination } from '@/features/catalog-filters/ui/CatalogPagination';
export { CategoriesBreadcrumb } from '@/features/catalog-filters/ui/CategoriesBreadcrumb';
export { CatalogFilterForm } from '@/features/catalog-filters/ui/CatalogFilterForm/CatalogFilterForm';

export { FiltersSort } from '@/features/catalog-filters/model/constants';

export const { selectCategoryId, selectCategoryName, selectSearch, selectPage, selectQueryArgs } = catalogFilterSliceInjected.selectors;
export const { setPageAction, setSearchAction } = catalogFilterSliceInjected.actions;
