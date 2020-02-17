import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { ProvinceService } from 'src/app/service/province.service';
import { JobKategoriModel } from 'src/app/model/job-kategori-model';
import { JobKategoriService } from 'src/app/service/job-kategori.service';
import { JobPosition } from 'src/app/model/job-position';
import { JobPositionServiceService } from 'src/app/service/job-position-service.service';
import { JobRecuitmentModel } from 'src/app/model/job-recuitment-model';
import { JobDetailModel } from 'src/app/model/job-detail-model';
import { JobPostingModel } from 'src/app/model/job-posting-model';
import { PostingjobService } from 'src/app/service/postingjob.service';
import { JobApplyService } from 'src/app/service/job-apply.service';
import { Message } from 'primeng/api';
import { MessageService, ConfirmationService } from 'primeng/api';
import { JobApplyModel } from 'src/app/model/job-apply-model';
import { StateAppliedModel } from 'src/app/model/state-applied-model';
import { InterviewStatusModel } from 'src/app/model/interview-status-model';
import { Listofinterview } from 'src/app/model/listofinterview';
import { InterviewService } from 'src/app/service/interview.service';
import { Candidate } from 'src/app/model/candidate';
import { EducationService } from 'src/app/service/education.service';
import { WorkexperienceService } from 'src/app/service/workexperience.service';
import { SkillService } from 'src/app/service/skill.service';
import { DoctypeService } from 'src/app/service/doctype.service';
import { CandidateDocument } from 'src/app/model/candidate-document';
import { City } from 'src/app/model/city';



@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css'],
  providers: [MessageService,ConfirmationService],
  styles:[`
        .box,
        .sample-layout > div {
            background-color: #FAF9F9;
            text-align: center;
            padding-top: 1em;
            padding-bottom: 1em;
            border-radius: 6px;
        }

        .box-stretched {
            height: 100%;
        }

        .sample-layout {
            margin: 0;
        }

        .sample-layout > div {
            border: 3px solid #ffffff;
        }

        .vertical-container {
            margin: 0;
            height: 200px;
            background: #efefef;
            border-radius: 6px;
        }

        .nested-grid .p-col-1 {
            padding-bottom: 1em;
        }
        
        @media screen and (max-width: 40em) {
          :host ::ng-deep .ui-dialog {
              width: 75vw !important;
          }
      }
    `],
    animations: [
        trigger('animation', [
            state('visible', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('void => *', [
                style({transform: 'translateX(50%)', opacity: 0}),
                animate('300ms ease-out')
            ]),
            transition('* => void', [
                animate(('250ms ease-in'), style({
                    height: 0,
                    opacity: 0,
                    transform: 'translateX(50%)'
                }))
            ])
        ])
    ],
    encapsulation: ViewEncapsulation.None
})
export class JoblistComponent implements OnInit {
  sb:any = false;
  showSB(){
    this.sb = !this.sb;
  }
  jp:number =1;
  jk:number = 1;
  pt:number = 1;
  addjob: boolean;  detailjob: boolean;  updatejob: boolean;  detailcandidate: boolean;
  addcategory: boolean;  updatecategory: boolean;
  addposition: boolean;  updateposition: boolean;
  settings: boolean; invited: boolean; rejected: boolean;
  req = [];
  ireq: any = 0;
  item =[];
  jobDetail = [];
  jobReq = [];
  i:any = 0;
  user:any;
  imageData:any;
  candidate:any = new Candidate(null,null,null,null,null,null,null,null);
  jb:any = new JobDetailModel(null,null,null);
  js:any = new JobRecuitmentModel(null,null,null);
  posting:any = new JobPostingModel(null,null,null,null,null,null,null,null,null,null,null,null);
  provinsi:any;
  ps:any = "Choose Province";
  city:any[];
  province:any[];
  kate:any;
  getPosKa:any;
  idjob:any;
  cdjob1:any = new JobApplyModel(null,null,null,null,null,null);
  st:any = new StateAppliedModel(null,null,null);
  intmod:any = new Listofinterview(null,null,null,null,null);
  msgs:Message[] = [];
  msgsInt:Message[] = [];
  mgsPostJob:Message[] =[];
  mgseditJob:Message[] =[];

  messageService: any;
  back(){
    location.href = "admin/joblist"
  }
  confirmRejected(id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Reject this Candidate ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.rejectCd();
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'Your Candidate has Rejected'}];      

      }
  });
  }
  confirmDeletePosition(id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete this Position ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deletePosition(id);

      }
  });
  }

  confirmDeleteKategori(id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete this Position ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteKategori(id);

      }
  });
  }

  waktu:any;
  postInt(){
    if(this.waktu ==null){
      alert('Time Must Be Filled')
    }
    else{
    this.intmod.job = this.cdjob1;
        let b:Date = this.waktu;
        let c:any =""+b.getHours()+':'+b.getMinutes()+':'+b.getSeconds();
        this.intmod.time = c;
        // console.log("ini waktu "+this.intmod.time)
        this.intser.postListIntCd(this.intmod);
          this.intser.user.subscribe(res =>{
            if(this.intser.data1 =='succes'){
              this.msgsInt = [{severity:'info', summary:'Confirmed', detail:'Your Candidate has Invited'}];      
              this.jbapp.invJobApplybyJob(this.cdjob1.id);
            }
            else{
              alert(res.error)
            }
          })  
    }
  }
  getPos1(){
    this.positionSer.getJobPositionbyIdKate(this.kate.id);
    this.positionSer.user.subscribe(res => this.getPosKa = res);
  }
  posNull(){
    this.posting.jobposotion=null;
  }

  postingJob(){
    this.confirmasi();
    this.posting.candidate = this.user.candidate;
    this.posting.active = "true";
    this.posser.postJobPosting(this.posting);
    this.posser.user.subscribe(res => {
      let e = res;
      console.log(res)
      if(this.posser.data1 == "OK"){
        this.posser.postJobDes(e.id,this.jobDetail);
        this.posser.postJobReq(e.id,this.jobReq);
        this.mgsPostJob= [{severity:'info', summary:'Confirmed', detail:'Your Job has been posted'}];      
      }
      else{
        this.showErr("postingJob",res.error);
      }
    })
  }
  closed(){
    this.jd.active=false;
    this.posser.putJobPosting(this.jd.id,this.jd);
    this.mgsPostJob= [{severity:'info', summary:'Confirmed', detail:'Your Job has been Closed'}];      

  
  }
  postingJobEdit(){
    this.confirmasi();
    this.jd.candidate = this.user.candidate;
    this.jd.active = "true";
    this.posser.postJobPosting(this.jd);
    this.posser.user.subscribe(res => {
      let e = res;
      
      if(this.posser.data1 == "OK"){
        this.posser.deleteRec(e.id);
        this.posser.deleteDetail(e.id);
        this.posser.postJobDes(e.id,this.jobDetail);
        this.posser.postJobReq(e.id,this.jobReq);
        this.mgsPostJob= [{severity:'info', summary:'Confirmed', detail:'Your Job has been Updated'}];      
      }
      else{
        this.showErr("postingJobEdit",e.error);

      }
    })
  }
  imgs:any;
  edu:any;
  skill:any;
  wexp:any;
  doc:any;

  cddoc:any = new CandidateDocument(null,null,null,null);
  dowloadDoc(id){
    this.doctype.getCd(this.cdjob1.candidate.id,id);
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
  provs:any;
  jd:any = new JobPostingModel(null,new JobPosition(null,null,null),null,null,null,new City(null,null,null,null),null,null,null,null,null,null);
  jr:any = [];
  jdt:any;
  findJob(id){
    this.columns = [];
    this.columndescription = [];
    this.app.getJobPostingbyId(id);
    this.app.user.subscribe(res => {this.jd = res
    this.kate = this.jd.jobposotion.jobkategori
    this.provinsi = this.jd.city.province;
    this.app.getJobReqbyJob(this.jd.id);
    this.app.user.subscribe(res => {this.jr = res
      for(let a in this.jr){
      this.columndescription.push(this.columndescription.length);
      this.req[a] =this.jr[a].recruitment;
      console.log(this.req[a]);
    }
    this.app.getJobDescbyJob(this.jd.id);
    this.app.user.subscribe(res => {
      this.jdt = res;
      for(let a in this.jdt){
        this.columns.push(this.columns.length);
      this.item[a] =this.jdt[a].description;
      console.log(this.item[a]);
      }
    })
  console.log(this.provinsi)});
  })
  }

  jobAppbyId(id){
    this.jbapp.getJobApplybyid(id);
    this.jbapp.user.subscribe(res => {
      this.cdjob1 = res;
      this.st = this.cdjob1.state;
      this.eduser.getEducationCandidate(this.cdjob1.candidate.id);
      this.eduser.user.subscribe(res => {this.edu = res});
      this.workservice.getWordCan(this.cdjob1.candidate.id);
      this.workservice.user.subscribe(res => this.wexp = res)
      this.skillser.getSkillCandidate(this.cdjob1.candidate.id);
      this.skillser.user.subscribe(res => this.skill = res)
      this.doctype.getDocTypeTrue();
      this.doctype.user.subscribe(res => this.doc = res);
      this.uptReview();
      if(this.cdjob1.candidate.pic == null){
        console.log(this.imgs);
        this.imgs ="assets/img/team/1.jpg";


      }
      else{
        this.imgs ='data:'+this.cdjob1.candidate.type+';base64,'+this.cdjob1.candidate.pic;  

      }
    })

  }

  proNull(){
    this.ps === 'Choose Province';
    this.pros.getProvince();
    this.pros.user.subscribe(res => this.province = res);
  }
  
  getCity(){
    this.pros.getCity(this.provinsi.province);
    this.pros.user.subscribe(res => {this.city = res
    this.ps = this.provinsi.province});
  }
  getClearCity(){
    this.city == null;
  }
  

  confirmasi(){
    for(let i in this.columns){
      this.jb = new JobDetailModel(null,null,null);
      this.jb.description = this.item[i]
      this.jobDetail.push(this.jb);
    }
    for(let i in this.columndescription){
      this.js = new JobRecuitmentModel(null,null,null);
      this.js.recruitment = this.req[i]
      this.jobReq.push(this.js);
    }
  }

  showInvited(){
    this.invited = true;
  }

  showRejected(){
    this.rejected = true;
  }

  showSettings(){
    this.settings = true;
  }
  
  showDetailCandidate(id){
    this.detailcandidate = true;
    this.jobAppbyId(id);
  }

  showAddJob() {
    this.addjob = true;
  }

  showDetailJob(id) {
    this.detailjob = true;
    this.getApps(id);
    
  }

  showUpdateJob(id) {
    this.updatejob = true;
    this.findJob(id);
  }

  showAddCategory(){
    this.addcategory = true;
  }

  showUpdateCategory(id){
    this.updatecategory =!this.updatecategory;
    this.getJobKategoribyId(id);
  }

  showAddPosition(){
    this.addposition = true;
  }

  uptReview(){
      this.jbapp.rvwJobApplybyJob(this.cdjob1.id);
  }
  rejectCd(){
    this.jbapp.rejectJobApplybyJob(this.cdjob1.id);
  }

  showUpdatePosition(id){
    this.updateposition = true;
    this.getJobPositionbyId(id);
  }

  destroySession(){
    this.regis.store.delete('user').subscribe((res) => {
      this.regis.store.delete("key").subscribe(res => {})
      this.route.navigateByUrl("/admin")});
  }
  
  constructor(private doctype:DoctypeService,private eduser:EducationService,private workservice:WorkexperienceService,private skillser:SkillService,private intser:InterviewService,private confirmationService:ConfirmationService,private jbapp:JobApplyService,private app:PostingjobService,private posser:PostingjobService, 
    private positionSer:JobPositionServiceService, 
    private pros:ProvinceService,
    private regis:RegisterService,
    private route:Router,
    private kategori:JobKategoriService,
    private message:MessageService) { }
  columns: number[];
  columndescription : number[];
  jobs:any;
  apps:any;
  totalapp:any;
  getJobApply(){
    this.app.getJobPostingbyPoster(this.candidate.id);
    this.app.user.subscribe(res => {this.jobs = res;
    })
  }
  jq:any;
  getJobandQuota(){
    this.app.getJobPostingbyPosterQuota(this.candidate.id);
    this.app.user.subscribe(res => {this.jq = res
    console.log(this.jq)})
  }
  getTotalApp(id){
    this.jbapp.countJobApplybyCandidate(id);
    this.jbapp.user.subscribe(res => this.totalapp = res)
  }
 
  getApps(id){
    this.jbapp.getJobApplybyJob(id);
    this.jbapp.user.subscribe(res => {
      this.apps = res
      this.getTotalApp(id);
    })
  }

    ngOnInit() {
        
        this.getAllJobKategori();
        this.getAllJobPosition();
        this.columns = [];
        this.columndescription = [];
        this.upcolumns = [];
        this.upcolumndescription = [];
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
            this.getJobandQuota();
            if(this.user.candidate.pic == null){
              this.imageData ="assets/img/team/1.jpg";
            }
            else{
            this.imageData = 'data:'+this.candidate.type+';base64,'+this.candidate.pic;   }
            }
          });
        
    }

    addColumn() {
      this.columns.push(this.columns.length);
    }

    addColumnDes(){
      this.columndescription.push(this.columndescription.length);
    }

    removeColumn() {
      this.columns.splice(-1, 1);
    }

    removeColumnDes(){
      this.columndescription.splice(-1, 1);
    }

    upcolumns: number[];
    upcolumndescription : number[];
  
      upaddColumn() {
        this.upcolumns.push(this.upcolumns.length);
      }
  
      upaddColumnDes(){
        this.upcolumndescription.push(this.upcolumndescription.length);
      }
  
      upremoveColumn() {
        this.upcolumns.splice(-1, 1);
      }
  
      upremoveColumnDes(){
        this.upcolumndescription.splice(-1, 1);
      }

      // JobKategori private
      jobkateList:any;
      jobKate:any = new JobKategoriModel(null,null,null);
      jobKateedit:any = new JobKategoriModel(null,null,null);
      
      postJobKategori(){
        this.kategori.postJobkategori(this.jobKate);
        this.kategori.user.subscribe(res => {
            if(this.kategori.data1 == "OK"){
              location.href = "admin/joblist"
            }
            else{
              this.showErr("postJobKategori",res.error);
            }
        })
      }

      putJobKategori(){
        this.kategori.putJobKatergoribyId(this.jobKateedit.id,this.jobKateedit);
        this.kategori.user.subscribe(res => { 
            if(this.kategori.data1 == "OK"){
              location.href = "admin/joblist"
            }else{
              this.showErr("putJobKategori",res.error);
            }
        })
      }
      getAllJobKategori(){
        this.kategori.getJobKatergori();
        this.kategori.user.subscribe(res => { this.jobkateList = res });
        
      }

      getJobKategoribyId(id){
        this.kategori.getJobKatergoribyId(id);
        this.kategori.user.subscribe(res => this.jobKateedit = res);
      }

      
      
      deleteKategori(id){
        this.kategori.deleteJobKatergoribyId(id);
        this.kategori.user.subscribe(res => {
          if(res.error != "DELETE GAGAL"){
            this.updatecategory = false;
          }
          else{
            this.showErr("deleteKategori",res.error);

            this.updatecategory = false;
          }
        })
       
      }
      // Job Position Service
      jobPos:any = new JobPosition(null,null,null);
      jobPosList:any;
      jobPos1:any = new JobPosition(null,null,null);
      posJobPosition(){
        this.positionSer.postJobPosition(this.jobPos);
        this.positionSer.user.subscribe(res =>{
          if(this.positionSer.data1 == "OK"){
            location.href = "admin/joblist"
          }
          else{
            this.showErr("posJobPosition",res.error);
          }
        })
      }
      
      putJobPosition(){
        this.positionSer.postJobPosition(this.jobPos1);
        this.positionSer.user.subscribe(res =>{
          if(this.positionSer.data1 == "OK"){
            location.href = "admin/joblist"
          }
          else{
            this.showErr("putJobPosition",res.error);
          }
        })
      }
      mgsDeletePos:Message[] = [];
      deletePosition(id){
        this.positionSer.deleteJobPosition(id);
        this.positionSer.user.subscribe(res => {
        if(res.error != "DELETE GAGAL"){
          this.updatecategory = false;
          location.href ="admin/joblist"
        }
        else{
          // alert(res.error);
          this.showErr("deletePosition",res.error);

        }
        })
      }
      getAllJobPosition(){
        this.positionSer.getJobPosition();
        this.positionSer.user.subscribe(res => {
          this.jobPosList = res;
        })
      }

      getJobPositionbyId(id){
        this.positionSer.getJobPositionbyId(id);
        this.positionSer.user.subscribe(res => this.jobPos1 = res);
      }

    
    showErr(id:any,warn:any) {
      this.message.add({key:id,severity:'error', summary: 'Failed', detail:warn});
    }
    showSc(id:any,warn:any) {
      this.message.add({key:id,severity:'success', summary: 'Succes', detail:warn});
    }
    
    }
