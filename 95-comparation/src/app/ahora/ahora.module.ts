import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { AhoraRoutingModule } from './ahora-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { HijoComponent } from './tags/hijo/hijo.component';
import { InputsComponent } from './inputs/inputs.component';
import { ChildComponent } from './inputs/child/child.component';
import { CondicionalComponent } from './inputs/condicional/condicional.component';
import { RequiredComponent } from './inputs/required/required.component';
import { TransformComponent } from './inputs/transform/transform.component';

@NgModule({
  declarations: [VariablesComponent, HomeComponent, TagsComponent, HijoComponent, InputsComponent, ChildComponent, CondicionalComponent, RequiredComponent, TransformComponent],
  imports: [CommonModule, AhoraRoutingModule, FormsModule],
})
export class AhoraModule {}
