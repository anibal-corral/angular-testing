import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';
describe('Doctor Component',()=>{
    let component: DoctorComponent;
    let fixture: ComponentFixture<DoctorComponent>;

    beforeEach(()=>{
    TestBed.configureTestingModule({
        declarations:[
            DoctorComponent
        ],
        providers:[],
        imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;

    });


    it('Component should be created',()=>{
        expect(component).toBeTruthy();
    })
    it('Should return doctor name',()=>{
        const name = "Anastasia"
        const res = component.sayHi(name);
        expect(res).toContain(name);
    })
})