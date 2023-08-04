import { Component } from '@angular/core';
import { Company } from './company.interface';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  name: string = 'Jon Dallas';
  company: Company = {
    name: 'tanase inc',
    age: 5,
  };
  numero: number = 0;
  decrementar() {
    this.numero--;
  }
  incrementar() {
    this.numero += 1;
  }
}
