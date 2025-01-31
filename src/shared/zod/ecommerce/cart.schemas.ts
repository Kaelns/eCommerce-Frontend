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
  //  TODO do better validation
  action: z.object({ action: z.string() }).passthrough()
});

export type UpdateCartBody = z.infer<typeof updateCartBodySchema>;
