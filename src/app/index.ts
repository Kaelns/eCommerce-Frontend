export { store, extraArgument } from '@/app/store/store';
// * export router after store to avoid circular dependency Cannot access 'router' before initialization
export { router, loadStore } from '@/app/router/router';

export { MuiTheme } from '@/app/config/mui-theme/MuiTheme';
