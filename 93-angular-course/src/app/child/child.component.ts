import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() message: string = '';

  @Output() messageHijo = new EventEmitter<string>();
  mensaje: string = '';

  @Output() incrementarNumero = new EventEmitter<void>();
  @Output() decrementarNumero = new EventEmitter<void>();

  enviarMessage() {
    this.messageHijo.emit(this.mensaje);
  }

  addNumber() {
    this.incrementarNumero.emit();
  }

  restNumber() {
    this.decrementarNumero.emit();
  }
}
