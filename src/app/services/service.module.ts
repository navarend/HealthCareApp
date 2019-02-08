import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SharedService, SideBarService } from './service.index';

@NgModule({
  declarations: [],
  providers: [ SettingsService, SharedService, SideBarService ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
