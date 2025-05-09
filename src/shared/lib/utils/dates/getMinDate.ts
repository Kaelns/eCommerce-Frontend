export function getMinDate(maxAge: number): Date {
  const today = new Date();
  today.setFullYear(today.getFullYear() - maxAge);
  return today;
}
