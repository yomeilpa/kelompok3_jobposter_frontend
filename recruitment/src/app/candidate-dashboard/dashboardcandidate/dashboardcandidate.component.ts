import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboardcandidate',
  templateUrl: './dashboardcandidate.component.html',
  styleUrls: ['./dashboardcandidate.component.css']
})
export class DashboardcandidateComponent implements OnInit {

  settings: boolean = false;
  detail: boolean = false;

  showDetail(){
    this.detail = true;
  }

  showDialog() {
      this.settings = true;
  }

  constructor() { }

  ngOnInit() {

  }

}
