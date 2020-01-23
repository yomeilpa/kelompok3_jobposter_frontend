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
    ToastModule
  ]
})
export class CandidateHomepageModule { }
