import { Severity } from '@/components/AlertText/AlertText.interface';
import { IAssetsAction } from '@/store/actions/assetsAction';
import { StoreAction } from '@/store/store.interface';

const INIT_MODAL = {
  isOpen: false,
  message: '',
  severity: Severity.ERROR
};

export const assetsReducer = (prevState: typeof INIT_MODAL | undefined, action: IAssetsAction): typeof INIT_MODAL => {
  const state = prevState ?? INIT_MODAL;

  switch (action.type) {
    case StoreAction.ASSETS_SHOW_MODAL: {
      if (action.payload) {
        const { message, severity } = action.payload;
        return {
          ...state,
          isOpen: true,
          message,
          severity
        };
      }
      break;
    }
    case StoreAction.ASSETS_HIDE_MODAL: {
      return {
        ...state,
        isOpen: false
      };
    }
    default:
  }

  return state;
};
