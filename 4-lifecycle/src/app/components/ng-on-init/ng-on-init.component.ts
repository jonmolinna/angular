import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.css'],
})
export class NgOnInitComponent implements OnInit {
  logs: Array<string> = [new Date() + ''];

  constructor() {
    for (let i = 0; i < 100; i++) {
      console.log(i);
    }
  }

  ngOnInit(): void {
    this.logs.push(new Date() + '');
  }
}
