import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { ChartsOneComponent } from '../pages/charts-one/charts-one.component';
import { AccountSettingsComponent } from '../pages/account-settings/account-settings.component';

const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'chartsOne', component: ChartsOneComponent },
      { path: 'accountSettings', component: AccountSettingsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'pages' },
    ]
  }
];

export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);
