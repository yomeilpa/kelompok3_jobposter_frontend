import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approvedcandidate',
  templateUrl: './approvedcandidate.component.html',
  styleUrls: ['./approvedcandidate.component.css']
})
export class ApprovedcandidateComponent implements OnInit {

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
