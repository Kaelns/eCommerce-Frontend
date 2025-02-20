import { checkCountryPostalCodeSuperRefine } from '@/entities/user/lib/helpers/checkCountryPostalCodeSuperRefine';
import { z } from 'zod';

describe('checkCountryPostalCodeSuperRefine function', () => {
  const correctCountry = 'BY'; // Belarus;
  const correctPostalCode = '220028'; // 6 digits;

  const ctx = {
    addIssue: vi.fn()
  } as unknown as z.RefinementCtx;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('works without issues with correct data', () => {
    checkCountryPostalCodeSuperRefine({ country: correctCountry, postalCode: correctPostalCode }, ctx);
    expect(ctx.addIssue).not.toHaveBeenCalled();
  });

  test('invalid country ISO issue', () => {
    const invalidCountry = 'invalid country ISO';

    checkCountryPostalCodeSuperRefine({ country: invalidCountry, postalCode: correctPostalCode }, ctx);

    expect(ctx.addIssue).toHaveBeenCalledTimes(1);
    expect(ctx.addIssue).toHaveBeenCalledWith({
      code: z.ZodIssueCode.custom,
      message: `There is no such country like "${invalidCountry}" in our database`
    });
  });

  test('invalid postal code issue', () => {
    const country = 'BY';
    const invalidPostalCode = '2200281111';

    checkCountryPostalCodeSuperRefine({ country, postalCode: invalidPostalCode }, ctx);

    expect(ctx.addIssue).toHaveBeenCalledTimes(1);
    expect(ctx.addIssue).toHaveBeenCalledWith({
      code: z.ZodIssueCode.custom,
      message: `The postal code "${invalidPostalCode}" is invalid for "${country}"`
    });
  });

  test('country without postal regex', () => {
    const country = 'AO'; // Angola;
    const emptyPostalCode = "whatever we put here won't be used";

    checkCountryPostalCodeSuperRefine({ country, postalCode: emptyPostalCode }, ctx);

    expect(ctx.addIssue).not.toHaveBeenCalled();
  });
});
