import {Component} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  constructor(public userService: UserService) {
  }

  toggleUser(name: string) {
    this.userService.setUserInactive(name);
  }
}
