import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateDashboardRoutingModule } from './candidate-dashboard-routing.module';
import { DashboardcandidateComponent } from './dashboardcandidate/dashboardcandidate.component';
import { ProfilecandidateComponent } from './profilecandidate/profilecandidate.component';
import { NgPrimeModule } from '../app.ngprime.module';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';



@NgModule({
  declarations: [DashboardcandidateComponent, ProfilecandidateComponent],
  imports: [
    CommonModule,
    CandidateDashboardRoutingModule,
    NgPrimeModule,
    HttpClientModule,
    ToastModule,
    DropdownModule,
    RadioButtonModule

  ]
})
export class CandidateDashboardModule { }
