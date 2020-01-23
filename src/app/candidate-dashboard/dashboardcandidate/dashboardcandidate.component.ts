import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';  
import { MessageService } from 'primeng/api';





@Component({
  selector: 'app-dashboardcandidate',
  templateUrl: './dashboardcandidate.component.html',
  styleUrls: ['./dashboardcandidate.component.css'],
  providers: [MessageService]
})
export class DashboardcandidateComponent implements OnInit {

  settings: boolean = false;
  detail: boolean = false;
  user:any;
  imageData:string;
  candidate:any;

  showDetail(){
    this.detail = true;
  }

  showDialog() {
      this.settings = true;
  }

  constructor(private login:RegisterService,private route:Router,private sanitizer:DomSanitizer,private messageService: MessageService) { }

  showWarn(warn:any) {
    this.messageService.add({severity:'error', summary: 'Error', detail:warn});
}
  ngOnInit() {
    this.user = this.login.store.get("user").subscribe( res => {
    this.user=res;
    

    if(res == null){
      this.route.navigateByUrl("#");
    }
    else{
      this.candidate = this.user.candidate;
      if(this.user.candidate.pic == null){
        this.imageData ="assets/img/team/1.jpg";
      }
      else{
      this.imageData = 'data:'+this.candidate.type+';base64,'+this.candidate.pic;   }
      }
    });
    
  }

  destroySession(){
    this.login.store.delete('user').subscribe((res) => {this.route.navigateByUrl("#")});
  }

}
