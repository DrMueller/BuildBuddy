import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as vss from './vss';
import { EnvironmentService } from './environment';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    vss.VssBuildService,
    vss.VssUserService,
    EnvironmentService
  ]
})
export class CoreServicesModule { }
