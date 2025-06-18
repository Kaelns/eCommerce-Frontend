export function createImgSrcWithPostfix(imgSrc: string, postfix: null | string): string {
  if (!postfix || !imgSrc) {
    return imgSrc;
  }
  const extensionDot = imgSrc.lastIndexOf('.');
  const [imgBody, imgExt] = [imgSrc.slice(0, extensionDot), imgSrc.slice(extensionDot)];
  return imgBody + postfix + imgExt;
}
