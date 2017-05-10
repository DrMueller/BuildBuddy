import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// areas
import { PersonalBuildsModule } from './areas/personal-builds';

// core-services
import { CoreServicesModule } from './common/core-services';


// app
import { AppComponent } from '.';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PersonalBuildsModule,
    CoreServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
