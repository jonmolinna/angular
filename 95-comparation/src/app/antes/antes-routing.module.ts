import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './variables/variables.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { InputsComponent } from './inputs/inputs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'variables',
        component: VariablesComponent,
      },
      {
        path: 'tags',
        component: TagsComponent,
      },
      {
        path: 'inputs',
        component: InputsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntesRoutingModule {}
