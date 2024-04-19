import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContadorComponent } from './contador/contador.component';
import { ContadorService } from './contador.service';
import { TasksComponent } from './tasks/tasks.component';
import { StyleBtnDirective } from './style-btn.directive';
import { PipeCustomPipe } from './pipe-custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    ContadorComponent,
    TasksComponent,
    StyleBtnDirective,
    PipeCustomPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ContadorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
