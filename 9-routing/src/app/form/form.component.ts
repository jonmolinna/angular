import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  initialForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: usersService,
    private router: Router
  ) {
    this.initialForm = this.formBuilder.group({
      name: '',
      age: '',
    });
  }

  handleSubmit() {
    this.usersService.addUser(this.initialForm.value);
    this.initialForm.reset();
    this.router.navigate(['']);
  }
}
