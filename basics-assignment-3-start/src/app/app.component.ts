import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logItems = [];
  currentNumber = 0;

  onClickDetailsButton(): void {
    this.logItems.push(++this.currentNumber);
  }

  getBackgroundColor(item: number): string {
    return (item >= 5) ? 'blue' : 'white';
  }
}
