import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateHomepageRoutingModule } from './candidate-homepage-routing.module';
import { HomepagecandidateComponent } from './homepagecandidate/homepagecandidate.component';
import { NgPrimeModule } from '../app.ngprime.module';

@NgModule({
  declarations: [HomepagecandidateComponent],
  imports: [
    CommonModule,
    CandidateHomepageRoutingModule,  
    NgPrimeModule,
  ]
})
export class CandidateHomepageModule { }
