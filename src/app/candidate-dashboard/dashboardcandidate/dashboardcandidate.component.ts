import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';  
import { PostingjobService } from 'src/app/service/postingjob.service';
import { JobPostingModel } from 'src/app/model/job-posting-model';
import { JobApplyService } from 'src/app/service/job-apply.service';
import { JobApplyModel } from 'src/app/model/job-apply-model';
import { InterviewService } from 'src/app/service/interview.service';
import { ProvinceService } from 'src/app/service/province.service';
import { Province } from 'src/app/model/province';
import { FilterJob } from 'src/app/model/filter-job';
import { City } from 'src/app/model/city';
import { Message } from 'primeng/api';
import { MessageService, ConfirmationService } from 'primeng/api';






@Component({
  selector: 'app-dashboardcandidate',
  templateUrl: './dashboardcandidate.component.html',
  styleUrls: ['./dashboardcandidate.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class DashboardcandidateComponent implements OnInit{

 
  settings: boolean = false;
  detail: boolean = false;
  user:any;
  imageData:string;
  candidate:any;
  mgsReject:Message[] = [];

  showDetail(id){
    this.detail = true;
    this.getJobsbyId(id);
  }

  showDialog() {
      this.settings = true;
  }

  b:any = null;
  confirmReject(id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to reject this invitation ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.b = 'A';
        this.rejectInt(id);
      }
  });
  }

  confirmRequest(id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Request for new day for this invitation ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.b = 'A';
        this.requestInt(id);
      }
  });
  }

  confirmAcc(id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Accept the invitation ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.b = 'A';
        this.accInt(id);
      }
  });
  }

  constructor(private confirmationService:ConfirmationService,private pros:ProvinceService, private ints:InterviewService, private apply:JobApplyService, private jobservice:PostingjobService, private login:RegisterService,private route:Router,private sanitizer:DomSanitizer,private messageService: MessageService) { }
  p:number = 1;
  n:number  = 1;
  t:number = 1;

  rejectInt(id){
    this.ints.RejectListIntCd(id);
    this.mgsReject= [{severity:'info', summary:'Confirmed', detail:'Your Action has submitted'}];              

  }

  accInt(id){
    this.ints.willAttendListIntCd(id);
    this.mgsReject= [{severity:'info', summary:'Confirmed', detail:'Your Action has submitted'}];              

  }
  requestInt(id){
    this.ints.RequestListIntCd(id);
    this.mgsReject= [{severity:'info', summary:'Confirmed', detail:'Your Action has submitted'}];              

  }
  showWarn(warn:any) {
    this.messageService.add({severity:'error', summary: 'Error', detail:warn,key:"tc"});
}
  ngOnInit() {
    this.login.store.get("key").subscribe(res =>{
      console.log("key = "+res)
    })
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
    this.login.store.delete('user').subscribe((res) => {
      this.login.store.delete("key").subscribe(res => {})
      this.route.navigateByUrl("#")});
  }
  
  jobs:any;
  getAllJob(){
    this.jobservice.getJobPosting();
    this.jobservice.user.subscribe(res => {
      this.jobs = res;
      this.getJobApplys();
    })
  }
  jobs1:any = new JobPostingModel(null,null,null,null,null,null,null,null,null,null,null,null);
  req:any;
  det:any;
  getJobsbyId(id){
    this.jobservice.getJobPostingbyId(id);
    this.jobservice.user.subscribe(res => { this.jobs1= res;      
      this.getRec(id);
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
  msgs:Message[] = [];
  showWarn1(warn:any) {
    this.messageService.add({key:'tc',severity:'warn', summary: 'Error', detail:warn});
  }
//Job Apply Service
backDash(){
  location.href = "/candidate/dashboard"
}
appJob:any = new JobApplyModel(null,null,null,null,null,null);
postApply(){
  this.appJob.candidate = this.user.candidate;
  this.appJob.job = this.jobs1;
  if(this.appJob != null){
    this.apply.postJobApply(this.appJob);
  } 
  this.apply.user.subscribe(res => {
    let b = res;
    if(this.apply.data1 =="BAD"){
      this.showWarn(b.error);
    }else{
      this.detail= false;
      this.msgs = [{severity:'info', summary:'Confirmed', detail:'Your Just Apllied '+this.jobs1.title+" at "+this.jobs1.city.city}];      
      
    };
  })
}
cdApp:any;
getJobApplys(){
  this.apply.getJobApplybyCandidate(this.user.candidate.id);
  this.apply.user.subscribe(res => {this.cdApp = res
    this.getIntAppCd();});
}
intApp:any;
province:any;
getIntAppCd(){
  this.ints.getListIntCd(this.user.candidate.id);
  this.ints.user.subscribe(res => this.intApp = res);
}
provinsi:any = new Province(null,null,null);
city:any;
getCity(){
  this.ps = this.provinsi.province;
  this.pros.getCity(this.provinsi.province);
  this.pros.user.subscribe(res => this.city = res);
}
cs:string;
ps:string ="Choose Province";
proNull(){
  this.cs = "Choose City";
  this.citys = new City(null,null,null,null);
  this.pros.getProvince();
  this.pros.user.subscribe(res => this.province = res);
}
citys:any = new City(null,null,null,null);
filter:any = new FilterJob(null,null,null,null,null);
findByfilter(){
  if(this.provinsi.id != null){
    this.filter.provinsi = this.provinsi.province;
  }
  if(this.citys.id != null){    
    this.filter.kota = this.citys.city;
  }
  
  this.jobservice.getJobPostingbyFileter(this.filter);
  this.jobservice.user.subscribe(res => {
    if(this.jobservice.data1 =="BAD"){
      this.jobs = [];
    }
    else{
      this.jobs = res;
    }
  })
} 
}
