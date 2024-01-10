import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate(['']);
  }
}
