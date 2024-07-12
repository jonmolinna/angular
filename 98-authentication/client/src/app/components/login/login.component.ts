import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { userInterface } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private toastr = inject(ToastrService);
  private userService = inject(UserService);

  initialForm: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const username = this.initialForm.get('username');
    const password = this.initialForm.get('password');

    // Validamos campos vacios
    if (username?.status === 'INVALID' || password?.status === 'INVALID') {
      this.toastr.error('Ingrese los campos', 'Error');
      return;
    }

    // Creando el Objeto
    const user: userInterface = {
      username: username?.value,
      password: password?.value,
    };

    console.log('YOOOO login', user);

    this.loading = true;

    this.userService.login(user).subscribe({
      next: (data) => {
        console.log('yoooo', data);
      },
    });
  }
}
