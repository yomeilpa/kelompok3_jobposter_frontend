import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { NgPrimeModule } from '../app.ngprime.module';
import { ApprovedcandidateComponent } from './approvedcandidate/approvedcandidate.component';
import { InvitedcandidateComponent } from './invitedcandidate/invitedcandidate.component';


@NgModule({
  declarations: [DashboardadminComponent, ApprovedcandidateComponent, InvitedcandidateComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    NgPrimeModule
  ]
})
export class AdminDashboardModule { }
