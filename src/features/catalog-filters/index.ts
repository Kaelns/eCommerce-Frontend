import { catalogFilterSlice } from '@/features/catalog-filters/model/redux/catalogFilter.slice';

export { CatalogSearch } from '@/features/catalog-filters/components/CatalogSearch';
export { CatalogSortBy } from '@/features/catalog-filters/components/CatalogSortBy';
export { CatalogPagination } from '@/features/catalog-filters/components/CatalogPagination';
export { CategoriesBreadcrumb } from '@/features/catalog-filters/components/CategoriesBreadcrumb';
export { CatalogFilterForm } from '@/features/catalog-filters/components/CatalogFilterForm/CatalogFilterForm';

export { FiltersSort } from '@/features/catalog-filters/model/constants';

export const { selectCategoryName, selectQueryArgs } = catalogFilterSlice.selectors;
export const { setSearchAction, setCategoryIdAndNameAction } = catalogFilterSlice.actions;
