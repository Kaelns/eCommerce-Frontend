import { Skeleton } from '@mui/material';
import { useMemo } from 'react';

interface IProps {
  amount?: number;
}
export function PageSkeleton({ amount = 5 }: IProps): JSX.Element {
  const roundedSize = 40;
  // const generatedArray = useMemo(() => Array(amount).fill(new Date().getTime()), [amount]);

  return (
    <>
      <Skeleton animation="wave" />
      <Skeleton variant="circular" width={roundedSize} height={roundedSize} animation="wave" />
      {/* {generatedArray.map((el) => ( */}
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      <Skeleton /* key={el} */ animation="wave" />
      {/* ))} */}
    </>
  );
}
