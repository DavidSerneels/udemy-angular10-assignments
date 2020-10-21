import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form', {static: true}) form: NgForm;
  defaultSubscription = 'basic';

  onSubmit() {
    console.log('email address: ' + this.form.value.email);
    console.log('subscription type: ' + this.form.value.subscription);
    console.log('password (very secure): ' + this.form.value.password);
    this.form.reset({
      subscription: this.defaultSubscription
    });
  }
}
