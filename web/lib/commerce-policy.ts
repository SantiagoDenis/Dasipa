/** Development assumptions, not approved commercial terms. Prices use ARS cents. */
export const commercePolicy = {
  currency: 'ARS', publicChannel: 'cosmetico', minimumQuoteQuantity: 1,
  shipping: { minimumPostcode: 1000, maximumPostcode: 1899, standardCents: 450000, freeAboveCents: 6000000 },
  source: 'mock', requiresBusinessApproval: true,
} as const;
