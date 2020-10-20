import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameEmitter = new EventEmitter<number>();
  num: number = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.gameEmitter.emit(++this.num);
      }, 1000
    );
  }

  onGameStop() {
    clearInterval(this.interval);
  }
}
