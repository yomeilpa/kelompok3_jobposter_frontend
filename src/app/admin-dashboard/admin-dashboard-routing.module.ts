import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';


const routes: Routes = [
  {
    path : 'dashboard',
    component : DashboardadminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
