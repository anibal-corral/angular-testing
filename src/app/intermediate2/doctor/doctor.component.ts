import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: [
  ]
})
export class DoctorComponent implements OnInit {
doctors:any[]=[];
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
  }

  sayHi(name:string){
    return 'Hi '+ name;
  }
  getDoctors(){
    this.doctorService.getDoctors().subscribe((resp:any)=>this.doctors=resp);
  }

}
