export function formatMoney(
  amount: number,
  locale: string = "es-MX",
  currency: string = "MXN",
): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}
