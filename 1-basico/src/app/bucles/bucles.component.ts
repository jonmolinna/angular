import { Component } from '@angular/core';
import { Persona } from './persona.interface';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css'],
})
export class BuclesComponent {
  personas: Persona[] = [
    { name: 'Kendall', age: 20 },
    { name: 'Meryem', age: 18 },
    { name: 'Emma', age: 22 },
    { name: 'Dallas', age: 24 },
  ];
}
