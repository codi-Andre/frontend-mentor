export function formatToCurrency(
  amount: number,
  locales: Intl.LocalesArgument = "en-US",
  currency = "USD"
) {
  return amount.toLocaleString(locales, {
    style: "currency",
    currency,
  })
}
