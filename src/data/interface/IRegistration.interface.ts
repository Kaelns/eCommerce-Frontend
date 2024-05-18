export interface IItem {
  label: string;
  name: string;
}
export interface IAddresses {
  country: IItem;
  city: IItem;
  street: IItem;
  postalCode: IItem;
}
export interface IInputs {
  email: IItem;
  password: IItem;
  lastName: IItem;
  firstName: IItem;
  birthday: IItem;
  shipping: IAddresses;
  billing: IAddresses;
}
