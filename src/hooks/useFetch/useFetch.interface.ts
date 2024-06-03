export interface IReturnUseFetch<T> {
  data: T | undefined;
  error: string;
  isLoading: boolean;
}
