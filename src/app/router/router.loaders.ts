import type { IAppStore } from '@/shared/redux';
import { store } from '@/app';
import { authApi } from '@/services/ecommerceApi/model/authApi';

//  * That hack is to avoid cyclic dependency when we pass router to store and use store inside router
const loadStore = new Promise<IAppStore>((res) => {
  setTimeout(() => res(store), 0);
});

export const startSessionLoader = () => {
  loadStore.then((store) => store.dispatch(authApi.util.prefetch('startSession', undefined, {})));
  return null;
};
