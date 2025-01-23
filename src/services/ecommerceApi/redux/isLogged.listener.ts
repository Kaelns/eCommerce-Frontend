import { reducerPath } from '@/services/ecommerceApi/ecommerceApiSlice';
import { listenerMiddleware } from '@/app';

//  FIXME Delete
listenerMiddleware.startListening({
  predicate: (action) => action.type.includes(reducerPath),
  effect: (action, _listenerApi) => {
    console.log(action);
    //  * False even if cookie is null
    // eslint-disable-next-line no-debugger
    // debugger;
    // const isLogged = getCookieByName(Cookies.USER_IS_LOGGED) === 'true';
    // listenerApi.dispatch(setIsLoggedAuthAction({ isLogged }));
  }
});
