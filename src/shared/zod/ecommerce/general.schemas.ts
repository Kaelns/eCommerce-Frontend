import dayjs from 'dayjs';
import { z } from 'zod';
import { DATE_DASH_FORMAT } from '@/shared/data/constants';
import { checkCountryPostalCodeSuperRefine } from '@/shared/zod/ecommerce/helpers/checkCountryPostalCodeSuperRefine';

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

export const shallowMyCartUpdateActionSchema = z
  .object({
    action: z.string()
  })
  .passthrough();
