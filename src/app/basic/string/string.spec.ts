// describe('');
// it();

import { message } from "./string"

describe('Tests about strings', ()=>{

    it('Should return a string', ()=>{
        const resp = message('Anastasia');
        expect(typeof resp).toBe("string");
    });

    it('Should return a greeting with the parameter sent',()=>{
        const name = 'Anastasia';
        const resp = message(name);
        expect(resp).toBe("Hi "+ name);
        expect(resp).toContain(name);
    });


})