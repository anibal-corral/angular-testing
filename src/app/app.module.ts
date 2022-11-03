import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorComponent } from './intermediate2/doctor/doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
