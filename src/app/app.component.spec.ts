import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './advanced/routes/app.routes';
import { By } from '@angular/platform-browser';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      imports:[
        RouterTestingModule.withRoutes([])
      ],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testing app is running!');
  });

it('Should have a router outlet',()=>{
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();

  const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
  expect(debugElement).not.toBeNull();

})
xit('Should have a router link to /path1',()=>{
  const fixture = TestBed.createComponent(AppComponent);
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
