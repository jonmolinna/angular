import { Injectable } from '@angular/core';
import { userInterface } from './user.iterface';

@Injectable({
  providedIn: 'root',
})
export class usersService {
  constructor() {}

  users: userInterface[] = [
    {
      id: 1,
      name: 'Kendra Contreras',
      age: 27,
    },
    {
      id: 2,
      name: 'Jane Saez',
      age: 25,
    },
    {
      id: 3,
      name: 'Matt',
      age: 23,
    },
  ];

  getAllUsers(): userInterface[] {
    return this.users;
  }

  addUser(userInput: userInterface): void {
    const user = { ...userInput, id: this.users.length + 1 };
    this.users.push(user);
  }

  findOneUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  updateUser(body: userInterface) {
    const updatedUsers = this.users.map((user) => {
      if (user.id === body.id) {
        return { ...body, name: body.name, age: body.age };
      }
      return user;
    });

    this.users = updatedUsers;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
  }
}
