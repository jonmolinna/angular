import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariablesComponent } from './variables/variables.component';
import { AhoraRoutingModule } from './ahora-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { HijoComponent } from './tags/hijo/hijo.component';

@NgModule({
  declarations: [VariablesComponent, HomeComponent, TagsComponent, HijoComponent],
  imports: [CommonModule, AhoraRoutingModule, FormsModule],
})
export class AhoraModule {}
