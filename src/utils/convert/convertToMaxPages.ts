export function convertToMaxPages(productAmount: number, limitOnPage: number): number {
  return Math.ceil(productAmount / limitOnPage);
}
