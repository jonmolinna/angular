import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { AntesRoutingModule } from './antes-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SimpleComponent } from './variables/simple/simple.component';
import { ObservablesComponent } from './variables/observables/observables.component';

@NgModule({
  declarations: [VariablesComponent, HomeComponent, SimpleComponent, ObservablesComponent],
  imports: [CommonModule, AntesRoutingModule, FormsModule],
})
export class AntesModule {}
