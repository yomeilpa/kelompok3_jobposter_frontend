import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { ApprovedcandidateComponent } from './approvedcandidate/approvedcandidate.component';
import { InvitedcandidateComponent } from './invitedcandidate/invitedcandidate.component';
import { HomepageadminComponent } from './homepageadmin/homepageadmin.component';
import { JoblistComponent } from './joblist/joblist.component';


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
  {
    path : '',
    component : HomepageadminComponent
  },
  {
    path : 'joblist',
    component : JoblistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
