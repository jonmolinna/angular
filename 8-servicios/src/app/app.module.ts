import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserformComponent } from './userform/userform.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserformComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [UsersService, TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
