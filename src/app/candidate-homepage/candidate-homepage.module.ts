import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateHomepageRoutingModule } from './candidate-homepage-routing.module';
import { HomepagecandidateComponent } from './homepagecandidate/homepagecandidate.component';
import { NgPrimeModule } from '../app.ngprime.module';
import { SearchjobposterComponent } from './searchjobposter/searchjobposter.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import {PaginatorModule} from 'primeng/paginator';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { ShowHidePasswordModule } from 'ngx-show-hide-password';


@NgModule({
  declarations: [HomepagecandidateComponent, SearchjobposterComponent],
  imports: [
    CommonModule,
    CandidateHomepageRoutingModule,  
    NgPrimeModule,
    RadioButtonModule,
    AutoCompleteModule,
    HttpClientModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    PasswordModule,
    InputMaskModule,
    ProgressSpinnerModule,
    PaginatorModule,
    NgxPaginationModule,
    ShowHidePasswordModule
  ]
})
export class CandidateHomepageModule { }
