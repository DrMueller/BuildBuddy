import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as comp from './components';
import * as serv from './services';
@NgModule({
  exports: [
    comp.PersonalBuildsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    serv.BuildOverviewService
  ],
  declarations: [
    comp.PersonalBuildsComponent,
    comp.DashboardComponent,
    comp.BuildsOverviewComponent]
})
export class PersonalBuildsModule { }
