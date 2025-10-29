export function getMaxDate(minAge: number): Date {
  const today = new Date();
  today.setFullYear(today.getFullYear() - minAge);
  return today;
}
