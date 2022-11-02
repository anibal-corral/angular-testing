import { increase } from "./numbers"

describe('Testing numbers',()=>{

    it('Should return 100 if number entered is bigger than 100',()=>{
       const resp = increase(300);
       expect(resp).toBe(100);

    });
    it('Should return number entered +1 is smaller than 100',()=>{
        const resp = increase(90);
        expect(resp).toBe(91);
        
     })

})