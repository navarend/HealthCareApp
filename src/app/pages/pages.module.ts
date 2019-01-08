import { NgModule } from '@angular/core';

import { PAGES_ROUTING } from '../pages/pages.route';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { ChartsOneComponent } from '../pages/charts-one/charts-one.component';
import { PagesComponent } from '../pages/pages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    ChartsOneComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    ChartsOneComponent
  ],
  imports:[
    SharedModule,
    PAGES_ROUTING
  ]
})
export class PagesModule { }
