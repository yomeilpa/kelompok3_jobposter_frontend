import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepagecandidateComponent } from './homepagecandidate/homepagecandidate.component';
import { SearchjobposterComponent } from './searchjobposter/searchjobposter.component';

const routes: Routes = [
  {
    path : '',
    component : HomepagecandidateComponent
  },
  {
    path : 'result',
    component : SearchjobposterComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CandidateHomepageRoutingModule { }
