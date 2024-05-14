import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  selected: string = '';

  constructor(private router: Router) {}

  handleSelected() {
    const route = this.selected;
    this.router.navigate([`antes/${route}`]);
  }
}
