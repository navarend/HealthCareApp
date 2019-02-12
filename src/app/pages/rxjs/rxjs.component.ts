import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
   this.subscription = this.CountThree().subscribe(
      number => console.log('Subs ', number), //The first Callback is the next
      error => console.error('Error in the obs ', error),//The second is the error
      () => console.log('The observer finished.') //and the last one is When the observer finished
    );
  }

  ngOnInit() {}

  ngOnDestroy() { this.subscription.unsubscribe(); }

  CountThree(): Observable<any>{
    return new Observable( observer => {
      let count = 0;
      let interval = setInterval( () => {
        count += 1;
        const objNumber = { value: count };
        observer.next( objNumber );

      //  if( count === 3){
      //    clearInterval( interval );
      //    observer.complete();
    //    }
      //  if( count === 2){
          //clearInterval( interval );
        //  observer.error('Sorry something was wrong');
      //  }
      }, 1000);
    }).pipe( map( resp => resp.value ),
             filter( (value, index) => {// only return numbers odd.
               if ( (value % 2) === 1 ){ // number odd
                 return true;
               }else{ //pair number
                 return false;
               }
             })
    );//.pipe( map( resp => resp.value ));
  }

}
