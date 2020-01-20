import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateHomepageRoutingModule } from './candidate-homepage-routing.module';
import { HomepagecandidateComponent } from './homepagecandidate/homepagecandidate.component';
import { NgPrimeModule } from '../app.ngprime.module';
import { SearchjobposterComponent } from './searchjobposter/searchjobposter.component';

@NgModule({
  declarations: [HomepagecandidateComponent, SearchjobposterComponent],
  imports: [
    CommonModule,
    CandidateHomepageRoutingModule,  
    NgPrimeModule,
  ]
})
export class CandidateHomepageModule { }
