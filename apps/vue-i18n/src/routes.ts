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
  {
    path: '/quantum-view',
    name: 'quantum-view',
    component: () => import('./app/quantum-view/QuantumView.vue'),
  },
];
