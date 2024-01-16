import { Component, OnInit } from '@angular/core';
import { usersService } from '../users.service';
import { userInterface } from '../user.iterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  users: userInterface[] = [];

  constructor(private usersService: usersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getAllUsers();
  }

  handleDelete(id: number) {
    this.usersService.deleteUser(id);
  }
}
