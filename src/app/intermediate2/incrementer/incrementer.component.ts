import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';
@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  
})
export class IncrementerComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress!: ElementRef;
  @Input('name') label: string = 'Label';
   @Input() progress: number = 50;
  @Output('updateValue') changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onChanges( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progress = 100;
    }else if ( newValue <= 0 ) {
      this.progress = 0;
    }else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.changeValue.emit( this.progress );

  }

  changeValues( value: number ) {

    if ( this.progress >= 100 && value > 0 ) {
      this.progress = 100;
      return;
    }

    if ( this.progress <= 0 && value < 0 ) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;

    this.changeValue.emit( this.progress );

  }

}








