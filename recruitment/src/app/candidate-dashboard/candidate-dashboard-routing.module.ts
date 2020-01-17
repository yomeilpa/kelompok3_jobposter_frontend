import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardcandidateComponent } from './dashboardcandidate/dashboardcandidate.component';
import { ProfilecandidateComponent } from './profilecandidate/profilecandidate.component';
import { SettingcandidateComponent } from './settingcandidate/settingcandidate.component';


const routes: Routes = [
  {
    path : 'dashboard',
    component : DashboardcandidateComponent
  },
  {
    path : 'profile',
    component : ProfilecandidateComponent
  },
  {
    path : 'setting',
    component : SettingcandidateComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateDashboardRoutingModule { }
