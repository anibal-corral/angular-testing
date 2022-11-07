import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRouterComponent } from './doctor-router.component';
import { Router, ActivatedRoute } from '@angular/router';
import { from, Observable, of, Subject } from 'rxjs';


class FakeRouter{
  navigate(params:any){

  }
}
class FakeActivatedRouter{
  // params:Observable<any> =of();
  private subject = new Subject();


  push(value:any){
    this.subject.next(value);

  }

  get params(){
    return this.subject.asObservable();
  }
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
        {provide:ActivatedRoute, useClass:FakeActivatedRouter, useValue:{
          params:from([{id:'007'}])
        }}
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
  });

  xit('Shold put id = new ',()=>{
    component = fixture.componentInstance;

    
    expect(component.id).toBe('new');


  })
});
