import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { ProvinceService } from 'src/app/service/province.service';
import { InterviewService } from 'src/app/service/interview.service';
import { Candidate } from 'src/app/model/candidate';
import { Listofinterview } from 'src/app/model/listofinterview';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { JobApplyService } from 'src/app/service/job-apply.service';
import { Contract } from 'src/app/model/contract';


@Component({
  selector: 'app-invitedcandidate',
  templateUrl: './invitedcandidate.component.html',
  styleUrls: ['./invitedcandidate.component.css'],
  providers: [MessageService,ConfirmationService]

})
export class InvitedcandidateComponent implements OnInit {
  user:any;
  dt:number = 1;
  imageData:any;
  candidate:any = new Candidate(null,null,null,null,null,null,null,null);
  detailcandidate: boolean;
  settings: boolean; invited: boolean;
  msgs:Message[] = [];
  planner:boolean = false;
  contract:any = new Contract(null,null);
  waktu:any;

  showInvited(id){
    this.invited = true;
    this.ints.getListIntbyId(id);
    this.ints.user.subscribe(res =>{
      this.intmod = res;
    })
  }

  showSettings(){
    this.settings = true;
  }
  showDetailCandidate(id){
    this.detailcandidate = true;
    this.findIntbydId(id);
  }
  detailCandidateRej:boolean = false;
  showDetailCandidateRej(id){
    this.detailCandidateRej = true;
    this.findIntbydId(id);
  }
  int1:any = new Listofinterview(null,null,null,null,null);
  imgs:any;
  findIntbydId(id){
    this.ints.getListIntbyId(id);
    this.ints.user.subscribe(res => {this.int1 = res
      if(this.int1.job.candidate.pic == null){
        this.imgs ="assets/img/team/1.jpg";
      }
      else{
        this.imgs ='data:'+this.int1.job.candidate.type+';base64,'+this.int1.job.candidate.pic;  

      }});  }

  postRes(){
    this.ints.postListIntCdRes(this.int1);
  }
  waktus:any;
  d:any;
  intmod:any = new Listofinterview(null,null,null,null,null);
  postInt(){
    let b:Date = this.waktus;
    this.intmod.status = null;
    let c:any =""+b.getHours()+':'+b.getMinutes()+':'+b.getSeconds();
    this.intmod.time = c;
    this.intmod.date = this.d;
      this.ints.postListIntCd(this.intmod);
      this.invited = false;
  }
  constructor(private ints:InterviewService,
    private pros:ProvinceService,private regis:RegisterService,
    private route:Router,
    private confirmationService:ConfirmationService,private josb:JobApplyService) { }

  destroySession(){
    this.regis.store.delete('user').subscribe((res) => {
      this.regis.store.delete("key").subscribe(res => {})
      this.route.navigateByUrl("/admin")});
  }
  
  dataint:any;
  dataintat:any;
  st:any;
  getAllListInt(){
    this.ints.getListIntbyPoster(this.user.candidate.id);
    this.ints.user.subscribe(res => {this.dataintat = res
    })
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
        this.getAllListInt();
      });
  }
  hiredata:any;
  postHire(){
    let b:Date = this.waktu;
    let c:any =""+b.getHours()+':'+b.getMinutes()+':'+b.getSeconds();
    this.contract.time = c;
    this.josb.negoJobApplybyJob(this.hiredata.job.id,this.contract);
  }
  rejectHire(){
    this.josb.rejectJobApplybyJob(this.hiredata.job.id);
    this.ints.RejectListIntbyHr(this.hiredata.id);
  }

  confirmHire(id){
    this.ints.getListIntbyId(id);
        this.ints.user.subscribe(res => this.hiredata = res);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Hire this Candidate ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.planner = true;     

      }
  });
  }

  confirmReject(id){
    this.ints.getListIntbyId(id);
        this.ints.user.subscribe(res => this.hiredata = res);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Reject this Candidate ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.rejectHire();
      }
  });
  }
  submitReject(){
    this.ints.postListIntCdRes(this.int1);
    this.rejectHire();
  }

  }

