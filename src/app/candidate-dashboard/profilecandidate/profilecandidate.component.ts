import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/model/candidate';
import { MessageService, ConfirmationService } from 'primeng/api';
import { EducationService } from 'src/app/service/education.service';
import { Appedu } from 'src/app/model/appedu';
import { Education } from 'src/app/model/education';
import { Workexperience } from 'src/app/model/workexperience';
import { WorkexperienceService } from 'src/app/service/workexperience.service';
import { SkillService } from 'src/app/service/skill.service';
import { Skillcandidate } from 'src/app/model/skillcandidate';
import { Province } from 'src/app/model/province';
import { ProvinceService } from 'src/app/service/province.service';
import { City } from 'src/app/model/city';
import { DoctypeService } from 'src/app/service/doctype.service';
import { Doctype } from 'src/app/model/doctype';
import { CandidateDocument } from 'src/app/model/candidate-document';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http'
import { Subject, Observable } from 'rxjs';
import { ChangePassword } from 'src/app/model/change-password';
import { DomSanitizer } from '@angular/platform-browser';
import { base64StringToBlob } from 'blob-util';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-profilecandidate',
  templateUrl: './profilecandidate.component.html',
  styleUrls: ['./profilecandidate.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class ProfilecandidateComponent implements OnInit {
 

  private apiURL = 'http://bootcamp.linovhr.com:8080/jobposter1';
  
  users:Subject<any> = new Subject<any>();
  candidates:Subject<any> = new Subject<any>();
  data:any;
  data1:any;
  datas:any;
  datauser:any;
  updateprofile: boolean = false;
  updateeducation: boolean = false;
  updatework: boolean = false;
  updatedocument: boolean = false;
  updateskill: boolean = false;

  profile: boolean = false;
  education: boolean = false;
  work: boolean = false;
  document: boolean = false;
  skill: boolean = false;
  ok:any;
  settings: boolean = false;
  pdf:boolean = false;
  user:any;
  us:any;
  educations:any;
  edpost:any;
  imgs:String = "Choose Photo";
  docs:String = "Choose Document";
  imgSrc:any;
  imageData:any;
  candidate:any;
  candEdu:any;
  ed:any = new Appedu(null,null,null,null,null,null);
  eduid:Appedu = new Appedu(null,null,null,null,null,null);
  imgss:any = null;
  pxd:any = null;
  cds:any = new Candidate("","",null,"",new City("","","",new Province("","","")),"","",null);
  workcd:any = new Workexperience(null,null,null,null,null);
  wn:any = new Workexperience(null,null,null,null,null);
  works:any;
  skillcd:any;
  cdSkill:any = new Skillcandidate(null,null,null);
  level:any;
  newSkill:any = new Skillcandidate(null,null,null);
  province:any[];
  provinsi:any = new Province(null,null,null);
  citi:any;
  city:any[];
  pross:Province[];
  ps:any;
  cs:any;  
  req:any;
  ds:any;
  password:any = new ChangePassword(null,null,null);
  req1:any = new Doctype(null,null,null,null);
  cddoc:any = new CandidateDocument(null,null,null,null);
  constructor(private confirmationService:ConfirmationService, private sani:DomSanitizer, private http:HttpClient, private dts:DoctypeService, private pros:ProvinceService,private sk:SkillService, private ws:WorkexperienceService, private edss:EducationService, private login:RegisterService,private route:Router,private messageService: MessageService) { }
  tst =  ['1','2','a'];
  cek:boolean =false;
  ta:any;
  cols: any[];
  msgs:Message[] = [];
  msgsWork:Message[] = [];
  msgsSkill:Message[] = [];
  addWork:Message[] = [];
  putWork:Message[] = [];
  addSkills:Message[] = [];
  putSkills:Message[] = [];
  addEduc:Message[] = [];
  putEduc:Message[] = [];


  confirmWork(id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this work ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deletework(id);
      }
  });
  }
  confirmSkill(id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this item ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteSkill(id);
      }
  });
  }

  confirmEducation (id){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this item ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(id);
      }
  });
  }

  showCek(hah){
    this.cek = !this.cek;
    let i = this.tst.indexOf(hah);
    this.ta = this.tst[i];
  }
  addCek(){
    let a = this.tst.push("hahah");
  }

  deleteCek(item){
    let a = this.tst.indexOf(item);
    let b = this.tst.splice(a,1);
    console.log(this.tst);
  }

  openPdf(){
    // this.pdf = !this.pdf;
//     window.open("data:application/octet-stream;charset=utf-16le;base64,"+this.cds.pic);
    // let a = document.createElement("a");
    let pd = 'data:'+this.cddoc.type+';base64,'+this.cddoc.pic;    
    const blob = base64StringToBlob(this.cddoc.pic,this.cddoc.type);
    this.fileUrl = this.sani.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    // a.href = this.fileUrl;
    // a.download = this.cddoc.filename;
    // a.click();
    let x=window.open('about:whatever');  
    let iframe=x.document.createElement('iframe')
    iframe.width='100%'
    iframe.height='100%'
    iframe.src=pd;
    x.document.body.appendChild(iframe)
  }
  
getCdDocument(id,is){
  this.dts.getCd(id,is);
  this.dts.user.subscribe(res => {this.cddoc = res
    const blob = base64StringToBlob(this.cddoc.pic,this.cddoc.type);
    this.fileUrl = this.sani.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));})
}
  getCdsf(){
    this.login.findByid(this.user.candidate.id);
    this.login.user.subscribe(res => {this.cds = res
      this.getEduCandidate(this.cds.id);
      this.getCdWork(this.cds.id);
      this.getRequire();
      this.getCdSkill(this.cds.id);
      this.cs = this.cds.city.city;
      this.provinsi = this.cds.city.province;
      this.ps = this.cds.city.province.province;
      this.candidate = res;
     
    });
  }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Company' },
      { field: 'position', header: 'Position' },
      { field: 'mulai', header: 'Start' },
      { field: 'berakhir', header: 'End' },
      { field: 'salary', header: 'Salary' }

  ];
    
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
        this.getCdsf();        
        if(this.user.candidate.pic == null){
          this.imageData ="assets/img/team/1.jpg";
        }
        else{
        this.imageData = 'data:'+this.user.candidate.type+';base64,'+this.user.candidate.pic;   
      }
        }
      });   
  }
  go:any;
  getIdDoctype(id){
    this.dts.getDocTypeID(id);
    this.cddoc = new CandidateDocument(null,null,null,null);
    this.dts.user.subscribe(res => {this.req1 = res
      this.go = 1;
      this.getCdDocument(this.cds.id,this.req1.id);
    }) 
  }
  getRequire(){
    this.dts.getDocTypeTruecd(this.user.candidate.id);
    this.dts.user.subscribe(res => this.req = res);
  }

  getCity(){
    this.ps = this.provinsi.province;
    this.pros.getCity(this.provinsi.province);
    this.pros.user.subscribe(res => this.city = res);
  }

  getCdWork(id){
    this.ws.getWordCan(id);
    this.ws.user.subscribe(res => {this.works = res
    });
  }

  getSkillbyid(id){
    this.sk.getSkillid(id);
    this.sk.user.subscribe(res => {this.cdSkill = res
    });
    this.showUpdateSkill();
  }
  
  getCdSkill(id){
    this.sk.getSkillCandidate(id);
    this.sk.user.subscribe(res => {this.skillcd = res
    this.getLevel()});
  }

  getLevel(){
    this.sk.getSkill();
    this.sk.user.subscribe(res => {this.level = res
    });
  }

  getCdId(id){
    this.ws.geWorkid(id);
    this.ws.user.subscribe(res => {this.workcd = res
    });
    this.showUpdateWork();
  }


  onfileSelected(event){
    this.imgs = this.imgss.replace(/^.*\\/, "");
    this.docs = this.imgss.replace(/^.*\\/, "");
    this.us = <File> event.target.files[0];
  }

  onfileSelected1(event){
    this.docs = this.pxd.replace(/^.*\\/, "");
    this.ds = <File> event.target.files[0];
  }

  getEduCation(){
    this.edss.getEducation();
    this.edss.user.subscribe(res => {this.educations = res
    });

  }

  getEduCandidate(id){
    this.edss.getEducationCandidate(id);
    this.edss.user.subscribe(res => {this.candEdu = res
    this.getEduCation();
    });

  }
  getid(id){
    this.edss.getEduid(id);
    this.edss.user.subscribe(res => this.eduid = res);
    this.showUpdateEducation();
  }
  showSkill(){
    this.skill = true;
  }

  showProfile() {
      this.profile = !this.profile;
  }
  oks:any;
  resetPassword(){
    this.login.resetPassword(this.user.id,this.password);
    this.login.user.subscribe(res =>{
      this.oks= res;
      if(this.login.data1 =="gagal"){
        alert(this.oks.error);
              }
      if(this.login.data1=="suc"){
        location.href ="candidate/dashboard";
      }
    })
  }

  showEducation(){
    this.education = true;
  }

  showWork(){
    this.work = true;
  }

  showDocument(){
    this.document = true;
  }

  showSetting() {
    this.settings = true;
  }

  showUpdateWork(){
    this.updatework = true;
  }

  showUpdateEducation(){
    this.updateeducation = true;
  }

  showUpdateSkill(){
    this.updateskill = true;
  }

  getCds(){
    this.login.findByid(this.user.candidate.id);
    this.login.user.subscribe(res => this.cds = res);
  }
  fileUrl;
  showUpdateDocument(id){
    this.updatedocument = !this.updatedocument;
    this.docs = "Choose Document"
    this.getIdDoctype(id);
  }


  showWarn(warn:any) {
    this.messageService.add({key:'tl',severity:'success', summary: 'Succes', detail:warn});
}


showSc(id:any,warn:any) {
  this.messageService.add({key:id,severity:'success', summary: 'Succes', detail:warn});
}

showErr(id:any,warn:any) {
  this.messageService.add({key:id,severity:'error', summary: 'Failed', detail:warn});
}

proNull(){
  this.cs = "Choose City";
  this.pros.getProvince();
  this.pros.user.subscribe(res => this.province = res);
}
  
fileUploadProgress:any = null;

  public uploadPhoto(){
    let formData = new FormData();
    this.fileUploadProgress = 0;
    formData.append("upload",this.us,this.us.name);
    this.login.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.http.post(this.apiURL+"/uploadphoto/"+this.cds.id,formData, {
      reportProgress: true,
      observe: 'events',
      headers:headers_object   
    }).subscribe(events =>{
      if(events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total * 100);
      } else if(events.type === HttpEventType.Response) {
        this.fileUploadProgress = 0;        
        this.login.store.get("user").subscribe( res => {
          this.ok = res;
          this.ok.candidate = events.body;
          this.login.store.set("user",this.ok).subscribe(() => {});        
          this.login.store.get("user").subscribe( res => {
                  this.user=res;
                  this.cds = this.user.candidate;
                  if(this.user.candidate.pic == null){
                    this.imageData ="assets/img/team/1.jpg";
                  }
                  else{
                  this.imageData = 'data:'+this.candidate.type+';base64,'+this.candidate.pic;  
                  }
                   
                });
                location.href = "candidate/profile";
        })
         
    }
  },
    (ress) => {
      let data = ress;
      alert(data.error);
    } 
    )
  })
}
  

  key:any;
  public uploadDocument(){
    let formData = new FormData();
    let a = this.cddoc;
    this.fileUploadProgress = 0;
    if(this.cddoc.pic != null){
      this.dts.delete(this.cds.id,this.req1.id);
    }
    formData.append("docx",this.ds,this.ds.name);
    formData.append("iddoctype",this.req1.id);
    this.login.store.get("key").subscribe(res => {this.key = res
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.key);
    this.http.post(this.apiURL+"/doc/"+this.cds.id,formData, {
      reportProgress: true,
      observe: 'events',headers:headers_object   
    }).subscribe(events =>{
      if(events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total * 100);
      } else if(events.type === HttpEventType.Response) {
        this.fileUploadProgress = '';        
        this.login.store.get("user").subscribe( res => {
          this.updatedocument = false;
         })
      }
         
    },
    (res) => {
      let dat = res
        alert(dat.error);
        a.id = null;
        this.http.post(this.apiURL+"/add/del",this.cddoc,{headers:headers_object}).subscribe();
        this.fileUploadProgress = 0;
    })  })
  }
  public update(){
    this.login.updateCandidate(this.cds,this.user.candidate.id);
    this.login.user.subscribe(res => {
      if(this.login.data1 =='gagal'){
        console.log(this.login.data)
        this.showErr("update",this.login.data.error);
      
      }
      else{
        console.log("hey")
        this.showSc("uptpl","Succes");
      }
    })
  

  }

  reset(){
    this.wn = new Workexperience(null,null,null,null,null);
    this.newSkill = new Skillcandidate(null,null,null);
    this.ed = new Appedu(null,null,null,null,null,null);

  }

  addEdu(){
    this.edss.postEducandiate(this.ed,this.cds.id);
    this.edss.user.subscribe(res =>{
      let b = res
      if(this.edss.data1 =="gagal"){
        this.showErr("addEdu",b.error);
      }
      if(this.edss.data1=="succes"){
        this.education = false;
        this.addEduc = [{severity:'info', summary:'Confirmed', detail:'Your Education has Added'}];              
      }
    })
  }

  editedu(id){
    this.edss.putEdu(this.eduid,id);
    this.edss.user.subscribe(res =>{
      let b = res
      if(this.edss.data1 =="gagal"){ 
        this.showErr("addwork",b.error);
      }
      if(this.edss.data1=="succes"){
        this.updateeducation = false;
        this.putEduc = [{severity:'info', summary:'Confirmed', detail:'Your Education has Added'}];              
        
      }
    })
  }

  addwork(id){
    this.ws.postWorkCand(this.wn,this.cds.id);
    this.ws.user.subscribe(res =>{
      let b= res
      if(this.ws.data1 =="gagal"){
        this.showErr("addwork",b.error);
      }
      if(this.ws.data1=="succes"){
        this.work = false;
        this.addWork = [{severity:'info', summary:'Confirmed', detail:'Your Work has Added'}];              
      }
    })
  }

  putwork(id){
    this.ws.putWorkCand(this.workcd,id);
    this.ws.user.subscribe(res =>{
      let b = res
      if(this.ws.data1 =="gagal"){
        this.showErr("putwork",b.error);  
      }
      if(this.ws.data1=="succes"){
        this.updatework = false;        
        this.putWork = [{severity:'info', summary:'Confirmed', detail:'Your Work Experience has Updated'}];      

      }
    })
  }

  putSkill(id){
    this.sk.putSkill(this.cdSkill,id);
    this.sk.user.subscribe(res =>{
      let b = res
      if(this.sk.data1 =="gagal"){
        this.showErr("putSkill",b.error);
      }
      if(this.sk.data1=="succes"){
        this.updateskill = false;
        this.putSkills = [{severity:'info', summary:'Confirmed', detail:'Your Skill has Updated'}];      
        
      }
    })
  }


  
  addSkill(){
    this.sk.posSkillCandi(this.newSkill,this.cds.id);
    this.sk.user.subscribe(res =>{
      let b = res
      if(this.sk.data1 =="gagal"){
        this.showErr("addSkill",b.error);
      }
      if(this.sk.data1=="succes"){
        this.skill = false;
        this.addSkills = [{severity:'info', summary:'Confirmed', detail:'Your Skill has Added'}];      

            }
    })
  }


  delete(id){
    this.edss.delete(id);
    this.msgs = [{severity:'info', summary:'Confirmed', detail:'Your Education History has Deleted'}];      

  }
  backToProfile(){
    location.href = "candidate/profile"
  }

  deletework(id){
    this.ws.delete(id);
    this.msgsWork = [{severity:'info', summary:'Confirmed', detail:'Your Work Experience has Deleted'}];      
  }
  deleteSkill(id){
    this.sk.delete(id);
    this.msgsSkill = [{severity:'info', summary:'Confirmed', detail:'Your Skill has Deleted'}];      

  }

  destroySession(){
    this.login.store.delete('user').subscribe((res) => {
      this.login.store.delete("key").subscribe(res => {})
      this.route.navigateByUrl("#")});
  }



}
