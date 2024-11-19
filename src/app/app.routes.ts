import { Routes } from '@angular/router';

import { DashboardLayoutComponent } from './presentation/layouts/dashboardLayout/dashboardLayout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./presentation/pages/homePage/homePage.component'),
        data: {
          icon: 'home',
          title: 'Inicio',
          description: 'Página de inicio',
        },
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./presentation/pages/aboutPage/aboutPage.component'),
        data: {
          icon: 'help',
          title: 'Acerca de',
          description: 'Acerca de',
        },
      },
    ],
  },
];
