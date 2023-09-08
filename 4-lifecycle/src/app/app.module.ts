import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOnChangesComponent } from './components/ng-on-changes/ng-on-changes.component';

// Para usar ngModel
import { FormsModule } from '@angular/forms';
import { NgOnInitComponent } from './components/ng-on-init/ng-on-init.component';

@NgModule({
  declarations: [AppComponent, NgOnChangesComponent, NgOnInitComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
