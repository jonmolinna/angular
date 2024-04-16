import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { taskInterface } from '../interface/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  initialForm: FormGroup;
  tasks: taskInterface[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TasksService
  ) {
    this.initialForm = this.formBuilder.group({
      task: '',
      description: '',
    });
  }

  async handleSubmit() {
    let newTask = {
      ...this.initialForm.value,
      id: new Date().getTime(),
    };
    this.taskService.addOneTask(newTask);
    this.initialForm.reset();
  }

  async getAllTasks() {
    this.tasks = this.taskService.getAllTasks();
  }

  async deleteTaskById(id: number) {
    this.taskService.deleteOneTaskById(id);
  }

  ngOnInit(): void {
    this.getAllTasks();
  }
}
