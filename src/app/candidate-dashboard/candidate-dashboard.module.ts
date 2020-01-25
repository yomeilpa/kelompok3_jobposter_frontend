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
import {ProgressBarModule} from 'primeng/progressbar';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';





@NgModule({
  declarations: [DashboardcandidateComponent, ProfilecandidateComponent],
  imports: [
    CommonModule,
    CandidateDashboardRoutingModule,
    NgPrimeModule,
    HttpClientModule,
    ToastModule,
    DropdownModule,
    RadioButtonModule,
    ProgressBarModule,
    PdfViewerModule,
    PasswordModule,
    InputMaskModule

  ]
})
export class CandidateDashboardModule { }
