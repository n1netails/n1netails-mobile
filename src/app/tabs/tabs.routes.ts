import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'alerts',
        loadComponent: () =>
          import('../alerts/alerts.page').then((m) => m.AlertsPage),
      },
      {
        path: 'create-alert',
        loadComponent: () =>
          import('../create-alert/create-alert.page').then((m) => m.CreateAlertPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/tabs/alerts',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/alerts',
    pathMatch: 'full',
  },
];