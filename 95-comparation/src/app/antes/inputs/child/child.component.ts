import { Component, Input } from '@angular/core';
import { elementsInterface } from '../element.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() data: elementsInterface[] = [];
}
