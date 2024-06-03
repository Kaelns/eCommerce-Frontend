export interface ISideDrawerProps {
  data: IUseSideDrawerReturn;
}

export interface IUseSideDrawerReturn {
  isOpenDrawer: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}
