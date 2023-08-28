import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursesdetail',
  templateUrl: './coursesdetail.component.html',
  styleUrls: ['./coursesdetail.component.css'],
})
export class CoursesdetailComponent {
  course: string = '';

  // constructor(private route: ActivatedRoute) {
  //   this.route.params.subscribe((params) => (this.course = params['course']));
  // }

  constructor(private route: ActivatedRoute) {}

  // Ciclo de vida del componente
  // 1 - Se ejecuta cuando el componente se a inicializado
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.course = params['course'];
    });
  }
}
