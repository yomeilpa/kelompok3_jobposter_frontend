import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { ApprovedcandidateComponent } from './approvedcandidate/approvedcandidate.component';
import { InvitedcandidateComponent } from './invitedcandidate/invitedcandidate.component';


const routes: Routes = [
  {
    path : 'dashboard',
    component : DashboardadminComponent
  },
  {
    path : 'approved',
    component : ApprovedcandidateComponent
  },
  {
    path : 'invited',
    component : InvitedcandidateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
