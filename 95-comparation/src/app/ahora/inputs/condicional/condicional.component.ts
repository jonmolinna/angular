import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
})
export class CondicionalComponent {
  @Input({ transform: booleanAttribute }) isCompany = true;
}
