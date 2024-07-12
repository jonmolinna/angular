import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { userInterface } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  private toastr = inject(ToastrService);
  private userService = inject(UserService);
  private router = inject(Router);

  initialForm: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const username = this.initialForm.get('username');
    const password = this.initialForm.get('password');
    const confirmPassword = this.initialForm.get('confirmPassword');

    // Validando Campos Vacios
    if (
      username?.status === 'INVALID' ||
      password?.status === 'INVALID' ||
      confirmPassword?.status === 'INVALID'
    ) {
      this.toastr.error('Ingrese los Campos', 'Error');
      return;
    }

    // Validando las contraseñas iguales
    if (password?.value !== confirmPassword?.value) {
      this.toastr.error('Las contraseñas son distintas', 'Error');
      return;
    }

    // Creando el objeto
    const user: userInterface = {
      username: username?.value,
      password: password?.value,
    };
    this.loading = true;

    this.userService.signIn(user).subscribe({
      next: (data) => {
        this.loading = false;
        this.toastr.success('Usuario Registrado', 'Registrado');
        this.router.navigate(['/login']);
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;

        if (error.error.message) {
          this.toastr.error(error.error.message, 'Error');
        } else {
          this.toastr.error('Ocurrio un error', 'Error');
        }
      },
      complete: () => console.log('complete'),
    });

    // this.userService.signIn(user).subscribe(
    //   (data) => {
    //     this.loading = false;
    //     this.toastr.success('Usuario Registrado', 'Registrado');
    //     this.router.navigate(['/login']);
    //   },
    //   (error: HttpErrorResponse) => {
    //     this.loading = false;

    //     if (error.error.message) {
    //       this.toastr.error(error.error.message, 'Error');
    //     } else {
    //       this.toastr.error('Ocurrio un error', 'Error');
    //     }
    //   }
    // );
  }
}
