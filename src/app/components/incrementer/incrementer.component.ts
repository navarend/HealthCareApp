import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() progress: number = 50;
  @Input() legend: string = '';
  @Output() valueChange: EventEmitter<number> =  new EventEmitter();

  constructor() { }

  onchange( pEvent: number ){
  //  let elementHtml: any = document.getElementsByName('progress')[0];
//  console.log( this.txtProgress );
    if( (pEvent >= 100) || (pEvent <= 0) ){
      this.progress = this.progress >=100 ? 100: 0;
    }
  //  elementHtml.value = Number( this.progress );
  this.txtProgress.nativeElement.value = this.progress;
    this.valueChange.emit( this.progress );
  };

  ChangeValue( pProgress: number){
    this.progress += pProgress;
    if((this.progress >= 100) || (this.progress <= 0)){
      this.progress = this.progress >=100 ? 100: 0;
      return;
    }
    this.valueChange.emit( this.progress );
    this.txtProgress.nativeElement.focus();
  };

}
