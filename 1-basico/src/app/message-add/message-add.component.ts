import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-add',
  templateUrl: './message-add.component.html',
  styleUrls: ['./message-add.component.css'],
})
export class MessageAddComponent {
  constructor(public messageService: MessageService) {}

  message: string = '';

  addMessage() {
    this.messageService.addMessages(this.message);
    this.message = '';
  }
}
