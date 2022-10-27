import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  { path:'nova-transferencia', component: NovaTransferenciaComponent},
  { path:'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
