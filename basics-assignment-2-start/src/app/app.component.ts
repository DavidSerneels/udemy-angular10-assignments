import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;

  resetUsername(): void {
    this.username = '';
  }

  resetButtonDisabled(): boolean {
    return this.username == null || this.username.length === 0;
  }
}
