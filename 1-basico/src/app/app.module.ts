import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';

// para trabajar con ngModel en el formulario
// formsModule => Formulario en plantillas
// ReactiveFormsModule => Formulario Reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario3Component } from './formulario3/formulario3.component';
import { Formulario4Component } from './formulario4/formulario4.component';
import { ChildrenComponent } from './children/children.component';
import { Children2Component } from './children2/children2.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { MessageAddComponent } from './message-add/message-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    Formulario3Component,
    Formulario4Component,
    ChildrenComponent,
    Children2Component,
    MessagesComponent,
    MessageComponent,
    MessageAddComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
