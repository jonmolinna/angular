import { Injectable } from '@angular/core';
import { userIterface } from './iterfaces/user.iterface';
import { usersData } from './data/users.data';
import { TasksService } from './tasks.service';

// @Injectable -> consiste en agregar (injectar) otros servicios
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private tasksService: TasksService) {}

  users: userIterface[] = usersData;

  getAllUsers(): userIterface[] {
    return this.users;
  }

  addUser(userInput: userIterface): void {
    const user = { ...userInput, id: this.users.length + 1 };
    this.users.push(user);
  }

  deleteOneUserById(id: number): void {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
  }

  findOneUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  addTask(): void {
    this.tasksService.addTask('Ir a correr');
  }
}
