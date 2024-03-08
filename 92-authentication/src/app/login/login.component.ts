import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  initialForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.initialForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  async handleSubmit() {
    // console.log('YOOO', this.initialForm.value);
    this.userService
      .login(this.initialForm.value)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  handleLoginWithGoogle() {
    this.userService
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch((error) => console.log(error));
  }
}
