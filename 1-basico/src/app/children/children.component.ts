import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent {
  @Input() language?: string;
  @Input() fullName?: string;
  @Input() age?: number;
  @Input() count?: number;
}
