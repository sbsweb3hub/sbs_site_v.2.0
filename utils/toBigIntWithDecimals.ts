/** @format */

export const toBigIntWithDecimals = (
  value: number | string | undefined,
  decimals: number
): bigint => {
  if (value === undefined) {
    throw new Error('Value is undefined');
  }
  return BigInt(value) * BigInt(10 ** decimals);
};
