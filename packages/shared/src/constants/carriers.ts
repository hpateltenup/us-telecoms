export const CARRIERS = {
  VERIZON: 'verizon',
  TMOBILE: 'tmobile',
  ATT: 'att',
} as const;

export type CarrierId = (typeof CARRIERS)[keyof typeof CARRIERS];
