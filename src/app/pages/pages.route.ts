import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { ChartsOneComponent } from '../pages/charts-one/charts-one.component';
import { AccountSettingsComponent } from '../pages/account-settings/account-settings.component';
import { PromisesComponent } from '../pages/promises/promises.component';
import { RxjsComponent } from '../pages/rxjs/rxjs.component';

const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress' }  },
      { path: 'chartsOne', component: ChartsOneComponent, data: { title: 'Charts' }  },
      { path: 'accountSettings', component: AccountSettingsComponent, data: { title: 'Account settings' }  },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promises' }  },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' }  },
      { path: '', pathMatch: 'full', redirectTo: 'pages' },
    ]
  }
];

export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);
