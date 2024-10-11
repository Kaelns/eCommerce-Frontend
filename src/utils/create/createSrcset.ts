import type { ISrcsetPxAsc } from '@/shared/types';
import { getImgSrcWithPostfix } from '@/utils/get/getImgSrcWithPostfix';

export function createSrcset(
  imgSrc: string,
  srcSetArr: ISrcsetPxAsc,
  maxSize: number | 'unlimited' = 'unlimited'
): string {
  if (!srcSetArr.length || !imgSrc) {
    return imgSrc;
  }
  const sortedSrcSetArr = [...srcSetArr].sort((a, b) => parseInt(a[1], 10) - parseInt(b[1], 10));
  let resultSrcSetArr = sortedSrcSetArr;
  if (maxSize && maxSize !== 'unlimited') {
    resultSrcSetArr = sortedSrcSetArr.filter(([_, width]) => parseInt(width, 10) <= maxSize);
    const edgePlus1SrcSet = sortedSrcSetArr[resultSrcSetArr.length];
    resultSrcSetArr.push(edgePlus1SrcSet);
  }

  return resultSrcSetArr.map(([postfix, width]) => `${getImgSrcWithPostfix(imgSrc, postfix)} ${width}`).join(', ');
}
