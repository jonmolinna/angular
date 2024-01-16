import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

import { usersService } from './users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUpdateComponent } from './form-update/form-update.component';
import { ShowComponent } from './show/show.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'form', component: FormComponent },
  { path: 'update/:id', component: FormUpdateComponent },
  { path: 'show', component: ShowComponent },
  { path: '**', component: ErrorNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FormComponent,
    FormUpdateComponent,
    ShowComponent,
    ErrorNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [usersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
