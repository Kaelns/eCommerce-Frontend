import { shallowMyCartUpdateActionSchema } from '@/shared/zod/ecommerce/general.schemas';
import { z } from 'zod';

export const getCartByIdBodySchema = z.object({
  cartId: z.string()
});

export const deleteCartBodySchema = z.object({
  cartId: z.string(),
  version: z.number()
});

export const updateCartBodySchema = z.object({
  cartId: z.string().optional(),
  version: z.number().optional(),
  action: shallowMyCartUpdateActionSchema
});

export type UpdateCartBody = z.infer<typeof updateCartBodySchema>;
