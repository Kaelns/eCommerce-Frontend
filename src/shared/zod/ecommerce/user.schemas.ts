import { nameSchema, emailSchema, passwordSchema, dateOfBirthSchema, addressSchema } from '@/shared/zod/ecommerce/general.schemas';
import { USER_MIN_AGE, USER_MAX_AGE } from '@/shared/data/constants';
import { getAge } from '@/utils/dates/getAge';
import { z } from 'zod';

export const bodyUserCredentialsSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  dateOfBirth: dateOfBirthSchema.refine((data) => {
    const age = getAge(new Date(data));
    return age > USER_MIN_AGE && age < USER_MAX_AGE;
  }, `You should be older ${USER_MIN_AGE} and younger ${USER_MAX_AGE} years`),
  addresses: z.array(addressSchema),
  shippingAddresses: z.array(z.number()),
  billingAddresses: z.array(z.number()).optional(),
  defaultBillingAddress: z.number().optional(),
  defaultShippingAddress: z.number().optional()
});

export type BodyUserCredentials = z.infer<typeof bodyUserCredentialsSchema>;

export const bodyUserEmailSchema = z.object({
  email: emailSchema
});

export type BodyUserEmail = z.infer<typeof bodyUserEmailSchema>;

export const bodyUserLoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
});

export type BodyUserLogin = z.infer<typeof bodyUserLoginSchema>;
