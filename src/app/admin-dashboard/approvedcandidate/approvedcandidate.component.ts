import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/service/province.service';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService, Message } from 'primeng/api';

import { JobApplyService } from 'src/app/service/job-apply.service';
import { DoctypeService } from 'src/app/service/doctype.service';
import { EducationService } from 'src/app/service/education.service';
import { WorkexperienceService } from 'src/app/service/workexperience.service';
import { SkillService } from 'src/app/service/skill.service';
import { CandidateDocument } from 'src/app/model/candidate-document';

@Component({
  selector: 'app-approvedcandidate',
  templateUrl: './approvedcandidate.component.html',
  styleUrls: ['./approvedcandidate.component.css'],
  providers: [MessageService,ConfirmationService]

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

  showDetailCandidate(id){
    this.jobAppbyId(id);
  }
  imgs:any;
  datacd:any;
  edu:any;
  skill:any;
  wexp:any;
  doc:any;
  cddoc:any = new CandidateDocument(null,null,null,null);
  dowloadDoc(id){
    this.doctype.getCd(this.datacd.candidate.id,id);
    this.doctype.user.subscribe(res => {this.cddoc = res
    if(this.cddoc.type != null){
      let pd = 'data:'+this.cddoc.type+';base64,'+this.cddoc.pic;    
      let x=window.open('about:whatever');  
      let iframe=x.document.createElement('iframe')
      iframe.width='100%'
      iframe.height='100%'
      iframe.src=pd;
      x.document.body.appendChild(iframe)
    }else{
      alert("document doesnote exists")
    }})
  }
  jobAppbyId(id){
    this.josb.getJobApplybyid(id);
    this.josb.user.subscribe(res => {
      this.datacd = res;
      this.detailcandidate = true;
      this.eduser.getEducationCandidate(this.datacd.candidate.id);
      this.eduser.user.subscribe(res => {this.edu = res});
      this.workservice.getWordCan(this.datacd.candidate.id);
      this.workservice.user.subscribe(res => this.wexp = res)
      this.skillser.getSkillCandidate(this.datacd.candidate.id);
      this.skillser.user.subscribe(res => this.skill = res)
      this.doctype.getDocTypeTrue();
      this.doctype.user.subscribe(res => this.doc = res);
      if(this.datacd.candidate.pic == null){
        this.imgs ="assets/img/team/1.jpg";
      }
      else{
        this.imgs ='data:'+this.datacd.candidate.type+';base64,'+this.datacd.candidate.pic;  

      }});  
  }
  confirmCt(id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Hire this Candidate ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.josb.getJobApplybyid(id);
        this.josb.user.subscribe(res =>{
          let b = res;
          this.josb.accJobApplybyJob(b.id)
        })     

      }
  });
  }

  constructor(private doctype:DoctypeService,private eduser:EducationService,private workservice:WorkexperienceService,private skillser:SkillService,private confirmationService:ConfirmationService,private pros:ProvinceService,private regis:RegisterService,private route:Router,private josb:JobApplyService) { }

  destroySession(){
    this.regis.store.delete('user').subscribe((res) => {
      this.regis.store.delete("key").subscribe(res => {})
      this.route.navigateByUrl("/admin")});
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
