import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepagecandidateComponent } from './homepagecandidate/homepagecandidate.component';

const routes: Routes = [
  {
    path : '',
    component : HomepagecandidateComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CandidateHomepageRoutingModule { }
