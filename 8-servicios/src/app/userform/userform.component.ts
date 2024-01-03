import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
})
export class UserformComponent {
  initialForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.initialForm = this.formBuilder.group({
      name: '',
      surname: '',
      age: '',
    });
  }

  handleSubmit() {
    this.usersService.addUser(this.initialForm.value);
    this.initialForm.reset();
  }
}
