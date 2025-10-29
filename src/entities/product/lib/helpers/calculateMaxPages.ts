export function calculateMaxPages(productAmount: number, limitOnPage: number): number {
  return Math.ceil(productAmount / limitOnPage);
}
