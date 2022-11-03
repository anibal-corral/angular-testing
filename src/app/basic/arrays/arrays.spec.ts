import { getCars } from './arrays';

xdescribe('Tesing arrays',()=>{
    it('Should return array of 2 cars',()=>{
    const resp = getCars();

    // expect(resp.length).toBe(2);
    expect(resp.length).toBeGreaterThanOrEqual(2);
    });

    it('Should exist Mercedez and Fiat',()=>{
        const resp = getCars();
    
        // expect(resp.length).toBe(2);
        expect(resp).toContain('Mercedez');
        expect(resp).toContain('Fiat');
        });
})