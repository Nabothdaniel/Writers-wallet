import { lazy } from 'react';

const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));

const coreRoutes = [
 
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
];

const routes = [...coreRoutes];
export default routes;
