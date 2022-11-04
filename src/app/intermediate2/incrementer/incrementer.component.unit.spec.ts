import { Component } from '@angular/core';
import { IncrementerComponent } from './incrementer.component';
describe('Incrementer component unit',()=>{
    let component:IncrementerComponent;
    beforeEach(()=>component=new IncrementerComponent());
    it('Progress should be maximun 100',()=>{
        component.progress=55;
        component.changeValues(5);
        expect(component.progress).toBe(60)


    })
})