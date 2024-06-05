import { Component, OnInit } from '@angular/core';
import { elementsInterface } from './element.interface';
import elementsData from './elements.data';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
})
export class InputsComponent implements OnInit {
  elementsPeriodict: elementsInterface[] = [];

  ngOnInit(): void {
    this.elementsPeriodict = elementsData;
  }
}
