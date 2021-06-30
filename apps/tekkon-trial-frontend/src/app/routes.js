import loadable from "@loadable/component";
const Loading= ()=><div>Loading...</div>
const TDashboard = loadable(() => import('./containers/TDashboard'), {
    fallback: <Loading/>,
});

export const routes = [
  {
    path: '/',
    component: TDashboard,
    name: 'Dashboard',
  },
];