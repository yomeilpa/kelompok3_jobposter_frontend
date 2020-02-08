import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { NgPrimeModule } from '../app.ngprime.module';
import { ApprovedcandidateComponent } from './approvedcandidate/approvedcandidate.component';
import { InvitedcandidateComponent } from './invitedcandidate/invitedcandidate.component';
import { HomepageadminComponent } from './homepageadmin/homepageadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { JoblistComponent } from './joblist/joblist.component';
import {DropdownModule} from 'primeng/dropdown';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [DashboardadminComponent, ApprovedcandidateComponent, InvitedcandidateComponent, HomepageadminComponent, JoblistComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    NgPrimeModule,
    HttpClientModule,
    DropdownModule,
    NgxPaginationModule
 
  ]
})
export class AdminDashboardModule { }
