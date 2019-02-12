import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {


    this.CountFive().then( message => console.log('Finish', message)).catch( error => console.error('Error in promise.', error))
  }

  ngOnInit() {
  }

  CountFive(): Promise<boolean>{
    return new Promise( (resolve, rejeact) => {
    let count = 0;
    let interval = setInterval( () => {
        count +=1;
        console.log(count);
        if( count === 5 ){
          resolve(true);
          //rejeact('There are not numbers.');
          clearInterval(interval);
        }
      },1000);
    });
  }

}
