import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilecandidate',
  templateUrl: './profilecandidate.component.html',
  styleUrls: ['./profilecandidate.component.css']
})
export class ProfilecandidateComponent implements OnInit {

  profile: boolean = false;
  education: boolean = false;
  work: boolean = false;
  document: boolean = false;


  showProfile() {
      this.profile = true;
  }

  showEducation(){
    this.education = true;
  }

  showWork(){
    this.work = true;
  }

  showDocument(){
    this.document = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
