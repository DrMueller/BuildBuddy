import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpServiceResolverService } from './http';
import { EnvironmentService } from './environment';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    HttpServiceResolverService,
    EnvironmentService
  ]
})
export class CoreServicesModule { }
