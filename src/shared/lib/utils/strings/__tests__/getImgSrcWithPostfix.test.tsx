import { describe, test, expect } from 'vitest';
import { getImgSrcWithPostfix } from '@/shared/lib/utils/strings/getImgSrcWithPostfix';

const imgSrc = 'google_images_2015.png';
const postfix = '-small';
const result = 'google_images_2015-small.png';

describe('Given getImgSrcWithPostfix function', () => {
  test('handle normal data', () => {
    expect(getImgSrcWithPostfix(imgSrc, postfix)).toEqual(result);
  });

  test('handle empty image src string', () => {
    expect(getImgSrcWithPostfix('', postfix)).toEqual('');
  });

  test('handle falsy postfix', () => {
    expect(getImgSrcWithPostfix(imgSrc, null)).toEqual(imgSrc);
    expect(getImgSrcWithPostfix(imgSrc, '')).toEqual(imgSrc);
  });
});
