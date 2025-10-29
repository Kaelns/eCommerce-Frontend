import { describe, test, expect } from 'vitest';
import { createSrcSet } from '@/shared/api/ecommerce-api/lib/helpers/image/createSrcSet';
import { SrcsetInPx } from '@/shared/api/ecommerce-api/model/types/types';

const imgSrc = 'google_images_2015.png';
const srcsetArr: SrcsetInPx = [
  ['-small', '150w'],
  ['-medium', '400w'],
  ['-large', '700w']
];
const result = 'google_images_2015-small.png 150w, google_images_2015-medium.png 400w, google_images_2015-large.png 700w';

describe('Given generateSrcset function', () => {
  test('handle normal data', () => {
    expect(createSrcSet(imgSrc, srcsetArr)).toEqual(result);
  });

  test('handle empty image src string', () => {
    const emptyImgSrc = '';
    expect(createSrcSet(emptyImgSrc, srcsetArr)).toEqual(emptyImgSrc);
  });

  test('handle empty srcset Arr', () => {
    expect(createSrcSet(imgSrc, [])).toEqual(imgSrc);
  });

  test('handle maxSize argument', () => {
    const maxSize = 256;
    const result = 'google_images_2015-small.png 150w, google_images_2015-medium.png 400w';
    expect(createSrcSet(imgSrc, srcsetArr, maxSize)).toEqual(result);
  });

  test('handle border maxSize argument', () => {
    const maxSize = 400;
    const cutedResult = 'google_images_2015-small.png 150w, google_images_2015-medium.png 400w, google_images_2015-large.png 700w';
    expect(createSrcSet(imgSrc, srcsetArr, maxSize)).toEqual(cutedResult);
  });

  test('handle maxSize that smaller then min srcSet', () => {
    const maxSize = 100;
    const cutedResult = 'google_images_2015-small.png 150w';
    expect(createSrcSet(imgSrc, srcsetArr, maxSize)).toEqual(cutedResult);
  });
});
