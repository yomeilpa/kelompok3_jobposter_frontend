import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilecandidate',
  templateUrl: './profilecandidate.component.html',
  styleUrls: ['./profilecandidate.component.css']
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

  constructor(private login:RegisterService,private route:Router) { }

  ngOnInit() {
    this.user = this.login.store.get("user").subscribe( res => {
      this.user=res;
      if(res == null){
        this.route.navigateByUrl("#");
      }
      });
      
  }

  public uploadPhoto(){
    this.login.uploadPhoto(this.us,this.user.candidate.id);
    this.login.user.subscribe(res =>{
      this.user = res;  
      if(this.login.data1 =="gagal"){
        alert(this.user.error);
      }
      if(this.login.data1=="suc"){
      }
      this.login.user.unsubscribe();
    })
  }

  destroySession(){
    this.login.store.delete('user').subscribe((res) => {this.route.navigateByUrl("#")});
  }

}
