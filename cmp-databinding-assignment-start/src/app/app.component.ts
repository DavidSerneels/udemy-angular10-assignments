import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameComponents: Array<{type: string, num: number}> = [];

  onGameEmitted(componentNumber: number) {
    if (componentNumber % 2 === 0) {
      this.gameComponents.push({type: 'even', num: componentNumber});
    } else {
      this.gameComponents.push({type: 'odd', num: componentNumber});
    }
  }
}
