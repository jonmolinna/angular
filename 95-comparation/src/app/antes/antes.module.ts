import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { AntesRoutingModule } from './antes-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SimpleComponent } from './variables/simple/simple.component';
import { ObservablesComponent } from './variables/observables/observables.component';
import { TagsComponent } from './tags/tags.component';
import { HijoComponent } from './tags/hijo/hijo.component';

@NgModule({
  declarations: [VariablesComponent, HomeComponent, SimpleComponent, ObservablesComponent, TagsComponent, HijoComponent],
  imports: [CommonModule, AntesRoutingModule, FormsModule],
})
export class AntesModule {}
