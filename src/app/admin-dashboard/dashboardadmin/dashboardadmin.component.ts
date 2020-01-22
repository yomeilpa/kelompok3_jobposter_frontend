import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {

  constructor() { }

  add: boolean = false;
  detail: boolean = false;
  update: boolean = false;

    showAdd() {
        this.add = true;
    }

    showDetail() {
        this.detail = true;
    }

    showUpdate() {
        this.update = true;
    }

    ngOnInit() {
    }



}
