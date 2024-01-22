import { Component, Input } from '@angular/core';
import { employeeInterface } from '../employee.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input() employee?: employeeInterface;
}
