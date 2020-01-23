import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/model/candidate';
import { MessageService } from 'primeng/api';
import { EducationService } from 'src/app/service/education.service';
import { Appedu } from 'src/app/model/appedu';
import { Education } from 'src/app/model/education';
import { Workexperience } from 'src/app/model/workexperience';
import { WorkexperienceService } from 'src/app/service/workexperience.service';


@Component({
  selector: 'app-profilecandidate',
  templateUrl: './profilecandidate.component.html',
  styleUrls: ['./profilecandidate.component.css'],
  providers: [MessageService]
})
export class ProfilecandidateComponent implements OnInit {

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

  settings: boolean = false;
  user:any;
  us:any;
  educations:any;
  edpost:any;
  imgs:String = "Choose Photo";
  imgSrc:any;
  imageData:any;
  candidate:any;
  candEdu:any;
  ed:any = new Appedu(null,null,null,null,null,null);
  eduid:Appedu = new Appedu(null,null,null,null,null,null);
  imgss:any = null;
  cds:any = new Candidate("","",null,"",null,"","");
  workcd:any = new Workexperience(null,null,null,null,null);
  wn:any = new Workexperience(null,null,null,null,null);
  works:any;

  constructor(private ws:WorkexperienceService, private edss:EducationService, private login:RegisterService,private route:Router,private messageService: MessageService) { }

  getCdWork(id){
    this.ws.getWordCan(id);
    this.ws.user.subscribe(res => {this.works = res
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
    this.us = <File> event.target.files[0];
    if(event.target.files && event.target.files[0]){
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imgSrc = reader.result;
      reader.readAsDataURL(file);
    }
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
      this.profile = true;
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

  showUpdateDocument(){
    this.updatedocument = true;
  }


  showWarn(warn:any) {
    this.messageService.add({key:'tc',severity:'success', summary: 'Succes', detail:warn});
}

showErr(warn:any) {
  this.messageService.add({key:'tc',severity:'error', summary: 'Succes', detail:warn});
}

  ngOnInit() {
    
    this.user = this.login.store.get("user").subscribe( res => {
      this.user=res;
      if(res == null){
        this.route.navigateByUrl("#");
      }
      else{
        
        this.candidate = this.user.candidate;
        this.cds = this.user.candidate;
        this.getEduCandidate(this.cds.id);
        this.getCdWork(this.cds.id);
        if(this.user.candidate.pic == null){
          this.imageData ="assets/img/team/blank.png";
        }
        else{
        this.imageData = 'data:'+this.user.candidate.type+';base64,'+this.user.candidate.pic;   }
        }
      });   
  }
  public uploadPhoto(){
    let formData = new FormData();
    formData.append("upload",this.us,this.us.name)
    this.login.uploadPhoto(formData,this.user.candidate.id);
    this.login.user.subscribe(res =>{
      this.user = res;  
      if(this.login.data1 =="gagal"){
        this.showWarn(this.user.error);
      }
      if(this.login.data1=="suc"){
        console.log("succes");
        this.user = this.login.store.get("user").subscribe( res => {
          this.user=res;
          this.cds = this.user.candidate;
          if(this.user.candidate.pic == null){
            this.imageData ="assets/img/team/1.jpg";
          }
          else{
          this.imageData = 'data:'+this.candidate.type+';base64,'+this.candidate.pic;  
          
          }
this.route.navigateByUrl("#"); 
          
        });
      }
    })
  }

  addEdu(){
    this.edss.postEducandiate(this.ed,this.cds.id);
    this.edss.user.subscribe(res =>{
      this.edpost = res
      if(this.edss.data1 =="gagal"){
        
        alert(this.edpost.error);
      }
      if(this.edss.data1=="succes"){
        alert("Hahaha")
        
      }
    })
  }

  editedu(id){
    this.edss.putEdu(this.eduid,id);
    this.edss.user.subscribe(res =>{
      if(this.edss.data1 =="gagal"){ 
        alert(res.error);
      }
      if(this.edss.data1=="succes"){
        alert("Hahaha")
        
      }
    })
  }

  addwork(){
    this.ws.postWorkCand(this.wn,this.cds.id);
    this.ws.user.subscribe(res =>{
      this.wn = res
      if(this.ws.data1 =="gagal"){
        
        alert(this.edpost.error);
      }
      if(this.ws.data1=="succes"){
        alert("Hahaha")
        
      }
    })
  }

  putwork(id){
    this.ws.putWorkCand(this.workcd,id);
    this.ws.user.subscribe(res =>{
      this.workcd = res
      if(this.ws.data1 =="gagal"){
        
        this.showErr(this.edpost.error);
      }
      if(this.ws.data1=="succes"){
        this.showWarn("Update Succes")
        
      }
    })
  }

  

  delete(id){
    this.edss.delete(id);
  }

  deletework(id){
    this.ws.delete(id);
  }

  destroySession(){
    this.login.store.delete('user').subscribe((res) => {this.route.navigateByUrl("#")});
  }

}
