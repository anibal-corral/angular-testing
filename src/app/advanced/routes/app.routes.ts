import {Routes} from '@angular/router';
import { DoctorsComponent } from 'src/app/intermediate/spies/doctors.component';
import { DoctorComponent } from '../../intermediate2/doctor/doctor.component';
import { IncrementerComponent } from '../../intermediate2/incrementer/incrementer.component';


export const routes:Routes =[
    {path:'path1', component:DoctorComponent },
    {path:'path2/:id', component:DoctorComponent },
    {path:'path3', component:DoctorsComponent },
    {path: '**', component:IncrementerComponent}
]