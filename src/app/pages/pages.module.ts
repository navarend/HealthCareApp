import { NgModule } from '@angular/core';

import { PAGES_ROUTING } from '../pages/pages.route';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { ChartsOneComponent } from '../pages/charts-one/charts-one.component';
import { PagesComponent } from '../pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';

import { IncrementerComponent } from '../components/incrementer/incrementer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    ChartsOneComponent,IncrementerComponent,
    DoughnutChartComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    ChartsOneComponent
  ],
  imports:[
    SharedModule,
    PAGES_ROUTING,
    FormsModule,ChartsModule
  ]
})
export class PagesModule { }
