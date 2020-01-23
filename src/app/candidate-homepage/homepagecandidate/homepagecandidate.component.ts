import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/service/province.service';
import { Province } from 'src/app/model/province';
import { RegisterService } from 'src/app/service/register.service';
import { Candidate } from 'src/app/model/candidate';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-homepagecandidate',
  templateUrl: './homepagecandidate.component.html',
  styleUrls: ['./homepagecandidate.component.css'],
  providers: [MessageService]
})
export class HomepagecandidateComponent implements OnInit {
    images: any[];
    displaysignup: boolean = false;
    displaysignin:boolean = false;
    msgs: any[];
    us:Login = new Login("","");
    
    kota:any;
    checked: boolean = false;
    data:any;
    user:any;

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
  register:Candidate = new Candidate("","",null,"",null,"","");
  constructor(private pros:ProvinceService,private regis:RegisterService,private route:Router,private messageService: MessageService) { }
  
  showWarn(warn:any) {
    this.messageService.add({key:'tl',severity:'error', summary: 'Error', detail:warn});
}

showWarn1(warn:any) {
  this.messageService.add({key:'tc',severity:'warn', summary: 'Error', detail:warn});
}

  ngOnInit() {
    this.pros.getProvince();
    this.pros.user.subscribe(res => this.province = res);

    
  }
  getCity(){
    this.pros.getCity(this.provinsi.province);
    this.pros.user.subscribe(res => this.city = res);
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
  registerApplicant(){
    this.regis.registerCandidate(this.register);
    this.regis.user.subscribe(res =>{
      this.data = res
      if(this.regis.data1 =="gagal"){
        
        this.showWarn(this.data.error);
      }
      if(this.regis.data1=="succes"){
        this.route.navigateByUrl("/candidate/dashboard/")
        alert("register succes")
        
      }
    })
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

