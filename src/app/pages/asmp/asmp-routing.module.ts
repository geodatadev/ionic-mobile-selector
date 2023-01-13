import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsmpPage } from './asmp.page';

const routes: Routes = [
  {
    path: '',
    component: AsmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsmpPageRoutingModule {}
