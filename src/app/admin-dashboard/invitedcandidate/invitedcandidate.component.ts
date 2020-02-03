import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { ProvinceService } from 'src/app/service/province.service';
import { InterviewService } from 'src/app/service/interview.service';
import { Candidate } from 'src/app/model/candidate';
import { Listofinterview } from 'src/app/model/listofinterview';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { JobApplyService } from 'src/app/service/job-apply.service';


@Component({
  selector: 'app-invitedcandidate',
  templateUrl: './invitedcandidate.component.html',
  styleUrls: ['./invitedcandidate.component.css'],
  providers: [MessageService,ConfirmationService]

})
export class InvitedcandidateComponent implements OnInit {
  user:any;
  imageData:any;
  candidate:any = new Candidate(null,null,null,null,null,null,null,null);
  detailcandidate: boolean;
  settings: boolean; invited: boolean;
  msgs:Message[] = [];

  showInvited(){
    this.invited = true;
  }

  showSettings(){
    this.settings = true;
  }
  showDetailCandidate(id){
    this.detailcandidate = true;
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

  constructor(private ints:InterviewService,
    private pros:ProvinceService,private regis:RegisterService,
    private route:Router,
    private confirmationService:ConfirmationService,private josb:JobApplyService) { }

  destroySession(){
    this.regis.store.delete('user').subscribe((res) => {this.route.navigateByUrl("/admin")});
  }
  dataint:any;
  dataintat:any;
  getAllListInt(){
    this.ints.getListIntbyPoster(this.candidate.id);
    this.ints.user.subscribe(res => {this.dataint = res
    this.ints.getListIntAttd();
    this.ints.user.subscribe(res=> this.dataintat = res)});
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
    this.josb.accJobApplybyJob(this.hiredata.job.id);
  }

  confirmHire(id){
    this.ints.getListIntbyId(id);
        this.ints.user.subscribe(res => this.hiredata = res);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Hire this Candidate ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.postHire();     

      }
  });
  }

  }

