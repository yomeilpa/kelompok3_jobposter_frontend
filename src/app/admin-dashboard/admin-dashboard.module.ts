import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { NgPrimeModule } from '../app.ngprime.module';


@NgModule({
  declarations: [DashboardadminComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    NgPrimeModule
  ]
})
export class AdminDashboardModule { }
