export const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('./app/dashboard/Dashboard.vue'),
  },
  {
    path: '/',
    name: 'overview',
    component: () => import('./app/overview/OverviewView.vue'),
  },
];
