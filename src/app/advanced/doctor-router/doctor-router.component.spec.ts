import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRouterComponent } from './doctor-router.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';


class FakeRouter{
  navigate(params:any){

  }
}
class FakeActivatedRouter{
  params:Observable<any> =of();
}

describe('DoctorRouterComponent', () => {
  let component: DoctorRouterComponent;
  let fixture: ComponentFixture<DoctorRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRouterComponent ],
      providers:[
        {provide:Router, useClass:FakeRouter},
        // Router, 
        // ActivatedRoute
        {provide:ActivatedRoute, useClass:FakeActivatedRouter}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should redirect to doctor when save',()=>{
    const router = TestBed.inject(Router);
    const spy = spyOn(router,'navigate');
    component.saveDoctor();
    expect(spy).toHaveBeenCalledWith(['doctor','007'])
  })
});
