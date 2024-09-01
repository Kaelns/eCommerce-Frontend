export type SrcSetArr = [string, string][];

export function createSrcsetBeforeFormat(src: string, srcSetArr: SrcSetArr): string {
  const lastDot = src.lastIndexOf('.');
  if (lastDot === -1) {
    return '';
  }
  const [body, formatWithDot] = [src.slice(0, lastDot), src.slice(lastDot)];
  return srcSetArr.map((srcArr) => `${body}${srcArr[0]}${formatWithDot} ${srcArr[1]}`).join(', ');
}
