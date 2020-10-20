import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  activeCounter: number = 0;
  inactiveCounter: number = 0;

  incrementCounter(active: boolean) {
    if (active) {
      this.activeCounter++;
    } else {
      this.inactiveCounter++;
    }
  }
}
