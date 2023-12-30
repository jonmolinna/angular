import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../iterfaces/user.iterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];
  initialForm: FormGroup;
  idUser: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      name: '',
      age: '',
    });
  }

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'Kendra', age: 20 },
      { id: 2, name: 'Malina', age: 27 },
      { id: 3, name: 'Noah', age: 23 },
      { id: 4, name: 'Meryem', age: 29 },
    ];
  }

  handleSubmit() {
    // this.users.push(this.initialForm.value);
    this.users = [
      ...this.users,
      { ...this.initialForm.value, id: this.users.length + 1 },
    ];

    this.initialForm.reset();
  }

  deleteUser(id: number) {
    let newUser = this.users.filter((user) => user.id !== id);
    this.users = [...newUser];
  }
}
