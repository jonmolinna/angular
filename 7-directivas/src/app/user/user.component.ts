import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../iterfaces/user.iterface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() users?: User[];
  @Output() deleteOneUser = new EventEmitter<number>();

  handleDeleteUser(id: number) {
    this.deleteOneUser.emit(id);
  }
}
