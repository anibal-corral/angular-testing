
import { from, of } from 'rxjs';
import { DoctorsComponent } from './doctors.component';
import { DoctorsService } from './doctors.service';
// import { HttpClient, HttpHandler } from '@angular/common/http';


describe('MedicosComponent', () => {

    let doctorComponent: DoctorsComponent;
    let doctorService:DoctorsService;

    beforeEach( () => {
        const spy = jasmine.createSpyObj('HttpClient', {post:of({}), get:of({})})
        doctorService = new DoctorsService(spy);
        doctorComponent = new DoctorsComponent(doctorService);
        
        
    });


    it('Initi: should load doctors', () => {
        const doctors = ['medico1', 'medico2', 'medico3']
        spyOn(doctorService,'getDoctors').and.callFake(()=>{
            console.log('getDoctors from spy on')
            return from([doctors]);
        })

        doctorComponent.ngOnInit();
        expect(doctorComponent.doctors.length).toBeGreaterThan(0);

   
    });

    it('Should request to server to add a doctor',()=>{
        const spy = spyOn(doctorService,'addDoctor').and.callFake(doctor=>{
            return of();
        })
        doctorComponent.addDoctor();

        expect(spy).toHaveBeenCalled();

    })


});
