import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface language {
  title: string;
  description: string;
}

interface employeesInterface {
  name: string;
  surname: string;
  cargo: string;
  salary: number;
}

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
})
export class NgForComponent implements OnInit {
  data: Array<language> = [];
  employees: Array<employeesInterface> = [];
  initialForm;

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      name: '',
      surname: '',
      cargo: '',
      salary: '',
    });
  }

  handleSubmit() {
    // this.employees.push(this.initialForm.value);
    const newEmployee: employeesInterface = {
      name: this.initialForm.value.name ? this.initialForm.value.name : '',
      surname: this.initialForm.value.surname
        ? this.initialForm.value.surname
        : '',
      cargo: this.initialForm.value.cargo ? this.initialForm.value.cargo : '',
      salary: this.initialForm.value.salary
        ? parseInt(this.initialForm.value.salary)
        : 0,
    };

    this.employees = [newEmployee, ...this.employees];
  }

  ngOnInit(): void {
    this.data = [
      {
        title: 'Python',
        description: 'lorem ipson letter 1',
      },
      {
        title: 'JavaScript',
        description: 'lorem ipson letter 2',
      },
      {
        title: 'Kotlin',
        description: 'lorem ipson letter 3',
      },
      {
        title: 'C++',
        description: 'lorem ipson letter 4',
      },
    ];

    this.employees = [
      {
        name: 'Kendra',
        surname: 'Contreras',
        cargo: 'CEO',
        salary: 4500,
      },
      {
        name: 'Emma',
        surname: 'Tanase',
        cargo: 'Contadora',
        salary: 1700,
      },
      {
        name: 'Mireya',
        surname: 'Espinoza',
        cargo: 'Ing. Industrial',
        salary: 2500,
      },
    ];
  }
}
