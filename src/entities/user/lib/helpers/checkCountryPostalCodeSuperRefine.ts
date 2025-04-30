import { z } from 'zod';

import { isoCountries, isoPostalRegex } from '@/shared/model/data';

export const checkCountryPostalCodeSuperRefine = (
  { country, postalCode }: { country: string; postalCode: string },
  ctx: z.RefinementCtx
) => {
  if (!(country in isoCountries) && !(country in isoPostalRegex)) {
    return ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `There is no such country like "${country}" in our database`
    });
  }

  const countryPostalRegexString = isoPostalRegex[country as keyof typeof isoPostalRegex].postalRegex;
  const countryPostalRegex = new RegExp(countryPostalRegexString);

  if (countryPostalRegexString && !countryPostalRegex.test(postalCode)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `The postal code "${postalCode}" is invalid for "${country}"`
    });
  }
};
