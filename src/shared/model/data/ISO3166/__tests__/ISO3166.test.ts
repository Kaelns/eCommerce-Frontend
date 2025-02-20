import isoCountry from '@/shared/consts/ISO3166/ISO3166-countries.json';
import isoPostalRegex from '@/shared/consts/ISO3166/ISO3166-postal-regex.json';
import isoCountryNoPostal from '@/shared/consts/ISO3166/ISO3166-countries-no-postal.json';

describe('ISO3166 json lists', () => {
  const isoCountryKeys = Object.keys(isoCountry) as (keyof typeof isoCountry)[];
  const isoPostalRegexKeys = Object.keys(isoPostalRegex) as (keyof typeof isoPostalRegex)[];
  const isoCountryNoPostalKeys = Object.keys(isoCountryNoPostal) as (keyof typeof isoCountryNoPostal)[];

  it('keys must be the same in isoCountry and isoPostalRegex', () => {
    const areKeysTheSame = isoCountryKeys.every((key) => key in isoPostalRegex) && isoCountryKeys.length === isoPostalRegexKeys.length;
    expect(areKeysTheSame).toBeTruthy();
  });

  it('countries names match each other', () => {
    const isCountriesMatch = isoCountryKeys.every((key) => {
      return isoCountry[key] === isoPostalRegex[key].country;
    });
    expect(isCountriesMatch).toBeTruthy();
  });

  it("isoCountryNoPostal contains countries from isoPostalRegex that does't have postal", () => {
    const isCountriesWithoutPostal = isoCountryNoPostalKeys.every((key) => {
      return key in isoPostalRegex && !isoPostalRegex[key].postalRegex && isoCountryNoPostal[key] === isoPostalRegex[key].country;
    });
    expect(isCountriesWithoutPostal).toBeTruthy();
  });
});
