import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { ChartsOneComponent } from './pages/charts-one/charts-one.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'chartsOne', component: ChartsOneComponent },
      { path: '', pathMatch: 'full', redirectTo: 'pages' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pages', component: PagesComponent },
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, { useHash: true });
