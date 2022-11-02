// describe('');
// it();

import { message } from "./string"

describe('Tests about strings', ()=>{

    it('Should return a string', ()=>{
        const resp = message('Anastasia');
        expect(typeof resp).toBe("string");
    })


})