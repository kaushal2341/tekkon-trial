import loadable from '@loadable/component';
import { TLoading } from '@tekkon-trial/ui-elements';
const TDashboard = loadable(() => import('./containers/TDashboard'), {
  fallback: <TLoading/>,
});

export const routes = [
  {
    path: '/',
    component: TDashboard,
    name: 'Dashboard',
  },
];
