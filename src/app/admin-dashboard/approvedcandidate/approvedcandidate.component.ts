import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/service/province.service';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { JobApplyService } from 'src/app/service/job-apply.service';

@Component({
  selector: 'app-approvedcandidate',
  templateUrl: './approvedcandidate.component.html',
  styleUrls: ['./approvedcandidate.component.css'],
})
export class ApprovedcandidateComponent implements OnInit {
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

  constructor(private pros:ProvinceService,private regis:RegisterService,private route:Router,private josb:JobApplyService) { }

  destroySession(){
    this.regis.store.delete('user').subscribe((res) => {this.route.navigateByUrl("/admin")});
  }
  jobs:any;
  getALLacc(){
    this.josb.getobApplybyJobAcc();
    this.josb.user.subscribe(res => this.jobs = res);
  }
  ngOnInit() {   
    this.getALLacc(); 
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
