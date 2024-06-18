export enum ManageCart {
  ADD = 'addLineItem',
  REMOVE = 'removeLineItem',
  DELETE = 'delete'
}

export interface IManageCartReturn {
  error: string;
  lineItemId: string;
}
