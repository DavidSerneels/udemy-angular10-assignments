import { Component } from '@angular/core';
import {UserService} from './user.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  constructor(private counterService: CounterService) {
  }

  getCount(active: boolean) {
    return active ? this.counterService.activeCounter : this.counterService.inactiveCounter;
  }
}
