import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UserService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  setUserActive(name: string) {
    const index = this.inactiveUsers.indexOf(name);
    if (index !== -1) {
      this.inactiveUsers.splice(index, 1);
      this.activeUsers.push(name);
      this.counterService.incrementCounter(true);
    }
  }

  setUserInactive(name: string) {
    const index = this.activeUsers.indexOf(name);
    if (index !== -1) {
      this.activeUsers.splice(index, 1);
      this.inactiveUsers.push(name);
      this.counterService.incrementCounter(false);
    }
  }
}
