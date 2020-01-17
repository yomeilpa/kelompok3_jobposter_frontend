import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateDashboardRoutingModule } from './candidate-dashboard-routing.module';
import { DashboardcandidateComponent } from './dashboardcandidate/dashboardcandidate.component';
import { ProfilecandidateComponent } from './profilecandidate/profilecandidate.component';
import { NgPrimeModule } from '../app.ngprime.module';
import { SettingcandidateComponent } from './settingcandidate/settingcandidate.component';

@NgModule({
  declarations: [DashboardcandidateComponent, ProfilecandidateComponent, SettingcandidateComponent],
  imports: [
    CommonModule,
    CandidateDashboardRoutingModule,
    NgPrimeModule

  ]
})
export class CandidateDashboardModule { }
