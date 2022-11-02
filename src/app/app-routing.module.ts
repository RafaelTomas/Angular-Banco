import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './components/extrato/extrato.component';

import { NovaTransferenciaComponent } from './components/nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  { path:'', redirectTo:'extrato',  pathMatch: 'full'},
  { path:'nova-transferencia', component: NovaTransferenciaComponent},
  { path:'extrato', component: ExtratoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
