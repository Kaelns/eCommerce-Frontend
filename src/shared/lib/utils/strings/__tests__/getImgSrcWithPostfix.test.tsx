import { describe, test, expect } from 'vitest';
import { createImgSrcWithPostfix } from '@/shared/lib/utils/strings/createImgSrcWithPostfix';

const imgSrc = 'google_images_2015.png';
const postfix = '-small';
const result = 'google_images_2015-small.png';

describe('Given getImgSrcWithPostfix function', () => {
  test('handle normal data', () => {
    expect(createImgSrcWithPostfix(imgSrc, postfix)).toEqual(result);
  });

  test('handle empty image src string', () => {
    expect(createImgSrcWithPostfix('', postfix)).toEqual('');
  });

  test('handle falsy postfix', () => {
    expect(createImgSrcWithPostfix(imgSrc, null)).toEqual(imgSrc);
    expect(createImgSrcWithPostfix(imgSrc, '')).toEqual(imgSrc);
  });
});
