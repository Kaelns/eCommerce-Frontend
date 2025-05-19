import { describe, test, expect } from 'vitest';
import { createSrcset } from '@/shared/lib/utils/strings/createSrcset';
import { SrcsetInPx } from '@/shared/model/types';

const imgSrc = 'google_images_2015.png';
const srcsetArr: SrcsetInPx = [
  ['-small', '150w'],
  ['-medium', '400w'],
  ['-large', '700w']
];
const result = 'google_images_2015-small.png 150w, google_images_2015-medium.png 400w, google_images_2015-large.png 700w';

describe('Given generateSrcset function', () => {
  test('handle normal data', () => {
    expect(createSrcset(imgSrc, srcsetArr)).toEqual(result);
  });

  test('handle empty image src string', () => {
    const emptyImgSrc = '';
    expect(createSrcset(emptyImgSrc, srcsetArr)).toEqual(emptyImgSrc);
  });

  test('handle empty srcset Arr', () => {
    expect(createSrcset(imgSrc, [])).toEqual(imgSrc);
  });

  test('handle maxSize argument', () => {
    const maxSize = 256;
    const result = 'google_images_2015-small.png 150w, google_images_2015-medium.png 400w';
    expect(createSrcset(imgSrc, srcsetArr, maxSize)).toEqual(result);
  });

  test('handle border maxSize argument', () => {
    const maxSize = 400;
    const cutedResult = 'google_images_2015-small.png 150w, google_images_2015-medium.png 400w, google_images_2015-large.png 700w';
    expect(createSrcset(imgSrc, srcsetArr, maxSize)).toEqual(cutedResult);
  });

  test('handle maxSize that smaller then min srcSet', () => {
    const maxSize = 100;
    const cutedResult = 'google_images_2015-small.png 150w';
    expect(createSrcset(imgSrc, srcsetArr, maxSize)).toEqual(cutedResult);
  });
});
