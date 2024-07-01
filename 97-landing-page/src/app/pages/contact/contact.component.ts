import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  // signo de admiracion, nunca va a ser null
  initialForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  enviar(event: Event) {
    event.preventDefault();
    console.log('Enviado', this.initialForm.value);
  }

  hasErrors(field: string, typeError: string) {
    return (
      this.initialForm.get(field)?.hasError(typeError) &&
      this.initialForm.get(field)?.touched
    );
  }
}
