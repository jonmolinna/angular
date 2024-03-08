import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  initialForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.initialForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  handleSubmit() {
    // console.log('YOOO', this.initialForm.value);
    this.userService
      .register(this.initialForm.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
