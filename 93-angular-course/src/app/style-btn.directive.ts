import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleBtn]',
})
export class StyleBtnDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
