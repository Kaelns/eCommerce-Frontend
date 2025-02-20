import { z } from 'zod';
import dayjs from 'dayjs';

import { USER_MAX_AGE, USER_MIN_AGE } from '@/entities/user/model/data/user.constants';
import { checkCountryPostalCodeSuperRefine } from '@/entities/user/lib/helpers/checkCountryPostalCodeSuperRefine';

import { getAge } from '@/shared/lib/utils/dates/getAge';
import { DATE_DASH_FORMAT } from '@/shared/model/data/constants';

const isoCountrySchema = z.string().regex(/^[A-Z]{2}$/gm, 'The country must meet the uppercase ISO 3166 format with 2 letters');
const apartmentSchema = z.string().regex(/^[A-Za-z0-9-/]+$/gm, 'The apartment number can contain latins letters, numbers, dash and slash');
const streetNumberSchema = z.string().regex(/^[A-Za-z0-9-/]+$/gm, 'The street number can contain latins letters, numbers, dash and slash');

const citySchema = z
  .string()
  .min(2)
  .regex(/^[A-Za-z0-9- ]+$/gm, 'The city can contain latins letters, numbers, whitespace and dash');

const streetNameSchema = z
  .string()
  .min(2)
  .regex(/^[A-Za-z0-9- ]+$/gm, 'The street name can contain latins letters, numbers, whitespace and dash');

export const dateOfBirthSchema = z
  .string()
  .refine((data) => dayjs(data).isValid(), 'Invalid date')
  .transform((date) => dayjs(date).format(DATE_DASH_FORMAT));

export const nameSchema = z
  .string()
  .trim()
  .regex(/^[a-zA-Z ]+$/gm, 'The first/last names must contain only letters');

export const emailSchema = z
  .string()
  .email()
  .regex(/@[a-zA-Z0-9]{2,}\.[A-Za-z]{2,}$/gm, 'Invalid domain part');

export const passwordSchema = z
  .string()
  .min(8, 'The password must be at least 8 characters long')
  .max(32, 'The password must be a maximum 32 characters')
  .regex(/[A-Z]+/gm, 'The password must contain at least one uppercase character')
  .regex(/[0-9]+/gm, 'The password must contain at least one digit')
  .regex(/^[A-Za-z0-9#?!@$%^&*-/]+$/gm, 'Only latin letters, numbers and # ? ! @ $ % ^ & * - / are allowed')
  .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9#?!@$%^&*-/]*$/gm, 'Password is not valid');

export const addressSchema = z
  .object({
    country: isoCountrySchema,
    city: citySchema,
    streetName: streetNameSchema,
    streetNumber: streetNumberSchema,
    apartment: apartmentSchema.optional(),
    postalCode: z.string()
  })
  .superRefine(checkCountryPostalCodeSuperRefine);

export type Address = z.infer<typeof addressSchema>;
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
