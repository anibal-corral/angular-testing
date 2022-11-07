import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have a router link to /path1',()=>{
    fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
  
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    // console.log(debugElements);
  
    let exist=false;
    for(const e of debugElements){
      if(e.attributes['routerLink']==='/path1'){
        exist =true;
        break
      }
    }
    expect(exist).toBeTruthy();
  
  
  
  })
});
