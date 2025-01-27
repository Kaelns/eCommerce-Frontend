import { z } from 'zod';

//  FIXME Delete if not used
export const queryArgsProductsSchema = z.object({
  fuzzy: z.boolean().optional(),
  fuzzyLevel: z.number().optional(),
  markMatchingVariants: z.boolean().optional(),
  filter: z.union([z.string(), z.array(z.string())]).optional(),
  'filter.facets': z.union([z.string(), z.array(z.string())]).optional(),
  'filter.query': z.union([z.string(), z.array(z.string())]).optional(),
  facet: z.union([z.string(), z.array(z.string())]).optional(),
  sort: z.union([z.string(), z.array(z.string())]).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
  withTotal: z.boolean().optional(),
  staged: z.boolean().optional(),
  priceCurrency: z.string().optional(),
  priceCountry: z.string().optional(),
  priceCustomerGroup: z.string().optional(),
  priceChannel: z.string().optional(),
  localeProjection: z.union([z.string(), z.array(z.string())]).optional(),
  storeProjection: z.string().optional(),
  expand: z.union([z.string(), z.array(z.string())]).optional()
});

export type QueryArgsProductsZod = z.infer<typeof queryArgsProductsSchema>;
export type QueryArgsProductsKeysZod = keyof QueryArgsProductsZod;
