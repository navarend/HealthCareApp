import { NgModule } from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadCrumbsComponent } from '../shared/bread-crumbs/bread-crumbs.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadCrumbsComponent
  ],
  exports:[
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadCrumbsComponent
  ]
})
export class SharedModule { }
