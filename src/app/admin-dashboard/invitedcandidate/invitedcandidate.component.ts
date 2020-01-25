import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitedcandidate',
  templateUrl: './invitedcandidate.component.html',
  styleUrls: ['./invitedcandidate.component.css']
})
export class InvitedcandidateComponent implements OnInit {

  detailcandidate: boolean;
  settings: boolean;

  showSettings(){
    this.settings = true;
  }
  showDetailCandidate(){
    this.detailcandidate = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
