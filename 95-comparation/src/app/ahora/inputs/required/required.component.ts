import { Component, OnInit } from '@angular/core';
import { elementsInterface } from '../element.interface';
import elementsData from '../elements.data';

@Component({
  selector: 'app-required',
  templateUrl: './required.component.html',
})
export class RequiredComponent implements OnInit {
  data: elementsInterface[] = [];

  ngOnInit(): void {
    this.data = elementsData;
  }
}
