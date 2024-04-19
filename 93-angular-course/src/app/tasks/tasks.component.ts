import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { taskInterface } from '../interface/task.interface';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  initialForm: FormGroup;
  tasks: taskInterface[] = [];
  status: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TasksService
  ) {
    this.initialForm = this.formBuilder.group({
      task: '',
      description: '',
      id: 0,
    });
  }

  async handleSubmit() {
    // Update
    if (this.status) {
      this.taskService.updateTask(this.initialForm.value);
      this.getAllTasks();
    }
    // Add
    else {
      let newTask = {
        ...this.initialForm.value,
        id: new Date().getTime(),
      };
      this.taskService.addOneTask(newTask);
    }
    this.initialForm.reset();
  }

  async getAllTasks() {
    this.tasks = this.taskService.getAllTasks();
  }

  async deleteTaskById(id: number) {
    this.taskService.deleteOneTaskById(id);
  }

  async getOneTaskById(id: number) {
    const task = this.taskService.getOneTaskById(id);

    if (task) {
      this.initialForm.controls['task'].setValue(task.task);
      this.initialForm.controls['description'].setValue(task.description);
      this.initialForm.controls['id'].setValue(task.id);
    }
    this.status = true;
  }

  ngOnInit(): void {
    this.getAllTasks();
  }
}
