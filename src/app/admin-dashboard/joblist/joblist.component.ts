import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {

  addjob: boolean;  detailjob: boolean;  updatejob: boolean;  detailcandidate: boolean;
  addcategory: boolean;  updatecategory: boolean;
  addposition: boolean;  updateposition: boolean;
  settings: boolean;

  showSettings(){
    this.settings = true;
  }
  
  showDetailCandidate(){
    this.detailcandidate = true;
  }

  showAddJob() {
    this.addjob = true;
  }

  showDetailJob() {
    this.detailjob = true;
  }

  showUpdateJob() {
    this.updatejob = true;
  }

  showAddCategory(){
    this.addcategory = true;
  }

  showUpdateCategory(){
    this.updatecategory = true;
  }

  showAddPosition(){
    this.addposition = true;
  }

  showUpdatePosition(){
    this.updateposition = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
