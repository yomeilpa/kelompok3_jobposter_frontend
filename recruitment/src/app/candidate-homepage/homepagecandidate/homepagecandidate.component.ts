import { Component, OnInit } from '@angular/core';
import { ProvinceService } from 'src/app/service/province.service';
import { Province } from 'src/app/model/province';
import { City } from 'src/app/model/city';
import {SelectItem} from 'primeng/api';
import { RegisterService } from 'src/app/service/register.service';
import { Candidate } from 'src/app/model/candidate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepagecandidate',
  templateUrl: './homepagecandidate.component.html',
  styleUrls: ['./homepagecandidate.component.css']
})
export class HomepagecandidateComponent implements OnInit {
    images: any[];
    displaysignup: boolean = false;
    displaysignin:boolean = false;
    msgs: any[];
    
    kota:any;
    checked: boolean = false;
    data:any;

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
  constructor(private pros:ProvinceService,private regis:RegisterService,private route:Router) { }
  

  ngOnInit() {
    this.pros.getProvince();
    this.pros.user.subscribe(res => this.province = res);

    
  }
  getCity(){
    this.pros.getCity(this.provinsi.province);
    this.pros.user.subscribe(res => this.city = res);
  }

  registerApplicant(){
    this.regis.registerCandidate(this.register);
    this.regis.user.subscribe(res =>{
      this.data = res
      if(this.regis.data1 =="gagal"){
        alert(this.data.error);
      }
      if(this.regis.data1=="succes"){
        this.route.navigateByUrl("//")
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

