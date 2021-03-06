import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/service/province.service';
import { Province } from 'src/app/model/province';
import { RegisterService } from 'src/app/service/register.service';
import { Candidate } from 'src/app/model/candidate';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-homepageadmin',
  templateUrl: './homepageadmin.component.html',
  styleUrls: ['./homepageadmin.component.css'],
  providers: [MessageService]
})
export class HomepageadminComponent implements OnInit {

  images: any[];
  displaysignup: boolean = false;
  displaysignin:boolean = false;
  msgs: any[];
  us:Login = new Login("","");
  
  kota:any;
  checked: boolean = false;
  data:any;
  user:any;
  ps:any = "Choose Province";

showDialogSignIn() {
this.displaysignin = true; 
}

showDialogSignUp() {
this.displaysignup = true; 
}

showSuccess() {
this.msgs = [];
this.msgs.push({severity:'success', summary:'Success', detail:'Please Check your Email'});
}

province:any[];
provinsi:any;
citi:any;
city:any[];
pross:Province[];  
test:string;
register:Candidate = new Candidate("","",null,"",null,"","",null);
constructor(private pros:ProvinceService,private regis:RegisterService,private route:Router,private messageService: MessageService) { }
showWarn(warn:any) {
  this.messageService.add({key:'tl',severity:'error', summary: 'Error', detail:warn});
}
showSucces(warn:any) {
  this.messageService.add({key: 'tl', sticky: true, severity:'success', summary:warn, detail:'Please Check Your Email for your Password to Login '});
}
showWarn1(warn:any) {
this.messageService.add({key:'tc',severity:'warn', summary: 'Error', detail:warn});
}

ngOnInit() {
  this.regis.store.get("user").subscribe( res => {
    if(res != null){
      this.route.navigateByUrl("admin/dashboard");
    }})
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

loginuser(){
  this.regis.LoginUser(this.us);
  this.regis.user.subscribe(res =>{
    this.user= res;
    if(this.regis.data1 =="gagal"){
      this.showWarn1(this.user.error);
            }
    if(this.regis.data1=="suc"){
      if(this.user.role != "applicant"){
        this.route.navigateByUrl("admin/dashboard");
      }
      else{
        this.showWarn1("You are Not an Admin");
      }
    }
  })
}
registerApplicant(){
  this.regis.registerAdmin(this.register);
  this.regis.user.subscribe(res =>{
    this.data = res
    if(this.regis.data1 =="gagal"){
      
      this.showWarn(this.data.error);
    }
    if(this.regis.data1=="succes"){
      this.route.navigateByUrl("/admin");
      this.displaysignup = false;
      alert("register succes")
      
    }
  })
}
}



