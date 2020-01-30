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


@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css'],
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

  addjob: boolean;  detailjob: boolean;  updatejob: boolean;  detailcandidate: boolean;
  addcategory: boolean;  updatecategory: boolean;
  addposition: boolean;  updateposition: boolean;
  settings: boolean;
  req = [];
  ireq: any = 0;
  item =[];
  jobDetail = [];
  jobReq = [];
  i:any = 0;
  user:any;
  imageData:any;
  candidate:any;
  jb:any = new JobDetailModel(null,null,null);
  js:any = new JobRecuitmentModel(null,null,null);
  posting:any = new JobPostingModel(null,null,null,null,null,null,null,null,null,null,null);
  provinsi:any;
  ps:any = "Choose Province";
  city:any[];
  province:any[];
  kate:any;
  getPosKa:any;

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
      if(this.posser.data1 == "OK"){
        this.posser.postJobDes(e.id,this.jobDetail);
        this.posser.postJobReq(e.id,this.jobReq);
      }
      else{
        alert(e.error);
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
    console.log(this.jobDetail);
    console.log(this.jobReq);
  }

  showSettings(){
    this.settings = true;
  }
  
  showDetailCandidate(){
    this.detailcandidate = true;
  }

  showAddJob() {
    this.addjob = true;
  }

  showDetailJob() {
    this.detailjob = true;
  }

  showUpdateJob() {
    this.updatejob = true;
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

  showUpdatePosition(id){
    this.updateposition = true;
    this.getJobPositionbyId(id);
  }
  destroySession(){
    this.regis.store.delete('user').subscribe((res) => {this.route.navigateByUrl("/admin")});
  }
  constructor(private posser:PostingjobService, private positionSer:JobPositionServiceService, private pros:ProvinceService,private regis:RegisterService,private route:Router,private kategori:JobKategoriService) { }
  columns: number[];
  columndescription : number[];

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
        })
      }

      putJobKategori(){
        this.kategori.postJobkategori(this.jobKateedit);
        this.kategori.user.subscribe(res => {
            if(this.kategori.data1 == "OK"){
              location.href = "admin/joblist"
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
        if(this.kategori.data1 == "OK"){
          this.updatecategory = false;
          location.href = "admin/joblist"
        }
        else{
          alert("Error");
        }
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
        })
      }
      
      putJobPosition(){
        this.positionSer.postJobPosition(this.jobPos1);
        this.positionSer.user.subscribe(res =>{
          if(this.positionSer.data1 == "OK"){
            location.href = "admin/joblist"
          }
        })
      }
      deletePosition(id){
        this.positionSer.deleteJobPosition(id);
        if(this.positionSer.data1 == "OK"){
          this.updatecategory = false;
          location.href = "admin/joblist"
        }
        else{
          alert("Error");
        }
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
      // JobPositionService


      //Job Posting Service


      //Job Posting Service
    }
