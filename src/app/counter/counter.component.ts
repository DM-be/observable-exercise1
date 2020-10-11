import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


interface Observer {
  next?: (value: any) => void;
  complete?: () => void;
  error?: (error: any) => void;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public count: number = 0;
  private incrementButton: HTMLButtonElement = document.querySelector('incrementBtn');
  private decrementButton: HTMLButtonElement = document.querySelector('decrementBtn');

  constructor() { }

  ngOnInit() {
  }

  // use the observer interface and the Observable class to create your own observer
  // clicking the button should increate count by 1
  // remember, a call to next() invokes this on the observer ;)
  // the observer handles the incrementing of the counter
  // use intellisense to check which method we could use on incrementButton
  // subscriber and observer are used interchangeable in the documentation
  // https://rxjs-dev.firebaseapp.com/api/index/class/Observable
  incrementCounter() {
    //const observable = new Observable(observer => {...})
    const observer: Observer = {};

    
  }

  decrementCounter() {
    
  }


  // could you implement the same thing, without using a global variable?
 
  

}