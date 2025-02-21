import type { SrcsetPxAsc } from '@/shared/model/types/types';

import { getImgSrcWithPostfix } from '@/shared/lib/utils/strings/getImgSrcWithPostfix';

export function createSrcset(imgSrc: string, srcSetArr: SrcsetPxAsc, maxSize: 'unlimited' | number = 'unlimited'): string {
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
