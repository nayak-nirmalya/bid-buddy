export function formatToDollar(cents: number) {
  return `${(cents / 100).toFixed(2)}`;
}
