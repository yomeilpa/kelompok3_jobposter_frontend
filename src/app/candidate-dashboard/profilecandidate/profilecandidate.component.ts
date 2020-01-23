import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/model/candidate';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-profilecandidate',
  templateUrl: './profilecandidate.component.html',
  styleUrls: ['./profilecandidate.component.css'],
  providers: [MessageService]
})
export class ProfilecandidateComponent implements OnInit {

  profile: boolean = false;
  education: boolean = false;
  work: boolean = false;
  document: boolean = false;
  settings: boolean = false;
  skill: boolean = false;
  user:any;
  us:any;
  imgSrc:any;
  imageData:any;
  candidate:any;
  cds:any = new Candidate("","",null,"",null,"","");

  onfileSelected(event){
    this.us = <File> event.target.files[0];
    if(event.target.files && event.target.files[0]){
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imgSrc = reader.result;
      reader.readAsDataURL(file);
    }
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

  showDialog() {
    this.settings = true;
}

  constructor(private login:RegisterService,private route:Router,private messageService: MessageService) { }

  showWarn(warn:any) {
    this.messageService.add({key:'tc',severity:'error', summary: 'Error', detail:warn});
}

  ngOnInit() {
    this.user = this.login.store.get("user").subscribe( res => {
      this.user=res;
      this.cds = this.user.candidate;
      if(res == null){
        this.route.navigateByUrl("#");
      }
      else{
        this.candidate = this.user.candidate;
        if(this.user.candidate.pic == null){
          this.imageData ="assets/img/team/1.jpg";
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
          this.route.navigateByUrl("#"); 
          }
          
        });
      }
    })
  }


  destroySession(){
    this.login.store.delete('user').subscribe((res) => {this.route.navigateByUrl("#")});
  }

}
