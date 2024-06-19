export enum ManageCart {
  INCREMENT = 'addLineItem',
  DECREMENT = 'removeLineItem',
  DELETE = 'delete'
}

export interface IManageCartReturn {
  error: string;
  lineItemId: string;
}
