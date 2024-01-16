import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
})
export class FormUpdateComponent implements OnInit {
  initialForm: FormGroup;
  idUser: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: usersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initialForm = this.formBuilder.group({
      name: '',
      age: '',
    });
  }

  ngOnInit(): void {
    this.idUser = +this.route.snapshot.params['id'];

    let user = this.usersService.findOneUserById(this.idUser);

    this.initialForm.controls['name'].setValue(user?.name);
    this.initialForm.controls['age'].setValue(user?.age);
  }

  handleSubmit() {
    // service update
    this.usersService.updateUser({
      ...this.initialForm.value,
      id: this.idUser,
    });
    this.initialForm.reset();
    this.router.navigate(['']);
  }
}

// https://stackblitz.com/edit/crud-reactive-forms?file=src%2Fapp%2Fapp.component.ts
