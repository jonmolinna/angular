import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css'],
})
export class Children2Component {
  numero: number = 0;

  @Output() sumNumberClick = new EventEmitter<number>();

  sumNumber() {
    this.sumNumberClick.emit((this.numero += 1));
  }

  resetNumber() {
    this.numero = 0;
  }

  resNumber() {
    this.numero -= 1;
  }
}
