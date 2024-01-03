import { Component, Input } from '@angular/core';
import { userIterface } from '../iterfaces/user.iterface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() users: userIterface[] = [];

  constructor(private usersService: UsersService) {}

  handleDeleteUserById(id: number) {
    this.usersService.deleteOneUserById(id);
  }

  handleUpdateUserById(id: number) {
    this.usersService.findOneUserById(id);
  }
}
