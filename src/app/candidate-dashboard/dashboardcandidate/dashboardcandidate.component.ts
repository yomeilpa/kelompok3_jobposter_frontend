import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboardcandidate',
  templateUrl: './dashboardcandidate.component.html',
  styleUrls: ['./dashboardcandidate.component.css']
})
export class DashboardcandidateComponent implements OnInit {

  settings: boolean = false;
  detail: boolean = false;
  user:any;

  showDetail(){
    this.detail = true;
  }

  showDialog() {
      this.settings = true;
  }

  constructor(private login:RegisterService,private route:Router) { }

  ngOnInit() {
    this.user = this.login.store.get("user").subscribe( res => {
    this.user=res;
    if(res == null){
      this.route.navigateByUrl("#");
    }
    });
    
  }

  destroySession(){
    this.login.store.delete('user').subscribe((res) => {this.route.navigateByUrl("#")});
  }

}
