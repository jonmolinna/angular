import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  tasks: Array<string> = [];
  task: string = '';

  private taskService = inject(TasksService);

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    this.taskService.addTask(this.task);
    this.task = '';
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
    this.tasks = this.taskService.getTasks();
  }
}
