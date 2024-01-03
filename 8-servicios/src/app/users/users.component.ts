import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { userIterface } from '../iterfaces/user.iterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: userIterface[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getAllUsers();
  }
}
