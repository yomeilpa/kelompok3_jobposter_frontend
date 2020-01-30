import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';  
import { MessageService } from 'primeng/api';
import { PostingjobService } from 'src/app/service/postingjob.service';
import { JobPostingModel } from 'src/app/model/job-posting-model';
import { JobApplyService } from 'src/app/service/job-apply.service';
import { JobApplyModel } from 'src/app/model/job-apply-model';





@Component({
  selector: 'app-dashboardcandidate',
  templateUrl: './dashboardcandidate.component.html',
  styleUrls: ['./dashboardcandidate.component.css'],
  providers: [MessageService]
})
export class DashboardcandidateComponent implements OnInit{

 
  settings: boolean = false;
  detail: boolean = false;
  user:any;
  imageData:string;
  candidate:any;

  showDetail(id){
    this.detail = true;
    this.getJobsbyId(id);
  }

  showDialog() {
      this.settings = true;
  }

  constructor(private apply:JobApplyService, private jobservice:PostingjobService, private login:RegisterService,private route:Router,private sanitizer:DomSanitizer,private messageService: MessageService) { }

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
      if(this.user.role == "HR"){
        alert("You are not logged in as Applicant");
        this.destroySession();
      }
      this.getAllJob();
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
  jobs:any;
  getAllJob(){
    this.jobservice.getJobPosting();
    this.jobservice.user.subscribe(res => {
      this.jobs = res;
    })
  }
  jobs1:any = new JobPostingModel(null,null,null,null,null,null,null,null,null,null,null);
  req:any;
  det:any;
  getJobsbyId(id){
    this.jobservice.getJobPostingbyId(id);
    this.jobservice.user.subscribe(res => { this.jobs1= res;
      
      this.getRec(id);
      console.log(this.jobs1)
    })
  }
  getRec(id){
    this.jobservice.getJobReqbyJob(id);
    this.jobservice.user.subscribe(res => {this.req = res
      this.getDet(id)})
  }
  getDet(id){
    this.jobservice.getJobDescbyJob(id);
    this.jobservice.user.subscribe(res => {this.det = res
    });
  }
//Job Apply Service
appJob:any = new JobApplyModel(null,null,null,null,null,null);
postApply(){
  this.appJob.candidate = this.user.candidate;
  this.appJob.job = this.jobs1;
  console.log(this.appJob.candidate.id)
  if(this.appJob != null){
    this.apply.postJobApply(this.appJob);
  } 
  console.log(this.appJob)
  this.apply.user.subscribe(res => {
    let b = res;
    if(this.apply.data1 =="BAD"){
      alert(b.error)
    };
  })
}
}
