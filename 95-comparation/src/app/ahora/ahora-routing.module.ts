import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './variables/variables.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'variables',
        component: VariablesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'variables',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AhoraRoutingModule {}