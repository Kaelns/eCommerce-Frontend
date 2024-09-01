import { createSrcsetBeforeFormat } from '@/utils/createSrcsetBeforeFormat';
import { describe, expect } from 'vitest';

const src = 'cat.jpg';
const SrcsetApi: [string, string][] = [
  ['-thumb', '50w'],
  ['-small', '150w'],
  ['-medium', '400w'],
  ['-large', '700w'],
  ['-zoom', '1400w']
];
const result = 'cat-thumb.jpg 50w, cat-small.jpg 150w, cat-medium.jpg 400w, cat-large.jpg 700w, cat-zoom.jpg 1400w';

describe('Given createSrcsetBeforeFormat function', () => {
  it('return right result', () => {
    expect(createSrcsetBeforeFormat(src, SrcsetApi)).toEqual(result);
  });

  it('return empty string when srcset empty', () => {
    expect(createSrcsetBeforeFormat(src, [])).toEqual('');
  });

  it('return empty string when wrong src', () => {
    expect(createSrcsetBeforeFormat('cat', SrcsetApi)).toEqual('');
  });
});
