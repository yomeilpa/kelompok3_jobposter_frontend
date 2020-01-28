import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { ProvinceService } from 'src/app/service/province.service';


@Component({
  selector: 'app-invitedcandidate',
  templateUrl: './invitedcandidate.component.html',
  styleUrls: ['./invitedcandidate.component.css']
})
export class InvitedcandidateComponent implements OnInit {
  user:any;
  imageData:any;
  candidate:any;
  detailcandidate: boolean;
  settings: boolean;

  showSettings(){
    this.settings = true;
  }
  showDetailCandidate(){
    this.detailcandidate = true;
  }

  constructor(private pros:ProvinceService,private regis:RegisterService,private route:Router) { }

  destroySession(){
    this.regis.store.delete('user').subscribe((res) => {this.route.navigateByUrl("/admin")});
  }
  ngOnInit() {    
    this.user = this.regis.store.get("user").subscribe( res => {
      this.user=res;
      if(res == null){
        this.route.navigateByUrl("/admin");
      }
      else{
        if(this.user.role != "HR"){
          alert("You are not logged as admin")
          this.destroySession();
        }
        this.candidate = this.user.candidate;
        if(this.user.candidate.pic == null){
          this.imageData ="assets/img/team/1.jpg";
        }
        else{
        this.imageData = 'data:'+this.candidate.type+';base64,'+this.candidate.pic;   }
        }
      });
  }
  }

