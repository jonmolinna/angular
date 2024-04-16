import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  numero: number = 0;

  constructor(private contadorService: ContadorService) {}
  // contadorService = inject(ContadorService);

  getNumber(): void {
    this.numero = this.contadorService.getNumber();
  }

  addOneNumber() {
    this.contadorService.setAddNumber(1);
    this.getNumber();
  }

  addTwoNumber() {
    this.contadorService.setAddNumber(2);
    this.getNumber();
  }

  restOneNumber() {
    this.contadorService.setRestNumber(1);
    this.getNumber();
  }

  restTwoNumber() {
    this.contadorService.setRestNumber(2);
    this.getNumber();
  }

  resetNumber() {
    this.contadorService.setResetNumber();
    this.getNumber();
  }

  ngOnInit(): void {
    this.getNumber();
  }
}
