import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IncrementerComponent } from './incrementer.component';

describe('IncrementerComponent', () => {
  let component: IncrementerComponent;
  let fixture: ComponentFixture<IncrementerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should should label', () => {
    component.label = 'My label';

    fixture.detectChanges();

    const element:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(element.innerHTML).toContain('My label');

  });

  xit('Should show progress value in input',()=>{
    component.changeValues(5);
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      const input = fixture.debugElement.query(By.css('input'));
      const element = input.nativeElement;
  
      expect(element.value).toBe('55'); 
    })
  })

  it('should increase/decrease by 5 with one click',()=>{
    const btns = fixture.debugElement.queryAll(By.css('.btn-primary'));
    // console.log(btns);

    btns[0].triggerEventHandler('click', null);

    expect(component.progress).toBe(45);
    btns[1].triggerEventHandler('click', null);
    expect(component.progress).toBe(50);
    
  
  })


  it('should change progress depend on by 5 with one click',()=>{
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    const btns = fixture.debugElement.queryAll(By.css('.btn-primary'));
    btns[0].triggerEventHandler('click', null);
     fixture.detectChanges();
    expect(h3.innerHTML).toContain('45')
  
    
  
  })
});
