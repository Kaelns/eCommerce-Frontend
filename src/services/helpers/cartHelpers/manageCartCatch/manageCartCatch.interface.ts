export enum ManageCart {
  INCREMENT = 'addLineItem',
  DECREMENT = 'removeLineItem',
  DELETE = 'delete',
  DISCOUNT = 'addDiscountCode'
}

export interface IManageCartReturn {
  error: string;
  lineItemId: string;
}
