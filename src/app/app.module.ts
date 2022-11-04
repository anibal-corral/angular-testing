import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './advanced/routes/app.routes';

import { AppComponent } from './app.component';
import { DoctorComponent } from './intermediate2/doctor/doctor.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementerComponent } from './intermediate2/incrementer/incrementer.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
