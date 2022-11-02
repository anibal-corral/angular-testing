import { userLogged } from './boolean';
describe('Tesing booleans',()=>{
    it('Should return true',()=>{
const resp = userLogged();
expect(resp).toBeTruthy();


    })
})