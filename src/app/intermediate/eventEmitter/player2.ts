import { EventEmitter } from "@angular/core";

export class Player2{

    hp:number;
    hpChange:EventEmitter<number>=new EventEmitter<number>()
    constructor(){
        this.hp =100
    }

    hitted(damage:number){
        if(damage>=this.hp){
            this.hp = 0;
        }else{
            this.hp = this.hp-damage;
        }
        this.hpChange.emit(this.hp);
        // return this.hp;
    }

}