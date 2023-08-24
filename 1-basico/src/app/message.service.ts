import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  messages: string[] = [];

  addMessages(message: string) {
    this.messages.push(message);
    // this.messages = [...this.messages, message];
  }
}
