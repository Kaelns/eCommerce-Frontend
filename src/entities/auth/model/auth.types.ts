export interface AppData {
  // TODO use types from json iso
  languages: string[];
  currencies: string[];
  isUserLogged: boolean;
  countries: Record<string, string>;
  countriesWithoutPostal?: Record<string, string>;
}
