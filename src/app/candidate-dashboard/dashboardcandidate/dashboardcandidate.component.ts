import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';  




@Component({
  selector: 'app-dashboardcandidate',
  templateUrl: './dashboardcandidate.component.html',
  styleUrls: ['./dashboardcandidate.component.css']
})
export class DashboardcandidateComponent implements OnInit {

  settings: boolean = false;
  detail: boolean = false;
  user:any;
  imageData:string;


  showDetail(){
    this.detail = true;
  }

  showDialog() {
      this.settings = true;
  }

  constructor(private login:RegisterService,private route:Router,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.user = this.login.store.get("user").subscribe( res => {
    this.user=res;

    if(res == null){
      this.route.navigateByUrl("#");
    }
    else{
      if(this.user.candidate.pic == null){
        this.imageData =null;
      }
      else{
      this.imageData = 'data:'+this.user.candidate.type+';base64,'+this.user.candidate.pic;   }
      }
    });
    
  }

  destroySession(){
    this.login.store.delete('user').subscribe((res) => {this.route.navigateByUrl("#")});
  }

}
