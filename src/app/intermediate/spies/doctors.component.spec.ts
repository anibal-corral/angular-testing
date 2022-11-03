
import { from, of, throwError } from 'rxjs';
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

    // it('Should add a new doctor to doctors',()=>{
    //     const doctor = {id:1,name:"Anastasia"};

    //     spyOn(doctorService, "addDoctor").and.returnValue(of([doctor]))
    //     doctorComponent.addDoctor();

    //     // expect(doctorComponent.doctors.length).toBeGreaterThan(0);
    //     expect(doctorComponent.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);

    // });

    it('If addDoctor fails, msgError property should be equals to error service',()=>{
        
        const myError=`Doctor couldn't be added`;
        

        spyOn(doctorService, "addDoctor").and.returnValue(throwError(myError));
        
        doctorComponent.addDoctor();

        // expect(doctorComponent.doctors.length).toBeGreaterThan(0);
        expect(doctorComponent.msgError).toBe(myError);

    });


});
