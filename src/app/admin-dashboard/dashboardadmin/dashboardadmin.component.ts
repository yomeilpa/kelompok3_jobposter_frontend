import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css'],
})
export class DashboardadminComponent implements OnInit {
    settings: boolean;

    showSettings(){
        this.settings = true;
    }

    data: any;

    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Candidate Register',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Candidate Invited',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: 'Candidate Approved',
                    backgroundColor: '#CCCCCC',
                    borderColor: '#7CB342',
                    data: [18, 28, 20, 9, 46, 17, 60]
                }
            ]
        }
    }

    ngOnInit() {
    }

}
