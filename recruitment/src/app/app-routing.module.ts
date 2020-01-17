import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path : 'candidate',
  loadChildren : () => import('./candidate-dashboard/candidate-dashboard.module').then(m=> m.CandidateDashboardModule)
},
{
  path : 'admin',
  loadChildren : () => import('./admin-dashboard/admin-dashboard.module').then(m=> m.AdminDashboardModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
