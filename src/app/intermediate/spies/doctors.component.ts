import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';
@Component({
  selector: 'app-doctors',
  template: `
    <p>
      doctors works!
    </p>
  `,
  styles: []
})
export class DoctorsComponent implements OnInit {

  public doctors: any[] = [];
  public msgError: string='';

  constructor( public _doctorService: DoctorsService ) { }

  ngOnInit() {
    this._doctorService.getDoctors()
          .subscribe( (doctors:any) => this.doctors = doctors );
  }

  addDoctor() {
    const doctor = { nombre: 'Doctor Anastasia Corral' };

    this._doctorService.addDoctor(doctor)
          .subscribe(
            (doctorDB: any) => this.doctors.push(doctorDB),
            (err: string) => this.msgError = err
          );
  }

  deleteDoctor(id: string) {
    const confir = confirm('Are you sure?');

    if ( confir ) {
      this._doctorService.deleteDoctor( id );
    }

  }

}
