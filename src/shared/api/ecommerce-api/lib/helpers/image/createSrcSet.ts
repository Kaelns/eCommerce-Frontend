import type { SrcsetInPx } from '@/shared/api/ecommerce-api/model/types/types';

import { createImgSrcWithPostfix } from '@/shared/api/ecommerce-api/lib/helpers/image/createImgSrcWithPostfix';

export function createSrcSet(imgSrc: string, srcSetArr: SrcsetInPx, maxWidth?: 'unlimited' | number): string {
  if (!srcSetArr.length || !imgSrc) {
    return imgSrc;
  }
  const sortedSrcSetArr = [...srcSetArr].sort((a, b) => parseInt(a[1], 10) - parseInt(b[1], 10));

  let resultSrcSetArr = sortedSrcSetArr;

  if (maxWidth && maxWidth !== 'unlimited') {
    resultSrcSetArr = sortedSrcSetArr.filter(([_, width]) => parseInt(width, 10) <= maxWidth);
    const edgePlus1SrcSet = sortedSrcSetArr[resultSrcSetArr.length];
    resultSrcSetArr.push(edgePlus1SrcSet);
  }

  return resultSrcSetArr.map(([postfix, width]) => `${createImgSrcWithPostfix(imgSrc, postfix)} ${width}`).join(', ');
}
