import { Player } from './class';

describe('Testing class',()=>{
    const player = new Player();
    beforeAll(()=>{
        // console.log('beforeAll')
    });
    beforeEach(()=>{
        // console.log('beforeEach')
    });
    afterAll(()=>{
        // console.log('afterAll')
    });
    afterEach(()=>{
        // console.log('afterEach')
      player.hp=100;
    });


    it('Should return 80 hp if it is hitted with 20 of damage',()=>{
        const player = new Player();
        const resp = player.hitted(20);
        expect(resp).toBe(80);
    })
    it('Should return 50 hp if it is hitted with 50 of damage',()=>{
        const player = new Player();
        const resp = player.hitted(50);
        expect(resp).toBe(50);
    })
})