import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/service/province.service';
import { Province } from 'src/app/model/province';
import { RegisterService } from 'src/app/service/register.service';
import { Candidate } from 'src/app/model/candidate';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { MessageService } from 'primeng/api';
import { PostingjobService } from 'src/app/service/postingjob.service';

@Component({
  selector: 'app-homepagecandidate',
  templateUrl: './homepagecandidate.component.html',
  styleUrls: ['./homepagecandidate.component.css'],
  providers: [MessageService]
})
export class HomepagecandidateComponent implements OnInit {
    images: any[];
    pss:any ="password";
    toggle(){
      this.pss==="text";

    }
    displaysignup: boolean = false;
    displaysignin:boolean = false;
    msgs: any[];
    us:Login = new Login("","");
    
    kota:any;
    checked: boolean = false;
    data:any;
    user:any
    ps:any = "Choose Province";

showDialogSignIn() {
  this.displaysignin = true; 
  }

showDialogSignUp() {
  this.displaysignup =!this.displaysignup; 
}

showSuccess() {
  this.msgs = [];
  this.msgs.push({severity:'success', summary:'Success', detail:'Please Check your Email'});
}
  p:number = 1;
  province:any[];
  provinsi:any;
  citi:any;
  city:any[];
  pross:Province[];  
  test:string;
  register:Candidate = new Candidate("","",null,"",null,"","",null);
  constructor(private os:PostingjobService,private pros:ProvinceService,private regis:RegisterService,private route:Router,private messageService: MessageService) { }
  
  showWarn(warn:any) {
    this.messageService.add({key:'tl',severity:'error', summary: 'Error', detail:warn});
}

showSucces(warn:any)  {
  this.messageService.add({key: 'tl', sticky: true, severity:'success', summary:warn, detail:'Please Check Your Email for your Password to Login '});
}
showWarn1(warn:any) {
  this.messageService.add({key:'tc',severity:'warn', summary: 'Error', detail:warn});
}

  ngOnInit() {
    this.findJobPosting();
    this.regis.store.get("user").subscribe( res => {
      if(res != null){
        this.route.navigateByUrl("candidate/dashboard");
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
        this.route.navigateByUrl("candidate/dashboard");
      }
    })
  }
  spin:String;
  registerApplicant(){
    this.spin = 'wait';
    this.regis.registerCandidate(this.register);
    this.regis.user.subscribe(res =>{
      this.data = res
      if(this.regis.data1 =="gagal"){
        this.showWarn1(this.data.error);
        this.spin = 'err';

      }
      if(this.regis.data1=="succes"){
        this.showSucces("Register Succes")
        
      }
    })
  }

  jobs:any;
  findJobPosting(){
    this.os.uptJobPosting();
      this.os.user.subscribe(res => this.jobs = res); 
  }

  }

  // filterBrands(event) {
  //   this.pross = [];
  //   for(let i = 0; i < this.province.length; i++) {
  //       let brand = this.province[i];
  //       if(brand.province.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
  //           this.pross.push(brand);
  //       }
  //   }





// filterCity(event){
//   let query = event.query;
//   this.citis = [];
//   for(let i = 0; i < this.city.length; i++) {
//       let brand = this.city[i];
//       if(brand.city.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
//           this.citis.push(brand);
//       }
//   }
// }

