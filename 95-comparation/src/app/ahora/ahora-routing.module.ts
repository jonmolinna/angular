import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './variables/variables.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'variables',
    component: VariablesComponent,
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
