export interface ILoadingFetchProps {
  error: string;
  isLoading: boolean;
  skeleton: (props: { className: string }) => React.ReactNode;
}
