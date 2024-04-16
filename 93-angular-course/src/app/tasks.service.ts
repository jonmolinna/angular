import { Injectable } from '@angular/core';
import { taskInterface } from './interface/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: taskInterface[] = [];

  constructor() {}

  getAllTasks(): taskInterface[] {
    return this.tasks;
  }

  addOneTask(task: taskInterface): void {
    this.tasks.push(task);
  }

  deleteOneTaskById(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
  }
}
