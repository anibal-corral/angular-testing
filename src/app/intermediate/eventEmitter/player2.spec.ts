import { Player2 } from './player2';
describe('Emmit Player 2', ()=>{

let player2:Player2;
beforeEach(()=>{player2=new Player2()})

it('Should emmit an event when receive damage',()=>{
    let newHp=0;
    player2.hpChange.subscribe(hp =>{
        newHp=hp;
    });

    player2.hitted(2000);
    expect(newHp).toBe(0);
})
it('Should emmit an event when receive damage and survive if it is less than 100',()=>{
    let newHp=0;
    player2.hpChange.subscribe(hp =>{
        newHp=hp;
    });

    player2.hitted(99);
    expect(newHp).toBe(1);
})

})